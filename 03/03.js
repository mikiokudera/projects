const imageEl=document.querySelector(".container");

const btnEl=document.querySelector(".btn");
btnEl.addEventListener("click",()=>{
    imageNum=10;
    addimg();

});

function addimg(){
    for (let index = 0; index < imageNum; index++) {
        const newImgEl=document.createElement("img");
    newImgEl.src=`https://picsum.photos/300?random=${Math.floor
        (Math.random()*2200)}`;
        imageEl.appendChild(newImgEl);

        
    }
    }