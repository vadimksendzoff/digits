

function setDigitsToHtml (digit) {

    digitElement = document.getElementById('dItem');
    digitElement.textContent = " " + digit;

}


function getDigits() {
    axios.get('https://ksendzov.org/get_digits').then(function (response) {
        
        setDigitsToHtml(response.data[0][0])
    }).catch(function (error) {
        console.log("Error:", error)
    })
}


window.onload = function(){
    getDigits();
    console.log("Так)), сюда посмотрели, хорошо, теперь ещё подумайте где посмотреть про эту цифру)",)
}