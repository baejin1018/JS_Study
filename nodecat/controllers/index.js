const axios = require("axios");

const URL = process.env.API_URL;
axios.defaults.headers.origin = process.env.ORIGIN;

const request = async (req, api, method = "get") => {
  console.log(method === "get");
  try {
    if (!req.session.jwt) {
      // 세션에 토큰이 없으면
      const tokenResult = await axios.post(`${URL}/token`, {
        clientSecret: process.env.CLIENT_SECRET,
      });
      req.session.jwt = tokenResult.data.token; // 세션에 토큰 저장
    }
    if (method == "get") {
      console.log("hi");
      return await axios.get(`${URL}${api}`, {
        headers: { authorization: req.session.jwt },
      }); // API 요청
    } else {
      console.log("실행");
      return await axios.post(
        `${URL}${api}`,
        { content: req.body.content },
        { headers: { authorization: req.session.jwt } }
      );
    }
  } catch (error) {
    console.log(error);
    if (error.response?.status === 419) {
      // 토큰 만료시 토큰 재발급 받기
      delete req.session.jwt;
      return request(req, api);
    } // 419 외의 다른 에러면
    return error.response;
  }
};

exports.getPosts = async (req, res, next) => {
  try {
    const result = await request(req, "/posts");
    res.render("main", { data: result.data.payload });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getMyPosts = async (req, res, next) => {
  try {
    const result = await request(req, "/posts/my");
    res.render("main", { data: result.data.payload, my: true });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.searchByHashtag = async (req, res, next) => {
  try {
    const hashtag = req.query.hashtag;
    const result = await request(
      req,
      `/posts/hashtag/${encodeURIComponent(hashtag)}`
    );
    console.log();
    res.render("main", {
      title: `search`,
      data: result.data.payload,
      hashtag: hashtag,
    });
  } catch (error) {
    if (error.code) {
      console.error(error);
      next(error);
    }
  }
};

exports.test = async (req, res, next) => {
  // 토큰 테스트 라우터
  try {
    if (!req.session.jwt) {
      // 세션에 토큰이 없으면 토큰 발급 시도
      const tokenResult = await axios.post("http://localhost:8002/v2/token", {
        clientSecret: process.env.CLIENT_SECRET,
      });
      if (tokenResult.data?.code === 200) {
        // 토큰 발급 성공
        req.session.jwt = tokenResult.data.token; // 세션에 토큰 저장
      } else {
        // 토큰 발급 실패
        return res.json(tokenResult.data); // 발급 실패 사유 응답
      }
    }
    // 발급받은 토큰 테스트
    const result = await axios.get("http://localhost:8002/v2/test", {
      headers: { authorization: req.session.jwt },
    });
    return res.json(result.data);
  } catch (error) {
    console.error(error);
    if (error.response?.status === 419) {
      // 토큰 만료 시
      return res.json(error.response.data);
    }
    return next(error);
  }
};

// exports.renderMain = (req, res) => {
//   res.render("main", { key: process.env.CLIENT_SECRET });
// };

exports.editPost = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const params = { content: req.body.content };
    console.log(params);
    const result = await request(req, `/posts/edit/${postId}`, "post");
    if (result.data.code != 200) {
      const error = new Error(result.data.message);
      error.status = result.data.code;
      next(error);
    } else {
      res.redirect("/myposts");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// exports.updatePost = async(req,res,next) => {
//   try{
//       console.log(req.params);
//       const ID = parseInt(encodeURIComponent(req.params.id),10);
//       const Content = encodeURIComponent(req.query.content);
//       const update = await request(
//           req, `/post/update/${ID}/${Content}`,
//       );
//       const result = await request(req, '/posts');
//       res.render('main',{contents:result.data.payload});
//   }catch(error) {
//       console.error(error);
//       next(error);
//   }
// };

exports.deletePost = async (req, res, next) => {
  try {
    console.log("실행");
    const postId = req.params.id;
    const result = await request(req, `/posts/delete/${postId}`);
    if (result.data.code != 200) {
      const error = new Error(result.data.message);
      error.status = result.data.code;
      next(error);
    } else {
      res.status(200).json({
        code: 200,
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
