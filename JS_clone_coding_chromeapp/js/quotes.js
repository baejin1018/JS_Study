const quotes = [
    {
        quote: "밤에 꿈을 꾸는 사람들보다, 낮에 꿈을 꾸는 사람이 더 행복하다",
        author: "무명씨",
    },
    {
        quote:"사람들은 무기력감에 시달리고 있다. 반복되는 일상속에서 자신의 삶을 행복하게 가꾸는 방법을 배우지 못한 것이다",
        author:"유동근",
    },
    {
        quote:" 가능성을 찾는 사람은 그 결과에 관계없이 행복하다",
        author:"작자미상",
    },
    {
        quote:"불행과 행복, 그것은 늘 반걸음의 차이",
        author:"베이컨"
    },
    {
        quote:"행복 그것은 과대포장된 망상이다",
        author:"유동근"
    },
    {
        quote:"신앙을 갖춘 자는 행복을 실천한다",
        author:"키에르케고르"
    },
    {
        quote:"현명한 자는 행복한 방법을 스스로 익힌다",
        author:"매슬로우"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; //랜덤으로 7개의 명언중 한개를 뽑아준다

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//quotes.length quotes의 배열길이를 알아온다

//Math.round() 반올림해 준다 
//Math.ceil() 올림해준다
//Math.floor() 내림해준다