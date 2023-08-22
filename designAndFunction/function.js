// function getNumber(num) {
//     const fieldValue = document.getElementById('evenNumber');
//     const getValue = parseInt(fieldValue.value);

//     if(getValue ==0 || getValue == 1 || getValue %2 != 0){
//         document.getElementById
//     }
// }

document.getElementById('evenNumber').addEventListener('focus', function (event) {

    const displayError = document.getElementById('errorMessage');
    displayError.style.display = "none";
    event.target.value = "";

})


document.getElementById('evenNumber').addEventListener('blur', function (event) {
    const fieldValue = document.getElementById('evenNumber');
    const getValue = parseInt(fieldValue.value);

    if (getValue == 0 || getValue == 1 || getValue % 2 != 0) {
        const displayError = document.getElementById('errorMessage');
        displayError.style.display = "block";
        event.target.style.borderColor = "red";
    }
    else {
        event.target.style.borderColor = "lightGreen";
    }
})



