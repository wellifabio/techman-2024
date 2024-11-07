const user = JSON.parse(window.localStorage.getItem("usertechman"));
if(user == undefined){
    window.location.href = './index.html';
}else{
    let btnovo = document.getElementById('btnovo');
    if(user.perfil == 2){
        btnovo.classList.remove('oculto');
    }
}

function sair(){
    window.localStorage.removeItem("usertechman");
    window.location.reload();
}