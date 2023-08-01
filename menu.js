var b;
function show(){
  if(b==1){
    document.getElementById('password').type='password';
    document.getElementById('image').src='/images/show.png';
    b=0;
  }
  else{
    document.getElementById('password').type='text';
    document.getElementById('image').src='/images/hide.png';
    b=1;
  }
}

var settings="This section contains the settings of the website owned by Arjie."

document.getElementById('text').innerHTML= settings;