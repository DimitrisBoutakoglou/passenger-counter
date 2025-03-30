let count = 0;
let counterScreen = document.getElementById("counter-screen");
let prevEntries = document.getElementById("prev-Entries");

const increment = () => {
    count = count + 1;
    counterScreen.innerText = count;
}
const saveEntries = () => {
    let save = counterScreen.innerText;
    prevEntries.innerText = "Previous Entries: " + save;
    console.log(save);
}