const secondElement = document.querySelector(".second");

const goalTime = new Date().getTime() + 2 * 1000;

const timeOut = document.querySelector("#timeOut");
update();

function update(){
    const currentTime = new Date().getTime();

    const leftTime = goalTime-currentTime;

    if(leftTime <= 0){
        secondElement.classList.add("hidden");
        timeOut.classList.remove("hidden");
        return false;
    }
    else{
        secondElement.innerText = (leftTime/1000).toFixed(2);
    }

    requestAnimationFrame(update);
}