// js/perfil.js

const personagens = {
    gojo: {
        gojo: {
            nome: "Satoru Gojo",
            sub: " o Feiticeiro mais forte da era moderna",
            img: "../img/gojo.webp",
            sobre: "Aqui tu escreve um texto grande mesmo... (pode ser 15 linhas).",
            poderes: [
                "Seis Olhos",
                "Infinito (Limitless)",
                "Expansão de Domínio: Vazio Infinito"
            ],
            curios: [
                "Professor da Escola Técnica de Jujutsu",
                "Personalidade debochada, mas extremamente estratégico",
                "É temido por maldições e feiticeiros"
            ],
        },
    },
    yuji: {
        nome: "Yuji Itadori",
        sub: "Hospedeiro de Sukuna",
        img: "../img/yuji.png",
        sobre: "Texto completo do Yuji.",
        poderes: ["Força física absurda", "Energia amaldiçoada", "Sukuna"],
        curios: ["Curiosidade 1", "Curiosidade 2"],
    },
    megumi: {
        nome: "Megumi Fushiguro",
        sub: "Técnica das Sombras",
        img: "../img/megumi.png",
        sobre: "Texto completo do Megumi.",
        poderes: ["Shikigamis", "Sombras", "Estratégia"],
        curios: ["Curiosidade 1", "Curiosidade 2"],
    },
    nobara: {
        nome: "Nobara Kugisaki",
        sub: "Martelo e pregos",
        img: "../img/nobara.png",
        sobre: "Texto completo da Nobara.",
        poderes: ["Boneca de palha", "Pregos", "Ressonância"],
        curios: ["Curiosidade 1", "Curiosidade 2"],
    },
    sukuna: {
        nome: "Ryomen Sukuna",
        sub: "Rei das Maldições",
        img: "../img/sukuna.png", // se não tiver ainda, coloca um placeholder ou cria a imagem
        sobre: "Texto completo do Sukuna.",
        poderes: ["Cortes", "Domínio", "Presença absurda"],
        curios: ["Curiosidade 1", "Curiosidade 2"],
    },
};

function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function fillList(ul, items) {
    ul.innerHTML = "";
    items.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        ul.appendChild(li);
    });
}

const id = getParam("id") || "gojo";
const p = personagens[id] || personagens.gojo;

document.title = `${p.nome} • Jujutsu Kaisen`;

document.getElementById("perfilNome").textContent = p.nome;
document.getElementById("perfilSub").textContent = p.sub;
document.getElementById("perfilImg").src = p.img;
document.getElementById("perfilImg").alt = p.nome;

document.getElementById("perfilSobre").textContent = p.sobre;
fillList(document.getElementById("perfilPoderes"), p.poderes);
fillList(document.getElementById("perfilCurios"), p.curios);
document.getElementById("perfilAparencia").textContent = p.aparencia || "";
document.getElementById("perfilTecnica").textContent = p.tecnica || "";
