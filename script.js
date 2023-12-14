const text = document.querySelector('.input');
const message = document.querySelector('.message');
let realValue, ind;

let words = [
    "javascript",
    'python',
    'php',
    'java',
    'mongoDB',
    'mongoose',
    'html',
    'css',
    'tailwindCSS',
    'netlify',
    'sass',
    'jquery',
    'reactjs',
    'nodejs',
    'expressjs'
]

const changeWord = () => {
    ind = Math.floor(Math.random() * 14);
    realValue = words[ind];
    const scramble = (word) => {
        let i,j,k;
        let strArr = word.split('')
        for(i = 0; i < strArr.length; i++){
            j = Math.floor(Math.random() * i);
            k = strArr[i];
            strArr[i] = strArr[j];
            strArr[j] = k;
        }
        word = strArr.join('');
        return word;
    }
    message.innerHTML = `Guess the word : ${scramble(realValue)}`
}
changeWord();

$(() => {
    $('.submit-btn').click(() => {
        if(text.value === realValue){
            Swal.fire({
                title: "Correct",
                text: "Click next for next Question",
                icon: "success",
            });
            text.value = "";
            changeWord();
        }else{
            Swal.fire({
                title: "Wrong",
                text: "Try Once More",
                icon: "error",
            });
        }
    });

    $('.next-btn').click(() => {
        realValue = "hi"
        changeWord();
    })
})