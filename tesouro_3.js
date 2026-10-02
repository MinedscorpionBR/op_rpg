// ============================================================
// ONE PIECE: O INÍCIO
// Motor do RPG. Estrutura preservada, progressão expandida.
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
    patente: 'Recruta',
    haki: {
        obs: 0,
        arm: 0,
        rei: false,              // IMPORTANTE: o sistema decide. Nunca é escolhido pelo jogador.
        reiEstado: 'Não possui',
        reiValor: 0,
        reiMax: 30,
        obsAvancado: false,
        armAvancado: false
    },
    fruta: null,
    estiloLuta: null,
    maestriaEstilo: 0,
    maestriaFruta: 0,
    maestria: 0,
    inventario: [],
    aliados: [],
    treinamentos: {},
    ilhaIndex: 0,
    segundaVidaAkumaUsada: false,
    semSombra: false,
    barcoTipo: '',
    emJornada: true
};

const estado = {
    barcoConseguido: false,
    tentativasRoubo: 0,
    ilhaIndex: 0,
    maiorIlhaAlcancada: 0,
    bossIndex: 0,
    bossHP: 0,
    bossAtivo: null,
    bossProgressoPorIlha: {},
    ataqueEmAndamento: false,
    hakiArmAtivo: false,
    hakiObsAtivo: false,
    hakiReiAtivo: false,
    revestimentoReiAtivo: false,
    cooldownsAtaques: {},
    aliadoAtacou: false,
    eventoPendente: null,
    cactusResolvido: false,
    travessiaResolvida: false
};

const racas = [
    { nome: 'Humano', bonusPoder: 0, descricao: 'Versátil e sem uma fraqueza racial específica.' },
    { nome: 'Mink', bonusPoder: 4, descricao: 'Reflexos rápidos e muita velocidade.' },
    { nome: 'Homem-Peixe', bonusPoder: 7, descricao: 'Força física elevada e afinidade com Karatê dos Homens-Peixe.' },
    { nome: 'Lunaria', bonusPoder: 9, descricao: 'Resistência e potencial físico monstruosos.' }
];

const generos = ['Macho', 'Fêmea'];

const estilos = [
    {
        nome: 'Santoryu',
        descricao: 'O caminho das três espadas.',
        img: img('SANTORYU', '1b2633'),
        ataques: [
            ataque('Tatsu Maki', 34, 1, 'TATSU+MAKI', '253646'),
            ataque('Shi Shison Son', 50, 4, 'SHI+SHISON+SON', '161c25')
        ]
    },
    {
        nome: 'Perna Negra',
        descricao: 'Chutes absurdos, elegância e incêndio ocasional.',
        img: img('PERNA+NEGRA', '402b1f'),
        ataques: [
            ataque('Diable Jambe', 39, 1, 'DIABLE+JAMBE', '4a1f18'),
            ataque('Concassé', 53, 4, 'CONCASSE', '2b2020')
        ]
    },
    {
        nome: 'Rokushiki',
        descricao: 'Técnicas secretas da Marinha e do Governo.',
        img: img('ROKUSHIKI', '172d3f'),
        ataques: [
            ataque('Shigan', 31, 1, 'SHIGAN', '263949'),
            ataque('Rankyaku', 56, 4, 'RANKYAKU', '24313b')
        ]
    },
    {
        nome: 'Ittoryu',
        descricao: 'Uma espada, um objetivo e zero espaço para hesitar.',
        img: img('ITTORYU', '26343d'),
        ataques: [
            ataque('Iai: Shishi Sonson', 37, 1, 'SHISHI+SONSON', '1c2a31'),
            ataque('Rengoku', 55, 4, 'RENGOKU', '3a2521')
        ]
    },
    {
        nome: 'Karatê dos Homens-Peixe',
        descricao: 'Manipulação da água e golpes devastadores.',
        img: img('FISHMAN+KARATE', '153c4c'),
        bloqueadoComFruta: true,
        ataques: [
            ataque('Samegawara Seiken', 35, 1, 'SAMEGAWARA', '16485c'),
            ataque('Kaimen Wari', 57, 4, 'KAIMEN+WARI', '0f3342')
        ]
    },
    {
        nome: 'Kung Fu',
        descricao: 'Estilo marcial versátil e direto.',
        img: img('KUNG+FU', '2f4029'),
        ataques: [
            ataque('Golpe Meteoro', 32, 1, 'METEORO', '293b2b'),
            ataque('Rajada Giratória', 51, 4, 'RAJADA+GIRATORIA', '313b26')
        ]
    }
];

function ataque(nome, dano, req, texto, fundo) {
    return {
        nome,
        dano,
        req,
        img: img(texto, fundo)
    };
}

const frutas = [
    fruta('Bara Bara no Mi', 'Comum', 45, 7, '87b1ea', [
        ataque('Bara Bara: Chop', 35, 0, 'BARA+BARA+CHOP', '4b334d'),
        ataque('Bara Bara: Buzzsaw', 54, 3, 'BARA+BARA+BUZZSAW', '403040')
    ]),
    fruta('Sube Sube no Mi', 'Comum', 38, 9, 'd6b0cf', [
        ataque('Corpo Escorregadio', 33, 0, 'ESCORREGADIO', '6f526f'),
        ataque('Deslize Brutal', 51, 3, 'DESLIZE+BRUTAL', '5b425b')
    ]),
    fruta('Gomu Gomu no Mi', 'Rara', 12, 18, '9b5a36', [
        ataque('Gomu Gomu no Pistol', 42, 0, 'JET+PISTOL', '5a3827'),
        ataque('Gomu Gomu no Elephant Gun', 78, 4, 'ELEPHANT+GUN', '3d2b20')
    ]),
    fruta('Mera Mera no Mi', 'Rara', 8, 24, 'b43a22', [
        ataque('Hiken', 55, 0, 'HIKEN', '5a1f17'),
        ataque('Higan', 86, 4, 'HIGAN', '7a291c')
    ]),
    fruta('Mochi Mochi no Mi', 'Rara', 7, 28, 'd79a6f', [
        ataque('Mochi Gatling', 58, 0, 'MOCHI+GATLING', '614436'),
        ataque('Mochi Buzzcut', 92, 4, 'MOCHI+BUZZCUT', '4c352c')
    ]),
    fruta('Hie Hie no Mi', 'Lendária', 2.6, 38, '7fc8ef', [
        ataque('Ice Saber', 70, 0, 'ICE+SABER', '355c71'),
        ataque('Ice Time', 112, 4, 'ICE+TIME', '223f4f')
    ]),
    fruta('Yami Yami no Mi', 'Lendária', 1.5, 43, '241c35', [
        ataque('Kurouzu', 74, 0, 'KUROUZU', '241d2f'),
        ataque('Black Hole', 124, 4, 'BLACK+HOLE', '100e15')
    ]),
    fruta('Fruta Zoan Mítica: Modelo Raro', 'Mítica', 0.4, 60, '6d4d9b', [
        ataque('Forma Mítica', 92, 0, 'FORMA+MITICA', '483167'),
        ataque('Rugido Celestial', 150, 4, 'RUGIDO+CELESTIAL', '322143')
    ])
];

function fruta(nome, raridade, peso, poder, cor, ataques) {
    return {
        nome,
        raridade,
        peso,
        poder,
        img: img(nome.toUpperCase().replaceAll(' ', '+'), cor, 500, 500),
        ataques,
        despertada: false
    };
}

// A Gomu Gomu no Mi tem um sistema próprio de formas. Cada boss derrotado
// concede 1 ponto de maestria geral, então as formas vão sendo liberadas naturalmente.
const gomuGomu = frutas.find(f => f.nome === 'Gomu Gomu no Mi');
if (gomuGomu) {
    gomuGomu.formaAtual = 'base';
    gomuGomu.formas = {
        base: {
            nome: 'Normal', req: 0, img: img('GOMU+BASE', '5a3827', 220, 140),
            ataques: [
                ataque('Gomu Gomu no Pistol', 42, 0, 'PISTOL', '5a3827'),
                ataque('Gomu Gomu no Gatling', 58, 1, 'GATLING', '493024')
            ]
        },
        gear2: {
            nome: 'Gear 2', req: 1, img: img('GEAR+2', '6b2b21', 220, 140),
            ataques: [
                ataque('Jet Pistol', 72, 1, 'JET+PISTOL', '6a3020'),
                ataque('Jet Gatling', 98, 2, 'JET+GATLING', '52271d')
            ]
        },
        gear3: {
            nome: 'Gear 3', req: 2, img: img('GEAR+3', '3d2b20', 220, 140),
            ataques: [
                ataque('Elephant Gun', 105, 2, 'ELEPHANT+GUN', '3d2b20'),
                ataque('Gigant Rifle', 135, 3, 'GIGANT+RIFLE', '30241d')
            ]
        },
        boundman: {
            nome: 'Gear 4: Boundman', req: 4, img: img('BOUND+MAN', '4c2c22', 220, 140),
            ataques: [
                ataque('Kong Gun', 165, 4, 'KONG+GUN', '4c2c22'),
                ataque('Leo Bazooka', 210, 5, 'LEO+BAZOOKA', '3b2624')
            ]
        },
        snakeman: {
            nome: 'Gear 4: Snakeman', req: 7, img: img('SNAKEMAN', '503122', 220, 140),
            ataques: [
                ataque('Jet Culverin', 190, 7, 'JET+CULVERIN', '503122'),
                ataque('Black Mamba', 245, 8, 'BLACK+MAMBA', '312028')
            ]
        }
    };
}

const nomesAliados = [
    'Mestre das Panelas', 'Caçadora de Tesouros', 'Atirador Desastrado',
    'Espadachim Perdido', 'Médica Improvisada', 'Cozinheiro Rabugento',
    'Navegador de Quinta', 'Mecânico do Porto', 'Carpinteiro de Water 7',
    'Gigante do Novo Mundo', 'Homem-Peixe do Farol'
];

const imagensPorPerfil = {
    'Humano-Macho': 'https://i.pinimg.com/736x/8e/31/53/8e315351a0210e74f2ee9ea9bb094d48.jpg',
    'Humano-Fêmea': 'https://i.pinimg.com/736x/8c/d7/24/8cd724be4c1946c59cdcf3a7ba634f1e.jpg',
    'Mink-Macho': 'https://i.pinimg.com/736x/7d/5e/51/7d5e51cd459d81d234563aab708f5dcb.jpg',
    'Mink-Fêmea': 'https://i.pinimg.com/736x/70/4e/4f/704e4fe514c622a571c4566f1e600ef9.jpg',
    'Homem-Peixe-Macho': 'https://i.pinimg.com/736x/28/90/19/289019b788647a7493a749eb403d169e.jpg',
    'Homem-Peixe-Fêmea': img('HOMEM-PEIXE+FEMEA', '1e5661'),
    'Lunaria-Macho': 'https://i.pinimg.com/736x/ec/5c/ec/ec5cecc98c92b2d075f1a54722513ba6.jpg',
    'Lunaria-Fêmea': img('LUNARIA+FEMEA', '482d50'),
    'Tenryuubito-Macho': img('TENRYUUBITO', '786127'),
    'Tenryuubito-Fêmea': img('TENRYUUBITO', '786127')
};

// ============================================================
// ROTA DE ILHAS
// ============================================================

