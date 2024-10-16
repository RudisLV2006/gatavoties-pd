console.log('Javascript loaded!');

//document.querySelector == document.getElementById
//document.querySelector("#box-container")

const boxContainer = document.getElementById('box-container');
const changeColorBtn = document.getElementById('change-color');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener("click", processBtnClick);
changeColorBtn.addEventListener("click", changeColorClick);

function processBtnClick(event){
    //console.log(event);
    if(boxContainer.classList.contains('hidden')){
        boxContainer.classList.remove('hidden');
        return;
    }
    boxContainer.classList.add('hidden');


    //boxContainer.classList.toggle('hidden');
}
function changeColorClick(event){
    boxContainer.classList.add('color');
}


/*

dzest elementu 

uztaisit blakus identisku elementu(dzeltenu kasti)
*/