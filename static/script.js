
function getDigits() {
    axios.get('https://ksendzov.org/get_digits').then(function (response) {
        console.log("-----", response.data)
    }).catch(function (error) {
        console.log("Error:", error)
    })
}


window.onload = function(){
    getDigits();
}