const ilhas = [
    ilha('Vila Foosha', 'A saída oficial da aventura. É aqui que uma Akuma no Mi muito especial pode estar escondida.', 0.45, [], { frutaFavorita: 'Gomu Gomu no Mi', frutaFavoritaMultiplicador: 8 }),
    ilha('Yotsuba', 'A cidade do Capitão Morgan. Primeiro passo fora de Foosha.', 0.08, [
        boss('Morgan', 220, 30, 25000, 'MORGAN', false)
    ]),
    ilha('Orange Town', 'A cidade sendo aterrorizada pelo palhaço Buggy.', 0.15, [
        boss('Buggy, O Palhaço', 260, 42, 45000, 'BUGGY', false)
    ]),
    ilha('Baratie', 'Restaurante flutuante. Don Krieg resolveu aparecer procurando confusão.', 0.18, [
        boss('Don Krieg', 420, 58, 90000, 'DON+KRIEG', true)
    ], { carpinteiros: 0.05 }),
    ilha('Ilha Conomi', 'Uma parada costeira com clima de East Blue e pouca paz.', 0.17, []),
    ilha('Loguetown', 'A cidade da execução. Smoker espera por você.', 0.22, [
        boss('Smoker', 560, 76, 130000, 'SMOKER', false, { requerHaki: true })
    ]),
    ilha('Cactus Island', 'Uma ilha festeira onde a diversão esconde uma armadilha militar.', 0.2, [], { evento: 'cactus' }),
    ilha('Little Garden', 'Dinossauros, gigantismo e uma reunião nada amigável.', 0.25, [
        boss('Mr. 3', 600, 85, 160000, 'MR+3', true),
        boss('Miss Goldenweek', 360, 60, 90000, 'MISS+GOLDENWEEK', true),
        boss('Mr. 5', 580, 82, 140000, 'MR+5', true),
        boss('Miss Valentine', 500, 78, 120000, 'MISS+VALENTINE', true)
    ]),
    ilha('Drum', 'Montanhas de neve. Wapol decidiu ser o problema local.', 0.22, [
        boss('Wapol', 720, 100, 190000, 'WAPOL', true)
    ]),
    ilha('Alabasta', 'O deserto. Entrar no desafio aqui é cair exatamente na armadilha anunciada.', 0.3, [
        boss('Crocodile', 1050, 135, 300000, 'CROCODILE', true)
    ], { evento: 'alabasta-trap' }),
    ilha('Jaya', 'Uma parada curta antes de uma viagem completamente fora da curva.', 0.28, []),
    ilha('Skypiea', 'Você foi jogado para o céu. A rota normal foi oficialmente cancelada.', 0.42, [
        boss('Ohm', 850, 120, 210000, 'OHM', true),
        boss('Satori', 760, 110, 190000, 'SATORI', true),
        boss('Shura', 900, 125, 220000, 'SHURA', true),
        boss('Gedatsu', 880, 122, 215000, 'GEDATSU', true),
        boss('Enel', 1900, 240, 520000, 'ENEL', true)
    ], { aliadoChance: 0.8 }),
    ilha('Water 7', 'Você desce do céu e encontra Franky oferecendo uma embarcação muito melhor.', 0.36, [], { evento: 'water7', carpinteiros: 0.8 }),
    ilha('Thriller Bark', 'O navio-ilha de Gecko Moria. Aqui derrota significa perder a sombra.', 0.3, [
        boss('Gecko Moria', 1650, 190, 600000, 'GECKO+MORIA', true, { perdeSombra: true })
    ]),
    ilha('Sabaody', 'Sem boss. Só um jornal e uma notícia grande demais.', 0.34, [], { evento: 'sabaody' }),
    ilha('Marineford', 'Guerra total. Seu lado muda completamente os adversários.', 0.36, [
        boss('Aokiji (Kuzan)', 2400, 330, 900000, 'AOKIJI+KUZAN', true),
        boss('Akainu (Sakazuki)', 2700, 360, 1000000, 'AKAINU', true, { despertarRei: true }),
        boss('Kizaru (Borsalino)', 2600, 350, 950000, 'KIZARU', true),
        boss('Barba Branca', 3000, 390, 1100000, 'BARBA+BRANCA', true),
        boss('Marco', 2200, 300, 800000, 'MARCO', true),
        boss('Ace libertado das algemas de Kairosek', 1700, 220, 700000, 'ACE', true)
    ], { faccaoBoss: 'Pirata' }),
    ilha('Ilha dos Homens-Peixe', 'O fundo do mar. Quase todo aliado encontrado aqui será Homem-Peixe.', 0.4, [
        boss('Roddy Jones', 2200, 300, 900000, 'RODDY+JONES', true),
        boss('Decken', 1950, 280, 780000, 'VANDER+DECKEN', true)
    ], { homemPeixeAliado: 0.999, estiloFishman: true }),
    ilha('Punk Hazard', 'O Log Pose aponta para cá. Caesar está no caminho.', 0.38, [
        boss('Caesar', 2100, 315, 1000000, 'CAESAR', true, { requerHaki: true })
    ]),
    ilha('Dressrosa', 'O reino do Doflamingo e do sujeito do NEEE.', 0.45, [
        boss('Bellamy', 1900, 265, 650000, 'BELLAMY', true),
        boss('Doflamingo', 3600, 430, 1600000, 'DOFLAMINGO', true)
    ]),
    ilha('Zou', 'Uma parada muito mais tranquila. O elefante segue seu próprio ritmo.', 0.4, []),
    ilha('Totto Land', 'Você veio para estragar o casamento de Pudding e acabou preso com Katakuri.', 0.5, [
        boss('Katakuri', 4100, 500, 2000000, 'KATAKURI', true, { extremo: true })
    ], { evento: 'pudding' }),
    ilha('Wano', 'Onigashima, espadas, frutas boas e o abismo de poder chamado Kaido.', 0.62, [
        boss('Kaido', 9500, 800, 3500000, 'KAIDO', true, { extremo: true, despertarRei: true, esmagador: true, resistenciaDano: 0.68 })
    ], { espadas: 0.8 }),
    ilha('Egghead', 'O laboratório do futuro. O papel muda conforme sua facção.', 0.58, [
        boss('Rob Lucci', 3800, 480, 1800000, 'ROB+LUCCI', true),
        boss('Kizaru', 4600, 560, 2300000, 'KIZARU', true),
        boss('Mars', 5200, 620, 2600000, 'MARS', true),
        boss('Warcury', 5600, 660, 2800000, 'WARCURY', true),
        boss('Peter', 5400, 640, 2700000, 'PETER', true),
        boss('Nosjuro', 5300, 650, 2750000, 'NOSJURO', true),
        boss('Saturn', 6000, 720, 3200000, 'SATURN', true)
    ], { evento: 'egghead', faccaoMarinha: 'vegapunks' }),
    ilha('Elbaf', 'Gigantes, uma última sequência de batalhas e o fim da linha.', 0.55, [
        boss('Imu no corpo da Gunko', 8500, 760, 4500000, 'IMU+GUNKO', true, { extremo: true }),
        boss('Imu', 14000, 1100, 8000000, 'IMU', true, { extremo: true, final: true })
    ], { aliadoGigante: 0.85 })
];

function ilha(nome, descricao, frutaChance, bosses = [], options = {}) {
    return {
        nome,
        descricao,
        frutaChance,
        bosses: Array.isArray(bosses) ? bosses : [],
        options: options || {},
        buscasFruta: 2,
        estiloBuscaDisponivel: true
    };
}

function boss(nome, hp, poder, recompensa, textoImg, temAliados = false, extras = {}) {
    return {
        nome,
        hp,
        hpMax: hp,
        poder,
        recompensa,
        img: img(textoImg, '3a2020', 500, 360),
        temAliados,
        extremo: Boolean(extras.extremo),
        requerHaki: Boolean(extras.requerHaki),
        perdeSombra: Boolean(extras.perdeSombra),
        despertarRei: Boolean(extras.despertarRei),
        final: Boolean(extras.final),
        esmagador: Boolean(extras.esmagador),
        resistenciaDano: extras.resistenciaDano || 1
    };
}

function bossGrupo(lista, nome = 'Grupo inimigo') {
    return {
        nome,
        hp: lista.reduce((s, b) => s + Math.floor(b.hp * 0.55), 0),
        hpMax: lista.reduce((s, b) => s + Math.floor(b.hp * 0.55), 0),
        poder: Math.max(...lista.map(b => b.poder)),
        recompensa: lista.reduce((s, b) => s + b.recompensa, 0),
        img: img(nome.toUpperCase().replaceAll(' ', '+'), '4a2929', 500, 360),
        temAliados: true,
        extremo: false,
        requerHaki: false,
        perdeSombra: false,
        despertarRei: false,
        final: false,
        membros: lista
    };
}

// ============================================================
// UTILITÁRIOS
// ============================================================

function el(id) {
    return document.getElementById(id);
}

function img(texto, fundo = '34495e', largura = 500, altura = 300) {
    return `https://placehold.co/${largura}x${altura}/${fundo}/ffffff?text=${encodeURIComponent(String(texto).replaceAll(' ', '+'))}`;
}

function log(msg) {
    if (el('log-eventos')) el('log-eventos').innerHTML = msg;
}

function logBatalha(msg) {
    if (el('log-batalha')) el('log-batalha').innerHTML = msg;
}

