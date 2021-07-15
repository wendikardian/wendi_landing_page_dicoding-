
var modal = document.getElementById("myModal");
var gambar = document.getElementsByClassName("singles");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (img of gambar){ 
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() { 
    modal.style.display = "none";
  }
  
}


function myFunction() {
    var x = document.getElementById("mobileLinks");
    var logo = document.getElementById("logo");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("photocard");
  var y = document.getElementById("welcome");
//   y.style.display = "block"; 
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
     
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
//   y.style.display = "none"; 
  setTimeout(carousel, 1500); 
}

