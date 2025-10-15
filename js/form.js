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
            console.log("Total na Agenda:", agenda.length); // Exibe a contagem atual
            console.log("--------------------------------");
    
            contatoArr.push(data);
            return data; // Retorna o objeto criado

}

function Enviar(event) {

    if (event && event.preventDefault) {
        event.preventDefault(); 
    }

    //var nome = document.getElementById("nomeid");

    if (nome.value != "" && sobrenome.value !="" && email.value != "" && cpf.value != "" && telefone.value != "" && contato.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        
    }

}