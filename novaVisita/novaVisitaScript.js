$(document).ready(function() {
    $(".form-check-input").change(function() {
        var total = $(".form-check-input:checked").get().reduce(function(tot, el) {
            return tot + Number(el.value);
        }, 0);
        $('#valorTotal').val(total);
    });


    $('#tamanhoDog').on('change', function() {
        var selectedValue = '#' + $(this).val();
        $('.opcoesPorte > div').hide();
        $(`${selectedValue}`).show();


    });
});
// Guardando no local storage
$(function() {
    var operacao = "S"
    var tbVisitas = localStorage.getItem("tbVisitas");
    tbVisitas = JSON.parse(tbVisitas);
    if (tbVisitas == null)
        tbVisitas = [];


    function novaVisita() {
        var visita = JSON.stringify({
            NomeV: $("#petName").val(),
            TamanhoV: $("#tamanhoDog").val(),
            valorPorte: valoresPorte(),
            adicionais: adicionaisSelecionados(),
            TabelaData: dataTabela(),
            Total: $("#valorTotal").val()

        });


        tbVisitas.push(visita);
        localStorage.setItem("tbVisitas", JSON.stringify(tbVisitas));

        alert("Visita agendada")
        return true
    }

    function adicionaisSelecionados() {
        let adicionais = ""
        $('.adicionais:checked').each(function() {
            adicionais += ($(this).attr("data-name") + "  ");
        })
        return adicionais
    }

    function valoresPorte() {

        let valorPorte = $($('.valorPorte:checked')[0]).attr('data-name')

        return valorPorte
    }


    $("#frmVisita").on("submit", function() {
        if (operacao == "S")
            return novaVisita();
        else
            return
    });

    function dataTabela() {
        var dNow = new Date();
        var localdate = dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear();

        return localdate
    }




});