class Duck {

    constructor(name, color, age, Weight, picture) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.Weight = Weight;
        this.picture = picture;
    }
    Show() {
        let str = `<p> the detalis is: <br/>`;
        str += `name: ${this.name}<br/>`;
        str += `color: ${this.color}<br/>`;
        str += `age: ${this.age}<br/> `;
        str += `weight: ${this.Weight}<br/>`;
        str += `picture: <img src=${this.picture} alt="Duck Image"> <br/>`;
        str += `</p>`;
        document.getElementById("ph").innerHTML = str;
    }
    Quack() {
        document.getElementById("ph").innerHTML = "";
        let str1 = `<p>`;
        let NunPlay = ((this.Weight * this.age) / 2);
        for (var i = 0; i < NunPlay; i++) {
            str1 += `Quack `;
        }
        str1 += `</p> `;

        let audio = new Audio("quackSound.mp3");
        let count = 0;
        function playAudio() {
            if (count < 3) {
                audio.play(); // plays the audio
                count++;
            } else {
                count = 0;
            }
        }
        audio.addEventListener('ended', playAudio);
        playAudio(); //for the first time

        document.getElementById("ph").innerHTML = str1;
    }   
}
var imageURL;
const dpic = document.getElementById("pic");
function create() {
    let name = document.getElementById("nam").value;
    let colo = document.getElementById("col").value;
    let ag = document.getElementById("ag").value;
    let wei = document.getElementById("wei").value;
    //let pic = document.getElementById("pic").value;
    DukeNew = new Duck(name, colo, ag, wei, imageURL);
    document.getElementById("cre").disabled = true;
    document.getElementById("show").disabled = false;
    document.getElementById("quack").disabled = false;
}
//תמונה
function readURL() {
    const imageFile = dpic.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    // reader.onload is an async performance
    reader.onload = () => {
        imageURL = reader.result;
        return imageURL;
    };
}
