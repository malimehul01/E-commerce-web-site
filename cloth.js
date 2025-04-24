




const img=[

"./img/Hero-section/img2.jpeg",
"./img/Hero-section/img3.jpeg",
"./img/Hero-section/img4.jpeg",
"./img/Hero-section/img5.jpeg",
"./img/Hero-section/img6.jpeg",
"./img/Hero-section/img8.png",
   
   
];





let index=0;
          
function changeimg() {
    
index=(index+1)%img.length;
document.querySelector("#heroimg").src=img[index];


}

setInterval(changeimg,3000)


  


   

















