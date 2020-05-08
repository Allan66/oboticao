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
$(document).ready(function() {

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
                var novoConteudo = $(this).val();
                $(this).parent().text(novoConteudo);
                $(this).parent().removeClass("celulaEmEdicao");
            }
        });
         
    $(this).children().first().blur(function(){
        $(this).parent().text(conteudoOriginal);
        $(this).parent().removeClass("celulaEmEdicao");
    });
    });
});
