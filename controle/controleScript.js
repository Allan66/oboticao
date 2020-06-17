var tbClientes = localStorage.getItem("tbClientes");
tbClientes = JSON.parse(tbClientes);


function mostrarTabela() {
    tbClientes.forEach(element => {

        element = JSON.parse(element);

        $("#tbListar tbody").append(
            "<tr>" +
            "<td>" + element.Nome + "</td>" +
            "<td>" + element.Tutor + "  </td>" +
            "<td>" + element.Contato1 + " </td>" +
            "<td>" + element.Contato2 + " </td>" +
            "<td>" + element.Raca + " </td>" +
            "<td>" + element.Genero + " </td>" +
            "<td>" + element.Pelagem + " </td>" +
            "<td>" + element.Endereco + " </td>" +
            "<td>" + element.Cidade + " </td>" +
            "</tr>"

        )

    });

}
$(document).ready(function () {

    mostrarTabela();
});
$(function () {
    $("td").dblclick(function () {
        var conteudoOriginal = $(this).text();

        $(this).addClass("celulaEmEdicao");
        $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
        $(this).children().first().focus();

        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                var novoConteudo = $(this).val(); //Novo valor armazenado na variável
                $(this).parent().text(novoConteudo);
                $(this).parent().removeClass("celulaEmEdicao");
            }
        });

        $(this).children().first().blur(function () {
            $(this).parent().text(conteudoOriginal);
            $(this).parent().removeClass("celulaEmEdicao");
        });
    });
});

// MOSTRANDO AS VISITAS

var tbVisitas = localStorage.getItem("tbVisitas")
tbVisitas = JSON.parse(tbVisitas)

function tabelaVisitas() {
    tbVisitas.forEach(elemento => {
        elemento = JSON.parse(elemento);

        $("#tbListarVisitas tbody").append(
            "<tr>" +
            "<td>" + elemento.NomeV + "</td>" +
            "<td>" + elemento.valorPorte + " </td>" +
            "<td>" + elemento.adicionais + " </td>" +
            "<td>" + elemento.TabelaData + "</td>"+
            "<td>" + elemento.Total  + "</td>"+ 
            
            "</tr>"
        )
    })
}
$(document).ready(function () {

    tabelaVisitas();
});
// Filtro das visitas
$(function(){
    $("#tbListarVisitas  input").keyup(function(){        
        var index = $(this).parent().index();   // recebe o valor, parent retorna a coluna
        var nth = "#tbListarVisitas td:nth-child("+(index+1).toString()+")"; // filtra a linha da tr
        var valor = $(this).val().toUpperCase(); // tira a diferença maiuscula minuscula
        $("#tbListarVisitas tbody tr").show(); 
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            }
        });
    });
 
    $("#tbListarVisitas input").blur(function(){
        $(this).val("");
    });
});
//Filtro Cadastro
$(function(){
    $("#tbListar  input").keyup(function(){        
        var index = $(this).parent().index();   // recebe o valor, parent retorna a coluna
        var nth = "#tbListar td:nth-child("+(index+1).toString()+")"; // filtra a linha da tr
        var valor = $(this).val().toUpperCase(); // tira a diferença maiuscula minuscula
        $("#tbListar tbody tr").show(); 
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            }
        });
    });
 
    $("#tbListar input").blur(function(){
        $(this).val("");
    });
});
