const uri = 'http://localhost:3000/equipamento';
const user = JSON.parse(window.localStorage.getItem("usertechman"));
var idAserExcluido = 0;

if (user == undefined) {
    window.location.href = './index.html';
} else {
    let btnovo = document.getElementById('btnovo');
    if (user.perfil == 2) {
        btnovo.classList.remove('oculto');
    }
}

function sair() {
    window.localStorage.removeItem("usertechman");
    window.location.reload();
}

function listarEquipamentos() {
    const equipamentos = document.getElementById('equipamentos');
    equipamentos.innerHTML = '';
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            data.forEach(e => {
                const card = document.createElement('div');
                card.className = 'card';
                if (user.perfil == 2)
                    card.innerHTML = `
                    <div>
                        <img class="ilustracao" src="./assets/${e.imagem}">
                    </div>
                    <div>
                        <h2>${e.equipamento}</h2>
                        <p>${e.descricao}</p>
                        <div>
                            <img src="./assets/comentario.png" onclick="comentarios(${e.id})" class="icone">
                            <img onclick="excluirEquipamento(${e.id})" src="./assets/deletar.png" class="icone">
                        </div>
                    </div>
                    `;
                else
                    card.innerHTML = `
                    <div>
                        <img src="./assets/${e.imagem}">
                    </div>
                    <div>
                        <h2>${e.equipamento}</h2>
                        <p>${e.descricao}</p>
                        <div>
                            <img src="./assets/comentario.png" onclick="comentarios(${e.id})">
                        </div>
                    </div>
                    `;
                equipamentos.appendChild(card);
            });
        });
}

function excluirEquipamento(id) {
    const excluir = document.getElementById('excluir');
    excluir.classList.remove('oculto');
    idAserExcluido = id;
}

function comfirmaExclusao() {
    fetch(uri + '/' + idAserExcluido, {
        method: 'DELETE'
    })
        .then(() => {
            window.location.reload();
        });
}

function comentarios(id){
    const comentarios = document.getElementById('comentarios');
    comentarios.innerHTML = '';
    comentarios.classList.remove('oculto');
}