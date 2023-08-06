class Personagem{
    constructor(nome, carac, habili){
        this.nome = nome;
        this.carac = carac;
        this.habili = habili;
    }
}

class Detalhe{
    Exibirdetalhes(detalhes){
        console.log("Nome:"+detalhes.nome);
        console.log("Características:"+detalhes.carac);
        console.log("Habilidades:"+detalhes.habili);
    }
}

class Escolha{
    PersoEscolhido(selecao){
    }
}

class Acao{
    Fazeracao(bater){  
    }
}

let Blizzardi = new Personagem(" Blizzardi"," Homem branco, com longos cabelos lisos em tons de roxo, possui suas vestimentas em tons de roxo e azul, é alto e meio esguio."," Sua principal habiilidade é soltar gelo pelo seu corpo, sua segunda é sua defesa impecável.");
let Peachisa = new Personagem(" Peachisa"," Mulher negra, com cabelos curtos, cacheados em tons de vermelhos, possui suas vestimentas em tons de vermelho e amarelo, é baixa e possui muitos musculos em seu corpo."," Seu principal poder é soltar fogo pelo seu corpo sua segunda é sua artes marcias aplicadas, uma lutadora.");
let LeMat = new Personagem(" LeMat"," Homem negro, com longos cabelos crespos e negros, possui suas vestimentas em branco e cinza, é médio e magro."," Seu principal poder é controlar o ar, diante disso pode até mesmo voar, sua segunda habilidade é ser extremamente agil e rápido, um atleta.");
let Maya = new Personagem(" Maya"," Mulher parda, com cabelos médios e brancos, possui suas vestimentas em tons de lilás e branco, é alta e possui musculos pelo seu corpo."," Seu principal poder é controlar a eletricidade, dando chques de alta voltagem e controlando tecnologias ao seu redor, sua segunda habilidade é sua inteligência, uma gênia.");
let Minence = new Personagem(" Minence"," Homem branco, careca, porém barbudo até os peitos, possui uma barba com pelos brancos, possui suas vestimentas em tons de marrom e preto, é alto e extremamente musculoso."," Sua principal habilidade é a luta,  já foi guerreiro e possui duas espadas em suass costas, sua segunda habilidade é traçar estratégias, um grande guerreiro.");
let fatos = new Detalhe();
fatos.Exibirdetalhes(Blizzardi);
fatos.Exibirdetalhes(Peachisa);
fatos.Exibirdetalhes(LeMat);
fatos.Exibirdetalhes(Maya);
fatos.Exibirdetalhes(Minence);
let selecao = new Escolha();
selecao.PersoEscolhido();
let personagemEscolhido = false;
let bater = new Acao();
bater.Fazeracao();
let Fazeracao = false;
let Resultadoacao = false;

alert("BEM-VINDO(A) A DISPUTA MORTAL!");
alert("Leia a lista de personagens e clique em 'ok' para continuar a seleção.");

while (!personagemEscolhido) {
    Escolha = window.prompt("Qual personagem deseja escolher? De 1 a 5.");

    switch (Escolha.toLowerCase()) {
        case '1':
            console.log("Você escolheu Blizzardi!");
            alert("Você escolheu Blizzardi!");
            personagemEscolhido = true;
            break;
        case '2':
            console.log("Você escolheu Peachisa!");
            alert("Você escolheu Peachisa!");
            personagemEscolhido = true;
            break;
        case '3':
            console.log("Você escolheu LeMat!");
            alert("Você escolheu LeMat!");
            personagemEscolhido = true;
            break;
        case '4':
            console.log("Você escolheu Maya!");
            alert("Você escolheu Maya!");
            personagemEscolhido = true;
            break;
        case '5':
            console.log("Você escolheu Minence!");
            alert("Você escolheu Minence!");
            personagemEscolhido = true;
            break;
        default:
            alert("Escolha inválida! Por favor, digite um número de 1 a 5.");
    }
}

while (!Fazeracao) {
    Acao = window.prompt("Deseja bater no inimigo? Digite 's' ou 'n'.");

    switch (Acao.toLowerCase()) {
        case 's':
            console.log("O adversário cai no chão!");
            alert("O adversário cai no chão!");
            Fazeracao = true;
            Resultadoacao = true;
            break;
        case 'n':
            console.log("O adversário te bate!");
            alert("O adversário te bate!");
            Fazeracao = true;
            Resultadoacao = false;
            break;
        default:
            alert("Escolha inválida! Digite 's' para bater ou 'n' para não bater.");
    }
}

if (Resultadoacao === true) {
    console.log("Você ganhou a Disputa Mortal!");
    alert("Você ganhou a Disputa Mortal!");
} else {
    console.log("Você perdeu a Disputa Mortal!");
    alert("Você perdeu a Disputa Mortal!");
}

