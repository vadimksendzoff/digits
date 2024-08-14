

function setDigitsToHtml (digit) {

    digitElement = document.getElementById('dItem');
    digitElement.textContent = " " + digit;

}

function setDigitsToLocalStorage (data) {

    localStorage.clear();
    localStorage.setItem(data.message_2, data.digit);
}


function getDigits() {
    

    axios.get('/get_digits').then(function (response) {
        
        const dataDigit = response.data.digit;
        
        setDigitsToHtml(dataDigit);
        setDigitsToLocalStorage(response.data);

    }).catch(function (error) {
        console.log("Error:", error)
    })



}


window.onload = function(){
    getDigits();
    console.log("Так)), сюда посмотрели, хорошо, теперь ещё подумайте где посмотреть про эту цифру)",)
}