const images = ["0.jpg","1.jpg","2.jpg"];

const choseImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); //html에 img 태그 생성

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);