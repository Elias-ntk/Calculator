let toggle = document.getElementById('container-tgl');
let body = document.querySelector('body');

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active');
    let val = body.classList.toggle('active');
    localStorage.setItem("container-tgl", val );
});

let valor = localStorage.getItem("container-tgl");


if (valor == "true"){
    body.classList.add('active');
    toggle.classList.add('active');
} else {
    body.classList.remove('active');
    toggle.classList.remove('active');
}