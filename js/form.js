const contatoArr = [];

//class contato

class contato {
    constructor(nome,sobrenome,email,cpf,telefone,contato){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
    
              // LINHAS DE CONFIRMAÇÃO CRUCIAIS:
            console.log("--- NOVO CONTATO ARMAZENADO ---");
            console.log(data); // Exibe o objeto recém-criado
            contatoArr.push(data);
            //return data; // Retorna o objeto criado
            Enviar(data);

}

function Enviar(dados) {
    //var nome = document.getElementById("nomeid");

    if (dados != "") {
        alert('Obrigado sr(a) ' + dados.nome + ' os seus dados foram encaminhados com sucesso');
        
    }

}