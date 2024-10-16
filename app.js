console.log('Javascript loaded!');

//document.querySelector == document.getElementById
//document.querySelector("#box-container")

const boxContainer = document.getElementById('box-container');
const changeColorBtn = document.getElementById('change-color');
const toggleBtn = document.getElementById('toggle-btn');
const deleteBtn = document.getElementById('delete-box');
const createElementBtn = document.getElementById('create-box');

toggleBtn.addEventListener("click", processBtnClick);
changeColorBtn.addEventListener("click", changeColorClick);
deleteBtn.addEventListener('click', deleteElement);
createElementBtn.addEventListener('click', createElement);

function processBtnClick(){
    //console.log(event);
    if(boxContainer.classList.contains('hidden')){
        boxContainer.classList.remove('hidden');
        return;
    }
    boxContainer.classList.add('hidden');


    //boxContainer.classList.toggle('hidden');
}
function changeColorClick(){
    //boxContainer.classList.toggle('color');
    boxContainer.style.backgroundColor = 'blue';
}
function deleteElement(){
    boxContainer.remove();
}
function createElement(){
    var newBox = document.createElement('div');
    newBox.style.backgroundColor = 'yellow';
    newBox.className = 'box';
    document.getElementsByClassName("main")[0].appendChild(newBox);


    /*
    const mainContainer = document.querySelector('.main');
    var newBox = document.createElement('div');
    newBox.className = 'box';
    newBox .style.backgroundColor = 'yellow';
    mainContainer.appendChild(newBox);
    */
}



/*

dzest elementu 

uztaisit blakus identisku elementu(dzeltenu kasti)
*/