//DOM chaching
const wrap_div = document.querySelector('.wrap');
let screen = document.querySelector('.screen-border');
let container_div = document.querySelector('.container');
const resetBtn = document.querySelector('.left');
const gridBtn = document.querySelector('.right');
const par = document.querySelector('.draw');


//creating divs
let defNumOfSq = 50;    
const contSize = 300;    //the size of the container

//this fuction is the default grid

    function defGrid(){
        let sqSize = contSize / defNumOfSq;
        n = defNumOfSq*defNumOfSq; //divs redered
       for(let i = 0; i<= n; ++i) {
        let div = document.createElement('div');
           div.classList.add('grid');
           div.setAttribute('style', `width: ${+sqSize}px; height: ${+sqSize}px`);
           container_div.appendChild(div);
           div.addEventListener("mouseover", ()=>{
               div.classList.add('gridActive');
           });
           console.log(i);
       };
    };
 
 defGrid();

 //This function is the custom grid
function addDiv() {
    delGrid();
    let numOfSq = prompt('How many squares?');
    let sqSize = contSize / numOfSq; //the size of the squares that makes the grid
    n = numOfSq*numOfSq; //divs rendered
    for(let i = 0; i<= n; ++i) {
        let div = document.createElement('div');
        div.classList.add('grid');
        div.setAttribute('style', `width: ${+sqSize}px; height: ${+sqSize}px`);
        container_div.appendChild(div);
        div.addEventListener("mouseover", ()=>{
            div.classList.add('gridActive');
        });
        console.log('aqui');  
    };
};

//This function clears the canvas
 function clear() {
    console.log('clear');
    const gridActiveAll_div = document.querySelectorAll('.gridActive');
    gridActiveAll_div.forEach(gridActiveAll_div =>{
    gridActiveAll_div.classList.remove('gridActive');
    });    
 };

 //empties the container
function delGrid() {
    container_div.innerHTML = "";
};

 //buttons
 resetBtn.addEventListener('click', clear);
 gridBtn.addEventListener('click', addDiv);