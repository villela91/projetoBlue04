const prompt = require("prompt-sync")()
//Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher 
//ntre rotinas matinais,
//rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. 
//A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. 
//Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por 
//determinar o inicio e término da história, além de avançar o tempo a cada escolha.
//É importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição 
//das possibilidades do personagem, por exemplo: 
//Manhã, tarde, noite, dormir - Recomeça o ciclo.
//É obrigatório o uso funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto
//durante o módulo.
//Use toda sua criatividade para desenvolver uma história interessante e seja bem específico com relação as 
//escolhas que precisam ser feitas, para que seu jogo seja divertido! Lembre-se que as escolhas devem 
//impactar no que acontecerá com o personagem no decorrer da história, e adicionar eventos que podem 
//ocorrer de maneira aleatória é uma boa ideia para tornar o seu jogo mais interessante.

//// mundo baseado na europa medieval,
////essa historia e sobre um aventurreiro, 
//// que foi espulso de seu lar, por um crime que nao cometeu.


console.clear();
function respostas1(){
   let resposta = prompt()
   while(resposta != 'sim' && resposta !='nao'){
        console.log(' resposta invalida!!!');
       resposta = prompt()
}
return resposta
}
function respostas2(){
    let resposta = prompt()
    while(resposta != 1 && resposta !=2 && resposta !=3 && resposta !=4 ){
         console.log(' resposta invalida!!!');
         resposta = prompt()
 }
 return resposta
 }
