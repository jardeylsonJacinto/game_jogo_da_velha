$(document).ready( function(){
    $('#btn_iniciar_jogo').click( function (){

        //valida a digitação dos apelidos dos jogadores
        if($('#entrada_apelido_jogador_1').val() == ''){
            alert('Apelido do jogador 1 não foi preenchido');
            return false;
        }

        if($('#entrada_apelido_jogador_2').val() == ''){
            alert('Apelido do jogador 2 não foi preenchido');
            return false;
        }

        //exibir os apelidos
        $('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());
        $('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());

        //controla as vizualizações das divs
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();

        $('.jogada').click(function(){
            let id_campo_clicado = this.id;
        });

    });
});