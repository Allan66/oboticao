$(function() {
    var operacao = "A"
    var indice_selecionado = -1
    var tbClientes = localStorage.getItem("tbClientes");
    tbClientes = JSON.parse(tbClientes);
    if (tbClientes == null)
        tbClientes = [];

    function Adicionar() {
        var cliente = JSON.stringify({
            Nome: $("#petName").val(),
            Tutor: $("#tudoName").val(),
            Raca: $("#inputRace").val(),
            Genero: $("#genero").val(),
            Pelagem: $("#pelagem").val(),
            Contato1: $("#contato").val(),
            Contato2: $("#contato2").val(),
            Endereco: $("#endereco").val(),
            Cidade: $("#inputCity").val(),
        });
        // CADASTRO
        tbClientes.push(cliente);
        localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
        alert("Pet cadastrado!!");
        return true
    }




    function Editar() {
        tbClientes[indice_selecionado] = JSON.stringify({
            Nome: $("#petName").val(),
            Tutor: $("#tutorName").val(),
            Raca: $("#inputRace").val(),
            Genero: $("#genero").val(),
            Pelagem: $("#pelagem").val(),
            Contato1: $("#contato").val(),
            Contato2: $("#contato2").val(),
            Endereco: $("#endereco").val(),
            Cidade: $("#inputCity").val(),
        }); // Alterar cadastro selecionado
        localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
        alert("Informações editadas!")
        operacao = "A"
        return true
    }

    function Excluir() {
        tbClientes.splice(indice_selecionado, 1);
        localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
        alert("Pet excluido ):");
    }

    function Listar() {
        $("##tblListar  tbody").append("</tr > ")
        $("#tblListar").html("");
        $("tblListar").html(
            "<thead>" +
            "   <tr>" +
            "   <th></th>" +
            "   <th>Nome</th>" +
            "   <th>Tutor</th>" +
            "   <th>Raca</th>" +
            "   <th>Genero</th>" +
            "   <th>Pelagem</th>" +
            "   <th>Contato1</th>" +
            "   <th>Contato2</th>" +
            "   <th>Endereco</th>" +
            "   <th>Cidade</th>" +
            "   </tr>" +
            "</thead>" +
            " <tbody>" +
            "</tbody>"
        );



    }


    $("#frmCadastro").on("submit", function() {
        if (operacao == "A") {
            return Adicionar();
        } else {
            return Editar();
        }
    })



    $("tblListar").on("click", "#btnEditar", function() {
        operacao = "E";
        indice_selecionado = parseInt($(this).attr("alt"));
        var cli = JSON.parse(tbClientes[indice_selecionado]);
        $("petName").val(cli.Nome);
        $("tutorName").val(cli.Tutor);
        $("inputRace").val(cli.Raca);
        $("genero").val(cli.Genero);
        $("pelagem").val(cli.Pelagem);
        $("contato").val(cli.Contato1);
        $("contato2").val(cli.Contato2);
        $("endereco").val(cli.Endereco);
        $("inputCity").val(cli.Cidade);
        $("petName").focus();

    })
    $("#tblListar").on("click", "#btnExcluir", function() {
        indice_selecionado = parseInt($(this).attr("alt"));

        Excluir();
        Listar();
    });

});