let heroi = {
    nome: '',
    altura: 1.8,
    saude: 50,
    forca: 20,
    destreza: 15,
    dinheiro: 100,
    iten : [],
    hora: 8,
    minuto: 0,
    dia: 1,
   
    mudaDinheiro: function(pontos){
        this.dinheiro += pontos;
        console.log(`dinheiro: ${this.dinheiro}`);
    },
  
    
    mudaSaude: function(pontos){
        this.saude += pontos;
        console.log(`Saúde: ${this.saude}`);
    },
    mudaDestreza: function(pontos){
        this.destreza += pontos;
        console.log(`Destreza: ${this.destreza}`);
    },
    passaTempo: function(dia, hora, minuto){
        this.dia += dia;
        this.hora += hora;
        this.minuto += minuto;
        if (this.minuto >= 60){
            this.hora++;
            this.minuto -= 60
        }if (this.hora >= 24){
            this.dia++;
            this.hora -= 24
          }
        }
    }
    historiaComeça()

    function cidadeGrande(){
        console.log('vocês finalmente chegam na cidade grande, e la você descobre que o monasterio em que vivia foi devasado...');
        prompt()
        console.log(' voce descobre que os outros monges e moradores do monasterio foram todos mortos, da mesmaforma que você avia visto...');
        console.log('seus companheiros preoculpados com você perguntam:')
        console.log('- você gostaria de nossa ajuda para saber o que aconteceu la ?')
        conclusao = respostas1()
        
        if (conclusao == 'sim'){
            console.log(' vocês e seus companehiros se preparam para uma longa viajem ate o o monasterio');
            heroi.mudaSaude(30);
            heroi.passaTempo(1,0,0)
            prompt();
            console.clear();
            fimDahistoria()
        }else{
            console.log('você fica atordoado com essa noticia, e fala com seus companehiros, que deixara isso para traz, e que alguem mais capas deveria cuidar disso');
            console.log('você decide largar essa vida de aventureiro e tenta viver uma vida nova, praticando e encinando o que aprendeu');
            prompt();
            console.log(' a historia cheogu ao seu fim...');
            prompt();
            console.log(' espero que tenha gostado');
            prompt();
            console.log(' gostaria de jogar novamente para tentar novas escolhas ?sim ou nao');
            recomeço = respostas1()

            if (recomeço =='sim'){
                console.log(' e la vamos nos ');
                prompt();
                console.clear();
                historiaComeça();
            }else{
                console.log('MUITO OBRIGADO POR JOGAR!!!!\n ate a proxima');
                prompt();
                prompt();
                console.clear();
                fim()
            }

           
        }
    }
    function historiaComeça(){
        prompt('Pressione ENTER  para continuar');
        console.clear();
        console.log('nossa historia começa com um jovem que vive em um monasterio, largado lá quando era um bebê assim com muitos.')
        console.log('nosso jovem aventureiro vive uma vida tranquilha, fazendo tarefas, seus treinos tanto de combate quanto de curandeiro')
        prompt();
        console.clear();
        console.log('em uma manha como todas as outras, em quanto você caminha pelo monasterio, um viagante idoso lhe aborda e pergunta ?')
            heroi.nome = prompt("como se chama? ");
            console.log(`muito prazer ${heroi.nome}, gostaria de saber onde fica o vilarejo mais proximo, você poderia me levar ?`)
            resposta =  respostas1()
            if (  resposta =='sim'){
            console.log(' claro, eu levo o senhor ate la, nao e muito longe')
                heroi.passaTempo(0, 2, 0);
                console.log('gostaria de explorar o vilerejo?');
                explorar = respostas1()
                if (explorar == 'sim'){
                    vilarejo();
                } else (resposta =='nao');{
                    console.log('você volta ao monasterio');
                    heroi.passaTempo(0, 2, 0);
                    monasterio();
                }
            
            } else if  ( resposta =='nao') {
            console.log(' me desculpe senhor, estou muito ocupado')
                heroi.passaTempo(0, 0, 45);
                monasterio();
            }
        }
           
    function investigaçao(){
        console.log('os monges guardiões o levam para a parte interna do monasterio');
        console.log('os sacerdotes se reunem e falam.');
        console.log(`-${heroi.nome}, você esta sendo acusado de rituais profanos,\n foi encontrado alguns objetos que pertencem a você na sena do crime\n  por esse crime hediondo ${heroi.nome}, sera sentenciado a MORTE!!!`);
         console.log('o que você faz?\n aceita sua punução[1]\n tenta fugir [2] ');
        destino = respostas2()
        if (destino == 1){
         historiaComeça();
    
        }else if ( destino == 2); {
         console.log(' você aproveita a comoção gerada pelas duras palavras ditas, e em um movimento abrupto e consegue e soltar')
         console.log(' você consegue fugir')
         console.log('pra onde você vai agora, para o vilarejo mais proximo?[1]\n vai ficar escondido no mosnaterio ?[2]');
         fulga = respostas2()
         if (fulga == 1){
          heroi.passaTempo(0, 2, 0);
           prompt();
            console.clear();
            vilarejo();
         }else (fulga == 2);{
         console.log(' depois de um tempo escondido você e capiturado, e infelizmente é executado a setença');
         prompt();
         console.clear();
         historiaComeça();
      }
     }
    
  }
        
    function monasterio() {
        console.log('você esta no monasterio');
        console.log('o que deseja fazer agora?\n fazer suas tarefas[1]\n treinos de combate[2]\n treinos de curandeiro[3]');
        resposta = respostas2()
        if (resposta == 1);{
            console.log('você começa a fazer suas tarefas diarias');
             heroi.passaTempo(0, 0, 45);
              prompt('Pressione ENTER  para continuar');
              console.clear();
                console.log('derepente você esculta uma gritaria do outro lado do monasterio');
                console.log('o que você faz? você vai verificar o que esta acontecendo [1]\n continua a fazer suas tarefas[2]');
                escolha1 = respostas2()
               if (escolha1 == 1){
                console.log('você chega ao local, e vé uma cena horrivel, varios corpos desfiguados,distorcidos ')
                 console.log('quando de repente, varios dos outros monges que cuidam do monasterio aparecem'  )
                  console.log('eles rodeiam você e gritam - FIQUE QUIETO E NAO REAJA!!!!!!!!')
                   prompt();
                    console.clear();
                    investigaçao()

            }else (escolha1 == 2);{
                console.log('passa um tempo fazendo suas tarefas')
                 heroi.passaTempo(0, 2, 0);
                 console.log('quando de repente, varios dos outros monges que cuidam do monasterio aparecem'  )
                 console.log('eles rodeiam você e gritam - FIQUE QUIETO E NAO REAJA!!!!!!!!')
                 prompt();
                  console.clear();
                   investigaçao()
            }
        }if (resposta == 2);{
        console.log('você começa a fazer seus treinos de combate matinal');
         heroi.passaTempo(0, 0, 45);
          prompt('Pressione ENTER  para continuar');
          console.clear();
            console.log('derepente você esculta uma gritaria do outro lado do monasterio');
            console.log('o que você faz? você vai verificar o que esta acontecendo [1]\n continua a fazer suas tarefas[2]');
            escolha1 = respostas2()
           if (escolha1 == 1){
            console.log('você chega ao local, e vé uma sena horrivel, varios corpos desfiguados,distorcidos ')
             console.log('quando de repente, varios dos outros monges que cuidam do monasterio aparecem'  )
              console.log('eles rodeiam você e gritam - FIQUE QUIETO E NAO REAJA!!!!!!!!')
               prompt();
               console.clear();
                investigaçao()

        }else if (escolha1 == 2);{
            console.log('passa um tempo fazendo seus treinos de combate matinal')
             heroi.passaTempo(0, 2, 0);
             console.log('quando de repente, varios dos outros monges que cuidam do monasterio aparecem'  )
             console.log('eles rodeiam você e gritam - FIQUE QUIETO E NAO REAJA!!!!!!!!')
             prompt();
            console.clear();
            investigaçao()
           }
        }if (resposta == 3);{
         console.log('você começa a fazer seus treinos de curandeiro matinal');
          heroi.passaTempo(0, 0, 45);
           prompt('Pressione ENTER  para continuar');
            console.clear();
             console.log('derepente você esculta uma gritaria do outro lado do monasterio');
             console.log('o que você faz? você vai verificar o que esta acontecendo [1]\n continua a fazer suas tarefas[2]');
             escolha1 = respostas2()
              if (escolha1 == 1){
               console.log('você chega ao local, e vé uma sena horrivel, varios corpos desfiguados,distorcidos ')
                console.log('quando de repente, varios dos outros monges que cuidam do monasterio aparecem'  )
                 console.log('eles rodeiam você e gritam - FIQUE QUIETO E NAO REAJA!!!!!!!!')
                 prompt();
                 console.clear();
                 investigaçao()
                }else (escolha1 == 2);{
                 console.log('passa um tempo fazendo seus treinos de combate matinal')
                 heroi.passaTempo(0, 2, 0);
                 console.log('quando de repente, varios dos outros monges que cuidam do monasterio aparecem'  )
                 console.log('eles rodeiam você e gritam - FIQUE QUIETO E NAO REAJA!!!!!!!!')
                 prompt();
                 console.clear();
                 investigaçao()
                }
        }
    }

    function vilarejo() {
        console.log('você esta no vilarejo');
        console.log(`o que deseja fazer?\n temos a loja de poções[1], o mercado de carnes[2], e moradores[3], voltar ao monasterio[4]:`)
        resposta = respostas2()
        if (resposta == 1){
            console.log('-olá jovem monge, em que posso ajudar?\n temos poções de cura');
          console.log('-cada uma custa 30 moedas,so posso vender 1 para cada pessoa, gostaria de compar?');
            compar = respostas1()
            if (compar == 'sim'){
                this.mudaDinheiro - 30
                console.log('-obrigado pela compra jovem monge, volte outro dia, quem sabe eu tenha mais para vender na proxima')
                prompt();
                console.clear();
                vilarejo()
       
            }else {
                console.log('ok então jovem monge, volte quando quiser')
                prompt();
                console.clear();
                vilarejo()
               
         }
        }else if(resposta == 2){
        console.log('olá jovem monge, em que posso ajudar?\n temos suprimentos de carne para viagem.');
        console.log('cada um custa 30 moedas,so posso vender 1 para cada pessoa, gostaria de compar?');
        suprimentos = respostas1()
             if (suprimentos == 'sim'){
          this.mudaDinheiro - 30
          console.log('-obrigado pela compra jovem monge, volte outro dia, quem sabe eu tenha mais para vender na proxima')
          prompt();
          console.clear();
          vilarejo()
           
             }else if (suprimentos == 'nao'){
                    console.log('ok então jovem monge, volte quando quiser')
                    prompt();
                    console.clear();
                    vilarejo()
                }
        
        }else if (resposta == 3){            
            console.log('olá jovem monge, em que posso ajudar?');
            console.log('se precisar de informaçoes para viajar, posso te mostar lhe dizer a direção da cidade principal.\n e isso q precisa?')
            hospedagem  = respostas1();
            if (hospedagem  == 'sim'){
                console.log('siga ao sul, são umas 4h andando');
                console.log(' você vai pra la jovem monge?');
                viagem = respostas1()
                if (viagem == 'sim'){
                    console.log(' então leve isso com você jovem, e faça uma boa viagem!!')
                    console.log('o morador lhe da um mapa simples ate a cidade principal');
                    heroi.passaTempo(0, 4, 0);
                    prompt()
                    console.clear()
                     inicioDaAventura()
                }else {
                    console.log('entendi, agora se o você me da licença, vou voltar aos meus afazeres.\n ate a proxima jovem monge!!')
                 prompt();
                console.clear();
                vilarejo()
                }

       
            }else {
                console.log('entendo,não posso lhe ajudar muito mais do que isso.\n agora se o você me da licneça, vou voltar aos meus afazeres.\n ate a proxima jovem monge!!')
                prompt();
                console.clear();
                vilarejo()
            }
        }else if (resposta == 4) {
         console.log(' então voltamos ao monasterio')
         heroi.passaTempo(0, 2, 0);
         prompt();
         console.clear();
         monasterio() 
         }else if (resposta == 'nao') {
            console.log(' então voltamos ao monasterio')
            heroi.passaTempo(0, 2, 0);
            prompt();
            console.clear();
            monasterio() 
        }
    }
 
    

    function  inicioDaAventura(){
        console.log('ao sair do vilarejo, você encontra um grupo de viajantes,');
        console.log('um grupo de 3 pessoas, e eles vem você e acenão');
        console.log('-olá jovem monge, estamos de viagem para a cidade principal');
        console.log('- gostaria de ir com a gente ?');
        resposta = respostas1()
        if (resposta == 'sim'){
            console.log('- ótimo, vamos juntos então.');
            heroi.passaTempo(0, 4, 0);
            prompt();
            console.clear();
            jornadaCidade()

        } else (resposta == 'nao');{
            console.log('-tem certeza jovem monge ?, e uma viagem muito longa e perigosa ');
            console.log('os aventureiros se dispedem de você, e você segue seu caminho sozinho');
            console.log('a viagem e dificil e cansativa, devido ao despreparo, poucos recursos');
            console.log('aparecem varios animais selvajens ao logo do caminho, e infelizmente devido ao cansaço');
            console.log('infelizmente... você não sobrevive.... ');
            prompt();
            console.clear();
            historiaComeça()
        }

    }

