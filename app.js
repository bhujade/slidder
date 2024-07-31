let face = document.querySelector(".circle");
let identity = document.querySelector(".head");
let work = document.querySelector(".des");
let btnleft = document.querySelector(".left");
let btnright = document.querySelector(".fa-chevron-right");
let surprise = document.querySelector(".btn1");
let para =document.querySelector(".para");


let faces = ["photo-1693686110155-24a00ee4d225.avif","photo-1655905208134-47868f706a3c.avif","photo-1721777436309-a5af4d4a4382.avif"]

let name = ["Dear1" ,"Dear" ," Tuffy"]
let dev = ["Runner" ," Fastest runner","Bark "]

let details = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi minus saepe, aliquid laboriosam tenetur corporis repellendus quibusdam consectetur aspernatur perferendis? Porro, omnis reprehenderit officia ad magni debitis est architecto.",
    
    "lorem  ltrem lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi minus saepe, aliquid laboriosam tenetur corporis repellendus quibusdam consectetur aspernatur perferendis? Porro, omnis reprehenderit officia ad magni debitis est architecto.",
    
    "hello hello hello hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi minus saepe, aliquid laboriosam tenetur corporis repellendus quibusdam consectetur aspernatur perferendis? Porro, omnis reprehenderit officia ad magni debitis est architecto."]


let slide = () =>{
    
    let num =  Math.floor(Math.random()* 3);

    face.style.background = `url(${faces[num]})`;
    face.style.backgroundSize="cover";
    face.style.backgroundPosition = "center";

    
    para.innerHTML = details[num];
    identity.innerHTML = name[num];
    work.innerHTML = dev[num];


    
}


surprise.addEventListener("click",slide);