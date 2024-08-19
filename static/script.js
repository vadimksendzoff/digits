

function setDigitsToHtml (digit) {

    digitElement = document.getElementById('sDigit');
    digitElement.textContent = " " + digit;

}

function setDigitsToLocalStorage (data) {

    localStorage.clear();
    localStorage.setItem(data.message_2, data.digit);
}

function getDigitFromLocalStorage () {
    resultDigit = localStorage.getItem('И в LocalStorage глянули), Хорошо!')
    console.log(resultDigit)

    return resultDigit
}


function getDigits() {
    

    axios.get('/get_digits').then(function (response) {
        
        // const dataDigit = response.data.digit;
        
        setDigitsToHtml(getDigitFromLocalStorage());
        // setDigitsToHtml('45');
        setDigitsToLocalStorage(response.data);
        ;

    }).catch(function (error) {
        console.log("Error:", error)
    })



}


window.onload = function(){
    getDigits();
    console.log("Так)), сюда посмотрели, хорошо, теперь ещё подумайте где посмотреть про эту цифру)",)
}