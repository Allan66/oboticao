
$(document).ready(function () {
    $(".form-check-input").change(function () {
        var total = $('input[class="form-check-input"]:checked').get().reduce(function (tot, el) {
            return tot + Number(el.value);
        }, 0);
        $('#valorTotal').val(total);
    });

    
    $('#tamanhoDog').on('change', function () {
        var selectedValue = '#' + $(this).val();
        $('.opcoesPorte > div').hide();
        $(`${selectedValue}`).show();
       
        console.log(selectedValue)
    });
});




