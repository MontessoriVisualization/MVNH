const click=document.querySelector('.lst3')
const exeHov= document.querySelector('.nt_exe')
click.addEventListener('mouseleave', intDis)

function intDis(){
    exeHov.classList.add('btms');
    
}


click.addEventListener('mouseenter', exeDis)
function exeDis(){
    exeHov.classList.remove('btms');

}






const subVis=document.querySelector('.skt2')
const intHov1= document.querySelector('.subsec1')
intHov1.addEventListener('mouseleave', inthv)

function inthv(){
    subVis.classList.add('btms');
    
}


intHov1.addEventListener('mouseenter', exethv)
function exethv(){
    subVis.classList.remove('btms');

}


const sub12vis=document.querySelector('.kts2')
const hovoncl12= document.querySelector('.ktms')
hovoncl12.addEventListener('mouseleave', unhov12)

function unhov12(){
    sub12vis.classList.add('btms');
    
}


hovoncl12.addEventListener('mouseenter', inhov12)
function inhov12(){
    sub12vis.classList.remove('btms');

}




