function loto() {

    let cilj = Math.ceil(Math.random() * 100);
    let broj = prompt('Input a number between 1 and 100. You have three tries.');

    if (broj > cilj) {
        alert(broj + ' is higher than the number we are looking for. Please try again.');
    } else if (broj < cilj) {
        alert(broj + ' is lower than the number we are looking for. Please try again.');
    } else if (broj == cilj) {
        alert(broj + ' is exactly right! Please send a picture of this screen to official@winedustri.fr to recieve your prize.');
    } else {
        alert('Please input a valid number');
    };
}

for (i = 1; i <= 4; i++) {
    if (i > 3) {
        alert("Sorry, we're afraid you're out of luck.");
        break;
    } else {
        loto();
    }
}