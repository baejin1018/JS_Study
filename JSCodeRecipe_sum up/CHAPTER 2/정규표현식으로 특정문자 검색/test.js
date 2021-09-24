const phoneNumberText = document.querySelector("#phoneNumber"); 

const warningMessages = document.querySelector("#warningMessage");

phoneNumberText.addEventListener("keyup", () => { //문자가 입력될때마다 내용 체크
    const phoneNumber = phoneNumberText.value;

    const trimmedPhoneNumber = phoneNumber.replace(/-/g,"");

    if(/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false ) {
        warningMessages.innerText = "전화번호의 형식에 맞춰 입력해 주세요";
    }
    else{
        warningMessages.innerText = "";
    }
})