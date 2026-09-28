// ============================================================
// ONE PIECE: O INÍCIO
// JavaScript separado para usar com index.html + CSS externo.
// ============================================================

const jogador = {
    nome: 'Novato',
    poderBase: 10,
    poder: 10,
    vida: 120,
    vidaMaxima: 120,
    raca: '',
    genero: '',
    faccao: '',
    recompensa: 0,
    haki: {
        obs: 0,
        arm: 0,
        rei: false,
        reiEstado: 'Não possui',
        obsAvancado: false,
        armAvancado: false
    },
    fruta: null,
    estiloLuta: null,
    maestriaEstilo: 0,
    maestriaFruta: 0,
    inventario: [],
    aliados: [],
    treinamentos: {
        obs: 0,
        arm: 0,
        estilo: 0
    }
};

const ilhaAtual = {
    nome: '',
    frutaBuscas: 2,
    frutaChance: 0.35,
    estiloBuscaDisponivel: true,
    aliadoBuscaDisponivel: true
};

let barcoConseguido = false;
let tentativasRoubo = 0;
let bossAtivo = false;
let bossDerrotado = false;
let bossHP = 200;
const bossHPMax = 200;
const bossPower = 25;

let hakiArmAtivo = false;
let hakiObsAtivo = false;
let ataqueEmAndamento = false;

// Estado dos minigames
let minigameLoop = null;
let minigameAtivo = false;
let mgTipo = '';
let mgPos = 0;
let mgDir = 1;
let mgTargetPos = 320;
let segurandoArm = false;
let tempoArmamento = 5;
let intervaloTimer = null;

// ------------------------------------------------------------
// DADOS DO MUNDO
// ------------------------------------------------------------

const racas = [
    {
        nome: 'Humano',
        bonusPoder: 0,
        bonusObs: 0,
        bonusArm: 0,
        descricao: 'Versátil e sem uma fraqueza racial específica.'
    },
    {
        nome: 'Mink',
        bonusPoder: 4,
        bonusObs: 1,
        bonusArm: 0,
        descricao: 'Reflexos rápidos e afinidade natural com velocidade.'
    },
    {
        nome: 'Homem-Peixe',
        bonusPoder: 7,
        bonusObs: 0,
        bonusArm: 1,
        descricao: 'Força física acima da média e talento com Karatê dos Homens-Peixe.'
    },
    {
        nome: 'Lunaria',
        bonusPoder: 9,
        bonusObs: 0,
        bonusArm: 1,
        descricao: 'Resistência monstruosa e enorme potencial físico.'
    }
];

const generos = ['Macho', 'Fêmea'];

const estilos = [
    {
        nome: 'Santoryu',
        descricao: 'O caminho das três espadas.',
        img: 'https://placehold.co/600x400/1b2633/ffffff?text=SANTORYU',
        requisitosEspecial: [],
        ataques: [
            {
                nome: 'Tatsu Maki',
                dano: 30,
                req: 1,
                img: 'https://placehold.co/700x500/253646/ffffff?text=TATSU+MAKI'
            },
            {
                nome: 'Shi Shison Son',
                dano: 43,
                req: 4,
                img: 'https://placehold.co/700x500/161c25/ffffff?text=SHI+SHISON+SON'
            }
        ]
    },
    {
        nome: 'Perna Negra',
        descricao: 'Chutes absurdos, elegância e incêndio ocasional.',
        img: 'https://placehold.co/600x400/402b1f/ffffff?text=PERNA+NEGRA',
        requisitosEspecial: [],
        ataques: [
            {
                nome: 'Diable Jambe',
                dano: 36,
                req: 1,
                img: 'https://placehold.co/700x500/4a1f18/ffffff?text=DIABLE+JAMBE'
            },
            {
                nome: 'Concassé',
                dano: 46,
                req: 4,
                img: 'https://placehold.co/700x500/2b2020/ffffff?text=CONCASSE'
            }
        ]
    },
    {
        nome: 'Rokushiki',
        descricao: 'Técnicas secretas da Marinha e do Governo.',
        img: 'https://placehold.co/600x400/172d3f/ffffff?text=ROKUSHIKI',
        requisitosEspecial: [],
        ataques: [
            {
                nome: 'Shigan',
                dano: 28,
                req: 1,
                img: 'https://placehold.co/700x500/263949/ffffff?text=SHIGAN'
            },
            {
                nome: 'Rankyaku',
                dano: 49,
                req: 4,
                img: 'https://placehold.co/700x500/24313b/ffffff?text=RANKYAKU'
            }
        ]
    },
    {
        nome: 'Ittoryu',
        descricao: 'Uma espada, um objetivo e zero espaço para hesitar.',
        img: 'https://placehold.co/600x400/26343d/ffffff?text=ITTORYU',
        requisitosEspecial: [],
        ataques: [
            {
                nome: 'Iai: Shishi Sonson',
                dano: 34,
                req: 1,
                img: 'https://placehold.co/700x500/1c2a31/ffffff?text=SHISHI+SONSON'
            },
            {
                nome: 'Rengoku',
                dano: 45,
                req: 4,
                img: 'https://placehold.co/700x500/3a2521/ffffff?text=RENGOKU'
            }
        ]
    },
    {
        nome: 'Karatê dos Homens-Peixe',
        descricao: 'Manipulação da água no próprio corpo e ao redor.',
        img: 'https://placehold.co/600x400/153c4c/ffffff?text=FISHMAN+KARATE',
        requisitosEspecial: ['bloqueadoComFruta'],
        ataques: [
            {
                nome: 'Samegawara Seiken',
                dano: 31,
                req: 1,
                img: 'https://placehold.co/700x500/16485c/ffffff?text=SAMEGAWARA'
            },
            {
                nome: 'Kaimen Wari',
                dano: 48,
                req: 4,
                img: 'https://placehold.co/700x500/0f3342/ffffff?text=KAIMEN+WARI'
            }
        ]
    },
    {
        nome: 'Kung Fu',
        descricao: 'Estilo marcial versátil e direto.',
        img: 'https://placehold.co/600x400/2f4029/ffffff?text=KUNG+FU',
        requisitosEspecial: [],
        ataques: [
            {
                nome: 'Golpe Meteoro',
                dano: 29,
                req: 1,
                img: 'https://placehold.co/700x500/293b2b/ffffff?text=METEORO'
            },
            {
                nome: 'Rajada Giratória',
                dano: 44,
                req: 4,
                img: 'https://placehold.co/700x500/313b26/ffffff?text=RAJADA+GIRATORIA'
            }
        ]
    }
];

