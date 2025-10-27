var main= document.getElementById("main");
let arr= ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg"];
 let s= "";
for(let i=1; i<=65; i++){
    let r= Math.floor(Math.random()*arr.length);
    s+= `<div class="card"><img src=${arr[r]}></div>`;
       }
main.innerHTML=s;