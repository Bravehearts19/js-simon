function generateRandomNumber(nMin, nMax) {
    const randomNumber = Math.floor(Math.random() * (nMax - nMin + 1) + nMin)
    return randomNumber;
}

function generateRandomNumberArray() {
    const randomNumberArray = [];
    
    for (let i = 0; i < 5; i++) {
        const randomNumber = generateRandomNumber(0, 9999);
        randomNumberArray.push(randomNumber);
    }

    return randomNumberArray;
}

function challengeToUser(randomNumberArray, userNumberArray, userCorrectNumberArray) {
    while (userNumberArray.length < 5) {
        const userNumber = parseInt(prompt("Inserisci uno dei numeri che ti ricordi"));

        if (!userNumberArray.includes(userNumber) && !isNaN(userNumber)) {
            userNumberArray.push(userNumber);
        } else if(isNaN(userNumber)) {
            alert("Quello che hai scritto non è un numero... Riprova");
        } else {
            alert("Hai già scritto il numero che hai digitato in precedenza... Riprova");
        }
    }
    console.log(userNumberArray);

    checkCorrectUserNumber(userNumberArray, userCorrectNumberArray, randomNumberArray);
}

function checkCorrectUserNumber(userNumberArray, userCorrectNumberArray, randomNumberArray) {
    userCorrectNumberArray = userNumberArray.filter((userNumber) => {
        if (randomNumberArray.includes(userNumber)) {
            return true;
        } else {
            return false;
        }
    })

    alert(`Hai totalizzato ${userCorrectNumberArray.length} punti, indovinando i seguenti numeri: ${userCorrectNumberArray}`);
}

function runScript () {
    const randomNumberArray = generateRandomNumberArray();
    console.log(randomNumberArray);

    /* alert(`I numeri da ricordare sono: ${randomNumberArray[0]}, ${randomNumberArray[1]}, ${randomNumberArray[2]}, ${randomNumberArray[3]}, ${randomNumberArray[4]}`); */
    alert(`I numeri da ricordare sono: ${randomNumberArray}`);

    const userNumberArray = [];
    const userCorrectNumberArray = [];

    setTimeout(() => {challengeToUser(randomNumberArray, userNumberArray, userCorrectNumberArray)}, 30000);    
}

runScript();

