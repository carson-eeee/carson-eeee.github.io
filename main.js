function changeText(){
    var mytext =document.getElementById("mytext")
    // mytext.innerHTML="You clicked";
    window.open("https://github.com/carson-eeee/carson-eeee.github.io")
  }
function imgclick(){
  var imgprompt = document.getElementById("prompt")
  imgprompt.innerHTML="rrrr";
  console.log("hello world")
  }
document.getElementById("myButton").onclick = function(){
  var myName = document.getElementById("myText").value;
  var print = document.getElementById("print");
  print.innerHTML=("hello",myName);
}