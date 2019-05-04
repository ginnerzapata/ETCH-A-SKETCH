//DOM chaching
const wrap_div = document.querySelector('.wrap');
const container_div = document.querySelector('.container');



//creating divs
    
let numOfSq = 0;

//functions
function addDiv(n) {
    const contSize = 400;    //the size of the container
    let sqSize = contSize / numOfSq; //the size of the squares that makes the grid
    n = prompt('How many squares?');
    numOfSq = n*n;
    for(let i = 0; i<= numOfSq; i++) {
        let div = document.createElement('div');
            div.setAttribute('style', `width: ${+sqSize}px; height: ${+sqSize}px`);
        container_div.appendChild(div);
        console.log(i);  
    };
};

addDiv(); 