function jornadaCidade(){
    console.log(' ao seguir a jornada com seus  companheiros de viagem, vocês acabam encontrando varios animais selvagens ');
    console.log('e uma pequena alcateia, e acabam cercando vocês');
    console.log('nessa cituaçao de perigo, o você fara para ajudar seus  companheiros?\n Ajudar no combate ?[1]\n Ou ficar na contenção, ajudando os feridos a se recuperarem?[2] ');
    combate = respostas2()
    if (combate == 1){
        console.log(' a luta e dificil, ja estando cansado de um dia exaustivo, mas com ajuda dos seus  companheiros, vocês consegem afugentar, os lobos, mas nao sem danos');
        heroi.passaTempo(0,0,15)
        heroi.mudaSaude(-30);
        prompt();
            console.clear();
    }else(combate == 2);{
        console.log(' a luta e dificil, ja estando cansado de um dia exaustivo, mas com a sua ajuda, seus  companheiros consegem afugentar, os lobos');
        console.log('isso serviu como quase um treinamento pratico, paras suas habilidades de reação');
        heroi.passaTempo(0,0,15)
        heroi.mudaDestreza(20);
        prompt();
            console.clear();
    }
    console.log('depois dessa batalha, vocês param para descansar, e acabam conversando...')
    prompt();
    console.log(' você pretende contar para seus companheiros o motivo de sua viage?sim ou nao');
   revelar =  respostas1()
   if (revelar == 'sim'){
    console.log('você conta sua historia para seus companheiros, eles demonstram empatia e falam que vão lhe ajudar');
    console.log('vocês descanção ate o amanhecer e vao para a cidade');
    prompt();
            console.clear();
            cidadeGrande()
   }else (revelar == 'nao');{
    console.log('vocês conversão trivialidades, e por fim dencanção ate o amanhecer para continuar sua jornada');
    prompt();
    console.clear();
    cidadeGrande()
   }
}

    function fimDahistoria(){
        console.log('Depois de uma longa viagem, vocês  chegam ao monasterio, e descobrem que quem devastou o monasterios e seus moradores foi..');
        prompt()
        console.log('UM TERRIVEL LICH!!!');
        console.log('SUA APARENCIA FISICA LEMBRA A DO SENHOR QUE LHE PEDIU AJUDA A ALGUM TEMPO, E ELE SE PREPARA PARA ATAR VOCÊS');
        console.log(' oque você fara agora?lutar[1] ou fujir [2]');
        lutafinal =  respostas2()
        if (lutafinal == 1){
            console.log(' você se prepara com seus aliados e enfrenta esse monstro');
            console.log(' seus aliados o ajudam a lutar, mas a luta e dificil e se estende por muito tempo');
            console.log('a batalha e dificil, mas de pois de algum tempo, você acha o ponto fraco do monstro');
            prompt();
            console.clear();
            console.log('você percebe que ele esta protejendo um artefato em sua mão enqunto enfrenta vocês');
            console.log(' você se organiza com seus companheiros, e eles lhe daram cobertura para pegar e destruir esse artefato ');
            prompt();
            console.clear();
            console.log(' depois de muito tempo, e esforço....') 
            prompt();
            console.log('você e seus aliados conseguem finalmente acabar com esse mal ');
            console.log('os aldeões do vilarejo proximo, vem parte dessa batalha ');
            console.log('eles acolhem você e seus companheiros, e cuidam dos feridos e espalhâo...')
            prompt();
            console.log('VOCÊ E SEUS COMPANHEIRO SÃO OS GRANDES HEROIS QUE SALVARAM O VILAREJO');
            console.log(' a uma comemoraçao em nome de vocês, e finalmente um enceramento a esses dias caoticos')
            prompt();
            console.clear();
            console.log(' e essa historia chegou ao fim, espero que tenha gostado')
            console.log(' gostaria de jogar novamente para tentar novas escolhas ?sim ou nao');
            recomeço = respostas1()
            if (recomeço =='sim'){
                console.log(' e la vamos nos ');
                prompt();
                console.clear();
                historiaComeça();
            }else{
                console.log('MUITO OBRIGADO POR JOGAR!!!!\n ate a proxima');
                prompt();
                prompt();
                console.clear();
                fim()
            }
        }else{
            console.log('vocês ficam intimidados com tamanha monstruosidade, e se apavoram e tentam fujir');
            console.log('porem o monstro aproveita para soltar uma magia poderesa');
            console.log(' e infelismente acaba acertando você e seus copanheiros,\n depois de acabar com vocês o monstro parte para o vilarejo em busca de mais destruição e poder');
            prompt();
            console.clear();
           historiaComeça();
        }
    }
    function fim(){
        console.log('FIM!!!!');
    }
    console.log('FIM!!!!');