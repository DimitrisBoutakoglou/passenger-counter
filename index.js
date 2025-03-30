let count = 0;
let counterScreen = document.getElementById("counter-screen")

const increment = () => {
    count = count + 1;
    counterScreen.innerText = count;
}
const save = () => {
    let save = counterScreen.innerText;
    console.log(save);
}