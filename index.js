
// Import stylesheets
import './style.css';

// Write Javascript code!
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1500;
canvas.height = 576;
c.fillStyle = 'lightblue';
c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 1
class Sprite {
  // the properties of the character
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 75;
    this.width = 75;


  }
// creating the character
  draw(color) {
    c.fillStyle = color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height,this.ablock);

  }
  // updating the game positions
  update(color) {
		c.fillStyle = color
    this.draw();
    this.position.y = this.velocity.y + this.position.y;
		this.position.x = this.velocity.x + this.position.x;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------



    
c.fillStyle = 'white'
c.fillRect(630,500,100,50)

if (this.position.x +75 < 630&& this.position.x +75 < 730 && this.position.y + 75 + this.velocity.y > 500 && this.position.y + 75 + this.velocity.y < 550){
  this.velocity.y = -1
  
}
if (this.position.x + 100 > 600 && this.position.x + 250 < 730 && this.position.y + 300 + this.velocity.y > 600 && this.position.y +150 + this.velocity.y < 7){
  this.velocity.y = -1
  
}










































































































    















































//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// the barriers for the game'
if (this.position.x >= 1500){
    this.velocity.x = 0
    this.position.x = 1500
}

if (this.position.x <= 0){
  this.velocity.x = 0
  this.position.x = 0
}

    if (this.position.y + this.velocity.y + this.height >= canvas.height){
    this.velocity.y = 0


    }
   else if (this.position.y <= 0){
      this.velocity.y = 0
  
  
      }
  

        else {
        this.velocity.y = this.velocity.y //+ gravity
      
        }
    }
  }
// the position of the character
const player = new Sprite({
  position: { x: 20, y: 0 },
  velocity: { x: 0, y: 10 },
});
const enemy = new Sprite({
  position: { x: 20, y: 0 },
  velocity: { x: 0, y: 10 },
});

// running the game and its colors
function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = "grey";
	c.fillRect(0,0,canvas.width,canvas.height)
	player.update("blue");
  enemy.update("red");
}
animate();
// the movement controls for the characters
window.addEventListener("keydown",(event) =>{
switch(event.key){
  case 'w':
  player.velocity.y = player.velocity.y -20
  break
  case 's':
  player.velocity.y = player.velocity.y +10
  break
  case 'a':
  player.velocity.x = player.velocity.x -5
  break
  case 'd':
  player.velocity.x = player.velocity.x +5
  break
  
  case 'ArrowUp':
    enemy.velocity.y = enemy.velocity.y -20
  break
  case 'ArrowDown':
  enemy.velocity.y = enemy.velocity.y +20
  break
  case 'ArrowLeft':
  enemy.velocity.x = enemy.velocity.x -5
  break
  case 'ArrowRight':
  enemy.velocity.x = enemy.velocity.x +5
  break

 


}
// logs the information in the console
console.log(event.key)
})