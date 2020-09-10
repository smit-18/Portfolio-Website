function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsByClassName("topnav")[0].style.backgroundColor = "white";
    var x = document.getElementsByClassName("links");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "black";
    x[i].style.marginTop = "0vh";
    x[i].style.lineHeight = "45px"; 
    }

  } else {
    document.getElementsByClassName("topnav")[0].style.backgroundColor = "transparent";
    var x = document.getElementsByClassName("links");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "white";
    x[i].style.marginTop = "6vh";
    x[i].style.lineHeight = "0";
    }
  } 
}