const frutas = [
    {
        nome: 'Bara Bara no Mi',
        raridade: 'Comum',
        peso: 26,
        poder: 7,
        img: 'https://i.pinimg.com/736x/87/b1/ea/87b1ea08ce3879a7852c0cd69cf16c73.jpg',
        ataques: [
            {
                nome: 'Bara Bara: Chop',
                dano: 35,
                req: 0,
                img: 'https://placehold.co/700x500/4b334d/ffffff?text=BARA+BARA+CHOP'
            },
            {
                nome: 'Bara Bara: Buzzsaw',
                dano: 54,
                req: 3,
                img: 'https://placehold.co/700x500/403040/ffffff?text=BARA+BARA+BUZZSAW'
            }
        ]
    },

    {
        nome: 'Sube Sube no Mi',
        raridade: 'Comum',
        peso: 19,
        poder: 9,
        img: 'https://placehold.co/500x500/d6b0cf/1a121a?text=SUBE+SUBE',
        ataques: [
            {
                nome: 'Corpo Escorregadio',
                dano: 33,
                req: 0,
                img: 'https://placehold.co/700x500/6f526f/ffffff?text=ESCORREGADIO'
            },
            {
                nome: 'Deslize Brutal',
                dano: 51,
                req: 3,
                img: 'https://placehold.co/700x500/5b425b/ffffff?text=DESLIZE+BRUTAL'
            }
        ]
    },

    {
        nome: 'Gomu Gomu no Mi',
        raridade: 'Rara',
        peso: 13,
        poder: 18,
        img: 'https://placehold.co/500x500/9b5a36/ffffff?text=GOMU+GOMU',
        ataques: [
            {
                nome: 'Gomu Gomu no Pistol',
                dano: 42,
                req: 0,
                img: 'https://placehold.co/700x500/5a3827/ffffff?text=JET+PISTOL'
            },
            {
                nome: 'Gomu Gomu no Elephant Gun',
                dano: 78,
                req: 4,
                img: 'https://placehold.co/700x500/3d2b20/ffffff?text=ELEPHANT+GUN'
            }
        ]
    },

    {
        nome: 'Mera Mera no Mi',
        raridade: 'Rara',
        peso: 8,
        poder: 24,
        img: 'https://placehold.co/500x500/b43a22/ffffff?text=MERA+MERA',
        ataques: [
            {
                nome: 'Hiken',
                dano: 55,
                req: 0,
                img: 'https://placehold.co/700x500/5a1f17/ffffff?text=HIKEN'
            },
            {
                nome: 'Higan',
                dano: 86,
                req: 4,
                img: 'https://placehold.co/700x500/7a291c/ffffff?text=HIGAN'
            }
        ]
    },

    {
        nome: 'Mochi Mochi no Mi',
        raridade: 'Rara',
        peso: 7,
        poder: 28,
        img: 'https://placehold.co/500x500/d79a6f/241711?text=MOCHI+MOCHI',
        ataques: [
            {
                nome: 'Mochi Gatling',
                dano: 58,
                req: 0,
                img: 'https://placehold.co/700x500/614436/ffffff?text=MOCHI+GATLING'
            },
            {
                nome: 'Mochi Buzzcut',
                dano: 92,
                req: 4,
                img: 'https://placehold.co/700x500/4c352c/ffffff?text=MOCHI+BUZZCUT'
            }
        ]
    },

    {
        nome: 'Hie Hie no Mi',
        raridade: 'Lendária',
        peso: 4,
        poder: 38,
        img: 'https://placehold.co/500x500/7fc8ef/0f2330?text=HIE+HIE',
        ataques: [
            {
                nome: 'Ice Saber',
                dano: 70,
                req: 0,
                img: 'https://placehold.co/700x500/355c71/ffffff?text=ICE+SABER'
            },
            {
                nome: 'Ice Time',
                dano: 112,
                req: 4,
                img: 'https://placehold.co/700x500/223f4f/ffffff?text=ICE+TIME'
            }
        ]
    },

    {
        nome: 'Yami Yami no Mi',
        raridade: 'Lendária',
        peso: 3,
        poder: 43,
        img: 'https://placehold.co/500x500/241c35/ffffff?text=YAMI+YAMI',
        ataques: [
            {
                nome: 'Kurouzu',
                dano: 74,
                req: 0,
                img: 'https://placehold.co/700x500/241d2f/ffffff?text=KUROUZU'
            },
            {
                nome: 'Black Hole',
                dano: 124,
                req: 4,
                img: 'https://placehold.co/700x500/100e15/ffffff?text=BLACK+HOLE'
            }
        ]
    },

    {
        nome: 'Fruta Zoan Mítica: Modelo Raro',
        raridade: 'Mítica',
        peso: 1,
        poder: 60,
        img: 'https://placehold.co/500x500/6d4d9b/ffffff?text=ZOAN+MITICA',
        ataques: [
            {
                nome: 'Forma Mítica',
                dano: 92,
                req: 0,
                img: 'https://placehold.co/700x500/483167/ffffff?text=FORMA+MITICA'
            },
            {
                nome: 'Rugido Celestial',
                dano: 150,
                req: 4,
                img: 'https://placehold.co/700x500/322143/ffffff?text=RUGIDO+CELESTIAL'
            }
        ]
    }
];

const nomesAliados = [
    'Mestre das Panelas',
    'Caçadora de Tesouros',
    'Atirador Desastrado',
    'Espadachim Perdido',
    'Médica Improvisada',
    'Cozinheiro Rabugento',
    'Navegador de Quinta',
    'Mecânico do Porto'
];

const imagensPorPerfil = {
    'Humano-Macho':
        'https://i.pinimg.com/736x/8e/31/53/8e315351a0210e74f2ee9ea9bb094d48.jpg',

    'Humano-Fêmea':
        'https://i.pinimg.com/736x/8c/d7/24/8cd724be4c1946c59cdcf3a7ba634f1e.jpg',

    'Mink-Macho':
        'https://i.pinimg.com/736x/7d/5e/51/7d5e51cd459d81d234563aab708f5dcb.jpg',

    'Mink-Fêmea':
        'https://i.pinimg.com/736x/70/4e/4f/704e4fe514c622a571c4566f1e600ef9.jpg',

    'Homem-Peixe-Macho':
        'https://i.pinimg.com/736x/28/90/19/289019b788647a7493a749eb403d169e.jpg',

    'Homem-Peixe-Fêmea':
        'https://placehold.co/700x500/1e5661/ffffff?text=HOMEM-PEIXE+FEMEA',

    'Lunaria-Macho':
        'https://i.pinimg.com/736x/ec/5c/ec/ec5cecc98c92b2d075f1a54722513ba6.jpg',

    'Lunaria-Fêmea':
        'https://placehold.co/700x500/482d50/ffffff?text=LUNARIA+FEMEA',

    'Tenryuubito-Macho':
        'https://placehold.co/700x500/786127/ffffff?text=TENRYUUBITO',

    'Tenryuubito-Fêmea':
        'https://placehold.co/700x500/786127/ffffff?text=TENRYUUBITO'
};

const aliadosBase = [
    {
        nome: 'Navegador da Praia',
        poder: 5,
        chanceFruta: 0.55
    },
    {
        nome: 'Caçadora de Relíquias',
        poder: 7,
        chanceFruta: 0.65
    },
    {
        nome: 'Espadachim Sem Mapa',
        poder: 9,
        chanceFruta: 0.50
    },
    {
        nome: 'Médico de Taverna',
        poder: 6,
        chanceFruta: 0.75
    },
    {
        nome: 'Cozinheiro Fugitivo',
        poder: 8,
        chanceFruta: 0.40
    }
];

// ------------------------------------------------------------
// UTILITÁRIOS
// ------------------------------------------------------------

function el(id) {
    return document.getElementById(id);
}

function log(msg) {
    el('log-eventos').innerHTML = msg;
}

