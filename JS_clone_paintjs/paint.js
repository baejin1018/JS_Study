const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); //context:canvas에 있는 픽셀들을 컨트롤
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "black";
const canvas_SIZE = 700;
canvas.width = canvas_SIZE;
canvas.height = canvas_SIZE;
ctx.fillStyle = "white";
ctx.strokeStyle = INITIAL_COLOR; //context안에 있는 모든선들은 black 색이다
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5; //context안에 있는 모든 선은 2.5다

let painting = false;
let filling = false;

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
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "PAINT";
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas_SIZE, canvas_SIZE);
  }
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[EXPORT❤]";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColor)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
