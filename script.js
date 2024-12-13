
const root = document.documentElement;
//MEnue
const clkmenu = document.querySelector('.menelog');
const clkcross = document.querySelector('.mencrx');
const shwmenu = document.querySelector('.mnul');

clkmenu.addEventListener('click', () => {
    shwmenu.classList.add('active'); 
});

clkcross.addEventListener('click', () => {
    shwmenu.classList.remove('active'); 
});



// MENUE Notes 

const menNots=document.querySelector('.menlst3')
const clzes= document.querySelector('.menclses')
const rotbt= document.querySelector('.svtr8')
const txtcol= document.querySelector('.bt1')
menNots.addEventListener('click', clkclzes)


function clkclzes(){
    clzes.classList.toggle('remclz');
    menNots.classList.toggle('ntclkbg');
    rotbt.classList.toggle('ntrot');
    txtcol.classList.toggle('txtwht')

    
}

//menu class 11subjects
const clkmen11=document.querySelector('.mensec1')
const shwsb11= document.querySelector('.sub11')

clkmen11.addEventListener('click',() => { 

    shwsb11.classList.toggle('btms');


    
})


//menu class 12subjects
const clkmen12=document.querySelector('.cl12')
const shwsb12= document.querySelector('.sub12')

clkmen12.addEventListener('click',show12) 
function show12(){ 

    shwsb12.classList.toggle('btms');

}



//old is gold
const clkmenold=document.querySelector('.menlst3_3')
const shwsbold= document.querySelector('.subold')

clkmenold.addEventListener('click',() => { 

    shwsbold.classList.toggle('btms');

})





//nav notes

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


//nav note class 11



const subVis=document.querySelector('.navskt1')
const intHov1= document.querySelector('.navsec1')
intHov1.addEventListener('mouseleave', inthv)

function inthv(){
    subVis.classList.add('btms');
    
}


intHov1.addEventListener('mouseenter', exethv)
function exethv(){
    subVis.classList.remove('btms');

}


//nav note class 12

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



//old is gold

const clzvis=document.querySelector('.navskt3')
const Hovomoldgd= document.querySelector('.oldgd')
Hovomoldgd.addEventListener('mouseleave', oldot)

function oldot(){
    clzvis.classList.add('btms');
    
}


Hovomoldgd.addEventListener('mouseenter',oldin)
function oldin(){
    clzvis.classList.remove('btms');

}