function randomItem(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function clamped(numero, minimo, maximo) {
    return Math.max(minimo, Math.min(maximo, numero));
}

function ilhaAtual() {
    return ilhas[estado.ilhaIndex];
}

function bossAtual() {
    return ilhaAtual()?.bosses?.[estado.bossIndex] || null;
}

function chaveTreino(tipo) {
    return `${estado.ilhaIndex}:${tipo}`;
}

function treinamentoConcluido(tipo) {
    return Boolean(jogador.treinamentos[chaveTreino(tipo)]);
}

function marcarTreinamento(tipo) {
    jogador.treinamentos[chaveTreino(tipo)] = true;
}

function todasBatalhasDaIlhaConcluidas() {
    return estado.bossIndex >= listaBossesDaIlha().length;
}

function obterProgressoBossDaIlha(indice = estado.ilhaIndex) {
    const salvo = estado.bossProgressoPorIlha[indice];
    return Number.isInteger(salvo) ? salvo : 0;
}

function salvarProgressoBossDaIlha() {
    estado.bossProgressoPorIlha[estado.ilhaIndex] = estado.bossIndex;
}

function carregarProgressoBossDaIlha() {
    const total = listaBossesDaIlha().length;
    estado.bossIndex = clamped(obterProgressoBossDaIlha(estado.ilhaIndex), 0, total);
}

function renderizarImagensDosBotoes() {
    document.querySelectorAll('button[data-img]').forEach(btn => {
        if (btn.dataset.img) {
            btn.style.setProperty('--button-img', `url("${btn.dataset.img}")`);
            btn.classList.add('has-button-image');
        }
    });
}

function aplicarImagemBotao(btn, url) {
    btn.style.setProperty('--button-img', `url("${url}")`);
    btn.classList.add('has-button-image');
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
    renderizarImagensDosBotoes();
}

function atualizarHeader() {
    el('status-ilha').textContent = ilhaAtual().nome;
    el('status-barco').textContent = estado.barcoConseguido ? `Barco: ${jogador.barcoTipo || 'adquirido'}` : 'Sem barco';
}

function atualizarTituloPoster() {
    if (jogador.faccao === 'Pirata') {
        if (jogador.recompensa >= 1000000000) return 'YONKOU • PIRATA';
        if (jogador.recompensa >= 500000000) return 'SUPER NOVA • PIRATA';
        return 'PIRATA';
    }
    if (jogador.faccao === 'Marinha') return jogador.patente;
    if (jogador.faccao === 'Tenryuubito') return 'TENRYUUBITO';
    return 'Novato';
}

function atualizarPatente() {
    if (jogador.faccao !== 'Marinha') return;
    const vitorias = contarBossesDerrotados();
    const patentes = [
        'Recruta',
        'Tenente',
        'Comandante',
        'Capitão',
        'Contra-Almirante',
        'Vice-Almirante',
        'Almirante',
        'Almirante de Frota'
    ];
    jogador.patente = patentes[Math.min(patentes.length - 1, vitorias)];
}

function quantidadeBossesDaIlha(indice) {
    const nome = ilhas[indice]?.nome;
    if (nome === 'Marineford') return 3;
    if (nome === 'Egghead' && jogador.faccao === 'Marinha') return 7;
    if (nome === 'Egghead') return 7;
    return ilhas[indice]?.bosses?.length || 0;
}

function contarBossesDerrotados() {
    // Regra oficial do sistema: 1 boss derrotado = 1 ponto de maestria.
    return jogador.maestria;
}

function calcularAtributosCombate() {
    const frutaPoder = jogador.fruta ? jogador.fruta.poder : 0;
    const temEstilo = Boolean(jogador.estiloLuta);
    const estiloBonusVida = temEstilo ? 70 : 0;
    const racaVida = jogador.raca === 'Lunaria' ? 120 : jogador.raca === 'Homem-Peixe' ? 70 : jogador.raca === 'Mink' ? 35 : 0;

    // O personagem cresce de verdade. HP, dano e resistência não ficam congelados em 120.
    const novaVidaMaxima = Math.round(
        120
        + jogador.maestria * 65
        + jogador.haki.arm * 7
        + jogador.haki.obs * 3
        + frutaPoder * 4
        + estiloBonusVida
        + racaVida
        + (jogador.fruta?.despertada ? 180 : 0)
        + (jogador.haki.reiEstado === 'Despertado!' ? 160 : 0)
    );

    jogador.vidaMaxima = Math.max(120, novaVidaMaxima);

    let dano = 18;
    dano += jogador.poder * 0.55;
    dano += jogador.maestria * 4;
    dano += jogador.haki.arm * 3;
    dano += jogador.haki.obs * 0.8;
    dano += frutaPoder * 0.65;
    dano += temEstilo ? 24 : 0;
    if (jogador.fruta?.despertada) dano += frutaPoder * 0.45;
    if (jogador.haki.reiEstado === 'Despertado!') dano += 35;

    let reducao = 0.05;
    reducao += jogador.haki.arm * 0.006;
    reducao += jogador.haki.obs * 0.0015;
    reducao += Math.min(0.12, frutaPoder * 0.002);
    reducao += temEstilo ? 0.045 : 0;
    if (jogador.haki.armAvancado) reducao += 0.12;
    if (jogador.haki.reiEstado === 'Despertado!') reducao += 0.05;
    if (jogador.fruta?.despertada) reducao += 0.05;
    if (jogador.raca === 'Lunaria') reducao += 0.08;
    if (jogador.raca === 'Homem-Peixe') reducao += 0.04;
    if (jogador.raca === 'Mink') reducao += 0.02;

    if (estado.hakiArmAtivo) reducao += 0.07;
    if (estado.revestimentoReiAtivo) reducao += 0.06;

    reducao = clamped(reducao, 0.03, 0.55);

    return {
        dano: Math.max(15, Math.round(dano)),
        reducao: Math.round(reducao * 100),
        vidaMaxima: jogador.vidaMaxima
    };
}

function atualizarPoder() {
    let poder = jogador.poderBase;
    const racaData = racas.find(r => r.nome === jogador.raca);
    if (racaData) poder += racaData.bonusPoder;

    poder += jogador.haki.obs * 2;
    poder += jogador.haki.arm * 2;
    poder += jogador.haki.reiValor * 1.2;
    poder += jogador.maestria * 3;

    if (jogador.haki.rei) poder += 10;
    if (jogador.haki.obsAvancado) poder += 18;
    if (jogador.haki.armAvancado) poder += 20;
    if (jogador.fruta) {
        poder += jogador.fruta.poder;
        if (jogador.fruta.despertada) poder += Math.floor(jogador.fruta.poder * 0.7);
    }

    if (jogador.estiloLuta) poder += 15 + jogador.maestriaEstilo * 2;
    if (jogador.semSombra) poder = Math.max(1, poder - 25);

    jogador.aliados.forEach(aliado => {
        poder += aliado.poder;
        if (aliado.fruta) poder += Math.floor(aliado.fruta.poder / 2);
    });

    jogador.poder = Math.round(poder);
    const atributos = calcularAtributosCombate();
    el('poder-jogador-poster').textContent = jogador.poder;

    if (el('dano-combate-jogador')) el('dano-combate-jogador').textContent = atributos.dano;
    if (el('reducao-combate-jogador')) el('reducao-combate-jogador').textContent = `${atributos.reducao}%`;
}

function atualizarCartaz() {
    atualizarPatente();
    atualizarPoder();

    el('nome-pirata').textContent = jogador.nome;
    el('faccao-pirata').textContent = jogador.faccao || '---';
    el('raca-pirata').textContent = jogador.raca || '---';
    el('genero-pirata').textContent = jogador.genero || '---';
    el('estilo-pirata').textContent = jogador.estiloLuta || 'Nenhum';
    el('fruta-pirata').textContent = jogador.fruta ? `${jogador.fruta.nome}${jogador.fruta.despertada ? ' • DESPERTADA' : ''}` : 'Nenhuma';
    el('haki-obs').textContent = jogador.haki.obs;
    el('haki-arm').textContent = jogador.haki.arm;
    if (jogador.haki.reiEstado === 'Despertado!') {
        el('haki-rei').textContent = `${jogador.haki.reiValor}/50`;
    } else if (jogador.haki.rei) {
        el('haki-rei').textContent = 'Adormecido';
    } else {
        el('haki-rei').textContent = 'Não possui';
    }
    el('recompensa-pirata').textContent = jogador.recompensa.toLocaleString('pt-BR');
    el('titulo-pirata').textContent = atualizarTituloPoster();

    if (jogador.fruta) {
        el('img-fruta-perfil').src = jogador.fruta.img;
        el('img-fruta-perfil').hidden = false;
    } else {
        el('img-fruta-perfil').hidden = true;
        el('img-fruta-perfil').src = '';
    }

    atualizarBotoesHakiAtivo();
    atualizarBotoesIlha();
    atualizarMapRoute();
}

function definirImagemPersonagem() {
    const chave = `${jogador.raca}-${jogador.genero}`;
    const imgEl = el('img-personagem');
    imgEl.src = imagensPorPerfil[chave] || img('PERSONAGEM', '273542');
    imgEl.onerror = () => {
        imgEl.onerror = null;
        imgEl.src = img(`${jogador.raca}+${jogador.genero}`, '273542');
    };
}

// ============================================================
// CRIAÇÃO E FACÇÕES
// ============================================================

function escolherFaccao(faccao) {
    if (faccao !== 'Marinha' && faccao !== 'Pirata') return;
    jogador.faccao = faccao;
    el('btn-marinha').classList.remove('selecionado');
    el('btn-pirata').classList.remove('selecionado');
    el(faccao === 'Marinha' ? 'btn-marinha' : 'btn-pirata').classList.add('selecionado');
    log(`Você escolheu ${faccao}. O Haki do Rei continua nas mãos do destino.`);
}

function resetarEstadoDoJogador() {
    jogador.nome = 'Novato';
    jogador.poderBase = 10;
    jogador.poder = 10;
    jogador.vida = 120;
    jogador.vidaMaxima = 120;
    jogador.raca = '';
    jogador.genero = '';
    jogador.recompensa = 0;
    jogador.patente = 'Recruta';
    jogador.haki = {
        obs: 0,
        arm: 0,
        rei: false,
        reiEstado: 'Não possui',
        reiValor: 0,
        reiMax: 30,
        obsAvancado: false,
        armAvancado: false
    };
    jogador.fruta = null;
    jogador.estiloLuta = null;
    jogador.maestriaEstilo = 0;
    jogador.maestriaFruta = 0;
    jogador.maestria = 0;
    jogador.inventario = [];
    jogador.aliados = [];
    jogador.treinamentos = {};
    jogador.ilhaIndex = 0;
    jogador.segundaVidaAkumaUsada = false;
    jogador.semSombra = false;
    jogador.barcoTipo = '';
    jogador.emJornada = true;

    estado.barcoConseguido = false;
    estado.tentativasRoubo = 0;
    estado.ilhaIndex = 0;
    estado.maiorIlhaAlcancada = 0;
    estado.bossIndex = 0;
    estado.bossHP = 0;
    estado.bossAtivo = null;
    estado.bossProgressoPorIlha = {};
    estado.ataqueEmAndamento = false;
    estado.hakiArmAtivo = false;
    estado.hakiObsAtivo = false;
    estado.hakiReiAtivo = false;
    estado.revestimentoReiAtivo = false;
    estado.cooldownsAtaques = {};
    estado.aliadoAtacou = false;
    estado.eventoPendente = null;
    estado.cactusResolvido = false;
    estado.travessiaResolvida = false;
}

function criarPersonagem() {
    if (!jogador.faccao) {
        alert('Escolha Marinha ou Pirata primeiro!');
        return;
    }

    resetarEstadoDoJogador();
    // A facção foi escolhida pelo jogador antes do reset.
    // Recupera o valor selecionado dos botões.
    const faccaoEscolhida = document.querySelector('.faccao-btn.selecionado')?.id === 'btn-marinha' ? 'Marinha' : 'Pirata';
    jogador.faccao = faccaoEscolhida;

    jogador.raca = randomItem(racas).nome;
    jogador.genero = randomItem(generos);
    jogador.nome = randomItem(['Novato', 'Sem Nome', 'Capitão Ninguém', 'Ameaça do Porto', 'Zé do Convés']);

    // 30% para nascer com o Haki do Rei. O valor começa falso no objeto.
    jogador.haki.rei = Math.random() < 0.30;
    jogador.haki.reiEstado = jogador.haki.rei ? 'Adormecido' : 'Não possui';

    // 1% de chance especial de Tenryuubito.
    if (Math.random() < 0.01) {
        jogador.faccao = 'Tenryuubito';
        jogador.raca = 'Humano';
        jogador.genero = randomItem(generos);
        jogador.recompensa = 999999999;
        log('☼ 1% ABSURDO! O sistema decidiu que você nasceu Tenryuubito. Sua escolha de facção não foi alterada por erro: foi o evento raro que tomou conta do destino.');
    } else {
        log(`Você nasceu como ${jogador.raca} (${jogador.genero}) da ${jogador.faccao}. Haki do Rei: ${jogador.haki.rei ? 'Adormecido' : 'Não possui'}.`);
    }

    definirImagemPersonagem();
    atualizarCartaz();
    el('cartaz').style.display = 'block';
    el('tela-criacao').classList.remove('tela-ativa');
    el('tela-criacao').classList.add('tela-oculta');

    if (jogador.faccao === 'Tenryuubito') {
        el('texto-inicio-ilha').textContent = 'Você recebeu acesso a um navio do Governo Mundial. Não existe opção de roubo ou alistamento aqui.';
        el('opcoes-pirata').hidden = true;
        el('opcoes-marinha').hidden = true;
        el('opcoes-tenryuubito').hidden = false;
    } else if (jogador.faccao === 'Marinha') {
        el('texto-inicio-ilha').textContent = 'Você é da Marinha. Apresente-se à base e receba sua embarcação oficial. Roubar barco está fora de cogitação.';
        el('opcoes-pirata').hidden = true;
        el('opcoes-marinha').hidden = false;
        el('opcoes-tenryuubito').hidden = true;
    } else {
        el('texto-inicio-ilha').textContent = 'Você é pirata. Seu começo é simples: roubar um barco ou comprar uma velharia que, por algum milagre, boia.';
        el('opcoes-pirata').hidden = false;
        el('opcoes-marinha').hidden = true;
        el('opcoes-tenryuubito').hidden = true;
    }

    estado.ilhaIndex = 0;
    jogador.ilhaIndex = 0;
    atualizarHeader();
    prepararOpcoesDeBarco();
    mudarTela('tela-barco');
}

// ============================================================
// BARCO
// ============================================================

function conseguirBarco(mensagem, tipo = 'barco meia-boca') {
    estado.barcoConseguido = true;
    jogador.barcoTipo = tipo;
    log(mensagem);
    atualizarHeader();
    setTimeout(() => {
        atualizarMapRoute();
        mudarTela('tela-mapa');
    }, 500);
}

function roubarBarco() {
    if (jogador.faccao !== 'Pirata') {
        log('🚫 Essa opção simplesmente não existe para a Marinha. Seu personagem não virou pirata sozinho.');
        return;
    }
    if (estado.tentativasRoubo >= 1) {
        log('Você já gastou sua única tentativa de roubo. Agora só dá para comprar a velharia.');
        return;
    }

    estado.tentativasRoubo++;

    if (Math.random() < 0.50) {
        jogador.recompensa += 500;
        conseguirBarco('☠ Você roubou um barco com sucesso. A Marinha agora lembra de você.', 'barco roubado');
        atualizarCartaz();
    } else {
        log('❌ O roubo falhou. Era a única tentativa. Felizmente, a loja de velharias continua aberta.');
    }
}

function comprarBarco() {
    if (jogador.faccao !== 'Pirata') {
        log('Marinha não compra a própria embarcação aqui. A opção correta é se apresentar à base.');
        return;
    }
    conseguirBarco('⛵ Você comprou um barco meia-boca. Ele boia, então já é um começo.', 'velharia flutuante');
}

function receberNavioMarinha() {
    if (jogador.faccao !== 'Marinha') {
        log('🚫 Somente marinheiros recebem o navio oficial da Marinha.');
        return;
    }
    conseguirBarco('⚓ Você se apresentou à Marinha e recebeu uma embarcação oficial.', 'navio da Marinha');
}

function chamarNavioGoverno() {
    if (jogador.faccao !== 'Tenryuubito') {
        log('🚫 O Governo Mundial não está mandando navio para qualquer pessoa.');
        return;
    }
    jogador.recompensa = Math.max(jogador.recompensa, 999999999);
    conseguirBarco('☼ Um navio do Governo Mundial apareceu porque você é Tenryuubito.', 'navio do Governo Mundial');
    atualizarCartaz();
}

// ============================================================
// MAPA / ROTA
// ============================================================

function atualizarMapRoute() {
    const mapa = el('rota-ilhas');
    if (!mapa) return;
    mapa.innerHTML = '';

    const ultimoDescoberto = estado.maiorIlhaAlcancada;

    for (let i = 0; i <= ultimoDescoberto; i++) {
        const node = document.createElement('button');
        node.className = 'route-node';
        const atual = i === estado.ilhaIndex;

        if (atual) node.classList.add('active-node');
        else node.classList.add('visited-node');

        const titulo = ilhas[i].nome;
        const subtitulo = atual ? 'VOCÊ ESTÁ AQUI' : 'JÁ VISITADA • CLIQUE PARA VOLTAR';
        node.innerHTML = `<span>${String(i + 1).padStart(2, '0')}</span><b>${titulo}</b><small>${subtitulo}</small>`;
        aplicarImagemBotao(node, img(titulo.toUpperCase().replaceAll(' ', '+'), atual ? '4b6533' : '34495e', 170, 110));

        if (!atual) node.onclick = () => voltarParaIlhaVisitada(i);
        mapa.appendChild(node);

        if (i < ultimoDescoberto) {
            const linha = document.createElement('div');
            linha.className = 'route-line';
            mapa.appendChild(linha);
        }
    }

    const proxima = estado.maiorIlhaAlcancada + 1;
    const btnProxima = el('btn-proxima-ilha');
    if (!btnProxima) return;

    if (proxima >= ilhas.length) {
        btnProxima.disabled = true;
        btnProxima.textContent = 'FIM DA ROTA';
    } else {
        btnProxima.disabled = false;
        btnProxima.textContent = `SEGUIR PARA ???? (${proxima + 1})`;
    }

    renderizarImagensDosBotoes();
}

function voltarParaIlhaAtual() {
    mudarTela('tela-ilha');
    carregarTelaDaIlha();
}

function voltarParaEscolhaDeBarco() {
    // Permite revisar a tela de barco a qualquer momento.
    // Se o navio foi perdido, ela vira o caminho obrigatório para conseguir outro.
    if (!estado.barcoConseguido) {
        log('⛵ Você está sem barco. Escolha novamente entre as opções disponíveis.');
    } else {
        log(`⛵ Você abriu novamente a tela do barco. Embarcação atual: ${jogador.barcoTipo}.`);
    }
    prepararOpcoesDeBarco();
    mudarTela('tela-barco');
}

function prepararOpcoesDeBarco() {
    if (jogador.faccao === 'Pirata') {
        el('opcoes-pirata').hidden = false;
        el('opcoes-marinha').hidden = true;
        el('opcoes-tenryuubito').hidden = true;
    } else if (jogador.faccao === 'Marinha') {
        el('opcoes-pirata').hidden = true;
        el('opcoes-marinha').hidden = false;
        el('opcoes-tenryuubito').hidden = true;
    } else if (jogador.faccao === 'Tenryuubito') {
        el('opcoes-pirata').hidden = true;
        el('opcoes-marinha').hidden = true;
        el('opcoes-tenryuubito').hidden = false;
    }
}

function voltarParaIlhaVisitada(indice) {
    if (indice < 0 || indice > estado.maiorIlhaAlcancada || indice === estado.ilhaIndex) return;
    estado.ilhaIndex = indice;
    jogador.ilhaIndex = indice;
    // A ilha mantém exatamente o ponto de boss em que o jogador estava.
    // Voltar no mapa nunca pode transformar um boss vivo em boss derrotado.
    carregarProgressoBossDaIlha();
    log(`🗺️ Você voltou para ${ilhas[indice].nome}. O progresso do boss ficou salvo em ${estado.bossIndex}/${listaBossesDaIlha().length}.`);
    carregarTelaDaIlha();
}

function irParaProximaIlha() {
    if (!estado.barcoConseguido) {
        log('Você ainda precisa de um barco.');
        mudarTela('tela-barco');
        return;
    }

    const atual = ilhaAtual();
    if (!todasBatalhasDaIlhaConcluidas()) {
        log(`⚔ Antes de continuar pela rota, você precisa concluir os desafios de ${atual.nome}.`);
        return;
    }
    if (atual.options?.evento && atual.options.evento !== 'egghead' && !atual.options.eventoResolvido && atual.nome !== 'Alabasta') {
        log('📜 Há um evento importante desta ilha que precisa ser resolvido antes da próxima viagem.');
        return;
    }

    const destino = estado.maiorIlhaAlcancada + 1;
    if (destino >= ilhas.length) return;

    // Se o jogador estiver revendo uma ilha antiga, a rota continua do ponto mais avançado.
    const ilhaSaida = estado.maiorIlhaAlcancada;
    estado.ilhaIndex = ilhaSaida;
    jogador.ilhaIndex = ilhaSaida;
    estado.bossIndex = listaBossesDaIlha().length;
    iniciarViagem(destino);
}

function irParaBuggy() {
    // Mantém a função antiga funcionando, mas agora respeita a rota.
    if (estado.ilhaIndex !== 0) {
        if (estado.ilhaIndex >= 2) {
            voltarParaIlhaVisitada(2);
            return;
        }
    }
    if (!estado.barcoConseguido) {
        log('Você precisa de um barco antes de seguir para Orange Town.');
        return;
    }
    iniciarViagem(2);
}

function iniciarViagem(destino) {
    if (!estado.barcoConseguido) {
        log('⛵ Você não pode viajar sem barco. Nem o lendário Michael Phelps resolve essa parte.');
        mudarTela('tela-barco');
        return;
    }

    if (destino > estado.ilhaIndex + 1) {
        log('❌ Ilha não descoberta. As próximas continuam como ???? até você pisar nelas.');
        return;
    }

    mudarTela('tela-navegacao');
    el('subtexto-navegando').textContent = `Rumo a ${ilhas[destino].nome}...`;
    let pontos = 0;
    const intervalo = setInterval(() => {
        pontos = (pontos + 1) % 4;
        el('texto-navegando').textContent = 'NAVEGANDO' + '.'.repeat(pontos);
    }, 320);

    const tempoViagem = destino === 6 ? 3200 : 2300;
    const mensagemCeu = (ilhas[destino].nome === 'Skypiea')
        ? setTimeout(() => {
            el('subtexto-navegando').textContent = 'NAVEGANDO... o navio foi lançado para o céu! VOCÊ FOI ARREMESSADO PARA UMA ILHA NO CÉU!';
        }, Math.floor(tempoViagem * 0.48))
        : null;

    setTimeout(() => {
        clearInterval(intervalo);
        if (mensagemCeu) clearTimeout(mensagemCeu);
        resolverTravessia(destino);
    }, tempoViagem);
}

function resolverTravessia(destino) {
    const origem = ilhas[estado.ilhaIndex];

    // Jaya joga você para Skypiea durante a viagem.
    if (origem.nome === 'Jaya' && ilhas[destino].nome === 'Skypiea') {
        log('☁ NAVEGANDO... o navio foi lançado para cima! Você foi parar numa ilha no céu: SKYPEIA.');
        estado.ilhaIndex = destino;
        jogador.ilhaIndex = destino;
        estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
        estado.bossIndex = 0;
        carregarTelaDaIlha();
        return;
    }

    // Travessia para Cactus Island: Reverse Mountain para piratas, Calm Belt para marinheiros.
    if (ilhas[destino].nome === 'Cactus Island') {
        if (jogador.faccao === 'Pirata' || jogador.faccao === 'Tenryuubito') {
            resolverReverseMountain(destino);
        } else {
            resolverCalmBelt(destino);
        }
        return;
    }

    estado.ilhaIndex = destino;
    jogador.ilhaIndex = destino;
    estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
    estado.bossIndex = 0;
    estado.travessiaResolvida = false;
    carregarTelaDaIlha();
}

function resolverReverseMountain(destino) {
    el('titulo-evento-mar').textContent = 'REVERSE MOUNTAIN';
    el('imagem-evento-mar').innerHTML = '⛰️🌊';
    el('desc-evento-mar').textContent = 'Como pirata, você precisa sobreviver à subida da Reverse Mountain. Chance de sobrevivência: 60%.';
    el('acoes-evento-mar').innerHTML = '';

    const btn = document.createElement('button');
    btn.className = 'btn-acao btn-primary';
    btn.textContent = 'ENCARAR A MONTANHA';
    aplicarImagemBotao(btn, img('REVERSE+MOUNTAIN', '3c4b5d', 140, 90));
    btn.onclick = () => {
        if (Math.random() < 0.60) {
            estado.ilhaIndex = destino;
            jogador.ilhaIndex = destino;
            estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
            estado.bossIndex = 0;
            log('⛰️ Você sobreviveu à Reverse Mountain! O barco saiu inteiro por milagre.');
            carregarTelaDaIlha();
            return;
        }

        naufragarReverseMountain(destino);
    };
    el('acoes-evento-mar').appendChild(btn);
    mudarTela('tela-evento-mar');
}

function naufragarReverseMountain(destino) {
    estado.barcoConseguido = false;
    jogador.barcoTipo = '';

    if (!jogador.fruta) {
        log('🌊 O barco naufragou, mas você não tem Akuma no Mi. Você simplesmente nada até Cactus Island.');
        estado.ilhaIndex = destino;
        jogador.ilhaIndex = destino;
        estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
        estado.bossIndex = 0;
        carregarTelaDaIlha();
        return;
    }

    if (jogador.aliados.length === 0) {
        finalizarMorte('🌊 O barco naufragou na Reverse Mountain. Você tinha uma Akuma no Mi e não havia ninguém para salvá-lo. Você afundou.');
        return;
    }

    const todosTemFruta = jogador.aliados.every(a => Boolean(a.fruta));
    if (todosTemFruta) {
        finalizarMorte('🌊 O barco naufragou e todos os aliados também eram usuários de Akuma no Mi. O grupo inteiro afundou.');
        return;
    }

    log('🌊 O barco naufragou. Pelo menos um aliado ainda consegue nadar. Vocês abandonam o navio e nadam até Cactus Island.');
    estado.ilhaIndex = destino;
    jogador.ilhaIndex = destino;
    estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
    estado.bossIndex = 0;
    carregarTelaDaIlha();
}

function resolverCalmBelt(destino) {
    el('titulo-evento-mar').textContent = 'CALM BELT';
    el('imagem-evento-mar').innerHTML = '🌊⚓';
    el('desc-evento-mar').textContent = 'Como marinheiro, você atravessa o Calm Belt em uma embarcação apropriada da Marinha. A rota é silenciosa e protegida.';
    el('acoes-evento-mar').innerHTML = '';

    const btn = document.createElement('button');
    btn.className = 'btn-acao btn-primary';
    btn.textContent = 'ATRAVESSAR O CALM BELT';
    aplicarImagemBotao(btn, img('CALM+Belt', '2a4653', 140, 90));
    btn.onclick = () => {
        estado.ilhaIndex = destino;
        jogador.ilhaIndex = destino;
        estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
        estado.bossIndex = 0;
        log('⚓ O Calm Belt ficou para trás. Você chegou a Cactus Island.');
        carregarTelaDaIlha();
    };
    el('acoes-evento-mar').appendChild(btn);
    mudarTela('tela-evento-mar');
}

// ============================================================
// TELA DA ILHA / EVENTOS ESPECIAIS
// ============================================================

function carregarTelaDaIlha() {
    const ilha = ilhaAtual();
    carregarProgressoBossDaIlha();
    ilhaAtual().buscasFruta = Math.max(ilhaAtual().buscasFruta ?? 2, 0);
    el('nome-ilha-atual').textContent = ilha.nome;
    el('descricao-ilha').textContent = ilha.descricao;
    el('count-fruta').textContent = ilha.buscasFruta;
    atualizarHeader();
    atualizarBotoesIlha();
    atualizarCartaz();
    mudarTela('tela-ilha');

    if (ilha.options?.evento && !ilha.options.eventoResolvido) {
        prepararEventoDeIlha(ilha.options.evento);
    }
}

function prepararEventoDeIlha(tipo) {
    if (tipo === 'cactus' && !estado.cactusResolvido) {
        mostrarEventoCactus();
    } else if (tipo === 'alabasta-trap') {
        el('texto-progressao-ilha').textContent = 'Tentar enfrentar o boss aqui primeiro aciona a armadilha do deserto.';
    } else if (tipo === 'water7') {
        mostrarEventoWater7();
    } else if (tipo === 'sabaody') {
        mostrarEventoSabaody();
    } else if (tipo === 'pudding') {
        atualizarBotoesIlha();
    } else if (tipo === 'egghead') {
        el('texto-progressao-ilha').textContent = jogador.faccao === 'Marinha'
            ? 'Sua missão em Egghead: eliminar os Vegapunks.'
            : 'Sua missão em Egghead: atravessar Rob Lucci, Kizaru e os Gorosei.';
    }
}

function mostrarEventoCactus() {
    el('titulo-evento').textContent = 'CACTUS ISLAND';
    el('nome-evento').textContent = 'O pessoal da ilha quer festa.';
    el('desc-evento').textContent = 'Você pode ignorar a galera e seguir viagem ou curtir até falar chega.';
    el('img-evento').src = img('CACTUS+ISLAND+FESTA', '5c3c24', 600, 420);
    el('botoes-evento').innerHTML = '';

    const sair = criarBotaoEvento('IR EMBORA', img('IR+EMBORA', '34495e'), () => {
        estado.cactusResolvido = true;
        ilhas[estado.ilhaIndex].options.eventoResolvido = true;
        log('Você não curtiu a festa. Foi embora sem complicação.');
        prepararFimDaIlhaSemBoss();
    });

    const curtir = criarBotaoEvento('CURTIR COM O POVO', img('FESTA', '5d3a1d'), () => {
        estado.cactusResolvido = true;
        ilhas[estado.ilhaIndex].options.eventoResolvido = true;
        if (jogador.haki.obs > 0 || jogador.haki.obsAvancado) {
            log('👁 Seu Haki da Observação prevê uma armada chegando. Você termina a festa antes da emboscada e vai embora inteiro.');
            prepararFimDaIlhaSemBoss();
        } else {
            finalizarMorte('⚔️ Você bebeu, curtiu e não percebeu a armada. Sem Haki da Observação para prever a emboscada, você foi capturado e esquartejado.');
        }
    });

    el('botoes-evento').append(sair, curtir);
    mudarTela('tela-evento');
}

function mostrarEventoWater7() {
    if (ilhas[estado.ilhaIndex].options.eventoResolvido) return;
    el('titulo-evento').textContent = 'WATER 7';
    el('nome-evento').textContent = 'Franky oferece um barco muito melhor.';
    el('desc-evento').textContent = 'Aqui existe maior incidência de aliados carpinteiros. Você também pode comprar uma embarcação nova.';
    el('img-evento').src = img('FRANKY+SHIPYARD', '394d55', 600, 420);
    el('botoes-evento').innerHTML = '';

    const comprar = criarBotaoEvento('COMPRAR BARCO MELHOR', img('BARCO+MELHOR', '4c6133'), () => {
        estado.barcoConseguido = true;
        jogador.barcoTipo = 'navio melhorado por Franky';
        ilhas[estado.ilhaIndex].options.eventoResolvido = true;
        log('🔧 Franky te vendeu um barco muito melhor. A viagem agora é menos humilhante.');
        atualizarHeader();
        montarListaAliados();
        setTimeout(() => carregarTelaDaIlha(), 350);
    });

    const recusar = criarBotaoEvento('IR SEM COMPRAR', img('SEM+COMPRA', '4a3b2d'), () => {
        ilhas[estado.ilhaIndex].options.eventoResolvido = true;
        prepararFimDaIlhaSemBoss();
    });

    el('botoes-evento').append(comprar, recusar);
    mudarTela('tela-evento');
}

function mostrarEventoSabaody() {
    if (ilhas[estado.ilhaIndex].options.eventoResolvido) return;
    el('titulo-evento').textContent = 'SABAODY';
    el('nome-evento').textContent = 'O jornal chegou.';
    el('desc-evento').textContent = jogador.faccao === 'Marinha'
        ? 'Você lê que Ace foi capturado. Agora é convocado para a guerra por obrigação.'
        : 'Você lê que Ace foi capturado. Decide ir à guerra porque aparentemente hoje a ideia é arrumar problema por diversão.';
    el('img-evento').src = img('JORNAL', '6c5b42', 600, 420);
    el('botoes-evento').innerHTML = '';

    const btn = criarBotaoEvento('IR PARA MARINEFORD', img('MARINEFORD', '5a2b2b'), () => {
        ilhas[estado.ilhaIndex].options.eventoResolvido = true;
        log(jogador.faccao === 'Marinha'
            ? '⚓ Você foi convocado para Marineford.'
            : '☠ Você decidiu ir para Marineford por diversão. A ideia já parece duvidosa.');
        prepararFimDaIlhaSemBoss();
    });
    el('botoes-evento').appendChild(btn);
    mudarTela('tela-evento');
}

function criarBotaoEvento(texto, imagem, acao) {
    const btn = document.createElement('button');
    btn.className = 'btn-acao btn-primary';
    btn.textContent = texto;
    aplicarImagemBotao(btn, imagem);
    btn.onclick = acao;
    return btn;
}

function prepararFimDaIlhaSemBoss() {
    atualizarBotoesIlha();
    carregarTelaDaIlha();
}

function atualizarBotoesIlha() {
    const ilha = ilhaAtual();
    const temFrutas = ilha.buscasFruta > 0;
    el('count-fruta').textContent = ilha.buscasFruta;

    el('btn-treino-obs').disabled = treinamentoConcluido('obs') || jogador.haki.obs >= 30;
    el('btn-treino-arm').disabled = treinamentoConcluido('arm') || jogador.haki.arm >= 30;
    el('btn-treino-obs').classList.toggle('concluido', el('btn-treino-obs').disabled);
    el('btn-treino-arm').classList.toggle('concluido', el('btn-treino-arm').disabled);

    const btnBoss = el('btn-boss-ilha');
    const boss = bossAtualReal();
    if (!boss || todasBatalhasDaIlhaConcluidas()) {
        btnBoss.disabled = true;
        btnBoss.hidden = true;
        btnBoss.textContent = 'BOSS DA ILHA CONCLUÍDO';
    } else {
        btnBoss.hidden = false;
        if (ilha.options?.evento === 'pudding' && boss.nome === 'Katakuri') {
            btnBoss.disabled = false;
            btnBoss.textContent = 'ESTRAGAR CASAMENTO DE PUDDING';
        } else if (ilha.options?.evento === 'alabasta-trap' && !ilha.options.trapTriggered) {
            btnBoss.disabled = false;
            btnBoss.textContent = 'ENFRENTAR BOSS';
        } else if (jogador.faccao === 'Marinha' && ilha.nome === 'Egghead') {
            btnBoss.disabled = false;
            btnBoss.textContent = boss.nome.startsWith('Vegapunk') ? `ELIMINAR ${boss.nome}` : 'CONTINUAR MISSÃO';
        } else {
            btnBoss.disabled = false;
            btnBoss.textContent = `ENFRENTAR ${boss.nome}`;
        }
    }

    let descricao = `Próximo passo: ${boss ? boss.nome : 'viajar quando quiser seguir a rota.'}`;
    if (jogador.faccao === 'Marinha' && ilha.nome === 'Egghead') descricao = `Missão: eliminar os Vegapunks. Atual: ${boss ? boss.nome : 'concluída.'}`;
    el('texto-progressao-ilha').textContent = descricao;
}

// ============================================================
// AKUMA NO MI
// ============================================================

function escolherFrutaPorPeso(ilhaConfig = ilhaAtual()) {
    const pesos = frutas.map(f => {
        let peso = f.peso;
        if (ilhaConfig?.options?.frutaFavorita === f.nome) {
            peso *= ilhaConfig.options.frutaFavoritaMultiplicador || 1;
        }
        return { fruta: f, peso };
    });

    const total = pesos.reduce((soma, item) => soma + item.peso, 0);
    let rolagem = Math.random() * total;
    for (const item of pesos) {
        rolagem -= item.peso;
        if (rolagem <= 0) return item.fruta;
    }
    return frutas[0];
}

function procurarFruta() {
    if (ilhaAtual().buscasFruta <= 0) {
        log('🍈 Você já fez as duas buscas de Akuma no Mi nesta ilha. Próxima chance só quando a rota avançar.');
        return;
    }

    ilhaAtual().buscasFruta--;
    el('count-fruta').textContent = ilhaAtual().buscasFruta;

    let chance = ilhaAtual().frutaChance;
    if (jogador.raca === 'Mink') chance += 0.02;
    if (jogador.faccao === 'Tenryuubito') chance = 1;
    chance = clamped(chance, 0.02, 1);

    if (Math.random() >= chance) {
        log('🍂 Você procurou por toda parte e achou lixo, frutas comuns e uma coisa que preferiria não tocar.');
        return;
    }

    const encontrada = escolherFrutaPorPeso(ilhaAtual());
    mostrarEventoFruta(encontrada);
}

function mostrarEventoFruta(frutaAtual) {
    el('titulo-evento').textContent = `${frutaAtual.raridade.toUpperCase()} • AKUMA NO MI`;
    el('nome-evento').textContent = `Você encontrou a ${frutaAtual.nome}!`;
    el('desc-evento').textContent = frutaAtual.raridade === 'Mítica'
        ? 'É a roleta que faz a tela ficar em silêncio por alguns segundos.'
        : frutaAtual.raridade === 'Lendária'
            ? 'Drop extremamente raro. Não pisca.'
            : frutaAtual.raridade === 'Rara'
                ? 'Fruta rara. O sistema não costuma entregar isso de graça.'
                : 'Fruta comum, mas ainda pode virar uma build interessante.';
    el('img-evento').src = frutaAtual.img;
    el('botoes-evento').innerHTML = '';

    const comer = criarBotaoEvento(jogador.fruta ? 'NÃO POSSO COMER' : 'COMER FRUTA', img('COMER+FRUTA', '4b6a33'), () => comerFruta(frutaAtual));
    comer.disabled = Boolean(jogador.fruta);

    const guardar = criarBotaoEvento('GUARDAR NO NAVIO', img('GUARDAR', '34516a'), () => guardarFruta(frutaAtual));
    const jogarFora = criarBotaoEvento('JOGAR FORA', img('JOGAR+FORA', '5d2b2b'), () => {
        log(`🗑️ Você jogou a ${frutaAtual.nome} fora.`);
        mudarTela('tela-ilha');
    });

    el('botoes-evento').append(comer, guardar, jogarFora);
    mudarTela('tela-evento');
}

function comerFruta(frutaAtual) {
    if (jogador.fruta) {
        log('Você já comeu uma Akuma no Mi. O jogo bloqueou a segunda.');
        return;
    }

    jogador.fruta = frutaAtual;
    if (jogador.fruta.nome === 'Gomu Gomu no Mi' && jogador.fruta.formas) jogador.fruta.formaAtual = 'base';
    jogador.inventario = jogador.inventario.filter(f => f !== frutaAtual);
    log(`🍈 Você comeu a ${frutaAtual.nome}! Os ataques da fruta estão disponíveis nas batalhas.`);
    atualizarCartaz();
    setTimeout(() => carregarTelaDaIlha(), 500);
}

function guardarFruta(frutaAtual) {
    jogador.inventario.push(frutaAtual);
    log(`🍈 A ${frutaAtual.nome} foi guardada no navio. Você pode oferecê-la a um aliado.`);
    montarInventarioFrutas();
    setTimeout(() => carregarTelaDaIlha(), 500);
}

function despertarFrutaSegundaVida() {
    if (!jogador.fruta || jogador.fruta.despertada) return false;

    jogador.fruta.despertada = true;
    jogador.poderBase += 25;
    atualizarCartaz();
    return true;
}

// ============================================================
// ESTILOS E RECUSA DO KARATÊ
// ============================================================

function procurarEstilo() {
    if (!ilhaAtual().estiloBuscaDisponivel) {
        log('Você já procurou um mestre nesta ilha. Não dá para repetir.');
        return;
    }

    if (jogador.estiloLuta) {
        log(`Você já aprendeu ${jogador.estiloLuta}. Procurar outro mestre agora não é permitido nesta aventura.`);
        return;
    }

    ilhaAtual().estiloBuscaDisponivel = false;

    let candidatos = estilos.filter(estilo => !(estilo.bloqueadoComFruta && jogador.fruta));
    if (jogador.raca === 'Homem-Peixe' && !jogador.fruta) {
        const fishman = estilos.find(s => s.nome === 'Karatê dos Homens-Peixe');
        if (fishman && Math.random() < 0.65) candidatos = [fishman];
    }

    if (!candidatos.length) {
        log('Você não encontrou um estilo compatível com sua situação atual.');
        return;
    }

    const estilo = randomItem(candidatos);

    el('titulo-evento').textContent = 'MESTRE ENCONTRADO';
    el('nome-evento').textContent = estilo.nome;
    el('desc-evento').textContent = `${estilo.descricao} Você quer aceitar esse treinamento? Recusar significa RECUSAR, de verdade.`;
    el('img-evento').src = estilo.img;
    el('botoes-evento').innerHTML = '';

    const aceitar = criarBotaoEvento(`APRENDER ${estilo.nome.toUpperCase()}`, estilo.img, () => {
        jogador.estiloLuta = estilo.nome;
        jogador.maestriaEstilo = 0;
        log(`⚔ Você aceitou o estilo ${estilo.nome}. Agora treine a maestria.`);
        atualizarCartaz();
        abrirMinigameEstilo();
    });

    const recusar = criarBotaoEvento('RECUSAR ESTILO', img('RECUSAR', '5c2a2a'), () => {
        log(`🚫 Você recusou ${estilo.nome}. O sistema NÃO vai registrar esse estilo. Nadar de boas e segue a vida.`);
        mudarTela('tela-ilha');
        atualizarBotoesIlha();
    });

    el('botoes-evento').append(aceitar, recusar);
    mudarTela('tela-evento');
}

function abrirMinigameEstilo() {
    mgConfig('estilo');
    el('titulo-minigame').textContent = `Treino de ${jogador.estiloLuta}`;
    el('instrucao-minigame').textContent = 'Pressione a sequência de teclas exibida o mais rápido possível. Você só ganha maestria se completar o treino.';
    el('obs-minigame').hidden = true;
    el('arm-minigame').hidden = true;
    el('nota-treino').hidden = true;
    el('btn-acao-minigame').hidden = false;
    el('btn-tentar-novamente').hidden = true;
    el('btn-acao-minigame').textContent = 'COMEÇAR SEQUÊNCIA';
    el('btn-acao-minigame').onmousedown = iniciarSequenciaEstilo;
    el('btn-acao-minigame').ontouchstart = iniciarSequenciaEstilo;

    const seq = randomItem(['A S D W', 'W D A S', 'A D S A', 'S W D A']);
    el('instrucao-minigame').dataset.sequencia = seq;
    el('instrucao-minigame').textContent += `\n\nSEQUÊNCIA: ${seq}`;
    mudarTela('tela-minigame');
}

let estiloInicio = 0;
let estiloHandler = null;

function iniciarSequenciaEstilo() {
    if (mgTipo !== 'estilo') return;
    estiloInicio = performance.now();
    const alvo = el('instrucao-minigame').dataset.sequencia.split(' ');
    let indice = 0;
    el('btn-acao-minigame').hidden = true;

    if (estiloHandler) window.removeEventListener('keydown', estiloHandler);
    estiloHandler = event => {
        const tecla = event.key.toUpperCase();
        if (tecla !== alvo[indice]) {
            window.removeEventListener('keydown', estiloHandler);
            estiloHandler = null;
            finalizarTreinoEstilo(2, false);
            return;
        }
        indice++;
        if (indice >= alvo.length) {
            window.removeEventListener('keydown', estiloHandler);
            estiloHandler = null;
            const tempo = performance.now() - estiloInicio;
            const nota = clamped(Math.round(10 - tempo / 850), 1, 10);
            finalizarTreinoEstilo(nota, nota >= 5);
        }
    };
    window.addEventListener('keydown', estiloHandler);
}

function finalizarTreinoEstilo(nota, acertou) {
    minigameAtivo = false;
    el('btn-acao-minigame').hidden = false;
    el('btn-tentar-novamente').hidden = acertou;
    mostrarNotaTreino(nota, 'estilo', acertou);
    log(acertou ? `⚔ Maestria de ${jogador.estiloLuta} aumentou.` : '❌ Você errou a sequência. Pode tentar de novo porque o treino não foi concluído.');
}

function mostrarNotaTreino(nota, tipo, acertou) {
    const caixa = el('nota-treino');
    caixa.hidden = false;
    caixa.textContent = `NOTA ${nota}/10 • ${acertou ? 'TREINO CONCLUÍDO' : 'TREINO FALHOU'}`;

    if (!acertou) return;

    if (tipo === 'obs' || tipo === 'arm') {
        marcarTreinamento(tipo);
        const ganho = clamped(Math.ceil(nota / 2), 1, 5);
        if (tipo === 'obs') jogador.haki.obs = clamped(jogador.haki.obs + ganho, 0, 30);
        if (tipo === 'arm') jogador.haki.arm = clamped(jogador.haki.arm + ganho, 0, 30);
    } else if (tipo === 'estilo') {
        // O treino define se você aprendeu o estilo. A maestria de combate vem dos bosses.
        jogador.maestriaEstilo = jogador.maestria;
    }

    atualizarCartaz();
    atualizarBotoesIlha();
}

// ============================================================
// MINIGAMES DE HAKI
// ============================================================

let minigameLoop = null;
let minigameAtivo = false;
let mgTipo = '';
let mgPos = 0;
let mgDir = 1;
let mgTargetPos = 0;
let segurandoArm = false;
let tempoArmamento = 5;
let intervaloTimer = null;

function mgConfig(tipo) {
    mgTipo = tipo;
    minigameAtivo = true;
    cancelarLoopsMinigame();
    segurandoArm = false;
}

function abrirMinigame(tipo) {
    if (tipo === 'rei') return;

    if (treinamentoConcluido(tipo)) {
        log(`Você já concluiu o treinamento de ${tipo === 'obs' ? 'Observação' : 'Armamento'} nesta ilha. Não pode repetir até avançar para outra ilha.`);
        return;
    }

    if ((tipo === 'obs' && jogador.haki.obs >= 30) || (tipo === 'arm' && jogador.haki.arm >= 30)) {
        log('Seu Haki já atingiu 30/30. O treino não pode passar do limite.');
        return;
    }

    mgConfig(tipo);
    el('nota-treino').hidden = true;
    el('btn-tentar-novamente').hidden = true;
    el('btn-acao-minigame').hidden = false;
    el('btn-acao-minigame').onmousedown = acaoMinigameDown;
    el('btn-acao-minigame').onmouseup = acaoMinigameUp;
    el('btn-acao-minigame').ontouchstart = acaoMinigameDown;
    el('btn-acao-minigame').ontouchend = acaoMinigameUp;

    if (tipo === 'obs') {
        el('titulo-minigame').textContent = 'Haki da Observação';
        el('instrucao-minigame').textContent = 'A mira passa muito rápido. Aperte AÇÃO/ESPAÇO quando o centro da mira coincidir com o alvo.';
        el('obs-minigame').hidden = false;
        el('arm-minigame').hidden = true;
        mgPos = 0;
        mgDir = jogador.haki.obs >= 15 ? 20 : 15;
        moverAlvoObs();
        loopObs();
    }

    if (tipo === 'arm') {
        el('titulo-minigame').textContent = 'Haki do Armamento';
        el('instrucao-minigame').textContent = 'A agulha é pesada de propósito. Segure AÇÃO/ESPAÇO para empurrar e solte na zona verde. Soltar fora falha.';
        el('obs-minigame').hidden = true;
        el('arm-minigame').hidden = false;
        tempoArmamento = 5;
        el('timer-minigame').textContent = tempoArmamento;
        mgPos = 0;
        loopArm();
        intervaloTimer = setInterval(() => {
            if (!minigameAtivo || mgTipo !== 'arm') return;
            tempoArmamento--;
            el('timer-minigame').textContent = tempoArmamento;
            if (tempoArmamento <= 0) validarMinigameArm();
        }, 1000);
    }

    mudarTela('tela-minigame');
}

function moverAlvoObs() {
    const stage = el('obs-stage');
    const alvo = el('obs-target');
    if (!stage || !alvo) return;
    const margem = 10;
    const maxX = Math.max(margem, stage.clientWidth - alvo.offsetWidth - margem);
    mgTargetPos = margem + Math.random() * maxX;
    alvo.style.left = `${mgTargetPos}px`;
}

function loopObs() {
    if (!minigameAtivo || mgTipo !== 'obs') return;
    const stage = el('obs-stage');
    const cross = el('obs-crosshair');
    const target = el('obs-target');
    if (!stage || !cross || !target) return;

    const maxX = Math.max(10, stage.clientWidth - 34);
    mgPos += mgDir;
    if (mgPos >= maxX || mgPos <= 0) mgDir *= -1;
    cross.style.left = `${mgPos}px`;
    minigameLoop = requestAnimationFrame(loopObs);
}

function loopArm() {
    if (!minigameAtivo || mgTipo !== 'arm') return;
    const needle = el('arm-needle');
    const stage = document.querySelector('.heavy-stage');
    if (!needle || !stage) return;

    const maxX = Math.max(0, stage.clientWidth - 22);

    if (segurandoArm) {
        // PESADA: sobe devagar e treme.
        mgPos += 1.5 + Math.random() * 0.8;
        mgPos += Math.random() * 1.3 - 0.65;
    } else {
        // Soltou: cai rápido.
        mgPos -= 7.2;
    }

    mgPos = clamped(mgPos, 0, maxX);
    needle.style.left = `${mgPos}px`;
    minigameLoop = requestAnimationFrame(loopArm);
}

function acaoMinigameDown(event) {
    if (event && event.type === 'mousedown' && event.button !== 0) return;
    if (!minigameAtivo) return;

    if (mgTipo === 'obs') validarMinigameObs();
    if (mgTipo === 'arm') segurandoArm = true;
}

function acaoMinigameUp() {
    if (mgTipo === 'arm' && minigameAtivo) {
        segurandoArm = false;
        validarMinigameArm();
    }
}

function validarMinigameObs() {
    if (!minigameAtivo || mgTipo !== 'obs') return;

    const targetCenter = mgTargetPos + 42;
    const crossCenter = mgPos + 16;
    const distancia = Math.abs(targetCenter - crossCenter);
    let nota = Math.round(10 - distancia / 17);
    nota = clamped(nota, 0, 10);

    minigameAtivo = false;
    cancelarLoopsMinigame();

    const acertou = nota >= 5;
    mostrarNotaTreino(nota, 'obs', acertou);
    if (acertou) {
        log(`👁 Previsão perfeita. Haki da Observação: ${jogador.haki.obs}/30.`);
    } else {
        log('❌ Você errou o timing. O treino não foi concluído, então poderá tentar novamente.');
        el('btn-tentar-novamente').hidden = false;
    }
}

function validarMinigameArm() {
    if (!minigameAtivo || mgTipo !== 'arm') return;

    minigameAtivo = false;
    cancelarLoopsMinigame();

    const stage = document.querySelector('.heavy-stage');
    const zona = el('arm-zone');
    const zonaInicio = stage.clientWidth * 0.44;
    const zonaFim = zonaInicio + zona.offsetWidth;
    const centroAgulha = mgPos + 11;
    const distancia = centroAgulha < zonaInicio ? zonaInicio - centroAgulha : centroAgulha > zonaFim ? centroAgulha - zonaFim : 0;
    let nota = Math.round(10 - distancia / 17);
    nota = clamped(nota, 0, 10);

    const acertou = nota >= 5;
    mostrarNotaTreino(nota, 'arm', acertou);
    if (acertou) {
        log(`✊ Endurecimento concluído. Haki do Armamento: ${jogador.haki.arm}/30.`);
    } else {
        log('❌ A agulha caiu fora da zona. O Armamento não foi concluído.');
        el('btn-tentar-novamente').hidden = false;
    }
}

function recomecarMinigame() {
    if (mgTipo === 'estilo') abrirMinigameEstilo();
    else abrirMinigame(mgTipo);
}

function fecharMinigame() {
    minigameAtivo = false;
    segurandoArm = false;
    cancelarLoopsMinigame();
    if (estiloHandler) {
        window.removeEventListener('keydown', estiloHandler);
        estiloHandler = null;
    }
    carregarTelaDaIlha();
}

function cancelarLoopsMinigame() {
    if (minigameLoop) cancelAnimationFrame(minigameLoop);
    minigameLoop = null;
    if (intervaloTimer) clearInterval(intervaloTimer);
    intervaloTimer = null;
}

window.addEventListener('keydown', event => {
    if (event.code !== 'Space') return;
    const telaVisivel = !el('tela-minigame').classList.contains('tela-oculta');
    if (!telaVisivel || !minigameAtivo || mgTipo === 'estilo') return;
    event.preventDefault();
    if (!event.repeat) acaoMinigameDown(event);
});

window.addEventListener('keyup', event => {
    if (event.code !== 'Space') return;
    if (!minigameAtivo || mgTipo !== 'arm') return;
    event.preventDefault();
    acaoMinigameUp();
});

// ============================================================
// HAKI DO REI
// ============================================================

function tentarDespertarHakiReiNaturalmente() {
    if (!jogador.haki.rei || jogador.haki.reiEstado !== 'Adormecido') return false;
    const boss = bossAtualReal();
    if (!boss) return false;

    // Sem botão: o despertar acontece sozinho dentro de uma luta.
    // Akainu é o gatilho narrativo especial: se você realmente nasceu com o Rei,
    // a pressão da luta desperta o Haki quando a batalha entra na zona crítica.
    const eAkainu = boss.nome.includes('Akainu');
    const condicaoAkainu = jogador.vida <= jogador.vidaMaxima * 0.55 || estado.bossHP <= boss.hpMax * 0.55;

    if (eAkainu && condicaoAkainu) {
        despertarHakiRei();
        logBatalha('🚨 SISTEMA: há algo diferente em você. O Haki do Rei adormecido reagiu à pressão de Akainu.');
        return true;
    }

    const muitoDificil = boss.extremo || boss.despertarRei;
    const condicaoFisica = jogador.vida <= jogador.vidaMaxima * 0.40 || estado.bossHP <= boss.hpMax * 0.35;
    const chance = muitoDificil && condicaoFisica ? 0.28 : 0.03;

    if (Math.random() < chance) {
        despertarHakiRei();
        return true;
    }
    return false;
}

function despertarHakiRei() {
    if (!jogador.haki.rei || jogador.haki.reiEstado === 'Despertado!') return;
    jogador.haki.reiEstado = 'Despertado!';
    jogador.haki.reiValor = 30;
    jogador.haki.reiMax = 50;
    atualizarCartaz();
    mostrarBotaoHakiRei();
    logBatalha('👑 Uma pressão absurda tomou o campo. Seu HAKI DO REI DESPERTOU no meio da batalha! Agora ele pode ser ativado como os outros Hakis.');
}

function mostrarBotaoHakiRei() {
    if (jogador.haki.reiEstado !== 'Despertado!') {
        el('btn-buff-rei').hidden = true;
        return;
    }
    el('btn-buff-rei').hidden = false;
}

// ============================================================
// ALIADOS
// ============================================================

function chanceAliadoDaIlha() {
    const opts = ilhaAtual().options || {};
    if (opts.homemPeixeAliado != null) return opts.homemPeixeAliado;
    if (opts.aliadoGigante != null) return opts.aliadoGigante;
    if (opts.aliadoChance != null) return opts.aliadoChance;
    return 0.35;
}

function procurarAliado() {
    const opts = ilhaAtual().options || {};
    if (opts.aliadoBuscaDisponivel === false) {
        log('Você já procurou um aliado nesta ilha.');
        return;
    }
    opts.aliadoBuscaDisponivel = false;

    if (Math.random() > chanceAliadoDaIlha()) {
        log('👥 Você procurou alguém para recrutar, mas ninguém quis entrar no barco.');
        return;
    }

    let raca = randomItem(racas).nome;
    if (opts.homemPeixeAliado && Math.random() < opts.homemPeixeAliado) raca = 'Homem-Peixe';
    if (opts.aliadoGigante && Math.random() < opts.aliadoGigante) raca = 'Gigante';

    const carpinteiro = opts.carpinteiros && Math.random() < opts.carpinteiros;
    const estiloFishman = opts.estiloFishman && raca === 'Homem-Peixe' && Math.random() < opts.estiloFishman;

    const aliado = {
        nome: carpinteiro ? 'Carpinteiro de Water 7' : estiloFishman ? 'Mestre do Karatê dos Homens-Peixe' : randomItem(nomesAliados),
        raca,
        poder: carpinteiro ? 15 : raca === 'Gigante' ? 26 : raca === 'Homem-Peixe' ? 13 : 7 + Math.floor(Math.random() * 8),
        fruta: null,
        recusouFrutas: false,
        aceitouFruta: false,
        ataqueUsadoNaRodada: false,
        cooldown: 0
    };

    jogador.aliados.push(aliado);

    if (jogador.raca === 'Homem-Peixe' && raca === 'Humano' && ilhaAtual().nome === 'Ilha dos Homens-Peixe') {
        jogador.recompensa += 100000;
        log('😂 ROGER! Você tirou um humano numa ilha onde 99,9% dos aliados deveriam ser Homens-Peixe. Que sorte absurda.');
    } else {
        log(`👥 ${aliado.nome} entrou para sua tripulação.`);
    }

    atualizarPoder();
    montarListaAliados();
    atualizarCartaz();
}

function abrirAliados() {
    montarListaAliados();
    montarInventarioFrutas();
    mudarTela('tela-aliados');
}

function montarListaAliados() {
    const lista = el('lista-aliados');
    if (!lista) return;
    lista.innerHTML = '';
    el('contador-tripulacao').textContent = `Tripulação: ${jogador.aliados.length}`;

    if (!jogador.aliados.length) {
        lista.innerHTML = '<div class="empty-card">Nenhum aliado ainda. Procure alguém no porto.</div>';
        return;
    }

    jogador.aliados.forEach((aliado, index) => {
        const card = document.createElement('div');
        card.className = 'ally-card';
        const avatar = document.createElement('img');
        avatar.className = 'ally-avatar';
        avatar.src = img(aliado.raca === 'Gigante' ? 'GIGANTE' : aliado.nome.split(' ')[0].toUpperCase(), '263c4e', 200, 200);
        avatar.alt = aliado.nome;

        const body = document.createElement('div');
        body.innerHTML = `<div class="ally-name">${aliado.nome}</div><div class="ally-meta">Raça: ${aliado.raca}<br>Poder: +${aliado.poder}<br>${aliado.fruta ? `Fruta: ${aliado.fruta.nome}` : aliado.recusouFrutas ? 'Recusa frutas permanentemente' : 'Pode receber uma fruta'}</div>`;

        if (!aliado.fruta && !aliado.recusouFrutas && jogador.inventario.length) {
            const btn = document.createElement('button');
            btn.className = 'btn-acao';
            btn.textContent = 'OFERECER FRUTA';
            aplicarImagemBotao(btn, img('OFERECER+FRUTA', '3b5840', 120, 90));
            btn.onclick = () => abrirEscolhaFrutaParaAliado(index);
            body.appendChild(btn);
        }

        card.append(avatar, body);
        lista.appendChild(card);
    });
}

function montarInventarioFrutas() {
    const lista = el('lista-inventario-frutas');
    if (!lista) return;
    lista.innerHTML = '';

    if (!jogador.inventario.length) return;

    jogador.inventario.forEach((frutaAtual, index) => {
        const card = document.createElement('div');
        card.className = 'inventory-card';
        card.innerHTML = `
            <img class="inventory-fruit-img" src="${frutaAtual.img}" alt="${frutaAtual.nome}">
            <div class="inventory-name">${frutaAtual.nome}</div>
            <div class="inventory-meta">${frutaAtual.raridade} • Poder +${frutaAtual.poder}</div>
        `;
        const btn = document.createElement('button');
        btn.className = 'btn-acao';
        btn.textContent = 'OFERECER A UM ALIADO';
        aplicarImagemBotao(btn, img('OFERECER', '3b5840', 120, 90));
        btn.disabled = !jogador.aliados.some(a => !a.fruta && !a.recusouFrutas);
        btn.onclick = () => oferecerFrutaQualquerAliado(index);
        card.appendChild(btn);
        lista.appendChild(card);
    });
}

function abrirEscolhaFrutaParaAliado(aliadoIndex) {
    const frutaIndex = jogador.inventario.length ? 0 : -1;
    if (frutaIndex < 0) {
        log('Você não tem frutas guardadas.');
        return;
    }
    resolverOfertaFruta(aliadoIndex, frutaIndex);
}

function oferecerFrutaQualquerAliado(inventarioIndex) {
    const idx = jogador.aliados.findIndex(a => !a.fruta && !a.recusouFrutas);
    if (idx === -1) {
        log('Nenhum aliado está aceitando uma fruta.');
        return;
    }
    resolverOfertaFruta(idx, inventarioIndex);
}

function resolverOfertaFruta(aliadoIndex, inventarioIndex) {
    const aliado = jogador.aliados[aliadoIndex];
    const frutaGuardada = jogador.inventario[inventarioIndex];
    if (!aliado || !frutaGuardada) return;
    if (aliado.fruta || aliado.recusouFrutas) return;

    const aceitou = Math.random() < 0.50;
    if (aceitou) {
        aliado.fruta = frutaGuardada;
        aliado.aceitouFruta = true;
        jogador.inventario.splice(inventarioIndex, 1);
        log(`🍈 ${aliado.nome} aceitou a ${frutaGuardada.nome}! Agora ele também tem uma fruta.`);
    } else {
        aliado.recusouFrutas = true;
        log(`🙅 ${aliado.nome} recusou a fruta e decidiu isso permanentemente. A fruta continua no navio.`);
    }

    atualizarPoder();
    montarListaAliados();
    montarInventarioFrutas();
    atualizarCartaz();
}

// ============================================================
// BATALHA
// ============================================================

function selecionarBossParaFacao() {
    const ilha = ilhaAtual();
    const lista = ilha.bosses;

    if (ilha.nome === 'Marineford') {
        if (jogador.faccao === 'Pirata') {
            // A rota pirata pega Aokiji, Akainu e Kizaru.
            return lista.slice(0, 3);
        }
        // A rota marinha pega Barba Branca, Marco e Ace.
        return lista.slice(3);
    }

    if (jogador.faccao === 'Marinha' && ilha.nome === 'Egghead') {
        return criarMissaoVegapunks();
    }

    return lista;
}

function criarMissaoVegapunks() {
    if (!ilhas[estado.ilhaIndex]._vegapunks) {
        ilhas[estado.ilhaIndex]._vegapunks = [
            'Vegapunk Stella', 'Vegapunk Shaka', 'Vegapunk Lilith', 'Vegapunk Edison', 'Vegapunk Pythagoras', 'Vegapunk Atlas', 'Vegapunk York'
        ].map((nome, i) => boss(nome, 1000 + i * 80, 160 + i * 12, 450000 + i * 50000, nome.toUpperCase().replaceAll(' ', '+'), true));
    }
    return ilhas[estado.ilhaIndex]._vegapunks;
}

function listaBossesDaIlha() {
    if (ilhaAtual().nome === 'Marineford') return selecionarBossParaFacao();
    if (jogador.faccao === 'Marinha' && ilhaAtual().nome === 'Egghead') return criarMissaoVegapunks();
    return ilhaAtual().bosses;
}

function bossAtualReal() {
    return listaBossesDaIlha()[estado.bossIndex] || null;
}

function iniciarBoss() {
    const ilha = ilhaAtual();
    carregarProgressoBossDaIlha();

    if (ilha.options?.evento === 'alabasta-trap' && !ilha.options.trapTriggered) {
        ativarArmadilhaAlabasta();
        return;
    }

    const boss = bossAtualReal();
    if (!boss) {
        log('Não existe outro boss nesta ilha.');
        return;
    }

    estado.bossAtivo = boss;
    estado.bossHP = boss.hpMax;
    estado.ataqueEmAndamento = false;
    estado.hakiArmAtivo = false;
    estado.hakiObsAtivo = false;
    estado.hakiReiAtivo = false;
    estado.revestimentoReiAtivo = false;
    estado.cooldownsAtaques = {};
    estado.aliadoAtacou = false;
    resetarCooldownsDosAliados();

    // O jogador entra em cada nova boss battle com a vida restaurada,
    // mas a vida máxima agora cresce conforme a build evolui.
    atualizarPoder();
    jogador.vida = jogador.vidaMaxima;

    el('nome-boss').textContent = boss.nome;
    el('nome-boss-status').textContent = boss.nome;
    el('img-boss-combate').src = boss.img;
    el('img-boss-combate').onerror = () => {
        el('img-boss-combate').onerror = null;
        el('img-boss-combate').src = img(boss.nome.toUpperCase().replaceAll(' ', '+'), '3a2020', 500, 360);
    };

    el('btn-reiniciar-batalha').hidden = true;
    el('btn-sair-batalha').hidden = false;
    el('hp-boss-max').textContent = boss.hpMax;
    mostrarBotaoHakiRei();
    mostrarBotaoRevestimentoRei();
    montarPainelAtaques();
    montarPainelAliadosBatalha();
    atualizarBarrasHP();

    if (boss.requerHaki) {
        logBatalha(`⚠ ${boss.nome} possui uma defesa que só pode ser vencida com Haki. Ative Observação, Armamento ou Haki do Rei.`);
    } else if (boss.extremo) {
        logBatalha(`🔥 ${boss.nome} é uma batalha EXTREMA. Aliados não entram. Aqui o sistema pode despertar seu Haki do Rei naturalmente.`);
    } else {
        logBatalha(`${boss.nome} entrou no campo. Faça seu movimento.`);
    }

    if (boss.nome.includes('Akainu') && jogador.haki.rei && jogador.haki.reiEstado === 'Adormecido') {
        logBatalha('🚨 Algo está adormecido em você. Esta batalha contra Akainu pode fazer o Haki do Rei despertar naturalmente.');
    }

    if (boss.nome === 'Kaido') {
        mostrarBotaoRevestimentoRei();
    }

    mudarTela('tela-combate');
}

function calcularMultiplicadoresCombate() {
    atualizarPoder();
    const boss = estado.bossAtivo;
    let multJogador = 1;
    let multBoss = 1;

    if (jogador.poder > boss.poder * 2) multJogador = 5;
    else if (boss.poder > jogador.poder * 2) multBoss = 5;

    // Kaido continua esmagador mesmo quando a build do jogador já ficou forte.
    if (boss.esmagador) multBoss = Math.max(multBoss, 3.50);

    return { multJogador, multBoss };
}

function ataqueDisponivel(golpe) {
    return jogador.maestria >= (golpe.req || 0);
}

function montarPainelAtaques() {
    const painel = el('painel-ataques');
    painel.innerHTML = '';
    if (!estado.bossAtivo) return;

    montarFormasGomu();

    adicionarBotaoAtaque(painel, {
        nome: 'Soco Básico',
        dano: 15,
        req: 0,
        img: img('SOCO+BASICO', '24323c', 700, 500),
        grupo: 'Base',
        tipo: 'base'
    });

    if (jogador.estiloLuta) {
        const estilo = estilos.find(e => e.nome === jogador.estiloLuta);
        if (estilo) estilo.ataques.forEach(g => adicionarBotaoAtaque(painel, { ...g, grupo: estilo.nome, tipo: 'estilo' }));
    }

    if (jogador.fruta) {
        let ataquesFruta = jogador.fruta.ataques;
        if (jogador.fruta.nome === 'Gomu Gomu no Mi' && jogador.fruta.formas) {
            ataquesFruta = jogador.fruta.formas[jogador.fruta.formaAtual || 'base'].ataques;
        }
        ataquesFruta.forEach(g => adicionarBotaoAtaque(painel, { ...g, grupo: jogador.fruta.nome + (jogador.fruta.nome === 'Gomu Gomu no Mi' ? ` • ${jogador.fruta.formas[jogador.fruta.formaAtual || 'base'].nome}` : ''), tipo: 'fruta' }));
    }
}

function montarFormasGomu() {
    let area = el('painel-formas-fruta');
    const painelAtaques = el('painel-ataques');
    if (!painelAtaques) return;

    if (!area) {
        area = document.createElement('div');
        area.id = 'painel-formas-fruta';
        area.className = 'fruit-form-grid';
        painelAtaques.parentElement.insertBefore(area, painelAtaques);
    }

    area.innerHTML = '';
    if (!jogador.fruta || jogador.fruta.nome !== 'Gomu Gomu no Mi' || !jogador.fruta.formas) {
        area.hidden = true;
        return;
    }

    area.hidden = false;
    const titulo = document.createElement('div');
    titulo.className = 'attack-group-title';
    titulo.textContent = `FORMAS DA GOMU GOMU • MAESTRIA ${jogador.maestria}`;
    area.appendChild(titulo);

    const botoes = document.createElement('div');
    botoes.className = 'fruit-form-buttons';

    Object.entries(jogador.fruta.formas).forEach(([chave, forma]) => {
        const btn = document.createElement('button');
        btn.className = 'btn-acao fruta-form-btn';
        btn.textContent = `${forma.nome} • Req. ${forma.req}`;
        aplicarImagemBotao(btn, forma.img);
        btn.disabled = jogador.maestria < forma.req;
        if (jogador.fruta.formaAtual === chave) btn.classList.add('selecionado');
        if (!btn.disabled) btn.onclick = () => {
            jogador.fruta.formaAtual = chave;
            estado.ataqueEmAndamento = false;
            logBatalha(`🍖 Forma alterada para ${forma.nome}. Seus golpes mudaram.`);
            montarPainelAtaques();
        };
        botoes.appendChild(btn);
    });

    area.appendChild(botoes);
}

function chaveDoGolpe(golpe) {
    return `${golpe.grupo || 'Base'}::${golpe.nome}`;
}

function cooldownDoGolpe(golpe) {
    return Number(estado.cooldownsAtaques[chaveDoGolpe(golpe)] || 0);
}

function golpeEmCooldown(golpe) {
    return cooldownDoGolpe(golpe) > 0;
}

function aplicarCooldownDoGolpe(golpe) {
    estado.cooldownsAtaques[chaveDoGolpe(golpe)] = 1;
}

function reduzirCooldownsDeAtaques() {
    Object.keys(estado.cooldownsAtaques).forEach(chave => {
        estado.cooldownsAtaques[chave] = Math.max(0, estado.cooldownsAtaques[chave] - 1);
        if (estado.cooldownsAtaques[chave] <= 0) delete estado.cooldownsAtaques[chave];
    });
}

function reduzirCooldownsDosAliados() {
    jogador.aliados.forEach(aliado => {
        aliado.cooldown = Math.max(0, Number(aliado.cooldown || 0) - 1);
    });
}

function resetarCooldownsDosAliados() {
    jogador.aliados.forEach(aliado => {
        aliado.cooldown = 0;
        aliado.ataqueUsadoNaRodada = false;
    });
}

function adicionarBotaoAtaque(painel, golpe) {
    const btn = document.createElement('button');
    btn.className = 'ataque-btn';
    btn.style.backgroundImage = `url("${golpe.img}")`;

    const cooldown = cooldownDoGolpe(golpe);
    const emCooldown = cooldown > 0;
    btn.disabled = !ataqueDisponivel(golpe) || emCooldown || estado.ataqueEmAndamento || !estado.bossAtivo || estado.bossHP <= 0;

    if (!btn.disabled && estado.hakiArmAtivo) btn.classList.add('unlocked-armament');
    if (emCooldown) btn.classList.add('em-cooldown');

    const conteudo = document.createElement('span');
    conteudo.className = 'ataque-btn-content';
    const textoCooldown = emCooldown ? ` • COOLDOWN ${cooldown} TURNO` : '';
    conteudo.innerHTML = `<span class="ataque-btn-name">${golpe.nome}</span><span class="ataque-btn-req">${golpe.grupo} • Maestria ${golpe.req}+${textoCooldown}</span>`;
    btn.appendChild(conteudo);
    aplicarImagemBotao(btn, golpe.img);
    btn.onclick = () => usarAtaque(golpe);
    painel.appendChild(btn);
}

function usarAtaque(golpe) {
    const boss = estado.bossAtivo;
    if (!boss || estado.bossHP <= 0 || jogador.vida <= 0 || estado.ataqueEmAndamento) return;

    if (!ataqueDisponivel(golpe)) {
        logBatalha(`Maestria insuficiente para ${golpe.nome}.`);
        return;
    }

    if (golpeEmCooldown(golpe)) {
        logBatalha(`${golpe.nome} está em cooldown. Espere 1 turno.`);
        return;
    }

    if (boss.requerHaki && !temHakiAtivo()) {
        logBatalha(`${boss.nome} não pode ser derrotado sem Haki ativo.`);
        return;
    }

    estado.ataqueEmAndamento = true;
    aplicarCooldownDoGolpe(golpe);
    montarPainelAtaques();

    const { multJogador, multBoss } = calcularMultiplicadoresCombate();
    const atributos = calcularAtributosCombate();

    let dano = golpe.dano + Math.floor(atributos.dano * 0.42);

    if (golpe.tipo === 'fruta') dano += Math.floor((jogador.fruta?.poder || 0) * 1.15);
    if (golpe.tipo === 'estilo') dano += 18 + jogador.maestria * 2;
    if (estado.hakiArmAtivo) dano *= 1.25 + jogador.haki.arm * 0.025;
    if (jogador.haki.armAvancado) dano *= 1.35;
    if (estado.hakiReiAtivo) dano *= 1.35;
    if (estado.revestimentoReiAtivo && boss.nome === 'Kaido') dano *= 1.75;
    if (jogador.fruta?.despertada) dano *= 1.30;

    dano *= multJogador;

    // Kaido continua sendo uma parede mesmo quando o jogador ficou forte.
    if (boss.esmagador) dano *= 0.68;
    if (boss.resistenciaDano) dano *= boss.resistenciaDano;

    dano = Math.max(1, Math.round(dano));
    estado.bossHP = Math.max(0, estado.bossHP - dano);

    atualizarBarrasHP();

    if (boss.nome.includes('Akainu')) {
        tentarDespertarHakiReiNaturalmente();
    } else {
        tentarDespertarHakiReiNaturalmente();
    }

    const extras = [];
    if (estado.hakiArmAtivo) extras.push('✊ Armamento');
    if (estado.hakiReiAtivo) extras.push('👑 Rei ativo');
    if (estado.revestimentoReiAtivo) extras.push('👑 REVESTIMENTO DO REI');
    logBatalha(`Você usou ${golpe.nome} e causou ${dano} de dano.${extras.length ? ` ${extras.join(' • ')}` : ''}`);

    if (estado.bossHP <= 0) {
        vencerBoss();
        return;
    }

    setTimeout(() => contraAtaqueBoss(multBoss), 650);
}

function temHakiAtivo() {
    return estado.hakiArmAtivo || estado.hakiObsAtivo || estado.hakiReiAtivo;
}

function contraAtaqueBoss(multBoss) {
    const boss = estado.bossAtivo;
    if (!boss || estado.bossHP <= 0 || jogador.vida <= 0) return;

    const atributos = calcularAtributosCombate();
    const baseDano = Math.max(15, Math.floor(boss.poder / 9) + Math.floor(Math.random() * 8));
    let dano = Math.round(baseDano * multBoss);

    // A Observação ajuda, mas não transforma o jogador num personagem intocável.
    let esquiva = 0.02 + jogador.haki.obs * 0.004;
    if (estado.hakiObsAtivo) esquiva += 0.10 + jogador.haki.obs * 0.0025;
    if (jogador.haki.obsAvancado) esquiva = Math.max(esquiva, 0.50);
    esquiva = clamped(esquiva, 0.02, 0.55);

    // Fruta, estilo, Armamento, raça e progressão aumentam a redução de dano.
    dano = Math.round(dano * (1 - atributos.reducao / 100));

    if (boss.nome === 'Kaido') {
        dano = Math.round(dano * 1.35);
    }

    if (Math.random() < esquiva) {
        logBatalha(`👁 Você previu o ataque de ${boss.nome} e ESQUIVOU! (${Math.round(esquiva * 100)}% de chance)`);
    } else {
        jogador.vida = Math.max(0, jogador.vida - dano);
        logBatalha(`💥 ${boss.nome} contra-atacou e causou ${dano} de dano. Redução aplicada: ${atributos.reducao}%.`);
    }

    tentarDespertarHakiReiNaturalmente();
    atualizarBarrasHP();

    if (jogador.vida <= 0) {
        tratarDerrotaContraBoss(boss);
        return;
    }

    // O ataque usado acabou de gastar seu turno de cooldown.
    reduzirCooldownsDeAtaques();
    reduzirCooldownsDosAliados();

    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    montarPainelAtaques();
    montarPainelAliadosBatalha();
}

function montarPainelAliadosBatalha() {
    const painel = el('painel-aliados-batalha');
    const lista = el('lista-ataques-aliados');
    if (!painel || !lista) return;

    const boss = estado.bossAtivo;
    const podeAliado = Boolean(boss) && jogador.aliados.length > 0;

    // A regra atual é simples: se existe aliado, ele pode aparecer em QUALQUER boss battle.
    painel.hidden = false;
    lista.innerHTML = '';

    if (!podeAliado) {
        const vazio = document.createElement('button');
        vazio.className = 'btn-acao aliado-nenhum-btn';
        vazio.disabled = true;
        vazio.textContent = 'ALIADOS: NENHUM DISPONÍVEL';
        aplicarImagemBotao(vazio, img('SEM+ALIADOS', '333944', 700, 500));
        lista.appendChild(vazio);
        return;
    }

    jogador.aliados.forEach((aliado, index) => {
        const btn = document.createElement('button');
        btn.className = 'ataque-btn aliado-ataque-btn';
        const cooldown = Number(aliado.cooldown || 0);
        btn.disabled = estado.ataqueEmAndamento || estado.aliadoAtacou || estado.bossHP <= 0 || cooldown > 0;
        btn.textContent = cooldown > 0 ? `${aliado.nome}\nCOOLDOWN 1 TURNO` : `${aliado.nome}\nATACAR`;
        aplicarImagemBotao(btn, img(aliado.nome.toUpperCase().replaceAll(' ', '+'), '263c4e', 700, 500));
        btn.onclick = () => usarAtaqueDoAliado(index);
        lista.appendChild(btn);
    });
}

function usarAtaqueDoAliado(index) {
    const boss = estado.bossAtivo;
    const aliado = jogador.aliados[index];
    if (!boss || !aliado || estado.ataqueEmAndamento || estado.aliadoAtacou || estado.bossHP <= 0) return;
    if (Number(aliado.cooldown || 0) > 0) {
        logBatalha(`${aliado.nome} está em cooldown. Espere 1 turno.`);
        return;
    }
    estado.ataqueEmAndamento = true;
    estado.aliadoAtacou = true;
    aliado.ataqueUsadoNaRodada = true;
    aliado.cooldown = 1;

    let dano = aliado.poder * 4 + Math.floor(Math.random() * 10);
    if (aliado.fruta) dano += Math.floor(aliado.fruta.poder * 0.8);
    estado.bossHP = Math.max(0, estado.bossHP - dano);
    atualizarBarrasHP();
    logBatalha(`👥 ${aliado.nome} atacou e causou ${dano} de dano!`);

    if (estado.bossHP <= 0) {
        vencerBoss();
        return;
    }

    setTimeout(() => {
        // O boss responde ao turno do aliado.
        contraAtaqueBoss(1);
    }, 650);
}

function atualizarBarrasHP() {
    const boss = estado.bossAtivo;
    atualizarPoder();
    el('hp-jogador').textContent = Math.max(0, jogador.vida);
    el('hp-max-jogador').textContent = jogador.vidaMaxima;
    el('hp-boss').textContent = boss ? Math.max(0, estado.bossHP) : 0;
    el('hp-boss-max').textContent = boss ? boss.hpMax : 0;
    el('poder-combate-jogador').textContent = jogador.poder;
    el('poder-combate-boss').textContent = boss ? boss.poder : 0;

    const pctJogador = jogador.vidaMaxima ? (jogador.vida / jogador.vidaMaxima) * 100 : 0;
    const pctBoss = boss ? (estado.bossHP / boss.hpMax) * 100 : 0;
    el('barra-hp-jogador').style.width = `${Math.max(0, pctJogador)}%`;
    el('barra-hp-boss').style.width = `${Math.max(0, pctBoss)}%`;
}

function toggleHakiArmamento() {
    if (jogador.haki.arm <= 0) {
        logBatalha('✊ Você ainda não tem Haki do Armamento. Treine primeiro.');
        return;
    }
    estado.hakiArmAtivo = !estado.hakiArmAtivo;
    atualizarBotoesHakiAtivo();
    montarPainelAtaques();
}

function toggleHakiObservacao() {
    if (jogador.haki.obs <= 0) {
        logBatalha('👁 Você ainda não tem Haki da Observação. Treine primeiro.');
        return;
    }
    estado.hakiObsAtivo = !estado.hakiObsAtivo;
    atualizarBotoesHakiAtivo();
}

function toggleHakiRei() {
    if (jogador.haki.reiEstado !== 'Despertado!') {
        logBatalha('👑 O Haki do Rei ainda não despertou. Não existe botão para despertá-lo.');
        return;
    }
    estado.hakiReiAtivo = !estado.hakiReiAtivo;
    atualizarBotoesHakiAtivo();
    montarPainelAtaques();
}

function atualizarBotoesHakiAtivo() {
    const arm = el('btn-buff-arm');
    const obs = el('btn-buff-obs');
    const rei = el('btn-buff-rei');
    const revestimento = el('btn-revestir-rei');

    arm.classList.toggle('ativado', estado.hakiArmAtivo);
    obs.classList.toggle('ativado', estado.hakiObsAtivo);
    rei.classList.toggle('ativado', estado.hakiReiAtivo);
    if (revestimento) revestimento.classList.toggle('ativado', estado.revestimentoReiAtivo);

    arm.querySelector('small').textContent = estado.hakiArmAtivo ? 'LIGADO • Fortificando golpes' : 'DESLIGADO • Fortalece seus golpes';
    obs.querySelector('small').textContent = estado.hakiObsAtivo ? 'LIGADO • Chance de esquiva aumentada' : 'DESLIGADO • Aumenta sua esquiva';
    rei.querySelector('small').textContent = estado.hakiReiAtivo ? 'LIGADO • Pressão e dano do conquistador' : 'DESLIGADO • Pressão do conquistador';
    mostrarBotaoHakiRei();
    mostrarBotaoRevestimentoRei();
}

function toggleRevestimentoRei() {
    const boss = estado.bossAtivo;
    if (!boss || boss.nome !== 'Kaido') {
        logBatalha('O revestimento especial só pode ser usado contra Kaido.');
        return;
    }

    if (jogador.haki.reiEstado !== 'Despertado!') {
        logBatalha('👑 O botão está aqui, mas o Haki do Rei ainda está adormecido. O revestimento só pode nascer naturalmente na luta.');
        return;
    }

    estado.revestimentoReiAtivo = !estado.revestimentoReiAtivo;
    atualizarBotoesHakiAtivo();
    montarPainelAtaques();

    logBatalha(estado.revestimentoReiAtivo
        ? '👑⚡ Você revestiu seus golpes com Haki do Rei. Mesmo assim, Kaido continua sendo uma aberração de poder.'
        : '👑 Você retirou o revestimento do Rei dos seus golpes.');
}

function mostrarBotaoRevestimentoRei() {
    const btn = el('btn-revestir-rei');
    if (!btn) return;

    const boss = estado.bossAtivo;
    const contraKaido = Boolean(boss && boss.nome === 'Kaido');

    btn.hidden = !contraKaido;
    btn.disabled = !contraKaido || jogador.haki.reiEstado !== 'Despertado!';
    btn.classList.toggle('ativado', estado.revestimentoReiAtivo);

    const small = btn.querySelector('small');
    if (small) {
        if (!contraKaido) small.textContent = 'Disponível somente contra Kaido';
        else if (jogador.haki.reiEstado !== 'Despertado!') small.textContent = 'Aguardando o despertar natural do Haki do Rei';
        else small.textContent = estado.revestimentoReiAtivo ? 'ATIVO • Golpes revestidos' : 'DESLIGADO • Ative para revestir os golpes';
    }
}

function vencerBoss() {
    const boss = estado.bossAtivo;
    if (!boss) return;

    const recompensa = jogador.faccao === 'Tenryuubito' ? Math.floor(boss.recompensa * 0.25) : boss.recompensa;
    jogador.recompensa += recompensa;
    jogador.poderBase += 8;
    jogador.maestria += 1;
    jogador.maestriaEstilo = jogador.maestria;
    jogador.maestriaFruta = jogador.maestria;

    const nomeVencido = boss.nome;
    estado.bossAtivo = null;
    estado.bossHP = 0;
    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;

    estado.bossIndex++;
    salvarProgressoBossDaIlha();

    // Cada boss derrotado aumenta a progressão real e restaura o novo HP máximo.
    atualizarPoder();
    jogador.vida = jogador.vidaMaxima;

    // Batalha final encerra a jornada.
    if (boss.final) {
        finalizarVitoriaFinal();
        return;
    }

    // Katakuri termina com uma fuga obrigatória.
    if (nomeVencido === 'Katakuri') {
        logBatalha('🔥 Você derrotou Katakuri. Agora não existe opção bonita: VOCÊ É OBRIGADO A FUGIR PELA SUA VIDA.');
        setTimeout(() => prepararFugaDepoisDeKatakuri(), 700);
        return;
    }

    logBatalha(`🔥 VITÓRIA! Você derrotou ${nomeVencido}, recebeu B$ ${recompensa.toLocaleString('pt-BR')} e ganhou +1 de MAESTRIA (agora ${jogador.maestria}).`);
    atualizarCartaz();
    atualizarBotoesIlha();
    atualizarBarrasHP();
    montarPainelAtaques();
    montarPainelAliadosBatalha();

    if (boss.requerHaki) log(`⚔ Você superou ${nomeVencido} graças ao Haki.`);
    if (boss.perdeSombra) log('🌑 Gecko Moria caiu. Sua sombra continua com você porque você venceu.');

    // Em Marineford e Egghead, o próximo inimigo aparece automaticamente na ilha.
}

function prepararFugaDepoisDeKatakuri() {
    el('titulo-evento').textContent = 'FUGA DE TOTTO LAND';
    el('nome-evento').textContent = 'Você derrotou Katakuri, agora corre.';
    el('desc-evento').textContent = 'Big Mom e a tripulação inteira sabem que você está aqui. Fugir deixou de ser uma opção narrativa e virou obrigação.';
    el('img-evento').src = img('FUGA+TOTTO+LAND', '522c3b', 600, 420);
    el('botoes-evento').innerHTML = '';
    const btn = criarBotaoEvento('FUGIR PELA VIDA', img('FUGIR', '5b1d25'), () => {
        // Depois de fugir, o objetivo narrativo de Totto Land está encerrado.
        // Isso impede o travamento no botão de próxima ilha.
        ilhas[estado.ilhaIndex].options.eventoResolvido = true;
        log('🏃‍♂️ Você escapou de Totto Land. O objetivo da ilha foi concluído e a rota está liberada.');
        carregarTelaDaIlha();
    });
    el('botoes-evento').appendChild(btn);
    mudarTela('tela-evento');
}

function tratarDerrotaContraBoss(boss) {
    if (boss.extremo) {
        // Segunda vida: só uma vez, somente em uma batalha extrema e somente com Akuma no Mi.
        // O HP atual do boss NÃO é restaurado: todo o avanço da luta fica salvo.
        if (jogador.fruta && !jogador.segundaVidaAkumaUsada) {
            jogador.segundaVidaAkumaUsada = true;
            const despertou = despertarFrutaSegundaVida();
            jogador.vida = Math.max(1, Math.floor(jogador.vidaMaxima * 0.50));
            estado.ataqueEmAndamento = false;
            estado.aliadoAtacou = false;
            estado.hakiArmAtivo = false;
            estado.hakiObsAtivo = false;
            estado.hakiReiAtivo = false;
            atualizarCartaz();
            atualizarBarrasHP();
            montarPainelAtaques();
            montarPainelAliadosBatalha();
            logBatalha(`💀 Você caiu diante de ${boss.nome}... mas sua Akuma no Mi desperta no último instante! ${despertou ? 'DESPERTAR CONCEDIDO.' : ''} Você recebeu uma SEGUNDA VIDA com ${jogador.vida} HP. O boss continua com ${estado.bossHP}/${boss.hpMax} HP: seu avanço foi salvo.`);
            return;
        }

        // Sem fruta ou sem segunda vida restante, uma derrota extrema encerra a jornada.
        finalizarMorte(`💀 ${boss.nome} derrotou você. A segunda vida já foi usada ou você não tinha uma Akuma no Mi para ativá-la.`);
        return;
    }

    if (boss.perdeSombra) {
        jogador.semSombra = true;
        jogador.vida = Math.max(1, Math.floor(jogador.vidaMaxima * 0.25));
        estado.ataqueEmAndamento = false;
        estado.bossAtivo = null;
        log('🌑 Você foi derrotado por Gecko Moria, mas não morreu. Sua sombra foi roubada.');
        mudarTela('tela-ilha');
        atualizarCartaz();
        atualizarBotoesIlha();
        return;
    }

    finalizarMorte(`${boss.nome} derrotou você. Sua jornada terminou aqui.`);
}

function sairDaBatalha() {
    estado.bossAtivo = null;
    estado.ataqueEmAndamento = false;
    estado.hakiArmAtivo = false;
    estado.hakiObsAtivo = false;
    estado.hakiReiAtivo = false;
    estado.revestimentoReiAtivo = false;
    estado.cooldownsAtaques = {};
    resetarCooldownsDosAliados();
    carregarTelaDaIlha();
}

// ============================================================
// EVENTO DE ALABASTA
// ============================================================

function ativarArmadilhaAlabasta() {
    ilhas[estado.ilhaIndex].options.trapTriggered = true;
    el('titulo-evento').textContent = 'ARMADILHA';
    el('nome-evento').textContent = 'Você caiu numa armadilha em Alabasta.';
    el('desc-evento').textContent = 'O site te avisou antes, mas você apertou para enfrentar o boss mesmo assim. Agora prepare-se: a armadilha reduz 10% da sua vida antes da luta.';
    el('img-evento').src = img('ALABASTA+ARMADILHA', '5e442d', 600, 420);
    el('botoes-evento').innerHTML = '';

    const btn = criarBotaoEvento('CONTINUAR NA ARMADILHA', img('ARMADILHA', '5e3028'), () => {
        const dano = Math.floor(jogador.vidaMaxima * 0.10);
        jogador.vida = Math.max(1, jogador.vida - dano);
        log(`🏜️ A armadilha funcionou. Você perdeu ${dano} de vida e agora encara o Crocodile.`);
        mudarTela('tela-ilha');
        iniciarBoss();
    });
    el('botoes-evento').appendChild(btn);
    mudarTela('tela-evento');
}

// ============================================================
// FINAL
// ============================================================

function finalizarVitoriaFinal() {
    jogador.emJornada = false;
    estado.bossAtivo = null;
    atualizarCartaz();
    el('titulo-evento').textContent = 'FIM DA JORNADA';
    el('nome-evento').textContent = `Você derrotou Imu.`;
    el('desc-evento').textContent = jogador.faccao === 'Pirata'
        ? 'Sua aventura chegou ao último inimigo. O mundo nunca mais vai ser o mesmo.'
        : jogador.faccao === 'Marinha'
            ? 'Você chegou ao topo absoluto da sua missão. A era terminou no seu turno.'
            : 'Até o Governo Mundial precisou admitir que isso foi longe demais.';
    el('img-evento').src = img('FIM+DA+JORNADA', '151515', 600, 420);
    el('botoes-evento').innerHTML = '';

    const btn = criarBotaoEvento('JOGAR NOVAMENTE', img('REINICIAR', '5b1d25'), reiniciarJornada);
    el('botoes-evento').appendChild(btn);
    mudarTela('tela-evento');
    log('👑 FIM. A rota inteira foi concluída.');
}

function finalizarMorte(mensagem) {
    jogador.emJornada = false;
    estado.bossAtivo = null;
    estado.ataqueEmAndamento = false;
    cancelarLoopsMinigame();
    el('texto-gameover').textContent = mensagem;
    el('btn-reiniciar-batalha').hidden = false;
    atualizarCartaz();
    mudarTela('tela-gameover');
    log('☠ FIM DE JOGO.');
}

function reiniciarJornada() {
    window.location.reload();
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

(function iniciarInterface() {
    ilhas.forEach(i => {
        i.buscasFruta = 2;
        i.estiloBuscaDisponivel = true;
        i.options = i.options || {};
    });

    el('cartaz').style.display = 'none';
    el('opcoes-marinha').hidden = true;
    el('opcoes-tenryuubito').hidden = true;
    el('btn-buff-rei').hidden = true;
    el('tela-criacao').classList.add('tela-ativa');

    renderizarImagensDosBotoes();
    atualizarHeader();
    atualizarCartaz();
})();
