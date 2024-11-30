console.log('connecté !')
const modal = document.querySelector('.modal-container');
const btn = document.querySelector('.btn-success');
const code = document.querySelector('.code');
const icone = document.querySelector('.fa-times');

window.addEventListener('scroll', function(){
    console.log('defilement détécté');
    let hauteur = this.document.documentElement.scrollTop;
    console.log(hauteur, 'nombre de pixels depuis le haut de la page');
});
