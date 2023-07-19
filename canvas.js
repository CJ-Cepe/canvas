console.log('watermelon');

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c == context
//return a drawing context
//to pass methods and properties
//like a brush
let c = canvas.getContext('2d');

//draw rectangles
//c.fillRect(x, y, height, width)
for (let i = 0; i < 3; i++) {
    c.fillStyle = getRandomColor();
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    c.fillRect(x, y, 100, 100);
}

//draw lines
c.beginPath(); //begins drawing
x = Math.random() * window.innerWidth;
y = Math.random() * window.innerHeight;
c.moveTo(x, y); //start
for (let i = 0; i < 5; i++) {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    c.lineTo(x, y); //first point
    c.strokeStyle = getRandomColor(); //set color
}
c.stroke(); //draws the line

//draw circle/arc

for (let i = 0; i < 3; i++) {
    c.beginPath(); //to avoid connecting from previous line
    c.strokeStyle = getRandomColor(); //border
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    //c.arc(x, y, radius, startAngle, endAngle, clockwise?)
    //c.arc(x, y, radius, startAngle, endAngle, clockwise?)
    c.arc(x, y, 50, 0, Math.PI * 2, false); //Math.pi * 2 --> produces circle
    c.stroke();
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let colors = '#';
    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 15)];
    }

    return colors;
}
