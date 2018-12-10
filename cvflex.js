

/*

document.getElementById("btexp").addEventListener("click", function f () {
   if (document.getElementById("expro").style.display=="block"){
       document.getElementById("expro").style.display="none";
   } else {
       document.getElementById("expro").style.display="block";
   }
});


document.getElementById("btform").addEventListener("click", function f () {
    if (document.getElementById("form").style.display=="block"){
        document.getElementById("form").style.display="none";
    } else {
        document.getElementById("form").style.display="block";
    }
});

document.getElementById("btcompet").addEventListener("click", function f () {
    if (document.getElementById("comp").style.display=="block"){
        document.getElementById("comp").style.display="none";
    } else {
        document.getElementById("comp").style.display="block";
    }
});

comment faire la meme chose en beaucoup moins de ligne de code merci Jquery
*/

$("#btexp").click(function () {
    $("#expro").toggle();
});

$("#btform").click(function () {
    $("#form").toggle();
});

$("#btcompet").click(function () {
    $("#comp").toggle();
});