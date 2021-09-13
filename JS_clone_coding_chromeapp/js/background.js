const images = ["0.jpg","1.jpg","2.jpg"];

const clockColor = document.querySelector("h2#clock"); 
const quotesColor = document.querySelector("#quote");

const Obj = [
    { // 0
        imageColor: "#000",
    },
    { // 1
        imageColor: "#000"
    },
    { // 2
        imageColor: "#fff"
    }
]

const num = Math.floor(Math.random()*images.length);
const choseImage = images[num];

// const bgImage = document.createElement("img"); //html에 img 태그 생성

document.body.classList.add("back");
document.body.style.backgroundImage = `url("./img/${choseImage}")`;

// bgImage.src = `img/${choseImage}`;

const Input = document.querySelectorAll("form input"); // input[0], [1], [2]

const inputnum = Input.length; // 3

for(let i = 0; i<inputnum; i++){
    Input[i].style.color = `${Obj[num].imageColor}`;
}

clockColor.style.color = `${Obj[num].imageColor}`;
quotesColor.style.color = `${Obj[num].imageColor}`;


// Input.style. = `${Obj[num].imageColor}`;

// document.body.appendChild(bgImage);
