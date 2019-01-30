

var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

canvas.width = screen.width; //Make it the size of the window.
canvas.height = screen.height;



ctx.fillStyle = "#FF0000";
var y1 = 0;
var y2 = 0;
var y3 = 0;

function clearCanvas() {
  ctx.clearRect(0,0,300,350);
}

function updateCanvas(){
  y1 += 1;
  y2 += 2;
  y3 += 3;
  //clearCanvas();
  ctx.clearRect(0,0,700,450); //clear canvas it goes back to white
  ctx.fillRect( y1,y1,y1,y1);
  ctx.fillRect(150,y2,50,50);
  ctx.fillRect(250,y3,50,50);  
  window.requestAnimationFrame(updateCanvas);
}

window.requestAnimationFrame(updateCanvas);

// ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
// ctx.fillRect(10, 10, 100, 100) 
// ctx.clearRect(30, 30, 30, 30)  //Clears the specified rectangular area, making it fully transparent.


// ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';


// ctx.fillRect(200, 200, 100, 100) 

// var x = 100; // x coordinate
// var y = 75; // y coordinate
// var radius = 50; // Arc radius
// var startAngle = 0; // Starting point on circle
// var endAngle = Math.PI*2; // End point on circle



// setInterval(function(){
//     for(let i=0; i<10; i++){
//         ctx.beginPath()
//         let x = Math.random()* screen.width; 
//         let y = Math.random()* screen.height; 
//         ctx.arc(x, y, radius, startAngle, endAngle, true);
//         ctx.fill()        
//     }
    
// },500)




var img = new Image();   // Create new img element
img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg'; // Set so
img.onload = function() {
    //ctx.drawImage(img, 400, 400, 200, 200)
}






















// var canvas = document.getElementById('example');
// canvas.height = window.innerHeight
// canvas.width = window.innerWidth

// var ctx = canvas.getContext('2d');











// for(let i=0; i<20; i++){
//     let x = Math.random()* screen.width; 
//     let y = Math.random()* screen.height; 
//     ctx.beginPath()
//     ctx.arc(x, y, 30, 0, Math.PI*2, false);
//     ctx.strokestyle = 'blue'
//     ctx.stroke()

// }




//ctx.fillRect(25, 25, 100, 100);
//ctx.clearRect(45, 45, 60, 60);
//ctx.strokeRect(50, 50, 50, 50);

// ctx.beginPath();
// var x = 100; // x coordinate
// var y = 75; // y coordinate
// var radius = 50; // Arc radius
// var startAngle = 0; // Starting point on circle
// var endAngle = Math.PI*2; // End point on circle
// ctx.arc(x, y, radius, startAngle, endAngle, true);


// let random = setInterval(function(){
//     ctx.moveTo(Math.random()*window.innerWidth,Math.random()*window.innerHeight)
//     ctx.arc(250, 75, 40, 0, endAngle, true);
//     ctx.stroke();
//     ctx.fill();

// },100)
// setInterval(function(){
//     //ctx.moveTo(,Math.random()*window.innerHeight)
//     ctx.fillRect(25, 25, Math.random()*window.innerWidth, Math.random()*window.innerHeight);
//     //ctx.clearRect(0, 0, canvas.width, canvas.height);

// },500)
// setInterval(function(){
//     //ctx.moveTo(,Math.random()*window.innerHeight)
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

// },1000)


// var img = new Image();   // Create new img element

// img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg'; // Set so
// img.onload = function() {

//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
// }