function randomItem(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function mudarTela(idTela) {
    document.querySelectorAll('#right-panel > section').forEach(tela => {
        tela.classList.remove('tela-ativa');
        tela.classList.add('tela-oculta');
    });

    const alvo = el(idTela);

    if (!alvo) return;

    alvo.classList.remove('tela-oculta');
    alvo.classList.add('tela-ativa');
}

function atualizarHeader() {
    el('status-ilha').textContent =
        ilhaAtual.nome ||
        (jogador.faccao === 'Tenryuubito'
            ? 'Mary Geoise'
            : 'Vila Foosha');

    el('status-barco').textContent =
        barcoConseguido
            ? 'Barco adquirido'
            : 'Sem barco';
}

function atualizarPoder() {
    let poder = jogador.poderBase;

    const racaData = racas.find(r => r.nome === jogador.raca);

    if (racaData) {
        poder += racaData.bonusPoder;
    }

    poder += jogador.haki.obs * 2;
    poder += jogador.haki.arm * 2;
    poder += jogador.maestriaEstilo * 3;

    if (jogador.haki.rei) {
        poder += 18;
    }

    if (jogador.haki.obsAvancado) {
        poder += 15;
    }

    if (jogador.haki.armAvancado) {
        poder += 15;
    }

    if (jogador.fruta) {
        poder += jogador.fruta.poder;
    }

    jogador.aliados.forEach(aliado => {
        poder += aliado.poder;

        if (aliado.fruta) {
            poder += Math.floor(aliado.fruta.poder / 2);
        }
    });

    jogador.poder = poder;

    if (el('poder-jogador-poster')) {
        el('poder-jogador-poster').textContent = poder;
    }
}

// ------------------------------------------------------------
// CARTAZ
// ------------------------------------------------------------

function atualizarCartaz() {
    atualizarPoder();

    el('nome-pirata').textContent = jogador.nome;
    el('faccao-pirata').textContent = jogador.faccao || '---';
    el('raca-pirata').textContent = jogador.raca || '---';
    el('genero-pirata').textContent = jogador.genero || '---';
    el('estilo-pirata').textContent = jogador.estiloLuta || 'Nenhum';

    el('fruta-pirata').textContent =
        jogador.fruta
            ? jogador.fruta.nome
            : 'Nenhuma';

    el('haki-obs').textContent = jogador.haki.obs;
    el('haki-arm').textContent = jogador.haki.arm;
    el('haki-rei').textContent = jogador.haki.reiEstado;

    el('recompensa-pirata').textContent =
        jogador.recompensa.toLocaleString('pt-BR');

    if (jogador.fruta) {
        el('img-fruta-perfil').src = jogador.fruta.img;
        el('img-fruta-perfil').hidden = false;
    } else {
        el('img-fruta-perfil').hidden = true;
        el('img-fruta-perfil').src = '';
    }

    let titulo = jogador.faccao || 'Novato';

    if (
        jogador.haki.rei &&
        jogador.haki.reiEstado !== 'Não possui'
    ) {
        titulo += ' • HAKI DO REI';
    }

    el('titulo-pirata').textContent = titulo;

    if (jogador.faccao === 'Tenryuubito') {
        el('recompensa-pirata').textContent =
            jogador.recompensa.toLocaleString('pt-BR');
    }
}

function definirImagemPersonagem() {
    const chave =
        `${jogador.raca}-${jogador.genero}`;

    const img = el('img-personagem');

    img.src =
        imagensPorPerfil[chave] ||
        'https://placehold.co/700x500/273542/ffffff?text=PERSONAGEM';

    img.onerror = () => {
        img.onerror = null;

        img.src =
            `https://placehold.co/700x500/273542/ffffff?text=${
                encodeURIComponent(
                    jogador.raca + ' • ' + jogador.genero
                )
            }`;
    };
}

function mostrarNotaTreino(nota, tipo, acertou) {
    const caixa = el('nota-treino');

    caixa.hidden = false;

    caixa.textContent =
        `NOTA ${nota}/10 • ${
            acertou
                ? 'TREINO CONCLUÍDO'
                : 'TREINO FALHOU'
        }`;

    caixa.style.color =
        acertou
            ? '#48e58b'
            : '#ff7c88';

    caixa.style.borderColor =
        acertou
            ? '#3f6b57'
            : '#6e3038';

    if (acertou) {
        jogador.treinamentos[tipo]++;

        if (tipo === 'obs') {
            jogador.haki.obs =
                Math.min(
                    10,
                    jogador.haki.obs +
                    (nota >= 9 ? 2 : 1)
                );
        }

        else if (tipo === 'arm') {
            jogador.haki.arm =
                Math.min(
                    10,
                    jogador.haki.arm +
                    (nota >= 9 ? 2 : 1)
                );
        }

        else if (tipo === 'estilo') {
            jogador.maestriaEstilo =
                Math.min(
                    10,
                    jogador.maestriaEstilo +
                    (nota >= 9 ? 2 : 1)
                );
        }

        atualizarCartaz();
    }
}

// ------------------------------------------------------------
// CRIAÇÃO
// ------------------------------------------------------------

function escolherFaccao(faccao) {
    jogador.faccao = faccao;

    el('btn-marinha')
        .classList
        .remove('selecionado');

    el('btn-pirata')
        .classList
        .remove('selecionado');

    if (faccao === 'Marinha') {
        el('btn-marinha')
            .classList
            .add('selecionado');
    }

    else {
        el('btn-pirata')
            .classList
            .add('selecionado');
    }

    log(
        `Você escolheu a ${faccao}. Agora deixe o destino sortear o resto.`
    );
}

function criarPersonagem() {
    if (!jogador.faccao) {
        alert(
            'Escolha Marinha ou Pirata primeiro!'
        );

        return;
    }

    jogador.raca =
        randomItem(racas).nome;

    jogador.genero =
        randomItem(generos);

    jogador.nome =
        randomItem([
            'Novato',
            'Sem Nome',
            'Capitão Ninguém',
            'Ameaça do Porto',
            'Zé do Convés'
        ]);

    jogador.haki.rei =
        Math.random() < 0.10;

    jogador.haki.reiEstado =
        jogador.haki.rei
            ? 'Adormecido'
            : 'Não possui';

    // 1% de chance de Tenryuubito
    if (Math.random() < 0.01) {
        jogador.faccao = 'Tenryuubito';
        jogador.raca = 'Humano';
        jogador.genero =
            randomItem(generos);

        jogador.recompensa = 999999999;

        log(
            '☼ 1% ABSURDO! Você nasceu como um TENRYUUBITO. O jogo decidiu te dar privilégios que não fazem sentido.'
        );
    }

    else {
        log(
            `Você nasceu como ${jogador.raca} (${jogador.genero}) da ${jogador.faccao}.`
        );
    }

    const racaData =
        racas.find(
            r => r.nome === jogador.raca
        );

    if (racaData) {
        jogador.haki.obs =
            Math.min(
                10,
                racaData.bonusObs
            );

        jogador.haki.arm =
            Math.min(
                10,
                racaData.bonusArm
            );
    }

    definirImagemPersonagem();
    atualizarCartaz();

    el('cartaz').style.display =
        'block';

    el('btn-treino-rei').hidden =
        !jogador.haki.rei;

    el('tela-criacao')
        .classList
        .remove('tela-ativa');

    el('tela-criacao')
        .classList
        .add('tela-oculta');

    if (jogador.faccao === 'Tenryuubito') {
        el('texto-inicio-ilha').textContent =
            'Mary Geoise. Você poderia mandar alguém fazer um barco para você, mas decidiu chamar um navio do Governo Mundial.';

        el('opcoes-pirata').hidden = true;
        el('opcoes-marinha').hidden = true;
        el('opcoes-tenryuubito').hidden = false;
    }

    else if (jogador.faccao === 'Marinha') {
        el('texto-inicio-ilha').textContent =
            'Vila Foosha (Base da Marinha). Você se apresenta e recebe uma embarcação oficial.';

        el('opcoes-pirata').hidden = true;
        el('opcoes-marinha').hidden = false;
        el('opcoes-tenryuubito').hidden = true;
    }

    else {
        el('texto-inicio-ilha').textContent =
            'Vila Foosha. Você conseguiu autorização para sair? Não. Mas isso nunca impediu ninguém.';

        el('opcoes-pirata').hidden = false;
        el('opcoes-marinha').hidden = true;
        el('opcoes-tenryuubito').hidden = true;
    }

    mudarTela('tela-barco');

    atualizarHeader();
}

// ------------------------------------------------------------
// BARCO E VIAGEM
// ------------------------------------------------------------

function conseguirBarco(mensagem) {
    barcoConseguido = true;

    log(mensagem);

    atualizarHeader();

    setTimeout(
        () => mudarTela('tela-mapa'),
        900
    );
}

function roubarBarco() {
    if (tentativasRoubo >= 1) {
        log(
            'Você já gastou sua tentativa. A Marinha tem memória, infelizmente.'
        );

        return;
    }

    tentativasRoubo++;

    if (Math.random() < 0.50) {
        jogador.recompensa += 500;

        atualizarCartaz();

        conseguirBarco(
            '☠ Você roubou um barco com sucesso. A Marinha agora tem mais uma razão para lembrar de você.'
        );
    }

    else {
        log(
            '❌ Você falhou ao roubar o barco! Era sua única tentativa. Agora só resta comprar uma velharia.'
        );
    }
}

function comprarBarco() {
    conseguirBarco(
        '⛵ Você comprou um barco meia-boca. Ele boia, então tecnicamente cumpre o contrato.'
    );
}

function receberNavioMarinha() {
    conseguirBarco(
        '⚓ A Marinha te entregou um navio de serviço. Não faça perguntas sobre o estado dele.'
    );
}

function chamarNavioGoverno() {
    jogador.recompensa =
        Math.max(
            jogador.recompensa,
            999999999
        );

    conseguirBarco(
        '☼ Um navio de guerra gigantesco apareceu porque você é Tenryuubito. A física pediu demissão.'
    );

    atualizarCartaz();
}

function irParaBuggy() {
    if (!barcoConseguido) {
        log(
            'Você precisa de um barco antes de enfrentar o mar.'
        );

        return;
    }

    ilhaAtual.nome =
        'Orange Town';

    ilhaAtual.frutaBuscas =
        2;

    ilhaAtual.frutaChance =
        0.35;

    ilhaAtual.estiloBuscaDisponivel =
        true;

    ilhaAtual.aliadoBuscaDisponivel =
        true;

    bossDerrotado = false;
    bossHP = bossHPMax;

    mudarTela('tela-navegacao');

    atualizarHeader();

    let pontos = 0;

    const intervalo =
        setInterval(() => {
            pontos =
                (pontos + 1) % 4;

            el('texto-navegando').textContent =
                'NAVEGANDO' +
                '.'.repeat(pontos);
        }, 350);

    setTimeout(() => {
        clearInterval(intervalo);

        resolverEventoMar();
    }, 2600);
}

function resolverEventoMar() {

    // Rei dos Mares
    if (
        jogador.faccao !== 'Tenryuubito' &&
        !jogador.haki.rei &&
        Math.random() < 0.20
    ) {
        el('desc-evento-mar').textContent =
            jogador.fruta
                ? 'Seu barco virou parcialmente. Como você é usuário de Akuma no Mi, o mar virou seu pior inimigo. Você perde 60 HP imediatamente.'
                : 'O mar tremeu. Um monstro enorme surgiu e está mirando seu barco.';

        el('acoes-evento-mar').innerHTML = '';

        const btn =
            document.createElement('button');

        btn.className =
            'btn-acao btn-danger';

        btn.textContent =
            jogador.fruta
                ? 'AGUENTAR A PANCADA'
                : 'TENTAR FUGIR';

        btn.onclick =
            jogador.fruta
                ? sofrerQuedaNoMar
                : escaparReiDosMares;

        el('acoes-evento-mar')
            .appendChild(btn);

        mudarTela('tela-evento-mar');

        return;
    }

    if (jogador.haki.rei) {
        log(
            '👑 Um Rei dos Mares apareceu de longe, sentiu seu Haki do Rei e decidiu que hoje não era o dia.'
        );
    }

    else {
        log(
            '🌊 Viagem tranquila. Você avistou Orange Town.'
        );
    }

    chegarNaIlha();
}

function escaparReiDosMares() {
    const chance =
        Math.min(
            0.90,
            0.45 +
            jogador.haki.obs * 0.05 +
            (jogador.raca === 'Mink'
                ? 0.10
                : 0)
        );

    if (Math.random() < chance) {
        log(
            '👁 Você previu o movimento e desviou do Rei dos Mares!'
        );

        chegarNaIlha();
    }

    else {
        jogador.vida -= 40;

        log(
            '💥 Você tentou fugir, mas o monstro acertou o barco. -40 HP.'
        );

        if (jogador.vida <= 0) {
            finalizarMorte(
                'O Rei dos Mares mandou você direto para o menu da existência.'
            );
        }

        else {
            chegarNaIlha();
        }
    }
}

function sofrerQuedaNoMar() {
    jogador.vida -= 60;

    log(
        '🌊 Você caiu no mar por causa da Akuma no Mi. -60 HP. Sobreviveu por pura insistência.'
    );

    if (jogador.vida <= 0) {
        finalizarMorte(
            'Você caiu no mar sendo usuário de Akuma no Mi. Não foi uma boa combinação.'
        );

        return;
    }

    chegarNaIlha();
}

function chegarNaIlha() {
    el('nome-ilha-atual').textContent =
        ilhaAtual.nome;

    el('count-fruta').textContent =
        ilhaAtual.frutaBuscas;

    el('btn-boss-ilha').disabled =
        bossDerrotado;

    el('btn-boss-ilha').textContent =
        bossDerrotado
            ? 'BUGGY DERROTADO'
            : 'ENFRENTAR BUGGY';

    atualizarHeader();

    mudarTela('tela-ilha');

    log(
        `📍 Você chegou em ${ilhaAtual.nome}. Existem ${ilhaAtual.frutaBuscas} buscas de Akuma no Mi restantes.`
    );
}

// ------------------------------------------------------------
// AKUMA NO MI
// ------------------------------------------------------------

function escolherFrutaPorPeso() {
    const total =
        frutas.reduce(
            (soma, fruta) =>
                soma + fruta.peso,
            0
        );

    let rolagem =
        Math.random() * total;

    for (const fruta of frutas) {
        rolagem -= fruta.peso;

        if (rolagem <= 0) {
            return fruta;
        }
    }

    return frutas[0];
}

function procurarFruta() {
    if (ilhaAtual.frutaBuscas <= 0) {
        log(
            '🍈 Você já procurou duas vezes nesta ilha. O jogo não vai fabricar uma terceira árvore do nada.'
        );

        return;
    }

    ilhaAtual.frutaBuscas--;

    el('count-fruta').textContent =
        ilhaAtual.frutaBuscas;

    let chance =
        ilhaAtual.frutaChance;

    if (jogador.raca === 'Mink') {
        chance += 0.02;
    }

    if (jogador.faccao === 'Tenryuubito') {
        chance = 1;
    }

    if (Math.random() >= chance) {
        log(
            'Você procurou por toda parte e só encontrou lixo, madeira e uma coisa que não devia estar se mexendo.'
        );

        return;
    }

    const fruta =
        escolherFrutaPorPeso();

    mostrarEventoFruta(fruta);
}

function mostrarEventoFruta(fruta) {
    el('titulo-evento').textContent =
        `${fruta.raridade.toUpperCase()} • AKUMA NO MI`;

    el('nome-evento').textContent =
        `Você encontrou a ${fruta.nome}!`;

    el('desc-evento').textContent =
        `Poder potencial: +${fruta.poder}. ${
            fruta.raridade === 'Mítica'
                ? 'Isso aqui é coisa de protagonista.'
                : fruta.raridade === 'Lendária'
                    ? 'A sorte deu uma piscada para você.'
                    : 'Nada mal.'
        }`;

    el('img-evento').src =
        fruta.img;

    el('img-evento').onerror = () => {
        el('img-evento').onerror = null;

        el('img-evento').src =
            `https://placehold.co/600x500/35233c/ffffff?text=${
                encodeURIComponent(fruta.nome)
            }`;
    };

    el('botoes-evento').innerHTML = '';

    const comer =
        document.createElement('button');

    comer.className =
        'btn-acao btn-primary';

    comer.textContent =
        jogador.fruta
            ? 'NÃO POSSO COMER'
            : 'COMER FRUTA';

    comer.disabled =
        Boolean(jogador.fruta);

    comer.title =
        jogador.fruta
            ? 'Você já é usuário de uma Akuma no Mi.'
            : 'Comer';

    comer.onclick =
        () => comerFruta(fruta);

    const guardar =
        document.createElement('button');

    guardar.className =
        'btn-acao';

    guardar.textContent =
        'GUARDAR NO NAVIO';

    guardar.onclick =
        () => guardarFruta(fruta);

    el('botoes-evento')
        .append(
            comer,
            guardar
        );

    mudarTela('tela-evento');
}

function comerFruta(fruta) {
    if (jogador.fruta) {
        log(
            'Você já comeu uma Akuma no Mi. Duas seriam uma quantidade um pouco acima do recomendado pelo universo.'
        );

        return;
    }

    jogador.fruta =
        fruta;

    jogador.inventario =
        jogador.inventario.filter(
            item => item.nome !== fruta.nome
        );

    log(
        `🍈 Você comeu a ${fruta.nome}! Seus golpes de Akuma no Mi foram desbloqueados.`
    );

    atualizarCartaz();
    montarListaAliados();
    montarInventarioFrutas();

    setTimeout(
        () => mudarTela('tela-ilha'),
        650
    );
}

function guardarFruta(fruta) {
    jogador.inventario.push(fruta);

    log(
        `🍈 Você guardou a ${fruta.nome} no navio. Agora pode oferecer a um aliado.`
    );

    montarInventarioFrutas();

    setTimeout(
        () => mudarTela('tela-ilha'),
        650
    );
}

// ------------------------------------------------------------
// ESTILOS
// ------------------------------------------------------------

function procurarEstilo() {
    if (!ilhaAtual.estiloBuscaDisponivel) {
        log(
            'Você já procurou um mestre nesta ilha. Ele foi embora dizendo que você fala demais.'
        );

        return;
    }

    ilhaAtual.estiloBuscaDisponivel =
        false;

    let candidatos =
        estilos.filter(estilo => {
            if (
                estilo.nome !==
                'Karatê dos Homens-Peixe'
            ) {
                return true;
            }

            return !jogador.fruta;
        });

    if (
        jogador.raca === 'Homem-Peixe' &&
        !jogador.fruta
    ) {
        candidatos =
            candidatos.filter(
                e =>
                    e.nome ===
                    'Karatê dos Homens-Peixe' ||
                    Math.random() < 0.55
            );
    }

    const sucesso =
        Math.random() < 0.80;

    if (
        !sucesso ||
        candidatos.length === 0
    ) {
        log(
            'Você procurou um mestre e achou apenas um senhor vendendo peixe. Treino cancelado.'
        );

        ilhaAtual.estiloBuscaDisponivel =
            false;

        return;
    }

    const estilo =
        randomItem(candidatos);

    jogador.estiloLuta =
        estilo.nome;

    jogador.maestriaEstilo =
        Math.max(
            jogador.maestriaEstilo,
            jogador.raca === 'Homem-Peixe' &&
            estilo.nome === 'Karatê dos Homens-Peixe'
                ? 2
                : 0
        );

    log(
        `⚔ Mestre encontrado! Você aprendeu ${estilo.nome}. Agora você pode treinar a maestria do estilo.`
    );

    atualizarCartaz();

    abrirMinigameEstilo();
}

function abrirMinigameEstilo() {
    mgTipo = 'estilo';

    minigameAtivo = true;

    cancelarLoopsMinigame();

    el('titulo-minigame').textContent =
        `Treino de ${jogador.estiloLuta}`;

    el('instrucao-minigame').textContent =
        'Pressione a sequência exibida o mais rápido que conseguir. O resultado vira sua maestria do estilo (0–10).';

    el('obs-minigame').hidden =
        true;

    el('arm-minigame').hidden =
        true;

    el('timer-minigame').hidden =
        true;

    el('nota-treino').hidden =
        true;

    el('btn-acao-minigame').textContent =
        'COMEÇAR SEQUÊNCIA';

    el('btn-acao-minigame').onmousedown =
        iniciarSequenciaEstilo;

    el('btn-acao-minigame').ontouchstart =
        iniciarSequenciaEstilo;

    el('btn-tentar-novamente').hidden =
        true;

    el('instrucao-minigame').dataset.sequencia =
        gerarSequencia();

    el('instrucao-minigame').textContent +=
        `\n\nSequência: ${el('instrucao-minigame').dataset.sequencia}`;

    mudarTela('tela-minigame');
}

function gerarSequencia() {
    return randomItem([
        'A S D W',
        'W D A S',
        'A D S A',
        'S W D A'
    ]);
}

function iniciarSequenciaEstilo() {
    if (
        !minigameAtivo ||
        mgTipo !== 'estilo'
    ) {
        return;
    }

    const inicio =
        performance.now();

    const alvo =
        el('instrucao-minigame')
            .dataset
            .sequencia
            .split(' ');

    let indice = 0;

    el('btn-acao-minigame').hidden =
        true;

    const handler = event => {
        const tecla =
            event.key.toUpperCase();

        if (
            tecla !== alvo[indice]
        ) {
            window.removeEventListener(
                'keydown',
                handler
            );

            finalizarTreinoEstilo(
                2,
                false,
                inicio
            );

            return;
        }

        indice++;

        if (indice >= alvo.length) {
            window.removeEventListener(
                'keydown',
                handler
            );

            const tempo =
                performance.now() -
                inicio;

            const nota =
                Math.max(
                    1,
                    Math.min(
                        10,
                        Math.round(
                            10 -
                            tempo / 900
                        )
                    )
                );

            finalizarTreinoEstilo(
                nota,
                nota >= 5,
                inicio
            );
        }
    };

    window.addEventListener(
        'keydown',
        handler
    );
}

function finalizarTreinoEstilo(
    nota,
    acertou
) {
    minigameAtivo = false;

    el('btn-acao-minigame').hidden =
        false;

    el('btn-tentar-novamente').hidden =
        !(!acertou);

    mostrarNotaTreino(
        nota,
        'estilo',
        acertou
    );

    log(
        acertou
            ? `⚔ Maestria de ${jogador.estiloLuta} aumentou!`
            : '❌ Você errou a sequência. Tente novamente.'
    );

    if (acertou) {
        montarPainelAtaques();
    }
}

function abrirMinigame(tipo) {
    if (tipo === 'rei') {
        treinarRei();
        return;
    }

    if (tipo === 'estilo') {
        abrirMinigameEstilo();
        return;
    }

    mgTipo = tipo;
    minigameAtivo = true;

    cancelarLoopsMinigame();

    segurandoArm = false;

    el('nota-treino').hidden =
        true;

    el('btn-tentar-novamente').hidden =
        true;

    el('btn-acao-minigame').hidden =
        false;

    el('btn-acao-minigame').onmousedown =
        acaoMinigameDown;

    el('btn-acao-minigame').onmouseup =
        acaoMinigameUp;

    el('btn-acao-minigame').ontouchstart =
        acaoMinigameDown;

    el('btn-acao-minigame').ontouchend =
        acaoMinigameUp;

    if (tipo === 'obs') {
        el('titulo-minigame').textContent =
            'Haki da Observação';

        el('instrucao-minigame').textContent =
            'A mira atravessa a tela rapidamente. Aperte AÇÃO/ESPAÇO quando o centro da mira estiver sobre a zona verde.';

        el('obs-minigame').hidden =
            false;

        el('arm-minigame').hidden =
            true;

        el('timer-minigame').hidden =
            true;

        mgPos = 0;

        mgDir =
            jogador.haki.obs >= 5
                ? 14
                : 18;

        moverAlvoObs();

        loopObs();
    }

    else if (tipo === 'arm') {
        el('titulo-minigame').textContent =
            'Haki do Armamento';

        el('instrucao-minigame').textContent =
            'A agulha é pesada de propósito. Segure AÇÃO/ESPAÇO para empurrá-la. Solte na zona verde antes do tempo acabar.';

        el('obs-minigame').hidden =
            true;

        el('arm-minigame').hidden =
            false;

        el('timer-minigame').hidden =
            false;

        tempoArmamento = 5;

        el('timer-minigame').textContent =
            tempoArmamento;

        mgPos = 0;

        document.documentElement.style.setProperty(
            '--dummy',
            '1'
        );

        loopArm();

        intervaloTimer =
            setInterval(() => {
                if (!minigameAtivo) {
                    clearInterval(
                        intervaloTimer
                    );

                    return;
                }

                tempoArmamento--;

                el('timer-minigame').textContent =
                    tempoArmamento;

                if (
                    tempoArmamento <= 0
                ) {
                    validarMinigameArm();
                }
            }, 1000);
    }

    mudarTela('tela-minigame');
}

function moverAlvoObs() {
    const stage =
        el('obs-stage');

    const alvo =
        el('obs-target');

    if (!stage || !alvo) {
        return;
    }

    const margem = 10;

    const maxX =
        Math.max(
            margem,
            stage.clientWidth -
            alvo.offsetWidth -
            margem
        );

    mgTargetPos =
        margem +
        Math.random() *
        maxX;

    alvo.style.left =
        `${mgTargetPos}px`;
}

function loopObs() {
    if (
        !minigameAtivo ||
        mgTipo !== 'obs'
    ) {
        return;
    }

    const stage =
        el('obs-stage');

    const cross =
        el('obs-crosshair');

    if (!stage || !cross) {
        return;
    }

    const maxX =
        stage.clientWidth -
        28;

    mgPos += mgDir;

    if (
        mgPos >= maxX ||
        mgPos <= 0
    ) {
        mgDir *= -1;
    }

    cross.style.left =
        `${mgPos}px`;

    minigameLoop =
        requestAnimationFrame(
            loopObs
        );
}

function loopArm() {
    if (
        !minigameAtivo ||
        mgTipo !== 'arm'
    ) {
        return;
    }

    const needle =
        el('arm-needle');

    const stage =
        el('arm-minigame');

    if (!needle || !stage) {
        return;
    }

    const maxX =
        Math.max(
            0,
            stage.clientWidth - 24
        );

    if (segurandoArm) {
        // Pesado: demora para subir e sofre pequenas oscilações.
        mgPos +=
            2.15 +
            Math.random() * 0.75;
    }

    else {
        // Soltou? A força despenca.
        mgPos -= 5.6;
    }

    mgPos =
        Math.max(
            0,
            Math.min(
                maxX,
                mgPos
            )
        );

    needle.style.left =
        `${mgPos}px`;

    minigameLoop =
        requestAnimationFrame(
            loopArm
        );
}

function acaoMinigameDown(event) {
    if (
        event &&
        event.type === 'mousedown' &&
        event.button !== 0
    ) {
        return;
    }

    if (!minigameAtivo) {
        return;
    }

    if (mgTipo === 'obs') {
        validarMinigameObs();
    }

    else if (mgTipo === 'arm') {
        segurandoArm = true;
    }
}

function acaoMinigameUp() {
    if (
        mgTipo === 'arm' &&
        minigameAtivo
    ) {
        segurandoArm = false;

        validarMinigameArm();
    }
}

function validarMinigameObs() {
    if (
        !minigameAtivo ||
        mgTipo !== 'obs'
    ) {
        return;
    }

    const targetCenter =
        mgTargetPos + 46;

    const crossCenter =
        mgPos + 14;

    const distancia =
        Math.abs(
            targetCenter -
            crossCenter
        );

    let nota =
        Math.round(
            10 -
            distancia / 18
        );

    nota =
        Math.max(
            0,
            Math.min(
                10,
                nota
            )
        );

    minigameAtivo = false;

    cancelarLoopsMinigame();

    const acertou =
        nota >= 5;

    mostrarNotaTreino(
        nota,
        'obs',
        acertou
    );

    log(
        acertou
            ? `👁 Você previu o movimento. Haki da Observação subiu para ${jogador.haki.obs}/10.`
            : '❌ Timing ruim. O alvo passou e sua previsão foi para Nárnia.'
    );

    if (!acertou) {
        el('btn-tentar-novamente').hidden =
            false;
    }
}

function validarMinigameArm() {
    if (
        !minigameAtivo ||
        mgTipo !== 'arm'
    ) {
        return;
    }

    minigameAtivo = false;

    cancelarLoopsMinigame();

    const stageWidth =
        el('arm-minigame')
            .clientWidth;

    const zonaInicio =
        stageWidth * 0.43;

    const zonaFim =
        zonaInicio + 90;

    const centroAgulha =
        mgPos + 11;

    const distancia =
        centroAgulha < zonaInicio
            ? zonaInicio -
              centroAgulha
            : centroAgulha > zonaFim
                ? centroAgulha -
                  zonaFim
                : 0;

    let nota =
        Math.round(
            10 -
            distancia / 16
        );

    nota =
        Math.max(
            0,
            Math.min(
                10,
                nota
            )
        );

    const acertou =
        nota >= 5;

    mostrarNotaTreino(
        nota,
        'arm',
        acertou
    );

    log(
        acertou
            ? `✊ Endurecimento perfeito! Haki do Armamento subiu para ${jogador.haki.arm}/10.`
            : '❌ O Haki desfez antes da agulha chegar à zona certa.'
    );

    if (!acertou) {
        el('btn-tentar-novamente').hidden =
            false;

        el('btn-acao-minigame').hidden =
            false;
    }
}

function recomecarMinigame() {
    abrirMinigame(mgTipo);
}

function fecharMinigame() {
    minigameAtivo = false;

    segurandoArm = false;

    cancelarLoopsMinigame();

    mudarTela('tela-ilha');
}

function cancelarLoopsMinigame() {
    if (minigameLoop) {
        cancelAnimationFrame(
            minigameLoop
        );
    }

    minigameLoop = null;

    if (intervaloTimer) {
        clearInterval(
            intervaloTimer
        );
    }

    intervaloTimer = null;
}

// ------------------------------------------------------------
// ESPAÇO NOS MINIGAMES
// ------------------------------------------------------------

window.addEventListener(
    'keydown',
    event => {
        if (event.code !== 'Space') {
            return;
        }

        const telaMinigameVisivel =
            !el('tela-minigame')
                .classList
                .contains('tela-oculta');

        if (
            !telaMinigameVisivel ||
            !minigameAtivo ||
            mgTipo === 'estilo'
        ) {
            return;
        }

        event.preventDefault();

        if (!event.repeat) {
            acaoMinigameDown(event);
        }
    }
);

window.addEventListener(
    'keyup',
    event => {
        if (event.code !== 'Space') {
            return;
        }

        if (
            !minigameAtivo ||
            mgTipo !== 'arm'
        ) {
            return;
        }

        event.preventDefault();

        acaoMinigameUp();
    }
);

// ------------------------------------------------------------
// HAKI DO REI
// ------------------------------------------------------------

function treinarRei() {
    if (!jogador.haki.rei) {
        log(
            'Você não nasceu com Haki do Rei. Esse botão não é um passe VIP.'
        );

        return;
    }

    if (
        jogador.haki.reiEstado ===
        'Despertado!'
    ) {
        log(
            '👑 Seu Haki do Rei já está desperto. Agora você só precisa não se achar demais.'
        );

        return;
    }

    jogador.haki.reiEstado =
        'Despertado!';

    atualizarCartaz();

    log(
        '👑 Seu Haki do Conquistador despertou! A presença ficou assustadora.'
    );
}

// ------------------------------------------------------------
// ALIADOS
// ------------------------------------------------------------

function procurarAliado() {
    if (
        !ilhaAtual.aliadoBuscaDisponivel
    ) {
        log(
            'Você já procurou um aliado nesta ilha. O porto está sem currículos novos.'
        );

        return;
    }

    ilhaAtual.aliadoBuscaDisponivel =
        false;

    if (Math.random() > 0.65) {
        log(
            'Você procurou um tripulante e encontrou... silêncio absoluto. Ninguém quis entrar.'
        );

        return;
    }

    const base =
        randomItem(aliadosBase);

    const aliado = {
        nome:
            randomItem(nomesAliados),

        poder:
            base.poder,

        chanceFruta:
            base.chanceFruta,

        fruta: null,

        recusouFrutas: false,

        aceitouFruta: false
    };

    jogador.aliados.push(
        aliado
    );

    atualizarPoder();
    montarListaAliados();

    log(
        `👥 ${aliado.nome} entrou na sua tripulação!`
    );
}

function abrirAliados() {
    montarListaAliados();

    montarInventarioFrutas();

    mudarTela('tela-aliados');
}

function montarListaAliados() {
    const lista =
        el('lista-aliados');

    lista.innerHTML = '';

    el('contador-tripulacao').textContent =
        `Tripulação: ${jogador.aliados.length}`;

    if (
        jogador.aliados.length === 0
    ) {
        lista.innerHTML =
            '<div class="empty-card">Nenhum aliado ainda. Aperte “PROCURAR ALIADO” e torça para alguém tolerar sua presença.</div>';

        return;
    }

    jogador.aliados.forEach(
        (aliado, index) => {
            const card =
                document.createElement(
                    'div'
                );

            card.className =
                'ally-card';

            const avatar =
                document.createElement(
                    'img'
                );

            avatar.className =
                'ally-avatar';

            avatar.src =
                `https://placehold.co/200x200/263c4e/ffffff?text=${
                    encodeURIComponent(
                        aliado.nome
                            .split(' ')[0]
                    )
                }`;

            avatar.alt =
                aliado.nome;

            const body =
                document.createElement(
                    'div'
                );

            const statusFruta =
                aliado.fruta
                    ? `Comeu: ${aliado.fruta.nome}`
                    : aliado.recusouFrutas
                        ? 'Recusa qualquer Akuma no Mi'
                        : 'Ainda pode receber uma fruta';

            body.innerHTML =
                `<div class="ally-name">${aliado.nome}</div>
                 <div class="ally-meta">
                    Poder +${aliado.poder}<br>
                    ${statusFruta}
                 </div>`;

            if (
                !aliado.fruta &&
                !aliado.recusouFrutas &&
                jogador.inventario.length > 0
            ) {
                const btn =
                    document.createElement(
                        'button'
                    );

                btn.className =
                    'btn-acao';

                btn.textContent =
                    'OFERECER UMA FRUTA';

                btn.onclick =
                    () =>
                        abrirEscolhaFrutaParaAliado(
                            index
                        );

                body.appendChild(btn);
            }

            card.append(
                avatar,
                body
            );

            lista.appendChild(card);
        }
    );
}

function montarInventarioFrutas() {
    const lista =
        el('lista-inventario-frutas');

    lista.innerHTML = '';

    if (
        jogador.inventario.length === 0
    ) {
        return;
    }

    const titulo =
        document.createElement(
            'div'
        );

    titulo.className =
        'empty-card';

    titulo.textContent =
        'FRUTAS GUARDADAS NO NAVIO';

    lista.appendChild(titulo);

    jogador.inventario.forEach(
        (fruta, index) => {
            const card =
                document.createElement(
                    'div'
                );

            card.className =
                'inventory-card';

            card.innerHTML =
                `
                <img
                    class="inventory-fruit-img"
                    src="${fruta.img}"
                    alt="${fruta.nome}"
                >

                <div class="inventory-name">
                    ${fruta.nome}
                </div>

                <div class="inventory-meta">
                    ${fruta.raridade} • Poder +${fruta.poder}
                </div>

                <button
                    class="btn-acao"
                    ${
                        jogador.aliados.some(
                            a =>
                                !a.fruta &&
                                !a.recusouFrutas
                        )
                            ? ''
                            : 'disabled'
                    }
                    onclick="oferecerFrutaQualquerAliado(${index})"
                >
                    OFERECER A UM ALIADO
                </button>
                `;

            lista.appendChild(card);
        }
    );
}

function abrirEscolhaFrutaParaAliado(
    aliadoIndex
) {
    const disponiveis =
        jogador.inventario;

    if (
        !disponiveis.length
    ) {
        log(
            'Você não tem fruta guardada para oferecer.'
        );

        return;
    }

    const aliado =
        jogador.aliados[aliadoIndex];

    const fruta =
        disponiveis[0];

    if (
        disponiveis.length > 1
    ) {
        log(
            `Você ofereceu a ${fruta.nome} para ${aliado.nome}.`
        );
    }

    resolverOfertaFruta(
        aliadoIndex,
        jogador.inventario.indexOf(
            fruta
        )
    );
}

function oferecerFrutaQualquerAliado(
    inventarioIndex
) {
    const aliadoIndex =
        jogador.aliados.findIndex(
            a =>
                !a.fruta &&
                !a.recusouFrutas
        );

    if (aliadoIndex === -1) {
        log(
            'Nenhum aliado disponível para receber fruta.'
        );

        return;
    }

    resolverOfertaFruta(
        aliadoIndex,
        inventarioIndex
    );
}

function resolverOfertaFruta(
    aliadoIndex,
    inventarioIndex
) {
    const aliado =
        jogador.aliados[aliadoIndex];

    const fruta =
        jogador.inventario[
            inventarioIndex
        ];

    if (!aliado || !fruta) {
        return;
    }

    if (
        aliado.fruta ||
        aliado.recusouFrutas
    ) {
        log(
            `${aliado.nome} já decidiu sobre frutas anteriormente.`
        );

        return;
    }

    const aceitou =
        Math.random() <
        aliado.chanceFruta;

    if (aceitou) {
        aliado.fruta =
            fruta;

        aliado.aceitouFruta =
            true;

        jogador.inventario.splice(
            inventarioIndex,
            1
        );

        atualizarPoder();

        log(
            `🍈 ${aliado.nome} aceitou a ${fruta.nome}! Agora ele é usuário de Akuma no Mi.`
        );
    }

    else {
        aliado.recusouFrutas =
            true;

        log(
            `🙅 ${aliado.nome} recusou a fruta. Essa decisão é PERMANENTE para este personagem. A fruta voltou para o navio.`
        );
    }

    montarListaAliados();
    montarInventarioFrutas();
    atualizarCartaz();
}

// ------------------------------------------------------------
// COMBATE
// ------------------------------------------------------------

function iniciarBoss() {
    if (bossDerrotado) {
        log(
            'Buggy já foi derrotado. O palhaço pode ser inconveniente, mas não tem respawn infinito aqui.'
        );

        return;
    }

    bossAtivo = true;
    ataqueEmAndamento = false;
    bossHP = bossHPMax;

    jogador.vida =
        jogador.vidaMaxima;

    hakiArmAtivo = false;
    hakiObsAtivo = false;

    atualizarBotoesHakiAtivo();

    el('btn-reiniciar-batalha').hidden =
        true;

    el('btn-sair-batalha').hidden =
        false;

    montarPainelAtaques();

    atualizarBarrasHP();

    el('log-batalha').textContent =
        'Buggy está rindo da sua cara. Ative seus Hakis e escolha seu ataque.';

    mudarTela('tela-combate');
}

function calcularMultiplicadoresCombate() {
    atualizarPoder();

    let multJogador = 1;
    let multBoss = 1;

    if (
        jogador.poder >
        bossPower * 2
    ) {
        multJogador = 5;
    }

    else if (
        bossPower >
        jogador.poder * 2
    ) {
        multBoss = 5;
    }

    return {
        multJogador,
        multBoss
    };
}

function ataqueDisponivel(golpe) {
    if (golpe.tipo === 'fruta') {
        return (
            jogador.maestriaFruta >=
            golpe.req
        );
    }

    if (golpe.tipo === 'estilo') {
        return (
            jogador.maestriaEstilo >=
            golpe.req
        );
    }

    return true;
}

function montarPainelAtaques() {
    const painel =
        el('painel-ataques');

    painel.innerHTML = '';

    adicionarBotaoAtaque(
        painel,
        {
            nome: 'Soco Básico',
            dano: 12,
            req: 0,
            img: 'https://placehold.co/700x500/24323c/ffffff?text=SOCO+BASICO',
            grupo: 'Base',
            tipo: 'base'
        }
    );

    if (jogador.estiloLuta) {
        const estilo =
            estilos.find(
                item =>
                    item.nome ===
                    jogador.estiloLuta
            );

        if (estilo) {
            estilo.ataques.forEach(
                golpe =>
                    adicionarBotaoAtaque(
                        painel,
                        {
                            ...golpe,
                            grupo: estilo.nome,
                            tipo: 'estilo'
                        }
                    )
            );
        }
    }

    if (jogador.fruta) {
        jogador.fruta.ataques.forEach(
            golpe =>
                adicionarBotaoAtaque(
                    painel,
                    {
                        ...golpe,
                        grupo:
                            jogador.fruta.nome,
                        tipo: 'fruta'
                    }
                )
        );
    }
}

function adicionarBotaoAtaque(
    painel,
    golpe
) {
    const btn =
        document.createElement(
            'button'
        );

    btn.className =
        'ataque-btn';

    btn.style.backgroundImage =
        `url("${golpe.img}")`;

    btn.disabled =
        !ataqueDisponivel(golpe) ||
        ataqueEmAndamento ||
        !bossAtivo ||
        bossHP <= 0;

    if (
        !btn.disabled &&
        hakiArmAtivo
    ) {
        btn.classList.add(
            'unlocked-armament'
        );
    }

    const conteudo =
        document.createElement(
            'span'
        );

    conteudo.className =
        'ataque-btn-content';

    conteudo.innerHTML =
        `
        <span class="ataque-btn-name">
            ${golpe.nome}
        </span>

        <span class="ataque-btn-req">
            ${golpe.grupo} • Maestria ${golpe.req}+
        </span>
        `;

    btn.appendChild(
        conteudo
    );

    btn.onclick =
        () => usarAtaque(golpe);

    painel.appendChild(btn);
}

function usarAtaque(golpe) {
    if (
        !bossAtivo ||
        bossHP <= 0 ||
        jogador.vida <= 0 ||
        ataqueEmAndamento
    ) {
        return;
    }

    if (
        !ataqueDisponivel(golpe)
    ) {
        el('log-batalha').textContent =
            `Você ainda não tem maestria suficiente para usar ${golpe.nome}.`;

        return;
    }

    ataqueEmAndamento = true;

    montarPainelAtaques();

    const {
        multJogador,
        multBoss
    } =
        calcularMultiplicadoresCombate();

    let dano =
        golpe.dano *
        multJogador;

    if (hakiArmAtivo) {
        const fator =
            1.25 +
            jogador.haki.arm *
            0.05;

        dano *= fator;
    }

    if (
        jogador.haki.armAvancado
    ) {
        dano *= 1.35;
    }

    dano =
        Math.round(dano);

    bossHP =
        Math.max(
            0,
            bossHP - dano
        );

    if (
        golpe.tipo === 'fruta'
    ) {
        jogador.maestriaFruta =
            Math.min(
                10,
                jogador.maestriaFruta + 1
            );
    }

    atualizarBarrasHP();

    if (bossHP <= 0) {
        vencerBoss();

        return;
    }

    setTimeout(
        () =>
            contraAtaqueBoss(
                multBoss
            ),
        650
    );
}

function contraAtaqueBoss(
    multBoss
) {
    if (
        !bossAtivo ||
        bossHP <= 0 ||
        jogador.vida <= 0
    ) {
        return;
    }

    const baseDano =
        14 +
        Math.floor(
            Math.random() * 7
        );

    let dano =
        Math.round(
            baseDano *
            multBoss
        );

    let esquiva =
        0.08 +
        jogador.haki.obs *
        0.045;

    if (
        jogador.haki.obsAvancado
    ) {
        esquiva = 0.90;
    }

    if (hakiObsAtivo) {
        esquiva +=
            0.12 +
            jogador.haki.obs *
            0.02;
    }

    esquiva =
        Math.min(
            0.95,
            esquiva
        );

    if (
        Math.random() <
        esquiva
    ) {
        jogador.vida =
            Math.max(
                1,
                jogador.vida
            );

        el('log-batalha').textContent =
            `Você usou ${
                hakiObsAtivo
                    ? 'o Haki da Observação'
                    : 'seus reflexos'
            } e ESQUIVOU do contra-ataque!`;
    }

    else {
        jogador.vida =
            Math.max(
                0,
                jogador.vida -
                dano
            );

        el('log-batalha').textContent =
            `Buggy contra-atacou e causou ${dano} de dano.${
                hakiObsAtivo
                    ? ' A Observação falhou o timing.'
                    : ''
            }`;
    }

    atualizarBarrasHP();

    if (
        jogador.vida <= 0
    ) {
        finalizarMorte(
            'Buggy venceu a luta. O circo fechou para você.'
        );

        return;
    }

    ataqueEmAndamento =
        false;

    montarPainelAtaques();
}

function atualizarBarrasHP() {
    el('hp-jogador').textContent =
        jogador.vida;

    el('hp-max-jogador').textContent =
        jogador.vidaMaxima;

    el('hp-boss').textContent =
        Math.max(
            0,
            bossHP
        );

    el('poder-combate-jogador').textContent =
        jogador.poder;

    el('poder-combate-boss').textContent =
        bossPower;

    const pctJogador =
        (
            jogador.vida /
            jogador.vidaMaxima
        ) * 100;

    const pctBoss =
        (
            bossHP /
            bossHPMax
        ) * 100;

    el('barra-hp-jogador').style.width =
        `${Math.max(
            0,
            pctJogador
        )}%`;

    el('barra-hp-boss').style.width =
        `${Math.max(
            0,
            pctBoss
        )}%`;
}

function toggleHakiArmamento() {
    if (!jogador.haki.arm) {
        log(
            'Você ainda não treinou Haki do Armamento. Faça o minigame primeiro.'
        );

        return;
    }

    hakiArmAtivo =
        !hakiArmAtivo;

    atualizarBotoesHakiAtivo();

    montarPainelAtaques();
}

function toggleHakiObservacao() {
    if (!jogador.haki.obs) {
        log(
            'Você ainda não treinou Haki da Observação. Faça o minigame primeiro.'
        );

        return;
    }

    hakiObsAtivo =
        !hakiObsAtivo;

    atualizarBotoesHakiAtivo();
}

function atualizarBotoesHakiAtivo() {
    const arm =
        el('btn-buff-arm');

    const obs =
        el('btn-buff-obs');

    arm.classList.toggle(
        'ativado',
        hakiArmAtivo
    );

    obs.classList.toggle(
        'ativado',
        hakiObsAtivo
    );

    arm.querySelector(
        'small'
    ).textContent =
        hakiArmAtivo
            ? 'LIGADO • Fortificando todos os seus golpes'
            : 'DESLIGADO • Fortalece seus golpes';

    obs.querySelector(
        'small'
    ).textContent =
        hakiObsAtivo
            ? 'LIGADO • Chance de esquiva aumentada'
            : 'DESLIGADO • Aumenta sua esquiva';
}

function vencerBoss() {
    bossHP = 0;
    bossAtivo = false;
    bossDerrotado = true;
    ataqueEmAndamento = false;

    const recompensaBoss =
        jogador.faccao === 'Tenryuubito'
            ? 25000
            : 15000;

    jogador.recompensa +=
        recompensaBoss;

    jogador.poderBase += 5;

    let mensagem =
        `🔥 VITÓRIA! Você derrotou Buggy e recebeu B$ ${recompensaBoss.toLocaleString('pt-BR')}.`;

    if (
        jogador.haki.rei &&
        jogador.haki.reiEstado ===
            'Adormecido'
    ) {
        jogador.haki.reiEstado =
            'Despertado!';

        mensagem +=
            '\n👑 Seu Haki do Rei despertou com o calor da batalha!';
    }

    atualizarCartaz();

    atualizarBarrasHP();

    el('log-batalha').textContent =
        mensagem;

    el('btn-sair-batalha').hidden =
        false;

    el('btn-boss-ilha').disabled =
        true;

    el('btn-boss-ilha').textContent =
        'BUGGY DERROTADO';

    montarPainelAtaques();
}

// ------------------------------------------------------------
// MORTE / REINÍCIO
// ------------------------------------------------------------

function finalizarMorte(
    mensagem
) {
    bossAtivo = false;

    ataqueEmAndamento =
        false;

    cancelarLoopsMinigame();

    el('texto-gameover').textContent =
        mensagem;

    mudarTela(
        'tela-gameover'
    );

    log(
        '☠ FIM DE JOGO.'
    );
}

function reiniciarJornada() {
    window.location.reload();
}

// ------------------------------------------------------------
// INICIALIZAÇÃO
// ------------------------------------------------------------

(function iniciarInterface() {
    el('cartaz').style.display =
        'none';

    el('opcoes-marinha').hidden =
        true;

    el('opcoes-tenryuubito').hidden =
        true;

    el('btn-treino-rei').hidden =
        true;

    el('tela-criacao')
        .classList
        .add('tela-ativa');

    atualizarHeader();
})();