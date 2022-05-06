function pegaDados() {
    console.log('Pega dados funcionando');

    // Função que carrega dados proceduralmente, ex: o feed do instagram vai carregando conforme o scroll. É uma requisição que ocorre dps da requisição
    // inicial da página. A função ajax recebe um único argumento JSON 
    $.ajax({
        url: "https://iot.14mob.com/lista.json",
        data: "",
        success: function(retorno) {
            tratarDados(retorno);
        },
        dataType: "html" //? Só estamos usando html pra fazer o parse pra json dps, mas se tivermos ctz q a api retorna json, é só colocar json aq
    }) 
}

function tratarDados(dados) {
    dados = JSON.parse(dados) // ? Recebemos um elemento html (como está no dataype ali em cima no ajax) e transformamos em JSON

    var divConteudo = $(".listaCachorro")

    // As duas funções abaixo fazem a mesma coisa, recebem um parâmetro json e itera (each) sobre cada elemento realizando uma função
    $(dados).each(function(chave, valor){
        
        let conteudo = `<div class="col-md-4" style="margin-top: 10px;"> 
                <div class="card">
                    <img src="${valor.imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${valor.nome}</h5>
                    <p class="card-text">${valor.descricao}</p>
                    <button type="button" class="btn btn-primary abrirModal" onclick="abrirModal(${valor.id})">
                        Detalhes
                    </button>
                    </div>
                </div>
            </div> `
        
            divConteudo.append(conteudo)
    })
    // $.each(dados, function(index,data) {
        
    // })
}

function abrirModal(id) {
        
    console.log(id);
        let conteudo = `<div class="col-md-4"> 
                <div class="card">
                    <img src="${valor.imagem}" class="card-img-top imagem" onclick="abrirModal()" alt="...">
                    <div class="card-body">
                    <h5 class="card-title nome">${valor.nome}</h5>
                    <p class="card-text descricao">${valor.descricao}</p>
                    </div>
                </div>
            </div> `
        
    $('.detalheItem').html(conteudo)

    $('#exampleModal').modal('show')
}

$(function() { // Essa função se auto-chama, é usada para verificar se o jquery tá funfando, TODA FUNÇÃO QUE COMEÇA COM '$' É JQUERY 
    pegaDados()
})

// ! Poderiamos testar o Jquery assim:

// $(pegaDados())

// https://github.com/jnlucas