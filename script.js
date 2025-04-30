const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');

let ativo = true;

setInterval(() => {
  if (ativo) {
    bg1.classList.remove('active');
    bg2.classList.add('active');
  } else {
    bg2.classList.remove('active');
    bg1.classList.add('active');
  }
  ativo = !ativo;
}, 6000);


  
  