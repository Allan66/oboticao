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
        console.log(element)
    });



}
$(document).ready(function() {

    mostrarTabela();
});
