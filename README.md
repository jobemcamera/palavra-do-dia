# Jogo da Palavra

Projeto inspirado nos jogos [Palavra do Dia](https://palavra-do-dia.pt/) e [Termo](https://term.ooo/).

## Desafios

- [X] Layout inicial da página;
- [X] Criar um array de palavras com 5 letras;
- [X] Sortear uma palavra aleatoriamente;
- [X] Receber e concatenar letras do input em um array;
- [X] Tratar inputs para receber somente letras;
- [X] Pular para o próximo input após preencher o anterior;
- [X] Apagar letra do input anterior com a tecla Backspace;
- [X] Verificar se a letra na posição informada é igual a letra na posição da palavra sorteada;
    - [X] Se letra está na posição certa: mudar cor do input para verde;
        - [ ] Se houver mais de uma letra igual: mudar cor do input para cinza; 
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
    - [ ] Permitir telcado virtual somente para versão mobile; 
- [X] Informar ao usuário as seguintes situações:
    - [X] Palavra inválida;
    - [X] Extraordinário para acerto na 1ª tentativa;
    - [X] Fantástico para acerto na 2ª tentativa;
    - [X] Genial para acerto na 3ª tentativa;
    - [X] Impressionante para acerto na 4ª tentativa;
    - [X] Bacana para acerto na 5ª tentativa;
    - [X] Ufa! para acerto na 6ª tentativa;
    - [X] Após o jogador acertar a palavra, é mostrada nos inputs a palavra correta com acento;
- [X] Após 6 palavras erradas, o jogo acaba e é mostrado a palavra com acento na tela;
- [X] Botão para jogar novamente;
- [X] Criar modal com informações de como jogar.


- ## Extra

- [ ] Sortear uma palavra aleatoriamente a cada 24 horas;
- [ ] Salvar informações dos inputs no localStorage;
- [ ] Criar modal com histórico de acertos e erros;
