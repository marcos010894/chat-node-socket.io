const insertMensage = function insertMensageF(id, name, mensagem, nameClass){
    let chatBox = document.getElementById('chatMsg');
    chatBox.innerHTML += `
        <div class="${nameClass}">
            <div class="nameUser">
                <h4> ${name} </h4>
            </div>
            <div class="msgSend">
                ${mensagem}
            </div>
        </div>
    `
    mensagem = '';
}
/*
let el = document.querySelector(`.${myid}`);
el.classList.remove('teste');
el.classList.add('testando');*/