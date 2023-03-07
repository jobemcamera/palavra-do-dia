const listaDePalavras = ["sagaz", "atriz", "âmago", "colar", "negro", "broto", "brota", "arara", "dente", "clone", "radar", "trava", "quero", "grafo", "prata", "couro", "prato", "veias", "errar", "errou", "tramo", "laços", "lenço", "nasce", "ameba", "matou", "vogal", "vagas", "vamos", "êxito", "curar", "roubo", "atira", "atrai", "zebra", "jambo", "mexer", "filha", "nadar", "pular", "persa", "galho", "filho", "termo", "nobre", "junta", "senso", "algoz", "afeto", "ética", "lista", "plena", "mútua", "tênue", "sutil", "fazer", "vigor", "aquém", "assim", "porém", "seção", "audaz", "sanar", "fosse", "cerne", "inato", "ideia", "poder", "ferro", "pista", "moral", "desde", "justo", "muito", "sobre", "torpe", "honra", "cinza", "quiçá", "greve", "fútil", "ferve", "frevo", "razão", "senta", "anexo", "sento", "etnia", "ícone", "sonho", "égide", "tange", "amigo", "lapso", "expor", "mútuo", "haver", "casal", "casca", "caçar", "hábil", "dengo", "tempo", "seara", "então", "ávido", "janta", "pesar", "boçal", "ardil", "genro", "posse", "causa", "turco", "truco", "pária", "cravo", "coser", "dizer", "saber", "graça", "corja", "prole", "dever", "óbice", "tenaz", "brado", "crivo", "detém", "ânimo", "ápice", "comum", "ânsia", "digno", "temor", "sendo", "ceder", "culto", "assaz", "pauta", "atroz", "ainda", "gleba", "mundo", "fugaz", "fuzil", "censo", "estar", "valha", "forte", "vício", "cozer", "vulgo", "neném", "denso", "revés", "xibiu", "pudor", "regra", "dogma", "louco", "criar", "saúde", "banal", "jeito", "atrás", "clava", "impor", "ordem", "mercê", "pedir", "tenro", "apraz", "pífio", "desse", "feliz", "usura", "mesmo", "homem", "servo", "reaça", "sábio", "juízo", "coisa", "prosa", "viril", "presa", "ontem", "cunho", "forma", "limbo", "falar", "manso", "devir", "meiga", "posso", "fluir", "vendo", "afago", "ébrio", "platô", "sério", "mágoa", "todos", "guisa", "herói", "puder", "visar", "certo", "acaso", "valor", "temer", "lugar", "pleno", "ímpio", "cisma", "afins", "bruma", "óbvio", "gerar", "obter", "terça", "êxodo", "falso", "crise", "abrir", "matiz", "praxe", "garbo", "senil", "fluxo", "burca", "rimar", "havia", "vênia", "fácil", "enfim", "legal", "tédio", "união", "ritmo", "burro", "braço", "álibi", "tomar", "visão", "parvo", "pulha", "bravo", "valia", "reter", "vital", "olhar", "favor", "gênio", "prumo", "levar", "varia", "grato", "berço", "terço", "manda", "morto", "morno", "morna", "mando", "carne", "tampa", "ranho", "parco", "vivaz", "casta", "laico", "reles", "morte", "freio", "menta", "múmia", "feia", "poços", "sócio", "possa", "ameno", "tecer", "linda", "brega", "óbito", "prime", "ranço", "noção", "falta", "sábia", "ajuda", "cabal", "selar", "façam", "nicho", "nisso", "frear", "feira", "casas", "noite", "fator", "achar", "anelo", "ouvir", "rogar", "farsa", "viver", "coeso", "força", "citar", "pasto", "fardo", "épico", "cisão", "adiar", "ativo", "carma", "sinto", "calma", "passo", "dúbio", "único", "tendo", "outro", "sonso", "leigo", "gente", "rever", "pobre", "haste", "exato", "sesta", "cesta", "amplo", "deter", "sulco", "revel", "humor", "vemos", "imune", "lavra", "tende", "labor", "fatia", "ciúme", "árduo", "trono", "corno", "bordo", "forno", "balde", "pague",     "derme", "atuar", "velho", "gesto", "feixe", "claro", "igual", "ponto", "ideal", "débil", "ótica", "hiato", "terra", "sonsa", "toada", "terno", "vácuo", "ambos", "marco", "varão", "remir", "cauda", "fonte", "líder", "senão", "jovem", "capaz", "fusão", "inata", "ficar", "probo", "leito", "horda", "velar", "advém", "tenra", "farão", "coçar", "trevo", "régua", "doido", "xeque", "vazio", "relva", "algum", "série", "apoio", "papel", "tanto", "caçar", "entre", "pouco", "vimos", "sente", "anuir", "raiva", "torço", "coesa", "frase", "rigor", "verso", "botar", "dorso", "signo", "cruel", "feito", "minha", "massa", "moção", "prece", "nossa", "brisa", "ímpar", "credo", "covil", "preso", "fauna", "blasé", "casto", "ciclo", "chata", "ambas", "lazer", "morar", "peste", "trama", "furor", "vírus", "dócil", "maior", "faina", "flora", "pegar", "chuva", "árido", "adeus", "vetor", "houve", "setor", "seita", "beata", "manha", "sorte", "liame", "meses", "aceso", "banzo", "senda", "livro", "carro", "vulto", "pecha", "ardor", "salvo", "breve", "visse", "peixe", "vasto", "comer", "plano", "birra", "antro", "morro", "ocaso", "saiba", "nunca", "prado", "aliás", "reger", "pajem", "rezar", "átomo", "segue", "avaro", "saída", "ótimo", "junto", "mudar", "áureo", "chulo", "sinal", "serão", "acima", "lenda", "grupo", "opção", "parar", "treta", "fugir", "fruir", "andar", "nação", "jazia", "brava", "anciã", "fitar", "parte", "campo", "leite", "prazo", "rapaz", "puxar", "bando", "praia", "gerir", "tenso", "tosco", "alude", "norma", "ídolo", "motim", "risco", "época", "anais", "agora", "vilão", "exame", "tirar", "sinhá", "malta", "antes", "arcar", "reino", "psico", "avião", "áurea", "praga", "venal", "vesgo", "lerdo", "lerda", "lesma", "jegue", "índio", "aonde", "quota", "texto", "corpo", "preto", "soldo", "traga", "logro", "quase", "cheio", "voraz", "conta", "sumir", "certa", "filho", "verbo", "turba", "fixar", "pompa", "prova", "apego", "cópia", "estão", "virão", "acesa", "oásis", "átrio", "nódoa", "ligar", "alado", "oxalá", "solto", "caixa", "festa", "coito", "exijo", "nível", "manhã", "messe", "fatal", "perda", "turva", "fatos", "tocar", "lindo", "verve", "apelo", "fraco", "grave", "afora", "mente", "livre", "parca", "doído", "dessa", "trupe", "magia", "parva", "pardo", "opaco", "fenda", "tinha", "lidar", "elite", "jirau", "sabia", "alçar", "firme", "viria", "navio", "faixa", "astro", "glosa", "grata", "ficha", "autor", "bater", "supra", "salve", "longe", "ético", "retém", "cioso", "pique", "verba", "reses", "vezes", "sarça", "junco", "deixa", "irmão", "calda", "cousa", "macio", "douto", "atual", "privê", "nosso", "sexta", "pagão", "bicho", "porta", "posto", "cânon", "molho", "torso", "abriu", "supor", "besta", "curso", "light", "judeu", "extra", "locus", "caber", "abuso", "asilo", "vídeo", "bioma", "bônus", "ígneo", "drops", "órfão", "turvo", "rádio", "vosso", "desta", "combo", "zelar", "culpa", "vinha", "menos", "rouca", "ruína", "pisar", "júlia", "baixo", "calão", "ereto", "agudo", "advir", "gosto", "paira", "finda", "super", "facho", "suave", "estio", "traço", "sítio", "facto", "meigo", "feudo", "surja", "cútis", "urgia", "amena", "turma", "tetra", "pilar", "tento", "louça", "mosto", "chama", "rumor", "autos", "ações", "pódio", "clean", "cocho", "museu", "lápis", "acolá", "chato", "local", "hobby", "aluno", "brabo", "lasso", "peito", "geral", "boato", "páreo", "optar", "refém", "medir", "drama", "piada", "folga", "mesma", "rubro", "ávida", "pacto", "metiê", "poema", "crime", "ponha", "teste", "penta", "golpe", "clima", "móvel", "feroz", "coral", "passa", "letal", "cacho", "vigia", "aroma", "poeta", "hoste", "monte", "vetar", "pasmo", "ateia", "açude", "cetro", "rival", "riste", "forem", "verde", "daqui", "ecoar", "fazia", "lição", "troça", "cover", "swing", "tacha", "carta", "fórum", "busca", "finjo", "calmo", "axila", "idoso", "monge", "plebe", "plumo", "aviso", "artur", "ébano", "súcia", "falha", "briga", "escol", "tribo", "venha", "conto", "lesse", "roupa", "pedra", "amiga", "tarde", "macro", "chefe", "plaga", "cargo", "perco", "única", "fruto", "corso", "sarau", "civil", "átimo", "vento", "farta", "sósia", "grama", "viram", "légua", "manga", "bença", "virar", "berro", "saldo", "casar", "ornar", "catre", "itens", "seixo", "úteis", "arado", "troca", "fosso", "magna", "bruta", "tiver", "beijo", "surto", "traje", "nuvem", "assar", "estro", "mangá", "gíria", "deste", "vazão", "tição", "recém", "jejum", "trato", "porte", "amado", "pinho", "canso", "tutor", "renda", "vedar", "perto", "arfar", "silvo", "bruto", "amada", "depor", "gabar", "bazar", "barco", "barca", "inter", "mídia", "irado", "areia", "feita", "âmbar", "natal", "grota", "órgão", "cifra", "deram", "rural", "nesse", "tchau", "stand", "laudo", "pavor", "bucho", "guria", "fossa", "odiar", "régio", "vadio", "clero", "pasma", "segar", "pomar", "minar", "close", "vagar", "xucro", "molde", "aviar", "jogar", "negar", "rocha", "troco", "cenho", "canto", "mamãe", "lesão", "visto", "sótão", "densa", "proto", "volta", "bolsa", "chula", "cinto", "largo", "morfo", "invés", "lesto", "marca", "horto", "paiol", "ruído", "vista", "penso", "urdir", "pugna", "podar", "ileso", "tenha", "ferpa", "logos", "santo", "vasta", "varoa", "cheia", "velha", "ufano", "nesta", "nessa", "mocho", "úbere", "etapa", "frota", "cível", "esgar", "bulir", "ágape", "cerca", "úmido", "piche", "linha", "fundo", "apear", "verão", "resto", "símio", "narco", "todas", "final", "coroa", "pólis", "peita", "jazer", "ceita", "misto", "ardis", "manto", "trago", "letra", "preço", "salmo", "burra", "monta", "troço", "álamo", "lábia", "matar", "demão", "chaga", "folia", "cosmo", "canil", "redor", "banto", "campa", "mover", "seiva", "álbum", "gemer", "barão", "findo", "áudio", "folha", "dança", "venho", "bolso", "fazes", "neste", "barro", "porca", "retro", "punha", "calor", "queda", "axial", "limpo", "sabor", "louro", "calvo", "farol", "rente", "lutar", "firma", "macho", "fêmea", "mimar", "lousa", "salva", "zumbi", "arroz", "calça", "coevo", "justa", "enjoo", "baixa", "sigla", "logia", "torna", "míope", "veloz", "bedel", "solta", "fugiu", "chave", "ousar", "nácar", "gueto", "longo", "vazia", "reler", "tumba", "corar", "forro", "farto", "fátuo", "penca", "sexto", "vário", "lucro", "sofia", "cacto", "subir", "mania", "obtém", "urgir", "repor", "sugar", "gatos", "gatas", "custo", "custa", "valem", "valer", "lerem", "louca", "harém", "quite", "passe", "puído", "sadio", "ultra", "staff", "nariz", "dados", "cardo", "outra", "versa", "usual", "corte", "modal", "hífen", "lento", "falsa", "viger", "refil", "sócio", "diabo", "ceifa", "choça", "ferir", "garra", "rédea", "nesga", "xampu", "pagar", "disso", "abade", "mouro", "grife", "aéreo", "pátio"];
export let listaDePalavrasSemAcento = []; 


listaDePalavras.forEach(comAcento => {
    listaDePalavrasSemAcento.push(comAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
});
