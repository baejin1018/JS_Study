const jwt = require("jsonwebtoken");

const { Domain, User } = require("../models");

exports.createToken = async (req, res) => {
  const { clientScret } = req.body;
  try{
    const domain = await Domain.findOne({
        where:{clientScret},
        include:{
            model:User,
            attribute:['nick','id'],
        }
    })
    if(!domain){
        return res.status(401).json({
            code:401,
            message:'등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요'
        })
    }
    const token = jwt.sign({
        id: domain.id,
    })
  }
};
