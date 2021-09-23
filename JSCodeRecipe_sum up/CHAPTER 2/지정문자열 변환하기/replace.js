document.querySelector("#submitButton").addEventListener("click",(event)=> {
    const phoneNum = document.querySelector("#phonenum").value;

    const trimmedPhoneNum = phoneNum.replace(/-/g,"");
    alert(`전화번호는 ${trimmedPhoneNum}입니다.`)

    event.preventDefault();
})