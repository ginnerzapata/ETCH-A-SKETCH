//DOM chaching
const wrap_div = document.querySelector('.wrap');
const container_div = document.querySelector('.container');
const grid_div = document.querySelector('.grid');
const gridActive_div = document.querySelector('.gridActive');
const resetBtn = document.querySelector('.left');
const gridBtn = document.querySelector('.right');


//creating divs
let defNumOfSq = 50;    
const contSize = 300;    //the size of the container

//adding color to the grid
function paint() {
    grid_div.setAttribute('class','grid-active');
}

//this fuction is the default grid

    function defGrid(){
        let sqSize = contSize / defNumOfSq;
        n = defNumOfSq*defNumOfSq; //divs redered
       for(let i = 0; i<= n; ++i) {
           let div = document.createElement('div')
           div.classList.add('grid');
           div.setAttribute('style', `width: ${+sqSize}px; height: ${+sqSize}px`);
           container_div.appendChild(div);
           div.addEventListener("mouseover", ()=>{
               div.setAttribute("class", "gridActive");
           });
           console.log(i);
       };
    };
 
 defGrid();

 //This function is the custom grid
function addDiv() {
    clearCanvas();
    let numOfSq = prompt('How many squares?');
    let sqSize = contSize / numOfSq; //the size of the squares that makes the grid
    n = numOfSq*numOfSq; //divs rendered
    for(let i = 0; i<= n; ++i) {
        let div = document.createElement('div')
        div.classList.add('grid');
        div.setAttribute('style', `width: ${+sqSize}px; height: ${+sqSize}px`);
        container_div.appendChild(div);
        console.log(i);  
    };
};

//This function resets the canvas
 function reset() {
    container_div = document.querySelector('.container');
     container_div.parentNode.removeChild('container');  
 };
 


 //this function clears the canvas
 function clearCanvas() {
    let div = document.querySelector('.grid');
    div.parentNode.removeChild(div);
 };

 //buttons
 resetBtn.addEventListener('click', reset());
 gridBtn.addEventListener('click', addDiv());