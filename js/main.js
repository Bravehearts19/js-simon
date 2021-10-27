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

function challengeToUser(userNumberArray) {
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
}

function runScript () {
    const randomNumberArray = generateRandomNumberArray();
    console.log(randomNumberArray);

    alert(`I numeri da ricordare sono: ${randomNumberArray[0]}, ${randomNumberArray[1]}, ${randomNumberArray[2]}, ${randomNumberArray[3]}, ${randomNumberArray[4]}`);

    const userNumberArray = [];
    setTimeout(() => {challengeToUser(userNumberArray)}, 4000);

    for (let i = 0; i < userNumberArray.length; i++) {
        const userNumber = userNumberArray[i];
        
    }
}

runScript();

