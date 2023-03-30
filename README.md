# Acerte a Palavra

Projeto inspirado nos jogos [Wordle](https://www.nytimes.com/games/wordle/index.html), [Palavra do Dia](https://palavra-do-dia.pt/), [Letreco](https://www.gabtoschi.com/letreco/) e [Termo](https://term.ooo/).

# Índice

<!--ts-->
   * [Tecnologias utilizadas](#Tecnologias-utilizadas)
   * [O Jogo](#O-Jogo)
        * [Desktop](#Desktop)
        * [Mobile](#Mobile)
        * [Estatísticas](#Estatísticas)
        * [Lista de palavras](#Lista-de-palavras)
   * [Desafios](#Desafios)
   * [Screenshots](#Screenshots)
<!--te-->

## Tecnologias utilizadas

- HTML;
- CSS;
- JavaScript.

## O Jogo

O jogo consiste em acertar a palavra de 5 letras sorteada aleatoriamente na lista de palavras estabelecida. Você terá 6 tentativas para acertar. Para cada palavra válida, as letras ficarão destacadas com as seguintes cores:

- Verde: letra existe na palavra e está na posição correta;
- Amarelo: letra existe na palavra e está na posição errada;
- Cinza: letra não existe na palavra.

O jogo irá retornar a mensagem "Palavra inválida." caso a palavra não exista no português ou na lista de palavras estabelecida.

Se você vencer o jogo acertando a palavra ou perder (acabando as tentativas), o botão "Novo Jogo" será habilitado e uma nova palavra será sorteada. Para o caso de derrota, a palavra sorteada será mostrada na tela para conferência.

### Desktop

Para jogar, coloque o foco (clicar com o cursor do mouse) no primeiro input (quadradinho) e basta começar a digitar as letras que formam a palavra. Após isso, pressione a tecla ENTER. Caso a palavra seja aceita, a próxima tentativa será liberada. O teclado virtual é bloqueado para versão desktop.

### Mobile

Para jogar, basta utilizar o teclado virtual para digitar as letras que formam a palavra. Após isso, pressione a tecla ENTER. Caso a palavra seja aceita, a próxima tentativa será liberada.

### Estatísticas 

Para cada navegador que você utilizar, será salvo um progresso com as estatísticas do jogo:

- Número de jogos;
- Número de vitórias;
- Sequência de vitórias;
- Melhor sequência;
- Gráfico em barras indicando a quantidade de derrotas e vitórias para cada ordem de acerto (1 a 6 tentativas).

Todas as informações são salvas no localStorage do navegador.

### Lista de palavras

Para alimentar uma lista de palavras de 5 letras, foi utilizada a lista do [Dicio](https://www.dicio.com.br/palavras-com-cinco-letras/) que contém 1000 exemplares.
Ao longo dos meus testes e feedback de amigos, fui incluindo manualmente novas palavras possíveis.

## Desafios

Ao longo do processo de construção do jogo, foram estabelecidos os seguintes desafios:

- [X] Layout inicial da página;
- [X] Criar um array de palavras com 5 letras;
- [X] Sortear uma palavra aleatoriamente;
- [X] Receber e concatenar letras do input em um array;
- [X] Tratar inputs para receber somente letras;
- [X] Pular para o próximo input após preencher o anterior;
- [X] Apagar letra do input anterior com a tecla Backspace;
- [X] Verificar se a letra na posição informada é igual a letra na posição da palavra sorteada;
    - [X] Se letra está na posição certa: mudar cor do input para verde;
    - [X] Se letra está na posição errada mas existe na palavra sorteada: mudar cor do input para amarelo;
    - [X] Se letra não existe na palavra do sorteada: mudar cor do input para cinza;
- [X] Animação dos inputs após dar enter nas letras informadas;
- [X] Adicionar as funções para as 6 tentativas;
- [X] Começar o jogo com somente input liberado para a primeira tentativa;
- [X] Liberar o input da próxima tentativa e bloquear a anterior;
- [X] Após tentar a palavra, mudar cursor para a próxima tentativa;
- [X] Aumentar o array com mais palavras;
- [X] Remover acentos das palavras;
- [X] Permitir inputs somente com palavaras que possuem no array;
- [X] Criar um teclado virtual;
    - [X] Mostrar quais letras já/não foram utilizadas indicadas pelas mesmas cores;
    - [X] Ativar a função do botão para inserir a letra nos inputs;
    - [X] Teclas APAGAR e ENVIAR;
    - [X] Permitir telcado virtual somente para versão mobile/tablet; 
- [X] Informar ao usuário as seguintes situações:
    - [X] Palavra inválida;
    - [X] Extraordinário para acerto na 1ª tentativa;
    - [X] Impressionante para acerto na 2ª tentativa;
    - [X] Genial para acerto na 3ª tentativa;
    - [X] Fantástico para acerto na 4ª tentativa;
    - [X] Bacana para acerto na 5ª tentativa;
    - [X] Ufa! para acerto na 6ª tentativa;
    - [X] Após o jogador acertar a palavra, é mostrada nos inputs a palavra correta com acento;
- [X] Após 6 palavras erradas, o jogo acaba e é mostrado a palavra com acento na tela;
- [X] Botão para jogar novamente;
- [X] Criar modal com informações de como jogar;
- [X] Criar responsividade versão mobile/tablet.
- [X] Criar modal com histórico de acertos e erros;
- [X] Salvar informações dos inputs no localStorage;

- ### Extra

- [ ] Sortear uma palavra aleatoriamente a cada 24 horas;


## Screenshots

### Desktop

Jogo na versão Desktop

![image](https://user-images.githubusercontent.com/109925623/225011820-3081e930-d763-4109-8d11-ec61a1ac8ec3.png)

Modal de informações do jogo

![image](https://user-images.githubusercontent.com/109925623/225012012-b325c154-0390-4463-a8c0-163c3f0fe76f.png)

Modal de estatísticas do jogo

![image](https://user-images.githubusercontent.com/109925623/225012103-fed15b26-1c95-4441-8acb-6d3995db89fa.png)

Vencendo o jogo

![image](https://user-images.githubusercontent.com/109925623/225012209-0b16cab1-7242-46df-99ac-887e54b1c95e.png)

Palavra inválida

![image](https://user-images.githubusercontent.com/109925623/225012676-58792de2-2dd9-4d39-b680-21521b724f88.png)

Perdendo o jogo

![image](https://user-images.githubusercontent.com/109925623/225012824-7a5a9b8f-453a-4464-ac3c-1c221dfdbaea.png)


### Mobile

Jogo na versão Mobile

![image](https://user-images.githubusercontent.com/109925623/225013015-19c74374-82de-4852-a617-5ef65d994815.png)

