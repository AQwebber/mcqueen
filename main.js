var a;
function show(){
  if(a==1){
    document.getElementById('password').type='password';
    document.getElementById('image').src='images/show.png';
    a=0;
  }
  else{
    document.getElementById('password').type='text';
    document.getElementById('image').src='images/hide.png';
    a=1;
  }
}


function sbs(){
   
   var name= document.getElementById('name').value;
var email= document.getElementById('gmail').value;
var pass= document.getElementById('password').value;
alert("HAHAHAH")
}