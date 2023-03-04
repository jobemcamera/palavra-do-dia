# Palavra do Dia

Projeto inspirado nos jogos [Palavra do Dia](https://palavra-do-dia.pt/) e [Termo](https://term.ooo/).

## Desafios

- [X] Layout inicial da página;
- [X] Criar um array de palavras com 5 letras;
- [X] Sortear uma palavra aleatoriamente;
- [X] Receber e concatenar letras do input em um array;
- [X] Tratar inputs para receber somente letras;
- [X] Pular para o próximo input após preencher o anterior;
- [X] Apagar letra do input anterior com a tecla Backspace;
- [X] Verificar se a letra na posição informada é igual a letra na posição da palavra do dia;
    - [X] Se letra está na posição certa: mudar cor do input para verde;
        - [ ] Se houver mais de uma letra igual: mudar cor do input para cinza; 
    - [X] Se letra está na posição errada mas existe na palavra do dia: mudar cor do input para amarelo;
    - [X] Se letra não existe na palavra do dia: mudar cor do input para cinza;
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
    - [ ] Ativar a função do botão para inserir a letra nos inputs; 
- [X] Informar ao usuário as seguintes situações:
    - [X] Palavra inválida;
    - [X] EXtraordinário para acerto na 1ª tentativa;
    - [X] Fantástico para acerto na 2ª tentativa;
    - [X] Genial para acerto na 3ª tentativa;
    - [X] Impressionante para acerto na 4ª tentativa;
    - [X] Bacana para acerto na 5ª tentativa;
    - [X] Ufa! para acerto na 6ª tentativa;
- [X] Após 6 palavras erradas, o jogo acaba e é mostrado a palavra do dia na tela;
- [ ] Sortear uma palavra aleatoriamente a cada 24 horas;
- [ ] Criar modal com histórico de acertos e erros;
- [ ] Salvar informações dos inputs no localStorage;