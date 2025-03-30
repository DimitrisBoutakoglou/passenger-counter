let count = 0;
let counterScreen = document.getElementById("counter-screen");
let prevEntries = document.getElementById("prev-Entries");

const increment = () => {
    count = count + 1;
    counterScreen.innerText = count;
}
const saveEntries = () => {
    let save = counterScreen.innerText;
    prevEntries.innerText = prevEntries.innerText +" " + save + " - ";
    count = 0;
    counterScreen.innerText = 0;
    console.log(save);
    
}

const reset = () => {
    prevEntries.innerText = "Previous Entries:" + " ";
    counterScreen.innerText = 0;
}