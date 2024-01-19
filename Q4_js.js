class Point {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
    }

    show() {
        let str = `<p>`; 
        str += `(${this.x},${this.y})`;
        str += `</p>`;
        document.getElementById("ph").innerHTML = str;
    }
    Equals(p) {
        return (p.x == this.x && p.y == this.y); 
         
    }  
}
function Check(x, y, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].x == x && arr[i].y == y) {
            return true;
        }
    }
    return false;
}

function checkEquals (p, arr) {
    for (var i = 0; i < arr.length; i++) {
        p.Equals(arr[i]);
    }

}

function Distance(arr) {
    let distance = 0;
    let str1 = `<p>the points is:<br/>`;
    for (var i = 0; i < arr.length - 1; i++) {
        distance += Math.sqrt(Math.pow(arr[i].x - arr[i + 1].x, 2) + Math.pow(arr[i].y - arr[i + 1].y, 2));  
    }
    for (var j = 0; j < arr.length ; j++) {
        str1 += ` (${arr[j].x},${arr[j].y}) <br/>`;
    }
    str1 += `total distance: ${distance}`;
    document.getElementById("ph").innerHTML = str1;
    return distance; 
}

point1 = new Point(2, 5); 
point2 = new Point(7, 9); 
point3 = new Point(1, 6); 
point4 = new Point(2, 3); 
point4 = new Point(3, 6); 
let arr1 = [point1, point2, point3, point4];
Check(2, 3, arr1);//true
Check(3, 3, arr1);//false
checkEquals(point1, arr1);//true
checkEquals(point4, arr1);//false
Distance(arr1);