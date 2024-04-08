const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0)
})
function validate()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pattern = /^[a-zA-Z._%+-][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(name==='')
    {
        alert("please enter name");
        return false;
    }
      

  if (!pattern.test(email)) {
      alert("Invalid email address");

      return false;
  } else {
      return true;
  }
}

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}