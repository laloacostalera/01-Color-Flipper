const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
  let hexColor = "#";
  for (i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()];
  } 
  console.log(hexColor);
  //cambiar el texto a traves de la variable color se hace con .textContent
  color.textContent = hexColor;
  //cambiar la propiedad del document
  document.body.style.backgroundColor = hexColor;
  
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}






/* const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
  
 */