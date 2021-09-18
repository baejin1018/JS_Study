const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); //context:canvas에 있는 픽셀들을 컨트롤
const colors = document.getElementsByClassName("jsColor");
canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "black"; //context안에 있는 모든선들은 black 색이다
ctx.lineWidth = 2.5; //context안에 있는 모든 선은 2.5다

let painting = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    //클릭하지 않고 움직일때
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    //클릭했을때
    ctx.lineTo(x, y); //path의 전위치에서 지금위치까지의 선을 만든다
    ctx.stroke(); //획을 긋는다
  }
}

function handleColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color; //ctx.strokeStyle에 선택한 색깔 넣음
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColor)
);
