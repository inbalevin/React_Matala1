class Counter {

    constructor(number) {
        this.number = number;
    }

    Initialize() {
        this.number = document.getElementById("num").value;
    }
    Increment() {
        this.number++;
        document.getElementById("num").value = this.number;
    }
    Go() {
        let str = `<p>`
        for (var i = 0; i <= this.number; i++) {
            str += `${i} `;
        }
        str += `</p>`
        document.getElementById("ph").innerHTML = str;
    }
   
}

numNew = new Counter();