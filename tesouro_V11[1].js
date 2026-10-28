// ============================================================================
// CONFIGURAÇÕES DE IMAGENS, REUNIDAS NO COMEÇO DO ARQUIVO:
// 1) Fotos dos personagens jogáveis: IMAGENS_PERSONAGEM (inclui Gigante).
// 2) Soco básico: IMAGEM_SOCO_BASICO.
// 3) Imagens das frutas: IMAGENS_FRUTAS.
// 4) Imagens dos ataques de frutas: IMAGENS_ATAQUES_FRUTAS e IMAGENS_ATAQUES_DESPERTADOS_FRUTAS.
// 5) Imagens dos ataques dos estilos: IMAGENS_ATAQUES_ESTILOS.
// 6) Imagem da fruta quando desperta: IMAGENS_DESPERTAR_FRUTAS.
// 7) Botões das formas de fruta: IMAGENS_FORMAS_FRUTAS.
// 8) Miniaturas das ilhas no mapa: IMAGENS_ILHAS (chave = nome exato da ilha).
// ============================================================================

// ============================================================
// ONE PIECE: O INÍCIO
// Motor do RPG. Estrutura preservada, progressão expandida.
// ============================================================

// IMAGEM DO SOCO BÁSICO: cole aqui a URL DIRETA do GIF/imagem (ou caminho relativo).
// Exemplo: const IMAGEM_SOCO_BASICO = 'imagens/luffy-soco.gif';
// Dica: a URL precisa terminar no arquivo de imagem/GIF, não na página que o contém.
// Deixe '' para usar o GIF padrão. Esta configuração é reaplicada após montar o painel.
const IMAGEM_SOCO_BASICO = '';

// FOTOS DO PERSONAGEM: altere as URLs neste bloco no começo do arquivo.
// Troque apenas o texto entre aspas. Aceita URL direta ou caminho relativo, ex.: 'imagens/luffy.png'.
// Há fotos configuráveis para Humano, Mink, Homem-Peixe, Lunaria, Gigante e Tenryuubito (Macho/Fêmea).
// Para mudar as fotos dos Gigantes, altere Gigante-Macho e Gigante-Fêmea abaixo.
const IMAGENS_PERSONAGEM = {
    // Humanos
    'Humano-Macho': 'https://images.everyeye.it/img-notizie/perchE-one-piece-non-introdotto-canti-marinareschi-veri-pirati-v3-816684-1200x1200.webp',
    'Humano-Fêmea': 'https://imgix.ranker.com/user_node_img/50088/1001742696/original/laugh-with-all-my-heart-photo-u1?auto=format&dpr=2&fit=crop&fm=pjpg&q=60&w=500',
    // Minks
    'Mink-Macho': 'https://i.pinimg.com/474x/d1/8c/de/d18cde4b9fbe5c6be6819d051dd12d44.jpg?nii=t',
    'Mink-Fêmea': 'https://m.media-amazon.com/images/M/MV5BNjUxZDg1MmEtZTQxOS00MTdkLThlYjMtM2JkZGZmOGYwNGVjXkEyXkFqcGc%40._V1_.jpg',
    // Homens-peixe
    'Homem-Peixe-Macho': 'https://staticg.sportskeeda.com/editor/2022/11/34473-16687908519875-1920.jpg',
    'Homem-Peixe-Fêmea': 'https://opwiki.org/images/thumb/Otohime_Face.png/800px-Otohime_Face.png',
    // Lunários
    'Lunaria-Macho': 'https://seakoff.com/cdn/shop/articles/lunarians-in-one-piece-the-mysterious-race-and-kings-origins-266094.jpg?v=1718618147&width=1500',
    'Lunaria-Fêmea': 'https://images3.alphacoders.com/136/thumb-1920-1363360.png',
    // Gigantes (Dorry para Macho, Gerd para Fêmea)
    'Gigante-Macho': 'https://cdn.shopify.com/s/files/1/0400/9767/7479/files/One_piece_Dorry_fighting_Luffy.png?v=1686069544',
    'Gigante-Fêmea': 'https://a.storyblok.com/f/178900/2866x1877/7ee3d3bb3e/one-piece-anime-gerd-character-visual.jpeg/m/filters%3Aquality%2895%29format%28webp%29',
    // Tenryuubitos (origem especial, não raça)
    'Tenryuubito-Macho': 'https://image.idntimes.com/post/20250904/tenryuubitooo_cec5da80-4eb6-4927-9e6c-0bf080ec2781.jpg',
    'Tenryuubito-Fêmea': 'https://ami.animecharactersdatabase.com/uploads/chars/5457-416163479.jpg'
};



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
    travessiaResolvida: false,
    tenryuubitoAlmiranteChamado: false,
    tenryuubitoSocorroPendente: false,
    tenryuubitoAlmiranteAtivo: null,
    almirantesPosTimeskip: false
};

// CHANCE DE NASCER TENRYUUBITO: 0.01 = 1%, 0.05 = 5%, 0.10 = 10%.
const CHANCE_TENRYUUBITO = 0.01;

const racas = [
    { nome: 'Humano', bonusPoder: 0, descricao: 'Versátil e sem uma fraqueza racial específica.' },
    { nome: 'Mink', bonusPoder: 0, descricao: 'Sem bônus racial neste sistema.' },
    { nome: 'Gigante', bonusPoder: 0, descricao: 'Corpo colossal: causa 25% mais dano.' },
    { nome: 'Homem-Peixe', bonusPoder: 7, descricao: 'Força física elevada e afinidade com Karatê dos Homens-Peixe.' },
    { nome: 'Lunaria', bonusPoder: 9, descricao: 'Resistência e potencial físico monstruosos.' }
];

const generos = ['Macho', 'Fêmea'];

// IMAGENS DOS ESTILOS: altere o campo img de cada estilo logo abaixo.
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
        nome: 'Karatê dos Homens-Peixe',
        descricao: 'Manipulação da água e golpes devastadores.',
        img: img('FISHMAN+KARATE', '153c4c'),
        bloqueadoComFruta: true,
        ataques: [
            ataque('Samegawara Seiken', 35, 1, 'SAMEGAWARA', '16485c'),
            ataque('Kaimen Wari', 57, 4, 'KAIMEN+WARI', '0f3342')
        ]
    },
];

// PERSONALIZAR FOTOS DOS ESTILOS BÁSICOS:
// Preencha com URL ou caminho de arquivo para substituir o placeholder de cada estilo.
// Exemplo: 'Santoryu': 'imagens/estilos/santoryu.png'
const IMAGENS_ESTILOS = {
    'Santoryu': 'imagens\\pgsy37eqm0ue1.jpg',
    'Perna Negra': 'https://static.wikia.nocookie.net/onepiece/images/9/9b/Diable_Jambe_Infobox.png/revision/latest?cb=20190120215713&path-prefix=pt',
    'Rokushiki': 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/Rokuogan.jpg?w=1600&h=900&fit=crop',
    'Karatê dos Homens-Peixe': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifVOzyHpar-gOogQ5VEY3vtiJ5Lm5W9nAGgWSjhE44Oyx1XX0PdWA_J5h3a6KE-jYeO-WM4rIVssUcFMOyUZP4cMaSUVsek_cGfzIwLWd3Jloj2ze0Do6W9b7z49gVZ2SDw6ChvemYUWzN/s400/111111.gif'
};
estilos.forEach(estilo => {
    const url = IMAGENS_ESTILOS[estilo.nome];
    if (typeof url === 'string' && url.trim()) estilo.img = url.trim();
});

function ataque(nome, dano, req, texto, fundo) {
    return {
        nome,
        dano,
        req,
        img: img(texto, fundo)
    };
}

// IMAGENS DAS FRUTAS: as imagens vêm de fruta(...); edite os campos img ou a função fruta() abaixo.
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
    // NOVAS LOGIAS: cada fruta tem raridade, peso de obtenção, poder e ataques próprios.
    fruta('Pika Pika no Mi', 'Lendária', 1.2, 46, 'f5d75e', [
        ataque('Yata no Kagami', 82, 0, 'YATA+NO+KAGAMI', 'b79a32'),
        ataque('Ama no Murakumo', 132, 4, 'AMA+NO+MURAKUMO', 'e0c64f')
    ]),
    fruta('Goro Goro no Mi', 'Lendária', 1.3, 45, 'e9d84b', [
        ataque('El Thor', 80, 0, 'EL+THOR', 'a8952d'),
        ataque('Raigo', 130, 4, 'RAIGO', 'd4b832')
    ]),
    fruta('Magu Magu no Mi', 'Lendária', 1.1, 48, 'd9472e', [
        ataque('Ryusei Kazan', 86, 0, 'RYUSEI+KAZAN', '8c281c'),
        ataque('Meigo', 138, 4, 'MEIGO', 'c43b25')
    ]),
    fruta('Suna Suna no Mi', 'Rara', 4.5, 30, 'd9bf75', [
        ataque('Desert Spada', 62, 0, 'DESERT+SPADA', '8e7849'),
        ataque('Ground Secco', 98, 4, 'GROUND+SECCO', 'b19a5c')
    ]),
    fruta('Mori Mori no Mi', 'Lendária', 1.6, 41, '4b8d43', [
        ataque('枝突き: Espinhos da Floresta', 76, 0, 'MORI+THORNS', '315b30'),
        ataque('Floresta Devoradora', 120, 4, 'DEVOURING+FOREST', '244523')
    ]),
    fruta('Gasu Gasu no Mi', 'Rara', 3.5, 32, '9eb8b7', [
        ataque('Gastanet', 64, 0, 'GASTANET', '607b7a'),
        ataque('Shinokuni', 102, 4, 'SHINOKUNI', '526b6b')
    ]),
    fruta('Tori Tori no Mi, Modelo: Falcão', 'Rara', 4.2, 28, 'b4a77c', [
        ataque('Mergulho do Falcão', 60, 0, 'FALCAO+MERGULHO', '665a42'),
        ataque('Garras Celestes', 94, 4, 'GARRAS+CELESTES', '8b7955')
    ]),
    fruta('Inu Inu no Mi, Modelo: Chacal', 'Rara', 4.0, 27, 'c69c67', [
        ataque('Investida do Chacal', 58, 0, 'CHACAL+INVESTIDA', '76583a'),
        ataque('Corte Crescente', 91, 4, 'CORTE+CRESCENTE', '60452e')
    ]),
    fruta('Ushi Ushi no Mi, Modelo: Bisão', 'Rara', 3.8, 30, '8c7660', [
        ataque('Investida do Bisão', 63, 0, 'BISAO+INVESTIDA', '584b3d'),
        ataque('Chifrada Devastadora', 98, 4, 'CHIFRADA+DEVASTADORA', '3e352d')
    ]),
    fruta('Neko Neko no Mi, Modelo: Leopardo', 'Lendária', 1.8, 42, 'd1b276', [
        ataque('Shigan', 78, 0, 'SHIGAN', '826b45'),
        ataque('Rokuogan', 122, 4, 'ROKUOGAN', '4a3d2d')
    ]),
    fruta('Inu Inu no Mi, Modelo: Lobo', 'Rara', 3.7, 31, 'a6a9ae', [
        ataque('Presas do Lobo', 64, 0, 'PRESAS+DO+LOBO', '555b63'),
        ataque('Uivo Cortante', 99, 4, 'UIVO+CORTANTE', '3d4249')
    ]),
    fruta('Zou Zou no Mi', 'Rara', 3.6, 32, '9b8b7b', [
        ataque('Tromba Esmagadora', 66, 0, 'TROMBA+ESMAGADORA', '625548'),
        ataque('Pisada Colossal', 102, 4, 'PISADA+COLOSSAL', '463b32')
    ]),
    fruta('Hito Hito no Mi, Modelo: Daibutsu', 'Mítica', 0.65, 56, 'e3c66d', [
        ataque('Onda Dourada', 90, 0, 'ONDA+DOURADA', '8b7435'),
        ataque('Impacto do Buda', 146, 4, 'IMPACTO+BUDA', '655323')
    ]),
    fruta('Tori Tori no Mi, Modelo: Fênix', 'Mítica', 0.55, 58, '55a9e8', [
        ataque('Chamas Azuis', 92, 0, 'CHAMAS+AZUIS', '285f96'),
        ataque('Regeneração Fênix', 142, 4, 'REGENERACAO+FENIX', '377cb0')
    ]),
    fruta('Uo Uo no Mi, Modelo: Seiryu', 'Mítica', 0.42, 62, '3b9cba', [
        ataque('Boro Breath', 98, 0, 'BORO+BREATH', '235b70'),
        ataque('Tornado Dracônico', 155, 4, 'TORNADO+DRACONICO', '173d51')
    ]),
    fruta('Inu Inu no Mi, Modelo: Okuchi no Makami', 'Mítica', 0.38, 60, '9ac8e8', [
        ataque('Presas Sagradas', 95, 0, 'PRESAS+SAGRADAS', '477b9e'),
        ataque('Guardião do Amanhecer', 150, 4, 'GUARDIAO+AMANHECER', '315b7a')
    ]),
    fruta('Ryu Ryu no Mi, Modelo: Allosaurus', 'Lendária', 1.7, 44, '9c7452', [
        ataque('Mordida do Allosaurus', 80, 0, 'MORDIDA+ALLOSAURUS', '634a35'),
        ataque('Cauda Esmagadora', 124, 4, 'CAUDA+ESMAGADORA', '493626')
    ]),
    fruta('Ryu Ryu no Mi, Modelo: Pteranodon', 'Lendária', 1.6, 43, 'c8a47d', [
        ataque('Voo Rasante', 78, 0, 'VOO+RASANTE', '7e654d'),
        ataque('Corte Supersônico', 121, 4, 'CORTE+SUPERSONICO', '5e4937')
    ]),
    fruta('Ryu Ryu no Mi, Modelo: Brachiosaurus', 'Lendária', 1.4, 46, '8b9a68', [
        ataque('Pescoço Esmagador', 83, 0, 'PESCOCO+ESMAGADOR', '52603c'),
        ataque('Bombardeio Colossal', 128, 4, 'BOMBARDEIO+COLOSSAL', '3c482b')
    ]),
    fruta('Ryu Ryu no Mi, Modelo: Spinosaurus', 'Lendária', 1.5, 45, 'b86f54', [
        ataque('Mandíbula do Espinossauro', 81, 0, 'MANDIBULA+ESPINOSSAURO', '784535'),
        ataque('Caçada Pré-histórica', 126, 4, 'CACADA+PRE-HISTORICA', '563326')
    ]),
    fruta('Hebi Hebi no Mi, Modelo: Yamata no Orochi', 'Mítica', 0.35, 61, 'a98ac7', [
        ataque('Mordida das Oito Cabeças', 96, 0, 'OITO+CABECAS', '68517e'),
        ataque('Hidra Devastadora', 153, 4, 'HIDRA+DEVASTADORA', '48365d')
    ]),
    // FRUTA ORIGINAL: três ressurreições próprias, sem consumir a segunda vida genérica.
    fruta('Yuami Yamkio no Mi', 'Mítica', 0.20, 120, '6d315f', [
        ataque('Divine Impact', 260, 0, 'DIVINE+IMPACT', '51264d'),
        ataque('Multiversal Departure', 420, 3, 'MULTIVERSAL+DEPARTURE', '78264e'),
        ataque('Yuami Yamkio: multivesal end', 580, 5, 'YUAMI+YAMKIO+MULTIVESAL+END', '3c183f')
    ]),
    // Yomi Yomi no Mi: Brook. Três ressurreições, com ataques de alma e gelo.
    fruta('Yomi Yomi no Mi', 'Lendária', 0.75, 52, 'c9d6dc', [
        ataque('Yomi Yomi: Soul Solid', 88, 0, 'SOUL+SOLID', '8ca9b8'),
        ataque('Yomi Yomi: Soul Parade', 132, 3, 'SOUL+PARADE', '526c83'),
        ataque('Ice Burn: Alma Congelante', 176, 5, 'ICE+BURN+SOUL', 'b9e8f5')
    ])
];

// FOTO DE CADA FRUTA: esta função cria o placeholder com nome e cor. Para uma fruta específica, depois do array `frutas`, use `frutas.find(f => f.nome === 'Nome da Fruta').img = 'imagens/minha-fruta.png'`; para todas, altere o helper.
function fruta(nome, raridade, peso, poder, cor, ataques) {
    return {
        nome,
        raridade,
        peso,
        poder,
        img: img(nome.toUpperCase().replaceAll(' ', '+'), cor, 500, 500),
        ataques,
        despertada: false,
        // Yomi Yomi (Brook) e a fruta original Yuami mantêm três ressurreições.
        ressurreicoesMax: ['Yomi Yomi no Mi', 'Yuami Yamkio no Mi'].includes(nome) ? 3 : 0,
        ressurreicoesRestantes: ['Yomi Yomi no Mi', 'Yuami Yamkio no Mi'].includes(nome) ? 3 : 0
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


// ============================================================
// ROTA DE ILHAS
// ============================================================
// IMAGENS DAS ILHAS NO MAPA: personalize as miniaturas dos quadrados da rota aqui.
// Use URL direta ou caminho relativo, por exemplo: 'imagens/ilhas/foosha.png'.
// Deixe '' para usar o placeholder automático. O nome precisa ser idêntico ao da rota.
const IMAGENS_ILHAS = {
    'Vila Foosha': '',
    'Reverse Mountain': '',
    'Yotsuba': '',
    'Orange Town': '',
    'Baratie': '',
    'Ilha Conomi': '',
    'Loguetown': '',
    'Cactus Island': '',
    'Little Garden': '',
    'Drum': '',
    'Alabasta': '',
    'Jaya': '',
    'Water 7': '',
    'Thriller Bark': '',
    'Sabaody': '',
    'Ilha dos Homens-Peixe': '',
    'Punk Hazard': '',
    'Dressrosa': '',
    'Zou': '',
    'Totto Land': '',
    'Wano': '',
    'Elbaf': ''
};

function imagemMapaIlha(nome, atual = false) {
    const personalizada = IMAGENS_ILHAS[nome];
    if (typeof personalizada === 'string' && personalizada.trim()) return personalizada.trim();
    return img(String(nome).toUpperCase().replaceAll(' ', '+'), atual ? '4b6533' : '34495e', 340, 220);
}


// PERSONALIZAR FOTOS DOS BOSSES: a chave precisa ser o nome exatamente como aparece na batalha.
// Exemplo: 'Morgan': 'imagens/bosses/morgan.png'. URL vazia = placeholder automático.
const IMAGENS_BOSSES = {
    'Morgan': 'https://static.wikia.nocookie.net/onepiece/images/1/1f/Morgan_Without_Marine_Coat.png/revision/latest?cb=20240727202124&path-prefix=pt',
    'Buggy, O Palhaço': 'https://i.pinimg.com/736x/38/1a/eb/381aeb3ece63f397508d78e2011ba52c.jpg',
    'Don Krieg': 'https://static.wikia.nocookie.net/joke-battles/images/d/de/Krieg%28Fixed%29.webp/revision/latest/scale-to-width-down/284?cb=20230122005443',
    'Smoker': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZd1-SmymR_qT29UamDwLrinEYYpEdFJCDyzGZQS1mu2GBDT6lYW7Rr8&s=10',
    'Mr. 3': 'imagens\\does-mr-3-have-the-biggest-upscale-of-all-v0-nlwkabpwtiig1.webp',
    'Miss Goldenweek': 'https://media.tenor.com/et6K-a-d2qgAAAAM/miss-goldenweek-osaka.gif',
    'Mr. 5': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFQNgdLY68eKEKBeZ72zO6j2jL9kn1gt97mJaRtA6ODfBg4pqf7wIQ9I&s=10',
    'Miss Valentine': 'imagens\\pk8osue92crc1.jpg',
    'Wapol': 'imagens\\843df0330f568b122b376dd3b05fe9051228356834_full.jpg',
    'Crocodile': 'https://media.tenor.com/viVBslzXyr0AAAAM/mugiwara.gif',
    'Gecko Moria': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH36ifhyqx1gGIFirbreJbX0pZKRohGcqHpOBiUvL_iM76UyG5cN2GujuU&s=10',
    'Aokiji (Kuzan)': 'imagens\\how-is-he-doing-in-this-meta-v0-drqeviutetdf1.webp',
    'Akainu (Sakazuki)': 'imagens\\9lmnryoxxq1b1.jpg',
    'Kizaru (Borsalino)': 'https://media.tenor.com/JRO6t-RI1MQAAAAe/kizaru-one-piece.png',
    'Barba Branca': 'https://media.tenor.com/nDVqUgwnU64AAAAe/whitebeard-the-one-piece-is-real.png',
    'Marco': 'https://media.tenor.com/sZ3bqlBPUiMAAAAe/one-piece-marco.png',
    'Ace libertado das algemas de Kairosek': 'https://i.pinimg.com/originals/68/97/b2/6897b2bd2e145ad1fc518c848d5a9aec.jpg?nii=t',
    'Roddy Jones': 'imagens\\if-luffy-tested-his-snakeman-on-hody-jones-v0-qpq6px1yoe4d1.webp',
    'Decken': 'imagens\\i-always-forget-that-vander-decken-has-4-legs-v0-6hjjzgo5w9ag1.webp',
    'Caesar': 'https://i.pinimg.com/474x/95/a6/bc/95a6bce2c097e627c49917d549860d17.jpg',
    'Bellamy': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd_OSIxk9sS4f07EFBJifYG6zN9li_e4s1I---3fdZ2zihFx1CqqUiO0s&s=10',
    'Doflamingo': 'imagens\\0ac62adb-5b87-416a-ba31-a4f8636f6846.jpg',
    'Katakuri': 'https://images7.memedroid.com/images/UPLOADED864/5ad5f22da6f5b.jpeg',
    'Kaido': 'https://media.tenor.com/BY4JNGyjmH8AAAAe/kaido-one-piece.png',
    'Rob Lucci': 'https://i.pinimg.com/736x/09/c5/8f/09c58f4735783507884868f14bf5b6cb.jpg',
    'Kizaru': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYNdqoMPJyxeivHTVwF7_c3fnxgI6ZOeodbYekpZUCwUJGJCdEQ4vmDE&s=10',
    'Mars': 'imagens\\marcus-mars-in-chapter-1125-v0-4prnaacz5end1.webp',
    'Warcury': 'imagens\\saint-bottom-man-warcury-v0-nal152qg95pc1.webp',
    'Peter': 'https://static.wikia.nocookie.net/onepiece/images/e/ec/Fruit_de_Shepherd_Ju_Peter_Forme_Animale_Anime_Infobox.png/revision/latest?cb=20250921182659&path-prefix=fr',
    'Nosjuro': 'https://i.ytimg.com/vi/PF8yQXXVqzI/sddefault.jpg',
    'Saturn': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2rkmhttYyOZ5qKGkfdUcBzXUgS71MPCbJzVgBh8KrWonCm0YgCUF6-0&s=10',
    'Imu no corpo da Gunko': 'imagens\\at6tf7p02pqh1.jpg',
    'Imu': 'imagens\\thought-nerona-imu-needed-one-of-these-enel-meme-face-v0-7gjbm50phr1h1.webp',
    'Ohm': 'https://c.tenor.com/GomE_cjw-IMAAAAd/tenor.gif',
    'Satori': 'imagens\\i-see-no-difference-v0-4hsjs1e6wvo71.webp',
    'Shura': 'https://static.wikia.nocookie.net/fiction-battlefield/images/d/d4/Shura.png/revision/latest?cb=20190403043322&path-prefix=pt-br',
    'Gedatsu': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mzXP0ANlYA6flxSIgW0vTvACFIszcinKNxUFPt5h4eycUWztzy4GSrG5&s=10',
    'Enel': 'https://c.tenor.com/jZ_q2oEexmoAAAAd/tenor.gif',
    'Arlong': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a23952b3-15f7-4e22-a495-99c2096ab0b9/d21ai8q-b2a6dab8-bb3d-4692-ab08-7773e8593333.jpg/v1/fit/w_828,h_1176,q_70,strp/opa2z_arlong_by_garth2the2ndpower_d21ai8q-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQxOSIsInBhdGgiOiIvZi9hMjM5NTJiMy0xNWY3LTRlMjItYTQ5NS05OWMyMDk2YWIwYjkvZDIxYWk4cS1iMmE2ZGFiOC1iYjNkLTQ2OTItYWIwOC03NzczZTg1OTMzMzMuanBnIiwid2lkdGgiOiI8PTk5OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mDWHT0dUXqkaSQVsgyLCz004Qy4bAyH0iYl7PkOlhDQ',
    'Vegapunk Stella': 'imagens\\vegapunk-was-lobotomized-v0-bjidpcxjobzf1.webp',
    'Vegapunk Shaka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_14uZ58K8hNfgDFNzLwHk2w5l19TxUi2wwT-cv2CwFgW_PpaaXoGYZ8&s=10',
    'Vegapunk Lilith': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTGqcwlyscV509L8kRlKQXVUyeLMnNzd4nj_9mrvUcw&s=10',
    'Vegapunk Edison': 'https://static.wikia.nocookie.net/onepiece/images/a/af/Edison_Portrait.png/revision/latest?cb=20240527031210',
    'Vegapunk Pythagoras': 'imagens\\jludm80i18z91.jpg',
    'Vegapunk Atlas': 'imagens\\the-height-piece-is-real-v0-pt76e1xqy9gb1.webp',
};

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
    // V4: Skypiea não é um quadrado da rota.
    // Jaya agora dispara uma queda especial para a área virtual do céu.
    // Os cinco bosses do céu ficam armazenados em v4SkyBosses no patch V4.
    // Isso evita que Skypiea apareça como ilha própria no mapa.
    // Ohm, Satori, Shura, Gedatsu e Enel continuam existindo como desafios.
    // A progressão aérea não consome um quadrado da rota principal.
    // O jogador retorna de Skypiea para Jaya antes de seguir para Water 7.
    ilha('Water 7', 'Você desce do céu e encontra Franky oferecendo uma embarcação muito melhor.', 0.36, [], { evento: 'water7', carpinteiros: 0.8 }),
    ilha('Thriller Bark', 'O navio-ilha de Gecko Moria. Aqui derrota significa perder a sombra.', 0.3, [
        boss('Gecko Moria', 1650, 190, 600000, 'GECKO+MORIA', true, { perdeSombra: true })
    ]),
    ilha('Sabaody', 'Sem boss. Só um jornal e uma notícia grande demais.', 0.34, [], { evento: 'sabaody' }),
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

// FOTO DOS BOSSES: textoImg gera a imagem de placeholder; para retrato real, substitua o retorno de img(...) por uma URL/local como 'imagens/enel.png'.
function boss(nome, hp, poder, recompensa, textoImg, temAliados = false, extras = {}) {
    return {
        nome,
        hp,
        hpMax: hp,
        poder,
        recompensa,
        img: (typeof IMAGENS_BOSSES !== 'undefined' && IMAGENS_BOSSES[nome] && IMAGENS_BOSSES[nome].trim()) ? IMAGENS_BOSSES[nome].trim() : img(textoImg, '3a2020', 500, 360),
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

// IMAGENS PADRÃO: helper que gera placehold.co. Para trocar uma imagem individual, edite img(...) no item que quer alterar; para trocar o sistema inteiro, altere o URL de retorno desta função.
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
    const racaVida = jogador.raca === 'Lunaria' ? 120 : jogador.raca === 'Homem-Peixe' ? 70 : 0;

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
    // Mink não recebe bônus racial nesta versão.

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
    // Tenryuubito é uma facção/origem social, não uma raça: o retrato especial tem prioridade.
    const ehTenryuubito = jogador.faccao === 'Tenryuubito';
    const chave = ehTenryuubito
        ? `Tenryuubito-${jogador.genero}`
        : `${jogador.raca}-${jogador.genero}`;
    const imgEl = el('img-personagem');
    if (!imgEl) return;
    imgEl.src = IMAGENS_PERSONAGEM[chave] || img(ehTenryuubito ? 'TENRYUUBITO' : 'PERSONAGEM', '273542');
    imgEl.onerror = () => {
        imgEl.onerror = null;
        // Não cai na foto de Humano quando a imagem de Tenryuubito falha.
        imgEl.src = img(ehTenryuubito ? `TENRYUUBITO+${jogador.genero}` : `${jogador.raca}+${jogador.genero}`, '273542');
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

    // 30% para nascer com o Haki do Rei. O valor começa falso no objeto.
    jogador.haki.rei = Math.random() < 0.30;
    jogador.haki.reiEstado = jogador.haki.rei ? 'Adormecido' : 'Não possui';

    // O sorteio é feito antes da escolha normal de facção. O wrapper V11.6 fornece
    // o resultado para que uma tentativa sem facção não role a chance novamente.
    const v116ResultadoTenryuubito = window.__v116SorteioTenryuubito !== undefined && window.__v116SorteioTenryuubito !== null
        ? Boolean(window.__v116SorteioTenryuubito)
        : Math.random() < CHANCE_TENRYUUBITO;
    if (v116ResultadoTenryuubito) {
        jogador.faccao = 'Tenryuubito';
        jogador.raca = 'Humano';
        jogador.genero = randomItem(generos);
        jogador.recompensa = 999999999;
        document.querySelectorAll('.faccao-btn').forEach(btn => btn.classList.remove('selecionado'));
        log('☼ 1% ABSURDO! Você nasceu Tenryuubito. O sorteio definiu sua origem: você não é Pirata nem Marinha e não escolheu uma facção.');
    } else {
        log(`Você nasceu como ${jogador.raca} (${jogador.genero}) da ${jogador.faccao}. Haki do Rei: ${jogador.haki.rei ? 'Adormecido' : 'Não possui'}.`);
    }
    jogador.nome = gerarEpitetoPersonagem(jogador.faccao, jogador.genero);

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
        aplicarImagemBotao(node, imagemMapaIlha(titulo, atual));

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

    // Cactus Island: cada facção tem sua própria travessia.
    if (ilhas[destino].nome === 'Cactus Island') {
        if (jogador.faccao === 'Tenryuubito') {
            // Um Nobre Mundial não pega a rota dos piratas nem arrisca naufrágio.
            estado.ilhaIndex = destino;
            jogador.ilhaIndex = destino;
            estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
            estado.bossIndex = 0;
            estado.travessiaResolvida = true;
            log('☼ Escolta do Governo Mundial: seu navio cruza a rota em segurança. Você não precisa encarar a Reverse Mountain como pirata.');
            carregarTelaDaIlha();
        } else if (jogador.faccao === 'Pirata') {
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
    el('titulo-evento').textContent = 'SABAODY • SALTO TEMPORAL';
    el('nome-evento').textContent = jogador.faccao === 'Tenryuubito'
        ? 'Um nobre mundial não vai para a guerra.'
        : 'O mundo muda enquanto você fica fora do conflito.';
    el('desc-evento').textContent = jogador.faccao === 'Tenryuubito'
        ? 'Você é protegido pelo Governo Mundial e não será enviado para uma guerra. Dois anos passam; a composição dos Almirantes muda enquanto você permanece longe do campo de batalha.'
        : 'Esta jornada não inclui a Guerra de Marineford. Você passa dois anos treinando e, quando retorna, a Marinha já tem uma nova formação de Almirantes.';
    el('img-evento').src = img('SABAODY+SALTO+TEMPORAL', '26495b', 600, 420);
    el('botoes-evento').innerHTML = '';

    const btn = criarBotaoEvento('AVANÇAR DOIS ANOS', img('DOIS+ANOS+DEPOIS', '43543a'), () => {
        ilhas[estado.ilhaIndex].options.eventoResolvido = true;
        estado.almirantesPosTimeskip = true;
        log('⏳ Dois anos depois... Aokiji e Akainu deixaram a antiga formação. Os Almirantes disponíveis agora são Kizaru, Fujitora e Ryokugyu. Marineford não aconteceu nesta rota, e Egghead não faz parte da aventura.');
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
    // Mink não recebe bônus racial nesta versão.
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

    jogador.fruta = { ...frutaAtual };
    if (ehGomuNika(jogador.fruta) && jogador.fruta.formas) jogador.fruta.formaAtual = 'base';
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
        let ganho = clamped(Math.ceil(nota / 2), 1, 5);
        if (jogador.raca === 'Humano') ganho = Math.max(1, Math.ceil(ganho * 1.20));
        if (tipo === 'obs') jogador.haki.obs = clamped(jogador.haki.obs + ganho, 0, jogador.haki.obsAvancado ? 50 : 30);
        if (tipo === 'arm') jogador.haki.arm = clamped(jogador.haki.arm + ganho, 0, jogador.haki.armAvancado ? 50 : 30);
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

    if ((tipo === 'obs' && jogador.haki.obs >= (jogador.haki.obsAvancado ? 50 : 30)) || (tipo === 'arm' && jogador.haki.arm >= (jogador.haki.armAvancado ? 50 : 30))) {
        const maxObs = jogador.haki.obsAvancado ? 50 : 30;
        const maxArm = jogador.haki.armAvancado ? 50 : 30;
        log(`Seu Haki já atingiu o limite atual (${tipo === 'obs' ? maxObs : maxArm}/${tipo === 'obs' ? maxObs : maxArm}). O treino não pode passar do limite.`);
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
            if (tempoArmamento > 0) tempoArmamento--;
            el('timer-minigame').textContent = Math.max(0, tempoArmamento);
            // V8: chegar a zero enquanto o botão está pressionado não solta a agulha.
            // O cronômetro só encerra automaticamente se o jogador já soltou.
            if (tempoArmamento <= 0 && !segurandoArm) validarMinigameArm();
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
        log(`👁 Previsão perfeita. Haki da Observação: ${jogador.haki.obs}/${jogador.haki.obsAvancado ? 50 : 30}.`);
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
        log(`✊ Endurecimento concluído. Haki do Armamento: ${jogador.haki.arm}/${jogador.haki.armAvancado ? 50 : 30}.`);
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
            'Vegapunk Stella', 'Vegapunk Shaka', 'Vegapunk Lilith', 'Vegapunk Edison', 'Vegapunk Pythagoras', 'Vegapunk Atlas',
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
        img: (typeof IMAGEM_SOCO_BASICO === 'string' && IMAGEM_SOCO_BASICO.trim()) ? IMAGEM_SOCO_BASICO.trim() : 'https://media.tenor.com/Q_qlUFgmqGsAAAAM/luffy-one-piece.gif',
        grupo: 'Base',
        tipo: 'base'
    });

    if (jogador.estiloLuta) {
        const estilo = estilos.find(e => e.nome === jogador.estiloLuta);
        if (estilo) estilo.ataques.forEach(g => adicionarBotaoAtaque(painel, { ...g, grupo: estilo.nome, tipo: 'estilo' }));
    }

    if (jogador.fruta) {
        let ataquesFruta = jogador.fruta.ataques;
        if (ehGomuNika(jogador.fruta) && jogador.fruta.formas) {
            ataquesFruta = jogador.fruta.formas[jogador.fruta.formaAtual || 'base'].ataques;
        }
        ataquesFruta.forEach(g => adicionarBotaoAtaque(painel, { ...g, grupo: jogador.fruta.nome + (ehGomuNika(jogador.fruta) ? ` • ${jogador.fruta.formas[jogador.fruta.formaAtual || 'base'].nome}` : ''), tipo: 'fruta' }));
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
    if (!jogador.fruta || !ehGomuNika(jogador.fruta) || !jogador.fruta.formas) {
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

    let dano = golpe.dano + Math.floor(atributos.dano * 0.32);

    if (golpe.tipo === 'fruta') dano += Math.floor(Math.sqrt(Math.max(0, Number(jogador.fruta?.poder || 0))) * 6);
    if (golpe.tipo === 'estilo') dano += 8 + Math.floor(Math.sqrt(Math.max(0, Number(jogador.maestria || 0))) * 3);
    if (estado.hakiArmAtivo) dano *= 1.10 + Math.sqrt(Math.max(0, Number(jogador.haki.arm || 0))) * 0.025;
    if (jogador.haki.armAvancado) dano *= 1.25;
    const reiProgressoV10Base = Math.max(0, Math.min(50, Number(jogador.haki.reiValor || 0))) / 50;
    if (estado.hakiReiAtivo) dano *= 1.10 + reiProgressoV10Base * 0.50;
    if (estado.revestimentoReiAtivo) dano *= 1.20 + reiProgressoV10Base * 0.50;
    if (jogador.fruta?.despertada) dano *= 1.18;

    if (jogador.raca === 'Gigante') dano *= 1.25; // Gigantes: +25% de dano.
    if (Number(estado.furiaYuamiRounds || 0) > 0 && !['Fúria dos mil homens'].includes(golpe?.nome)) dano *= 6; // +500% por 5 rounds.
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


// ============================================================
// V4 PATCH
// Ajustes incrementais. A estrutura original permanece intacta.
// Nada abaixo depende de reescrever o motor inteiro do v3.
// ============================================================

(function aplicarPatchV4DeDados() {
    // ------------------------------------------------------------
    // 1) SKYPIEA: não existe como quadrado próprio no mapa.
    // Jaya continua sendo o quadrado da rota e, ao chegar nela,
    // o jogador é lançado para Skypiea como uma área especial.
    // ------------------------------------------------------------
    const indiceSkypieaAntigo = ilhas.findIndex(i => i.nome === 'Skypiea');
    if (indiceSkypieaAntigo !== -1) {
        ilhas.splice(indiceSkypieaAntigo, 1);
    }

    const jayaV4 = ilhas.find(i => i.nome === 'Jaya');
    if (jayaV4) {
        jayaV4.options = jayaV4.options || {};
        jayaV4.options.evento = 'skyfall';
        jayaV4.options.skyfallConcluido = false;
        jayaV4.options.frutaQualidade = 2.0;
    }

    // ------------------------------------------------------------
    // 2) MARINEFORD: Aokiji -> Kizaru -> Akainu.
    // Akainu é o último inimigo da rota pirata de Marineford.
    // ------------------------------------------------------------
    const marinefordV4 = ilhas.find(i => i.nome === 'Marineford');
    if (marinefordV4 && marinefordV4.bosses.length >= 3) {
        const piratasMarineford = marinefordV4.bosses.slice(0, 3);
        const aokiji = piratasMarineford.find(b => b.nome.includes('Aokiji'));
        const kizaru = piratasMarineford.find(b => b.nome.includes('Kizaru'));
        const akainu = piratasMarineford.find(b => b.nome.includes('Akainu'));
        if (aokiji && kizaru && akainu) {
            marinefordV4.bosses.splice(0, 3, aokiji, kizaru, akainu);
        }
    }

    // ------------------------------------------------------------
    // 3) SKYPIEA VIRTUAL. O jogador ainda enfrenta os cinco bosses,
    // mas eles não ocupam um quadrado próprio no mapa.
    // ------------------------------------------------------------
    window.v4SkyBosses = [
        boss('Ohm', 850, 120, 210000, 'OHM', true, { obs: true, arm: true }),
        boss('Satori', 760, 110, 190000, 'SATORI', true, { obs: true }),
        boss('Shura', 900, 125, 220000, 'SHURA', true, { obs: true, arm: true }),
        boss('Gedatsu', 880, 122, 215000, 'GEDATSU', true, { arm: true }),
        boss('Enel', 1900, 240, 520000, 'ENEL', true, { obs: true, logia: true, requerGomu: true })
    ];

    // O V4 não usa o grupo antigo de Skypiea, removido da rota.
    window.v4SkyDescricao = 'Você foi lançado para uma ilha no céu. Aqui estão Ohm, Satori, Shura, Gedatsu e Enel.';

    // ------------------------------------------------------------
    // 4) FRUTAS: ilhas raras têm pesos melhores para frutas boas.
    // Foosha recebe uma chance especial para a Gomu Gomu no Mi.
    // ------------------------------------------------------------
    const frutaConfigs = {
        'Vila Foosha': { frutaChance: 0.55, gomu: 20, qualidade: 1.0 },
        'Baratie': { qualidade: 1.15 },
        'Little Garden': { qualidade: 1.35 },
        'Alabasta': { qualidade: 1.55 },
        'Jaya': { qualidade: 1.60 },
        'Water 7': { qualidade: 1.75 },
        'Thriller Bark': { qualidade: 1.80 },
        'Sabaody': { qualidade: 2.20 },
        'Marineford': { qualidade: 2.15 },
        'Ilha dos Homens-Peixe': { qualidade: 2.15 },
        'Punk Hazard': { qualidade: 2.40 },
        'Dressrosa': { qualidade: 3.00 },
        'Zou': { qualidade: 2.40 },
        'Totto Land': { qualidade: 3.60 },
        'Wano': { qualidade: 4.80 },
        'Egghead': { qualidade: 4.40 },
        'Elbaf': { qualidade: 5.00 }
    };

    ilhas.forEach(ilhaAtualV4 => {
        const cfg = frutaConfigs[ilhaAtualV4.nome];
        ilhaAtualV4.options = ilhaAtualV4.options || {};
        if (cfg?.qualidade) ilhaAtualV4.options.frutaQualidade = cfg.qualidade;
        if (cfg?.gomu) {
            ilhaAtualV4.options.frutaFavorita = 'Gomu Gomu no Mi';
            ilhaAtualV4.options.frutaFavoritaMultiplicador = cfg.gomu;
            ilhaAtualV4.frutaChance = cfg.frutaChance;
        }
    });

    // Skypiea, mesmo sendo virtual, também tem muita fruta rara circulando.
    window.v4SkyFrutaQualidade = 3.80;

    // ------------------------------------------------------------
    // 5) HAKI DOS BOSSES + REDUÇÃO DOS INIMIGOS.
    // Não são exigências de entrada, são atributos do inimigo.
    // ------------------------------------------------------------
    const hakiBossesV4 = {
        'Morgan': { obs: false, arm: false, rei: false },
        'Buggy, O Palhaço': { obs: false, arm: false, rei: false },
        'Don Krieg': { obs: false, arm: false, rei: false },
        'Smoker': { obs: true, arm: true, rei: false },
        'Mr. 3': { obs: false, arm: false, rei: false },
        'Miss Goldenweek': { obs: false, arm: false, rei: false },
        'Mr. 5': { obs: false, arm: false, rei: false },
        'Miss Valentine': { obs: false, arm: false, rei: false },
        'Wapol': { obs: false, arm: false, rei: false },
        'Crocodile': { obs: false, arm: true, rei: false },
        'Ohm': { obs: true, arm: true, rei: false },
        'Satori': { obs: true, arm: false, rei: false },
        'Shura': { obs: true, arm: true, rei: false },
        'Gedatsu': { obs: false, arm: true, rei: false },
        'Enel': { obs: true, arm: false, rei: false },
        'Gecko Moria': { obs: false, arm: false, rei: false },
        'Aokiji (Kuzan)': { obs: true, arm: true, rei: false },
        'Kizaru (Borsalino)': { obs: true, arm: true, rei: false },
        'Akainu (Sakazuki)': { obs: true, arm: true, rei: false },
        'Barba Branca': { obs: true, arm: true, rei: true },
        'Marco': { obs: true, arm: true, rei: false },
        'Ace libertado das algemas de Kairosek': { obs: true, arm: true, rei: false },
        'Roddy Jones': { obs: false, arm: true, rei: false },
        'Decken': { obs: false, arm: false, rei: false },
        'Caesar': { obs: true, arm: true, rei: false },
        'Bellamy': { obs: false, arm: true, rei: false },
        'Doflamingo': { obs: true, arm: true, rei: true },
        'Katakuri': { obs: true, arm: true, rei: false },
        'Kaido': { obs: true, arm: true, rei: true },
        'Rob Lucci': { obs: true, arm: true, rei: false },
        'Kizaru': { obs: true, arm: true, rei: false },
        'Mars': { obs: true, arm: true, rei: true },
        'Warcury': { obs: true, arm: true, rei: true },
        'Peter': { obs: true, arm: true, rei: true },
        'Nosjuro': { obs: true, arm: true, rei: true },
        'Saturn': { obs: true, arm: true, rei: true },
        'Imu no corpo da Gunko': { obs: true, arm: true, rei: true },
        'Imu': { obs: true, arm: true, rei: true }
    };

    const bossesTodosV4 = [];
    ilhas.forEach(i => i.bosses.forEach(b => bossesTodosV4.push(b)));
    v4SkyBosses.forEach(b => bossesTodosV4.push(b));

    bossesTodosV4.forEach(b => {
        const dados = hakiBossesV4[b.nome] || { obs: false, arm: false, rei: false };
        b.haki = {
            obs: Boolean(dados.obs),
            arm: Boolean(dados.arm),
            rei: Boolean(dados.rei)
        };
        b.reducaoDano = 0.30;
        b.resistenciaDano = b.nome === 'Kaido' ? 0.50 : 1;
        b.logia = false;
        b.requerGomu = false;
    });

    bossesTodosV4.filter(b => [
        'Aokiji (Kuzan)', 'Kizaru (Borsalino)', 'Kizaru', 'Crocodile', 'Enel'
    ].includes(b.nome)).forEach(b => {
        b.logia = true;
        b.requerHaki = true;
    });

    const enelV4 = bossesTodosV4.find(b => b.nome === 'Enel');
    if (enelV4) {
        enelV4.requerGomu = true;
        enelV4.requerHaki = true;
        enelV4.requerHakiOuGomu = true;
    }

    // ------------------------------------------------------------
    // 6) ALIADOS: redução de dano própria de 30%.
    // ------------------------------------------------------------
    jogador.aliados.forEach(aliado => {
        aliado.reducaoDano = 0.30;
    });

    // ------------------------------------------------------------
    // 7) HAKI ARM/OBS: máximos só viram 50 depois do despertar avançado.
    // ------------------------------------------------------------
    jogador.haki.obsMax = 30;
    jogador.haki.armMax = 30;
    jogador.haki.reiMax = 30;
})();

// ============================================================
// V4: ESTADO AUXILIAR
// ============================================================

estado.skypieaAtivo = false;
estado.skypieaConcluida = false;
estado.skypieaBossProgresso = 0;
estado.turnoCombate = 0;
estado.contextoBarco = '';

function v4EstaNoCeu() {
    return Boolean(estado.skypieaAtivo);
}

function v4ChaveProgressoBoss() {
    return v4EstaNoCeu() ? 'SKYPIEA' : estado.ilhaIndex;
}

function v4BossesAtuais() {
    if (v4EstaNoCeu()) return window.v4SkyBosses;

    if (ilhaAtual().nome === 'Marineford') {
        if (jogador.faccao === 'Pirata') return ilhas[estado.ilhaIndex].bosses.slice(0, 3);
        return ilhas[estado.ilhaIndex].bosses.slice(3);
    }

    if (jogador.faccao === 'Marinha' && ilhaAtual().nome === 'Egghead') {
        return criarMissaoVegapunks();
    }

    return ilhas[estado.ilhaIndex].bosses;
}

function v4BossAtualReal() {
    return v4BossesAtuais()[estado.bossIndex] || null;
}

function v4TodasBatalhasConcluidas() {
    return estado.bossIndex >= v4BossesAtuais().length;
}

function v4SalvarProgressoBoss() {
    if (v4EstaNoCeu()) {
        estado.skypieaBossProgresso = estado.bossIndex;
        return;
    }
    estado.bossProgressoPorIlha[estado.ilhaIndex] = estado.bossIndex;
}

function v4CarregarProgressoBoss() {
    const total = v4BossesAtuais().length;
    if (v4EstaNoCeu()) {
        estado.bossIndex = clamped(Number(estado.skypieaBossProgresso || 0), 0, total);
        return;
    }
    estado.bossIndex = clamped(Number(estado.bossProgressoPorIlha[estado.ilhaIndex] || 0), 0, total);
}

// ============================================================
// V4: MAPA ACOMPANHA A POSIÇÃO ATUAL
// ============================================================

window.atualizarMapRoute = function atualizarMapRouteV4() {
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
        let subtitulo = atual ? 'VOCÊ ESTÁ AQUI' : 'JÁ VISITADA • CLIQUE PARA VOLTAR';

        if (atual && v4EstaNoCeu()) {
            subtitulo = 'VOCÊ ESTÁ NO CÉU • SKYPIEA';
        }

        node.innerHTML = `<span>${String(i + 1).padStart(2, '0')}</span><b>${titulo}</b><small>${subtitulo}</small>`;
        aplicarImagemBotao(node, imagemMapaIlha(titulo, atual));

        if (!atual) {
            node.onclick = () => window.voltarParaIlhaVisitada(i);
        }

        mapa.appendChild(node);

        if (i < ultimoDescoberto) {
            const linha = document.createElement('div');
            linha.className = 'route-line';
            mapa.appendChild(linha);
        }
    }

    const btnProxima = el('btn-proxima-ilha');
    if (btnProxima) {
        const estaNoUltimoQuadrado = estado.ilhaIndex === estado.maiorIlhaAlcancada;
        const proxima = estado.maiorIlhaAlcancada + 1;

        if (!estaNoUltimoQuadrado) {
            btnProxima.disabled = true;
            btnProxima.textContent = 'VOLTE AO ÚLTIMO QUADRADO DA ROTA';
        } else if (v4EstaNoCeu()) {
            btnProxima.disabled = true;
            btnProxima.textContent = v4TodasBatalhasConcluidas()
                ? 'TERMINE A QUEDA • VOLTE À ROTA EM JAYA'
                : 'SKYPIEA • CONCLUA OS BOSSES';
        } else if (proxima >= ilhas.length) {
            btnProxima.disabled = true;
            btnProxima.textContent = 'FIM DA ROTA';
        } else {
            btnProxima.disabled = false;
            btnProxima.textContent = `SEGUIR PARA ???? (${proxima + 1})`;
        }
    }

    const btnBarco = el('btn-voltar-barco');
    if (btnBarco) {
        btnBarco.hidden = Boolean(estado.barcoConseguido);
    }

    renderizarImagensDosBotoes();
};

window.voltarParaIlhaVisitada = function voltarParaIlhaVisitadaV4(indice) {
    if (v4EstaNoCeu()) {
        log('☁ Você está em Skypiea agora. Conclua a ilha no céu antes de voltar para um ponto antigo da rota.');
        return;
    }

    if (indice < 0 || indice > estado.maiorIlhaAlcancada || indice === estado.ilhaIndex) return;

    estado.ilhaIndex = indice;
    jogador.ilhaIndex = indice;
    v4CarregarProgressoBoss();
    log(`🗺️ Você voltou para ${ilhas[indice].nome}. O mapa preservou o quadrado atual e o progresso do boss.`);
    window.carregarTelaDaIlha();
};

window.irParaProximaIlha = function irParaProximaIlhaV4() {
    if (!estado.barcoConseguido) {
        log('⛵ Você ainda precisa de um barco. Volte à escolha da embarcação.');
        window.voltarParaEscolhaDeBarco();
        return;
    }

    if (estado.ilhaIndex !== estado.maiorIlhaAlcancada) {
        log('🗺️ Você está revisitando uma ilha antiga. A seta de próxima não avança a história daqui. Volte ao quadrado mais avançado do mapa.');
        return;
    }

    if (v4EstaNoCeu()) {
        log('☁ Você ainda está em Skypiea. Conclua os cinco desafios antes de voltar para a rota.');
        return;
    }

    const atual = ilhaAtual();
    if (atual.nome === 'Jaya' && !estado.skypieaConcluida) {
        log('☁ Jaya ainda não foi concluída. O céu está esperando sua queda para Skypiea.');
        return;
    }

    if (!v4TodasBatalhasConcluidas()) {
        log(`⚔ Antes de continuar, conclua os desafios de ${atual.nome}.`);
        return;
    }

    if (atual.options?.evento && atual.options.evento !== 'egghead' && !atual.options.eventoResolvido && atual.nome !== 'Alabasta') {
        log('📜 Há um evento importante desta ilha que precisa ser resolvido antes da próxima viagem.');
        return;
    }

    const destino = estado.ilhaIndex + 1;
    if (destino >= ilhas.length) return;

    iniciarViagem(destino);
};

// ============================================================
// V4: BARCO, CONTEXTO DE CACTUS E BOTÃO QUE SOME APÓS ESCOLHA
// ============================================================

window.prepararOpcoesDeBarco = function prepararOpcoesDeBarcoV4() {
    const pirata = el('opcoes-pirata');
    const marinha = el('opcoes-marinha');
    const tenryuubito = el('opcoes-tenryuubito');

    pirata.hidden = true;
    marinha.hidden = true;
    tenryuubito.hidden = true;

    if (estado.barcoConseguido) {
        el('texto-inicio-ilha').textContent = `Você já escolheu sua embarcação: ${jogador.barcoTipo}. As opções antigas foram encerradas.`;
        return;
    }

    if (estado.contextoBarco === 'cactus') {
        el('texto-inicio-ilha').textContent = 'Cactus Island foi onde seu barco morreu. Agora você precisa ROUBAR outro para continuar.';
        pirata.hidden = false;
        pirata.querySelectorAll('button').forEach(btn => {
            const comprar = btn.getAttribute('onclick')?.includes('comprarBarco');
            if (comprar) btn.hidden = true;
        });
        return;
    }

    if (jogador.faccao === 'Pirata') {
        el('texto-inicio-ilha').textContent = 'Você é pirata. Escolha seu começo: roubar um barco ou comprar uma velharia.';
        pirata.hidden = false;
        pirata.querySelectorAll('button').forEach(btn => btn.hidden = false);
    } else if (jogador.faccao === 'Marinha') {
        el('texto-inicio-ilha').textContent = 'Você é da Marinha. Apresente-se à base e receba uma embarcação oficial.';
        marinha.hidden = false;
    } else if (jogador.faccao === 'Tenryuubito') {
        el('texto-inicio-ilha').textContent = 'Você recebeu acesso a um navio do Governo Mundial.';
        tenryuubito.hidden = false;
    }

    renderizarImagensDosBotoes();
};

window.conseguirBarco = function conseguirBarcoV4(mensagem, tipo = 'barco meia-boca') {
    estado.barcoConseguido = true;
    jogador.barcoTipo = tipo;
    estado.tentativasRoubo = 0;
    log(mensagem);
    atualizarHeader();

    const foiCactus = estado.contextoBarco === 'cactus';
    estado.contextoBarco = '';

    prepararOpcoesDeBarco();

    if (foiCactus) {
        setTimeout(() => {
            window.carregarTelaDaIlha();
            log('⛵ Barco roubado em Cactus Island. Agora a festa pode continuar.');
        }, 350);
        return;
    }

    setTimeout(() => {
        atualizarMapRoute();
        mudarTela('tela-mapa');
    }, 500);
};

window.roubarBarco = function roubarBarcoV4() {
    if (jogador.faccao !== 'Pirata') {
        log('🚫 Marinha não rouba barco nesta parte. Tenryuubito também não precisa disso.');
        return;
    }

    if (estado.tentativasRoubo >= 1) {
        if (estado.contextoBarco === 'cactus') {
            finalizarMorte('☠ Você tentou roubar o barco de Cactus Island e falhou. Sem embarcação, sua rota terminou.');
        } else {
            log('Você já gastou sua única tentativa de roubo. Compre a velharia inicial.');
        }
        return;
    }

    estado.tentativasRoubo++;

    if (Math.random() < 0.50) {
        jogador.recompensa += 500;
        const foiCactus = estado.contextoBarco === 'cactus';
        window.conseguirBarco(
            foiCactus
                ? '☠ Você roubou outro barco em Cactus Island. A segunda chance funcionou.'
                : '☠ Você roubou um barco com sucesso. A Marinha agora lembra de você.',
            foiCactus ? 'barco roubado em Cactus Island' : 'barco roubado'
        );
        atualizarCartaz();
    } else {
        if (estado.contextoBarco === 'cactus') {
            finalizarMorte('☠ O roubo em Cactus Island falhou. Você ficou sem barco e sem rota para continuar.');
        } else {
            log('❌ O roubo falhou. Era a única tentativa. Felizmente, a loja de velharias continua aberta.');
        }
    }
};

window.comprarBarco = function comprarBarcoV4() {
    if (estado.contextoBarco === 'cactus') {
        log('🏜️ Em Cactus Island não há compra. Você precisa roubar um barco para sobreviver à rota.');
        return;
    }
    if (jogador.faccao !== 'Pirata') {
        log('Marinha recebe navio oficial. Tenryuubito recebe navio do Governo.');
        return;
    }
    window.conseguirBarco('⛵ Você comprou um barco meia-boca. Ele boia, então já é um começo.', 'velharia flutuante');
};

window.voltarParaEscolhaDeBarco = function voltarParaEscolhaDeBarcoV4() {
    if (estado.barcoConseguido && !estado.contextoBarco) {
        log(`⛵ Sua escolha já foi feita: ${jogador.barcoTipo}. O botão de escolha não deveria mais aparecer.`);
        atualizarMapRoute();
        return;
    }

    if (!estado.barcoConseguido) {
        log('⛵ Sem barco. A escolha da embarcação voltou a ser obrigatória.');
    }

    prepararOpcoesDeBarco();
    mudarTela('tela-barco');
};

// ============================================================
// V4: REVERSE MOUNTAIN -> NAUFRÁGIO -> CACTUS -> ROUBO
// ============================================================

window.naufragarReverseMountain = function naufragarReverseMountainV4(destino) {
    estado.barcoConseguido = false;
    jogador.barcoTipo = '';
    estado.tentativasRoubo = 0;
    estado.contextoBarco = 'cactus';

    if (!jogador.fruta) {
        log('🌊 O barco naufragou e você não tem Akuma no Mi. Você nada até Cactus Island, mas ainda precisa roubar um barco para seguir viagem.');
    } else if (jogador.aliados.length === 0) {
        finalizarMorte('🌊 O barco naufragou na Reverse Mountain. Você tinha uma Akuma no Mi e ninguém conseguiu salvá-lo. Você afundou.');
        return;
    } else {
        const todosTemFruta = jogador.aliados.every(a => Boolean(a.fruta));
        if (todosTemFruta) {
            finalizarMorte('🌊 O barco naufragou e todos os aliados também eram usuários de Akuma no Mi. O grupo inteiro afundou.');
            return;
        }
        log('🌊 O barco naufragou. Pelo menos um aliado consegue nadar e leva o grupo até Cactus Island.');
    }

    estado.ilhaIndex = destino;
    jogador.ilhaIndex = destino;
    estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
    estado.bossIndex = 0;
    carregarTelaDaIlha();
};

window.mostrarEventoCactus = function mostrarEventoCactusV4() {
    if (!v4EstaNoCeu() && !estado.barcoConseguido) {
        el('titulo-evento').textContent = 'CACTUS ISLAND • SEM BARCO';
        el('nome-evento').textContent = 'Você chegou vivo. O barco não.';
        el('desc-evento').textContent = 'A Reverse Mountain destruiu sua embarcação. Antes da festa, você precisa roubar outra embarcação em Cactus Island.';
        el('img-evento').src = img('CACTUS+ISLAND+PORTO', '4c3827', 600, 420);
        el('botoes-evento').innerHTML = '';

        const btn = criarBotaoEvento('IR ROUBAR UM BARCO EM CACTUS', img('ROUBAR+EM+CACTUS', '5b241f'), () => {
            estado.contextoBarco = 'cactus';
            window.voltarParaEscolhaDeBarco();
        });

        el('botoes-evento').appendChild(btn);
        mudarTela('tela-evento');
        return;
    }

    // Depois de conseguir um barco, usa a festa original da ilha.
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
            finalizarMorte('⚔️ Você bebeu, curtiu e não percebeu a armada. Sem Haki da Observação, foi capturado e esquartejado.');
        }
    });

    el('botoes-evento').append(sair, curtir);
    mudarTela('tela-evento');
};

// ============================================================
// V4: SKYPIEA VIRTUAL SAINDO DE JAYA
// ============================================================

function v4MostrarQuedaParaSkypiea() {
    el('titulo-evento').textContent = 'JAYA → SKYPIEA';
    el('nome-evento').textContent = 'O mar decidiu que você não vai continuar no mar.';
    el('desc-evento').textContent = 'Uma corrente monstruosa lança seu navio para o céu. Jaya continua sendo o quadrado do mapa, mas você foi parar em Skypiea.';
    el('img-evento').src = img('JAYA+TO+SKYPIEA', '3b5161', 600, 420);
    el('botoes-evento').innerHTML = '';

    const cair = criarBotaoEvento('ACEITAR A QUEDA PARA SKYPIEA', img('CAIDA+SKYPIEA', '3d5b76'), () => {
        estado.skypieaAtivo = true;
        estado.skypieaConcluida = false;
        estado.skypieaBossProgresso = Math.max(0, Number(estado.skypieaBossProgresso || 0));
        estado.bossIndex = estado.skypieaBossProgresso;
        ilhas[estado.ilhaIndex].options.skyfallConcluido = false;
        log('☁ Você foi lançado para SKYPEIA. O mapa continua mostrando Jaya, porque Skypiea não é um quadrado da rota.');
        window.carregarTelaDaIlha();
    });

    el('botoes-evento').appendChild(cair);
    mudarTela('tela-evento');
}

// ============================================================
// V4: FRUTAS COM QUALIDADE POR ILHA
// ============================================================

window.procurarFruta = function procurarFrutaV4() {
    if (v4EstaNoCeu()) {
        if (estado.skypieaBuscasFruta == null) estado.skypieaBuscasFruta = 2;
        if (estado.skypieaBuscasFruta <= 0) {
            log('☁ Você já procurou fruta duas vezes em Skypiea.');
            return;
        }
        estado.skypieaBuscasFruta--;
        el('count-fruta').textContent = estado.skypieaBuscasFruta;
    } else {
        if (ilhaAtual().buscasFruta <= 0) {
            log('🍈 Você já fez as duas buscas de Akuma no Mi nesta ilha.');
            return;
        }
        ilhaAtual().buscasFruta--;
        el('count-fruta').textContent = ilhaAtual().buscasFruta;
    }

    let chance = v4EstaNoCeu() ? 0.50 : ilhaAtual().frutaChance;
    // Mink não recebe bônus racial nesta versão.
    if (jogador.faccao === 'Tenryuubito') chance = 1;
    chance = clamped(chance, 0.02, 1);

    if (Math.random() >= chance) {
        log('🍂 Você procurou por toda parte e só encontrou frutas comuns, lixo e algo que decidiu não investigar.');
        return;
    }

    const qualidade = v4EstaNoCeu()
        ? window.v4SkyFrutaQualidade
        : Number(ilhaAtual().options?.frutaQualidade || 1);
    const cfg = {
        options: {
            frutaFavorita: v4EstaNoCeu() ? null : ilhaAtual().options?.frutaFavorita,
            frutaFavoritaMultiplicador: v4EstaNoCeu() ? 1 : ilhaAtual().options?.frutaFavoritaMultiplicador,
            frutaQualidade: qualidade
        }
    };

    const pesos = frutas.map(f => {
        let peso = f.peso;
        const rara = f.raridade === 'Rara';
        const lendaria = f.raridade === 'Lendária';
        const mitica = f.raridade === 'Mítica';

        if (rara) peso *= Math.max(1, qualidade * 0.85);
        if (lendaria) peso *= Math.max(1, qualidade * 1.15);
        if (mitica) peso *= Math.max(1, qualidade * 1.35);

        if (cfg.options.frutaFavorita === f.nome) {
            peso *= cfg.options.frutaFavoritaMultiplicador || 1;
        }

        return { fruta: f, peso };
    });

    const total = pesos.reduce((soma, item) => soma + item.peso, 0);
    let rolagem = Math.random() * total;
    let encontrada = frutas[0];

    for (const item of pesos) {
        rolagem -= item.peso;
        if (rolagem <= 0) {
            encontrada = item.fruta;
            break;
        }
    }

    mostrarEventoFruta(encontrada);
};

// ============================================================
// V4: FORMAS DA GOMU, INCLUINDO GEAR 5 APÓS DESPERTAR
// ============================================================

if (gomuGomu && gomuGomu.formas) {
    gomuGomu.formas.gear5 = {
        nome: 'Gear 5',
        req: 0,
        requerDespertar: true,
        img: img('GEAR+5', '3a3a32', 220, 140),
        ataques: [
            ataque('Bajrang Gun', 390, 0, 'BAJRANG+GUN', '4c4935'),
            ataque('Dawn Rocket', 450, 0, 'DAWN+ROCKET', '3b4034')
        ]
    };
}

window.montarFormasGomu = function montarFormasGomuV4() {
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

    if (!jogador.fruta || !ehGomuNika(jogador.fruta) || !jogador.fruta.formas) {
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
        btn.textContent = `${forma.nome} • ${forma.requerDespertar ? 'DESPERTAR' : `Req. ${forma.req}`}`;
        aplicarImagemBotao(btn, forma.img);

        const bloqueadoPelaMaestria = jogador.maestria < (forma.req || 0);
        const bloqueadoPeloDespertar = Boolean(forma.requerDespertar) && !jogador.fruta.despertada;
        btn.disabled = bloqueadoPelaMaestria || bloqueadoPeloDespertar;

        if (jogador.fruta.formaAtual === chave) btn.classList.add('selecionado');

        if (!btn.disabled) {
            btn.onclick = () => {
                jogador.fruta.formaAtual = chave;
                estado.ataqueEmAndamento = false;
                logBatalha(`🍖 Forma alterada para ${forma.nome}. Seus golpes mudaram.`);
                montarPainelAtaques();
            };
        }

        botoes.appendChild(btn);
    });

    area.appendChild(botoes);
};

function v4VoltarFormaBase() {
    if (!jogador.fruta) return;

    if (ehGomuNika(jogador.fruta) && jogador.fruta.formas?.base) {
        jogador.fruta.formaAtual = 'base';
    } else if (Object.prototype.hasOwnProperty.call(jogador.fruta, 'formaAtual')) {
        jogador.fruta.formaAtual = 'base';
    }
}

// ============================================================
// V4: HAKI AVANÇADO E HAKI DO REI
// ============================================================

function v4DespertarObsNoKatakuri() {
    const boss = estado.bossAtivo;
    if (!boss || boss.nome !== 'Katakuri') return false;
    if (jogador.haki.obsAvancado) return false;
    if (estado.turnoCombate < 4) return false;
    if (jogador.vida > jogador.vidaMaxima * 0.60) return false;
    if (estado.bossHP > boss.hpMax * 0.60) return false;

    jogador.haki.obsAvancado = true;
    jogador.haki.obs = 30;
    jogador.haki.obsMax = 50;
    atualizarCartaz();
    logBatalha('👁 KATAKURI: no meio do x1, sua percepção rompeu o limite. HAKI DA OBSERVAÇÃO AVANÇADO DESPERTOU! Agora: 30/50.');
    montarPainelAtaques();
    return true;
}

function v4DespertarArmNoKaido() {
    const boss = estado.bossAtivo;
    if (!boss || boss.nome !== 'Kaido') return false;
    if (jogador.haki.armAvancado) return false;
    if (estado.turnoCombate < 4) return false;
    if (jogador.vida > jogador.vidaMaxima * 0.58) return false;
    if (estado.bossHP > boss.hpMax * 0.58) return false;

    jogador.haki.armAvancado = true;
    jogador.haki.arm = 30;
    jogador.haki.armMax = 50;
    atualizarCartaz();
    logBatalha('✊ KAIDO: seu Armamento foi levado ao limite no meio do x1. HAKI DO ARMAMENTO AVANÇADO DESPERTOU! Agora: 30/50. Seus golpes ficaram mais pesados.');
    montarPainelAtaques();
    return true;
}

window.tentarDespertarHakiReiNaturalmente = function tentarDespertarHakiReiNaturalmenteV4() {
    const boss = estado.bossAtivo;
    if (!boss) return false;
    if (!jogador.haki.rei || jogador.haki.reiEstado !== 'Adormecido') return false;

    // ÚNICO gatilho: Akainu. Nunca desperta em criação, viagem, treino,
    // outro boss ou na abertura da luta.
    if (!boss.nome.includes('Akainu')) return false;
    if (estado.turnoCombate < 4) return false;

    const condicaoPlayer = jogador.vida <= jogador.vidaMaxima * 0.58;
    const condicaoBoss = estado.bossHP <= boss.hpMax * 0.58;
    if (!condicaoPlayer && !condicaoBoss) return false;

    if (Math.random() < 0.70 || estado.turnoCombate >= 6) {
        despertarHakiRei();
        return true;
    }

    return false;
};

// ============================================================
// V4: POSTER COM MAXIMOS CORRETOS
// ============================================================

window.atualizarCartaz = function atualizarCartazV4() {
    atualizarPatente();
    atualizarPoder();

    el('nome-pirata').textContent = jogador.nome;
    el('faccao-pirata').textContent = jogador.faccao || '---';
    el('raca-pirata').textContent = jogador.raca || '---';
    el('genero-pirata').textContent = jogador.genero || '---';
    el('estilo-pirata').textContent = jogador.estiloLuta || 'Nenhum';
    el('fruta-pirata').textContent = jogador.fruta ? `${jogador.fruta.nome}${jogador.fruta.despertada ? ' • DESPERTADA' : ''}` : 'Nenhuma';

    const obsMax = jogador.haki.obsAvancado ? 50 : 30;
    const armMax = jogador.haki.armAvancado ? 50 : 30;
    jogador.haki.obsMax = obsMax;
    jogador.haki.armMax = armMax;

    el('haki-obs').textContent = `${jogador.haki.obs}/${obsMax}`;
    el('haki-arm').textContent = `${jogador.haki.arm}/${armMax}`;

    if (jogador.haki.reiEstado === 'Despertado!') {
        jogador.haki.reiMax = 50;
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
};

// ============================================================
// V4: BALANCEAMENTO DO PLAYER E DOS ENEMIGOS
// ============================================================

window.calcularAtributosCombate = function calcularAtributosCombateV4() {
    const frutaPoder = jogador.fruta ? jogador.fruta.poder : 0;
    const temEstilo = Boolean(jogador.estiloLuta);
    const estiloBonusVida = temEstilo ? 70 + jogador.maestria * 8 : 0;
    const racaVida = jogador.raca === 'Lunaria' ? 120 : jogador.raca === 'Homem-Peixe' ? 70 : 0;

    const novaVidaMaxima = Math.round(
        120
        + jogador.maestria * 75
        + jogador.haki.arm * 7
        + jogador.haki.obs * 4
        + frutaPoder * 4
        + estiloBonusVida
        + racaVida
        + (jogador.fruta?.despertada ? 220 : 0)
        + (jogador.haki.reiEstado === 'Despertado!' ? 150 : 0)
        + (jogador.haki.armAvancado ? 140 : 0)
        + (jogador.haki.obsAvancado ? 100 : 0)
    );

    jogador.vidaMaxima = Math.max(120, novaVidaMaxima);

    let dano = 14;
    dano += jogador.poder * 0.45;
    dano += jogador.maestria * 3.2;
    dano += jogador.haki.arm * 2.4;
    dano += jogador.haki.obs * 0.45;
    dano += frutaPoder * 0.48;
    dano += temEstilo ? 18 : 0;

    if (jogador.fruta?.despertada) dano += frutaPoder * 0.50;
    if (jogador.haki.reiEstado === 'Despertado!') dano += 30;
    if (jogador.haki.armAvancado) dano += 55;
    if (jogador.haki.obsAvancado) dano += 12;

    let reducao = 0.025;
    reducao += jogador.haki.arm * 0.0035;
    reducao += jogador.haki.obs * 0.0008;
    reducao += Math.min(0.06, frutaPoder * 0.001);
    reducao += temEstilo ? 0.025 : 0;
    if (jogador.haki.armAvancado) reducao += 0.045;
    if (jogador.haki.obsAvancado) reducao += 0.025;
    if (jogador.haki.reiEstado === 'Despertado!') reducao += 0.025;
    if (jogador.fruta?.despertada) reducao += 0.025;
    if (jogador.raca === 'Lunaria') reducao += 0.045;
    if (jogador.raca === 'Homem-Peixe') reducao += 0.025;
    // Mink não recebe bônus racial nesta versão.
    if (estado.hakiArmAtivo) reducao += 0.035;
    if (estado.revestimentoReiAtivo) reducao += 0.035;

    // Nunca deixa o player passar daquele 41% absurdo novamente.
    reducao = clamped(reducao, 0.02, 0.25);

    return {
        dano: Math.max(12, Math.round(dano)),
        reducao: Math.round(reducao * 100),
        vidaMaxima: jogador.vidaMaxima
    };
};

window.calcularMultiplicadoresCombate = function calcularMultiplicadoresCombateV4() {
    atualizarPoder();
    const boss = estado.bossAtivo;
    let multJogador = 1;
    let multBoss = 1;

    if (!boss) return { multJogador, multBoss };

    if (jogador.poder > boss.poder * 4) {
        multJogador = 1.25;
    } else if (jogador.poder > boss.poder * 2) {
        multJogador = 1.15;
    }

    if (boss.poder > jogador.poder * 4) {
        multBoss = 3.50;
    } else if (boss.poder > jogador.poder * 2) {
        multBoss = 2.50;
    }

    if (boss.nome === 'Kaido') {
        multBoss = Math.max(multBoss, 5.00);
    }

    return { multJogador, multBoss };
};

// ============================================================
// V4: COOLDOWN DE VERDADE
// Internamente 2 passos: é gasto no turno do jogador e só zera
// depois que outro turno completo terminou. Assim o round do boss
// não come o cooldown sozinho.
// ============================================================

window.aplicarCooldownDoGolpe = function aplicarCooldownDoGolpeV4(golpe) {
    estado.cooldownsAtaques[chaveDoGolpe(golpe)] = 2;
};

window.cooldownDoGolpe = function cooldownDoGolpeV4(golpe) {
    return Number(estado.cooldownsAtaques[chaveDoGolpe(golpe)] || 0) > 0 ? 1 : 0;
};

// ============================================================
// V4: BATALHA COM HAKI, HAKI DOS BOSSES E DANO BALANCEADO
// ============================================================

window.iniciarBoss = function iniciarBossV4() {
    const boss = v4BossAtualReal();
    if (!boss) {
        log('Não existe outro boss nesta ilha.');
        return;
    }

    if (boss.requerGomu && !ehGomuNika(jogador.fruta)) {
        logBatalha(`⚡ ${boss.nome} é a exceção da Logia: sem a ${'Gomu Gomu no Mi'} você não consegue interagir fisicamente com ele.`);
        return;
    }

    // O início usa a mesma configuração visual e a mesma entrada da v3.
    v4CarregarProgressoBoss();
    if (v4BossAtualReal()?.nome !== boss.nome) return;

    estado.turnoCombate = 0;
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

    montarPainelAtaques();
    montarPainelAliadosBatalha();
    mostrarBotaoHakiRei();
    mostrarBotaoRevestimentoRei();
    atualizarBarrasHP();

    const hakiInimigo = [];
    if (boss.haki?.obs) hakiInimigo.push('Observação');
    if (boss.haki?.arm) hakiInimigo.push('Armamento');
    if (boss.haki?.rei) hakiInimigo.push('Rei');

    if (boss.nome.includes('Akainu') && jogador.haki.rei && jogador.haki.reiEstado === 'Adormecido') {
        logBatalha('🚨 ÚLTIMO INIMIGO DE MARINEFORD. O sistema detectou algo adormecido em você. O Haki do Rei pode reagir SOMENTE NO MEIO DESTA LUTA.');
    } else if (boss.nome === 'Kaido') {
        logBatalha('🔥 KAIDO entrou no campo. Você está em uma batalha EXTREMA. O poder dele continua muito acima do seu mesmo quando sua build evolui.');
    } else if (boss.nome === 'Katakuri') {
        logBatalha('👁 KATAKURI lê seus movimentos. Aguente o x1: o Haki da Observação Avançado só pode nascer NO MEIO DESTA LUTA.');
    } else if (boss.requerHaki) {
        logBatalha(`⚔ ${boss.nome} continua exigindo Haki para ser derrotado. Haki detectado no inimigo: ${hakiInimigo.length ? hakiInimigo.join(', ') : 'nenhum'}.`);
    } else if (boss.logia) {
        logBatalha(`🌪 ${boss.nome} é uma Logia. Você precisa de Haki para atingir a forma física do inimigo. Haki do inimigo: ${hakiInimigo.length ? hakiInimigo.join(', ') : 'nenhum'}.`);
    } else {
        logBatalha(`${boss.nome} entrou no campo. Haki do inimigo: ${hakiInimigo.length ? hakiInimigo.join(', ') : 'nenhum'}. Faça seu movimento.`);
    }

    mudarTela('tela-combate');
};

window.usarAtaque = function usarAtaqueV4(golpe) {
    const boss = estado.bossAtivo;
    if (!boss || estado.bossHP <= 0 || jogador.vida <= 0 || estado.ataqueEmAndamento) return;

    if (!ataqueDisponivel(golpe)) {
        logBatalha(`Maestria insuficiente para ${golpe.nome}.`);
        return;
    }

    if (golpeEmCooldown(golpe)) {
        logBatalha(`${golpe.nome} está em cooldown. Espere 1 turno completo.`);
        return;
    }

    if (boss.requerHaki && !temHakiAtivo()) {
        logBatalha(`${boss.nome} exige Haki ativo para ser derrotado.`);
        return;
    }

    if (boss.requerGomu && !ehGomuNika(jogador.fruta)) {
        logBatalha('⚡ A Logia de Enel continua intangível para você. A Gomu Gomu é a exceção necessária nesta luta.');
        return;
    }

    estado.ataqueEmAndamento = true;
    estado.turnoCombate++;
    aplicarCooldownDoGolpe(golpe);

    const { multJogador, multBoss } = calcularMultiplicadoresCombate();
    const atributos = calcularAtributosCombate();

    let dano = golpe.dano + Math.floor(atributos.dano * 0.34);

    if (golpe.tipo === 'fruta') dano += Math.floor((jogador.fruta?.poder || 0) * 0.85);
    if (golpe.tipo === 'estilo') dano += 12 + jogador.maestria * 1.5;
    if (estado.hakiArmAtivo) dano *= 1.16 + jogador.haki.arm * 0.020;
    if (jogador.haki.armAvancado) dano *= 1.25;
    // V10: o valor do Haki do Rei faz diferença real. 30/30 dá +28% no Haki ativo;
    // 50/50 dá +40%. O revestimento também escala e funciona contra qualquer boss.
    const reiProgressoV10 = Math.max(0, Math.min(50, Number(jogador.haki.reiValor || 0))) / 50;
    if (estado.hakiReiAtivo) dano *= 1.10 + reiProgressoV10 * 0.50;
    if (estado.revestimentoReiAtivo) dano *= 1.20 + reiProgressoV10 * 0.50;
    if (jogador.fruta?.despertada) dano *= 1.22;

    if (jogador.raca === 'Gigante') dano *= 1.25; // Gigantes: +25% de dano.
    if (Number(estado.furiaYuamiRounds || 0) > 0 && !['Fúria dos mil homens'].includes(golpe?.nome)) dano *= 6; // +500% por 5 rounds.
    dano *= multJogador;

    // 30% de redução é a defesa padrão de todo inimigo.
    let reducaoInimigo = Number(boss.reducaoDano ?? 0.30);
    if (boss.esmagador) reducaoInimigo = Math.max(reducaoInimigo, 0.30);
    if (boss.resistenciaDano && boss.nome === 'Kaido') dano *= boss.resistenciaDano;

    // Haki da Observação do inimigo não anula o ataque, mas pode ler o movimento.
    if (boss.haki?.obs && Math.random() < 0.12) {
        dano *= 0.62;
        logBatalha(`👁 ${boss.nome} leu parcialmente seu movimento com Haki da Observação. O dano deste golpe caiu.`);
    }

    dano *= (1 - reducaoInimigo);
    dano = Math.max(1, Math.round(dano));
    estado.bossHP = Math.max(0, estado.bossHP - dano);

    v4DespertarObsNoKatakuri();
    v4DespertarArmNoKaido();
    tentarDespertarHakiReiNaturalmente();

    const extras = [];
    if (estado.hakiArmAtivo) extras.push('✊ Armamento');
    if (estado.hakiObsAtivo) extras.push('👁 Observação');
    if (estado.hakiReiAtivo) extras.push('👑 Rei ativo');
    if (estado.revestimentoReiAtivo) extras.push('⚡ Revestimento');

    logBatalha(`Você usou ${golpe.nome} e causou ${dano} de dano. ${extras.length ? extras.join(' • ') : 'Sem Haki ativo.'}`);
    atualizarBarrasHP();

    if (estado.bossHP <= 0) {
        window.vencerBoss();
        return;
    }

    setTimeout(() => window.contraAtaqueBoss(multBoss), 700);
};

window.contraAtaqueBoss = function contraAtaqueBossV4(multBoss = 1) {
    const boss = estado.bossAtivo;
    if (!boss || estado.bossHP <= 0 || jogador.vida <= 0) return;

    const atributos = calcularAtributosCombate();
    let baseDano = Math.max(18, Math.floor(boss.poder / 6.5) + Math.floor(Math.random() * 15));
    let dano = baseDano * multBoss;

    if (boss.haki?.arm) dano *= 1.18;
    if (boss.haki?.rei) dano *= 1.22;
    if (boss.haki?.obs) dano *= 1.05;

    if (boss.nome === 'Kaido') {
        dano *= 1.25;
    }

    // Esquiva reduzida. Normalmente fica na casa de poucos %.
    let esquiva = 0.01 + jogador.haki.obs * 0.003;
    if (estado.hakiObsAtivo) esquiva += 0.08 + jogador.haki.obs * 0.0015;
    if (jogador.haki.obsAvancado) esquiva = Math.max(esquiva, 0.28);
    esquiva = clamped(esquiva, 0.01, 0.32);

    if (Math.random() < esquiva) {
        logBatalha(`👁 Você previu o ataque de ${boss.nome} e ESQUIVOU. (${Math.round(esquiva * 100)}%)`);
    } else {
        dano = Math.round(dano * (1 - atributos.reducao / 100));
        jogador.vida = Math.max(0, jogador.vida - dano);
        logBatalha(`💥 ${boss.nome} acertou você e causou ${dano} de dano. Sua redução foi ${atributos.reducao}%.`);
    }

    v4DespertarObsNoKatakuri();
    v4DespertarArmNoKaido();
    tentarDespertarHakiReiNaturalmente();
    atualizarBarrasHP();

    if (jogador.vida <= 0) {
        tratarDerrotaContraBoss(boss);
        return;
    }

    // AGORA o round terminou. O cooldown 2 -> 1.
    reduzirCooldownsDeAtaques();
    reduzirCooldownsDosAliados();

    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    montarPainelAtaques();
    montarPainelAliadosBatalha();
};

window.usarAtaqueDoAliado = function usarAtaqueDoAliadoV4(index) {
    const boss = estado.bossAtivo;
    const aliado = jogador.aliados[index];
    if (!boss || !aliado || estado.ataqueEmAndamento || estado.aliadoAtacou || estado.bossHP <= 0) return;

    if (Number(aliado.cooldown || 0) > 0) {
        logBatalha(`${aliado.nome} está em cooldown. Espere 1 turno completo.`);
        return;
    }

    estado.ataqueEmAndamento = true;
    estado.aliadoAtacou = true;
    estado.turnoCombate++;
    aliado.reducaoDano = 0.30;
    aliado.cooldown = 2;

    let dano = aliado.poder * 3.0 + Math.floor(Math.random() * 8);
    if (aliado.fruta) dano += Math.floor(aliado.fruta.poder * 0.60);

    if (boss.haki?.obs && Math.random() < 0.10) {
        dano *= 0.65;
        logBatalha(`👁 ${boss.nome} leu o ataque de ${aliado.nome} e reduziu parte do impacto.`);
    }

    dano *= (1 - Number(boss.reducaoDano ?? 0.30));
    if (boss.esmagador) dano *= 0.50;
    dano = Math.max(1, Math.round(dano));

    estado.bossHP = Math.max(0, estado.bossHP - dano);
    atualizarBarrasHP();
    logBatalha(`👥 ${aliado.nome} atacou e causou ${dano} de dano depois da redução de 30% do inimigo.`);

    if (estado.bossHP <= 0) {
        window.vencerBoss();
        return;
    }

    setTimeout(() => window.contraAtaqueBoss(1), 700);
};

// ============================================================
// V4: DESPERTAR NO MEIO DA LUTA + VITÓRIA ESPECIAL DE SKYPIEA
// ============================================================

const v3VencerBossV4 = window.vencerBoss;

window.vencerBoss = function vencerBossV4() {
    const eraSky = v4EstaNoCeu();
    const bossAntesDaVit = estado.bossAtivo;
    const eraUltimoSky = eraSky && estado.bossIndex >= v4SkyBosses.length - 1;

    v3VencerBossV4();

    if (eraSky && eraUltimoSky) {
        estado.skypieaAtivo = false;
        estado.skypieaConcluida = true;
        ilhas[estado.ilhaIndex].options.skyfallConcluido = true;
        estado.bossIndex = 0;
        v4SalvarProgressoBoss();
        atualizarMapRoute();
        log('☁ Você derrotou Enel. A queda acabou. Jaya continua sendo o quadrado atual e Water 7 é a próxima parada.');
    }

    if (bossAntesDaVit?.nome === 'Akainu' && jogador.haki.reiEstado === 'Despertado!') {
        log('👑 O despertar do Haki do Rei aconteceu no meio do x1 contra Akainu, como deveria.');
    }

    atualizarCartaz();
    atualizarMapRoute();
};

// ============================================================
// V4: SAIR DA BATALHA SEM CARREGAR TRANSFORMAÇÃO
// ============================================================

window.sairDaBatalha = function sairDaBatalhaV4() {
    estado.bossAtivo = null;
    estado.bossHP = 0;
    estado.ataqueEmAndamento = false;
    estado.hakiArmAtivo = false;
    estado.hakiObsAtivo = false;
    estado.hakiReiAtivo = false;
    estado.revestimentoReiAtivo = false;
    estado.cooldownsAtaques = {};
    resetarCooldownsDosAliados();
    v4VoltarFormaBase();
    atualizarCartaz();
    window.carregarTelaDaIlha();
};

// ============================================================
// V4: CARREGAMENTO DA ILHA, JAYA/SKYPIEA E MAPA
// ============================================================

window.carregarTelaDaIlha = function carregarTelaDaIlhaV4() {
    // SKYPIEA fica no céu, mas o mapa continua apontando para Jaya.
    if (v4EstaNoCeu()) {
        v4CarregarProgressoBoss();
        if (estado.skypieaBuscasFruta == null) estado.skypieaBuscasFruta = 2;
        el('nome-ilha-atual').textContent = 'Skypiea';
        el('descricao-ilha').textContent = window.v4SkyDescricao;
        el('count-fruta').textContent = estado.skypieaBuscasFruta;
        atualizarHeader();
        atualizarBotoesIlha();
        atualizarCartaz();
        atualizarMapRoute();
        mudarTela('tela-ilha');
        return;
    }

    const ilhaAtualV4 = ilhaAtual();
    ilhaAtualV4.buscasFruta = Math.max(ilhaAtualV4.buscasFruta ?? 2, 0);

    v4CarregarProgressoBoss();

    el('nome-ilha-atual').textContent = ilhaAtualV4.nome;
    el('descricao-ilha').textContent = ilhaAtualV4.descricao;
    el('count-fruta').textContent = ilhaAtualV4.buscasFruta;

    atualizarHeader();
    atualizarBotoesIlha();
    atualizarCartaz();
    atualizarMapRoute();
    mudarTela('tela-ilha');

    if (ilhaAtualV4.nome === 'Cactus Island' && !estado.barcoConseguido) {
        window.mostrarEventoCactus();
        return;
    }

    if (ilhaAtualV4.nome === 'Jaya' && !estado.skypieaConcluida && !ilhaAtualV4.options.skyfallConcluido) {
        v4MostrarQuedaParaSkypiea();
        return;
    }

    if (ilhaAtualV4.options?.evento && !ilhaAtualV4.options.eventoResolvido) {
        prepararEventoDeIlha(ilhaAtualV4.options.evento);
    }
};

// ============================================================
// V4: BOTÕES DA ILHA + BOSS CORRETO + SKYPIEA
// ============================================================

window.atualizarBotoesIlha = function atualizarBotoesIlhaV4() {
    if (v4EstaNoCeu()) {
        el('count-fruta').textContent = estado.skypieaBuscasFruta ?? 2;
    } else {
        el('count-fruta').textContent = ilhaAtual().buscasFruta;
    }

    const treinoObsConcluido = v4EstaNoCeu()
        ? Boolean(jogador.treinamentos[`SKYPIEA:obs`])
        : treinamentoConcluido('obs');
    const treinoArmConcluido = v4EstaNoCeu()
        ? Boolean(jogador.treinamentos[`SKYPIEA:arm`])
        : treinamentoConcluido('arm');

    const btnObs = el('btn-treino-obs');
    const btnArm = el('btn-treino-arm');
    btnObs.disabled = treinoObsConcluido || jogador.haki.obs >= (jogador.haki.obsAvancado ? 50 : 30);
    btnArm.disabled = treinoArmConcluido || jogador.haki.arm >= (jogador.haki.armAvancado ? 50 : 30);
    btnObs.classList.toggle('concluido', btnObs.disabled);
    btnArm.classList.toggle('concluido', btnArm.disabled);

    const btnBoss = el('btn-boss-ilha');
    const boss = v4BossAtualReal();

    if (!boss || v4TodasBatalhasConcluidas()) {
        btnBoss.disabled = true;
        btnBoss.hidden = true;
        btnBoss.textContent = 'BOSS DA ILHA CONCLUÍDO';
    } else {
        btnBoss.hidden = false;
        btnBoss.disabled = false;

        if (v4EstaNoCeu()) {
            btnBoss.textContent = `ENFRENTAR ${boss.nome}`;
        } else if (ilhaAtual().options?.evento === 'pudding' && boss.nome === 'Katakuri') {
            btnBoss.textContent = 'ESTRAGAR CASAMENTO DE PUDDING';
        } else if (ilhaAtual().options?.evento === 'alabasta-trap' && !ilhaAtual().options.trapTriggered) {
            btnBoss.textContent = 'ENFRENTAR BOSS';
        } else if (jogador.faccao === 'Marinha' && ilhaAtual().nome === 'Egghead') {
            btnBoss.textContent = boss.nome.startsWith('Vegapunk') ? `ELIMINAR ${boss.nome}` : `CONTINUAR MISSÃO`;
        } else {
            btnBoss.textContent = `ENFRENTAR ${boss.nome}`;
        }
    }

    let descricao = v4EstaNoCeu()
        ? `Skypiea: ${boss ? `próximo inimigo = ${boss.nome}` : 'todos os cinco bosses derrotados.'}`
        : `Próximo passo: ${boss ? boss.nome : 'viajar quando quiser seguir a rota.'}`;

    if (ilhaAtual().nome === 'Jaya' && !v4EstaNoCeu() && !estado.skypieaConcluida) {
        descricao = 'Jaya é a porta para o céu. Ao avançar, você será lançado para Skypiea.';
    }

    if (jogador.faccao === 'Marinha' && ilhaAtual().nome === 'Egghead') {
        descricao = `Missão: eliminar os Vegapunks. Atual: ${boss ? boss.nome : 'concluída.'}`;
    }

    el('texto-progressao-ilha').textContent = descricao;
};

// ============================================================
// V4: HAKI REI E REVESTIMENTO VOLTAM APÓS SAIR DA LUTA
// ============================================================

window.mostrarBotaoHakiRei = function mostrarBotaoHakiReiV4() {
    const btn = el('btn-buff-rei');
    if (!btn) return;

    btn.hidden = jogador.haki.reiEstado !== 'Despertado!';
    btn.disabled = jogador.haki.reiEstado !== 'Despertado!';
};

window.mostrarBotaoRevestimentoRei = function mostrarBotaoRevestimentoReiV4() {
    const btn = el('btn-revestir-rei');
    if (!btn) return;

    const contraKaido = Boolean(estado.bossAtivo && estado.bossAtivo.nome === 'Kaido');
    btn.hidden = !contraKaido;
    btn.disabled = !contraKaido || jogador.haki.reiEstado !== 'Despertado!';
    btn.classList.toggle('ativado', estado.revestimentoReiAtivo);

    const small = btn.querySelector('small');
    if (small) {
        if (!contraKaido) small.textContent = 'Disponível somente contra Kaido';
        else if (jogador.haki.reiEstado !== 'Despertado!') small.textContent = 'Aguardando o despertar natural do Haki do Rei';
        else small.textContent = estado.revestimentoReiAtivo ? 'ATIVO • Golpes revestidos' : 'LIBERADO • Revestir contra Kaido';
    }
};

// ============================================================
// V4: TREINO NÃO ULTRAPASSA OS LIMITES E MAX 50 SÓ APÓS DESPERTAR
// ============================================================

const v3FinalizarMinigameV4 = window.finalizarMinigameTreino;

if (typeof window.finalizarMinigameTreino === 'function') {
    // A função original continua existindo. O V4 garante os limites após qualquer ganho.
    window.finalizarMinigameTreino = function finalizarMinigameTreinoV4(tipo, ganho, nota) {
        if (typeof v3FinalizarMinigameV4 !== 'function') return;
        v3FinalizarMinigameV4(tipo, ganho, nota);
        jogador.haki.obs = clamped(jogador.haki.obs, 0, jogador.haki.obsAvancado ? 50 : 30);
        jogador.haki.arm = clamped(jogador.haki.arm, 0, jogador.haki.armAvancado ? 50 : 30);
        atualizarCartaz();
    };
}

// ============================================================
// V4: ALIADOS SEM SUMIR DAS BOSS BATTLES
// ============================================================

const v3ProcurarAliadoV4 = window.procurarAliado;

window.procurarAliado = function procurarAliadoV4() {
    if (typeof v3ProcurarAliadoV4 === 'function') {
        v3ProcurarAliadoV4();
    }
    jogador.aliados.forEach(aliado => {
        aliado.reducaoDano = 0.30;
        aliado.cooldown = Number(aliado.cooldown || 0);
    });
    montarPainelAliadosBatalha();
};

// ============================================================
// V4: RESET TOTAL INCLUI FORMAS E O ESTADO ESPECIAL
// ============================================================

const v3ReiniciarJornadaV4 = window.reiniciarJornada;

window.reiniciarJornada = function reiniciarJornadaV4() {
    estado.skypieaAtivo = false;
    estado.skypieaConcluida = false;
    estado.skypieaBossProgresso = 0;
    estado.contextoBarco = '';
    jogador.segundaVidaAkumaUsada = false;
    v4VoltarFormaBase();
    if (typeof v3ReiniciarJornadaV4 === 'function') {
        v3ReiniciarJornadaV4();
    } else {
        window.location.reload();
    }
};

// ============================================================
// V4: ACABAMENTO FINAL DE HAKI / FORMAS / ALIADOS
// ============================================================

(function finalizarPatchV4() {
    // Gomu continua em base fora da batalha. Gear só volta quando o jogador escolher dentro de outra luta.
    v4VoltarFormaBase();

    // Os aliados existentes também recebem a defesa padrão da versão atual.
    jogador.aliados.forEach(aliado => {
        aliado.reducaoDano = 0.30;
    });

    // Atualiza a tela após todos os patches.
    atualizarCartaz();
    atualizarMapRoute();
    prepararOpcoesDeBarco();
})();


// ============================================================
// V5 PATCH
// CORREÇÕES SOLICITADAS PELO JOGADOR
// ============================================================

// ------------------------------------------------------------
// V5.1: IDENTIDADE INTERNA DA GOMU / HITO HITO NO MI
// A fruta do jogador vira Hito Hito após o despertar, mas conserva
// um identificador interno para que todos os sistemas continuem
// reconhecendo sua origem como Gomu Gomu.
// ------------------------------------------------------------

function ehGomuNika(frutaAtual = jogador.fruta) {
    if (!frutaAtual) return false;
    return frutaAtual.nome === 'Gomu Gomu no Mi'
        || frutaAtual.nome === 'Hito Hito no Mi, Modelo: Nika'
        || frutaAtual.nomeOriginal === 'Gomu Gomu no Mi'
        || frutaAtual.gomuNika === true;
}

function marcarGomuInternamente(frutaAtual) {
    if (!frutaAtual) return frutaAtual;
    if (frutaAtual.nome === 'Gomu Gomu no Mi' || frutaAtual.nome === 'Hito Hito no Mi, Modelo: Nika') {
        frutaAtual.nomeOriginal = 'Gomu Gomu no Mi';
        frutaAtual.gomuNika = true;
    }
    return frutaAtual;
}

const v5ComerFrutaOriginal = window.comerFruta;

window.comerFruta = function comerFrutaV5(frutaAtual) {
    if (!frutaAtual) return;

    const copiaDaFruta = { ...frutaAtual };
    marcarGomuInternamente(copiaDaFruta);

    if (ehGomuNika(copiaDaFruta)) {
        copiaDaFruta.nome = 'Gomu Gomu no Mi';
        copiaDaFruta.nomeOriginal = 'Gomu Gomu no Mi';
        copiaDaFruta.gomuNika = true;
    }

    if (typeof v5ComerFrutaOriginal === 'function') {
        v5ComerFrutaOriginal(copiaDaFruta);
        if (jogador.fruta) marcarGomuInternamente(jogador.fruta);
    }
};

// ------------------------------------------------------------
// V5.2: DESPERTAR DA GOMU = HITO HITO NO MI, MODELO NIKA
// ------------------------------------------------------------

const v5DespertarFrutaOriginal = window.despertarFrutaSegundaVida;

window.despertarFrutaSegundaVida = function despertarFrutaSegundaVidaV5() {
    if (!jogador.fruta || jogador.fruta.despertada) return false;

    const resultado = typeof v5DespertarFrutaOriginal === 'function'
        ? v5DespertarFrutaOriginal()
        : false;

    if (!resultado) return false;

    if (ehGomuNika()) {
        jogador.fruta.nomeOriginal = 'Gomu Gomu no Mi';
        jogador.fruta.gomuNika = true;
        jogador.fruta.nome = 'Hito Hito no Mi, Modelo: Nika';
        jogador.fruta.despertada = true;
        jogador.fruta.formaAtual = 'base';
        logBatalha('☀️ A Gomu Gomu no Mi revelou sua verdadeira identidade: HITO HITO NO MI, MODELO: NIKA! O despertar da fruta foi reconhecido pelo sistema.');
    } else {
        logBatalha(`✨ A ${jogador.fruta.nome} despertou e seu poder foi ampliado.`);
    }

    atualizarCartaz();
    return true;
};

// ------------------------------------------------------------
// V5.3: GOMU / NIKA NÃO PERDE AS FORMAS APÓS A MUDANÇA DE NOME
// ------------------------------------------------------------

window.montarFormasGomu = function montarFormasGomuV5() {
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

    if (!ehGomuNika() || !jogador.fruta?.formas) {
        area.hidden = true;
        return;
    }

    area.hidden = false;

    const titulo = document.createElement('div');
    titulo.className = 'attack-group-title';
    titulo.textContent = `${jogador.fruta.nome} • FORMAS DA FRUTA • MAESTRIA ${jogador.maestria}`;
    area.appendChild(titulo);

    const botoes = document.createElement('div');
    botoes.className = 'fruit-form-buttons';

    Object.entries(jogador.fruta.formas).forEach(([chave, forma]) => {
        const btn = document.createElement('button');
        btn.className = 'btn-acao fruta-form-btn';
        btn.textContent = `${forma.nome} • ${forma.requerDespertar ? 'REQUER DESPERTAR' : `Req. ${forma.req}`}`;
        aplicarImagemBotao(btn, forma.img);

        const bloqueadoMaestria = jogador.maestria < Number(forma.req || 0);
        const bloqueadoDespertar = Boolean(forma.requerDespertar) && !jogador.fruta.despertada;
        btn.disabled = bloqueadoMaestria || bloqueadoDespertar;

        if (jogador.fruta.formaAtual === chave) btn.classList.add('selecionado');

        if (!btn.disabled) {
            btn.onclick = () => {
                jogador.fruta.formaAtual = chave;
                montarPainelAtaques();
                logBatalha(`🍖 Você assumiu ${forma.nome}. A transformação da fruta pode ser combinada com a transformação do seu estilo.`);
            };
        }

        botoes.appendChild(btn);
    });

    area.appendChild(botoes);
};

// ------------------------------------------------------------
// V5.4: TRANSFORMAÇÕES DOS ESTILOS
// As transformações de estilo possuem estado próprio e NÃO alteram
// as transformações da fruta. É possível usar os dois ao mesmo tempo.
// ------------------------------------------------------------

if (!jogador.formaEstiloAtual) {
    jogador.formaEstiloAtual = 'base';
}

const transformacoesEstiloV5 = {
    'Perna Negra': {
        base: {
            nome: 'Perna Negra • Base',
            req: 0,
            multDano: 1.00,
            reducaoExtra: 0,
            img: img('PERNA+NEGRA+BASE', '402b1f', 260, 150),
            descricao: 'Os golpes normais do estilo.'
        },
        diableJambe: {
            nome: 'Diable Jambe',
            req: 2,
            multDano: 1.32,
            reducaoExtra: 0.01,
            img: img('DIABLE+JAMBE', '641f18', 260, 150),
            descricao: 'A perna pega fogo e os golpes do estilo ficam muito mais pesados.'
        }
    },
    'Santoryu': {
        base: {
            nome: 'Santoryu • Base',
            req: 0,
            multDano: 1.00,
            reducaoExtra: 0,
            img: img('SANTORYU+BASE', '1b2633', 260, 150),
            descricao: 'Três espadas, três direções de dor.'
        },
        asura: {
            nome: 'Asura',
            req: 5,
            multDano: 1.42,
            reducaoExtra: 0.015,
            img: img('ASURA+ZORO', '261b2f', 260, 150),
            descricao: 'A forma monstruosa de Zoro. Enquanto ativa, o conjunto de golpes de espada prioriza o estilo do Zoro.'
        }
    },
    'Rokushiki': {
        base: {
            nome: 'Rokushiki • Base',
            req: 0,
            multDano: 1.00,
            reducaoExtra: 0,
            img: img('ROKUSHIKI+BASE', '172d3f', 260, 150),
            descricao: 'As seis técnicas no estado normal.'
        },
        tekkai: {
            nome: 'Tekkai',
            req: 5,
            multDano: 1.18,
            reducaoExtra: 0.04,
            img: img('TEKKAI', '263949', 260, 150),
            descricao: 'Endurecimento corporal. Menos velocidade, mais resistência.'
        }
    },
    'Karatê dos Homens-Peixe': {
        base: {
            nome: 'Karatê dos Homens-Peixe • Base',
            req: 0,
            multDano: 1.00,
            reducaoExtra: 0,
            img: img('FISHMAN+KARATE+BASE', '153c4c', 260, 150),
            descricao: 'Manipulação da água e impacto físico.'
        },
        soshark: {
            nome: 'Karatê dos Homens-Peixe • Forma Superior',
            req: 5,
            multDano: 1.28,
            reducaoExtra: 0.02,
            img: img('FISHMAN+KARATE+SUPERIOR', '0f4152', 260, 150),
            descricao: 'Uma postura avançada que aumenta o impacto dos golpes.'
        }
    },
};

function obterTransformacaoEstiloAtual() {
    const conjunto = transformacoesEstiloV5[jogador.estiloLuta];
    if (!conjunto) return null;
    const forma = conjunto[jogador.formaEstiloAtual || 'base'];
    return forma || conjunto.base || null;
}

function voltarFormaEstiloBase() {
    jogador.formaEstiloAtual = 'base';
}

window.montarFormasEstilo = function montarFormasEstiloV5() {
    let area = el('painel-formas-estilo');
    const painelFruta = el('painel-formas-fruta');
    const painelAtaques = el('painel-ataques');
    if (!painelAtaques) return;

    if (!area) {
        area = document.createElement('div');
        area.id = 'painel-formas-estilo';
        area.className = 'style-form-grid';
        const ancora = painelFruta || painelAtaques;
        ancora.parentElement.insertBefore(area, ancora.nextSibling);
    }

    area.innerHTML = '';

    const transformacoes = transformacoesEstiloV5[jogador.estiloLuta];
    if (!transformacoes) {
        area.hidden = true;
        return;
    }

    area.hidden = false;

    const titulo = document.createElement('div');
    titulo.className = 'attack-group-title';
    titulo.textContent = `TRANSFORMAÇÕES DO ESTILO • ${jogador.estiloLuta}`;
    area.appendChild(titulo);

    const botoes = document.createElement('div');
    botoes.className = 'fruit-form-buttons';

    Object.entries(transformacoes).forEach(([chave, forma]) => {
        const btn = document.createElement('button');
        btn.className = 'btn-acao estilo-form-btn';
        btn.textContent = `${forma.nome} • Req. ${forma.req}`;
        aplicarImagemBotao(btn, forma.img);
        btn.disabled = jogador.maestria < Number(forma.req || 0);
        if (jogador.formaEstiloAtual === chave) btn.classList.add('selecionado');

        if (!btn.disabled) {
            btn.onclick = () => {
                jogador.formaEstiloAtual = chave;
                montarPainelAtaques();
                logBatalha(`⚔️ Transformação do estilo alterada para ${forma.nome}. Ela pode ficar ativa junto da transformação da fruta.`);
            };
        }

        botoes.appendChild(btn);
    });

    area.appendChild(botoes);

    const descricao = document.createElement('small');
    descricao.className = 'style-transform-description';
    const atual = obterTransformacaoEstiloAtual();
    descricao.textContent = atual ? atual.descricao : '';
    area.appendChild(descricao);
};

// Substitui a montagem dos ataques somente para acrescentar a camada
// independente das transformações de estilo. Os golpes antigos continuam.
const v5MontarPainelAtaquesAnterior = window.montarPainelAtaques;

window.montarPainelAtaques = function montarPainelAtaquesV5() {
    if (typeof v5MontarPainelAtaquesAnterior === 'function') {
        v5MontarPainelAtaquesAnterior();
    }
    montarFormasEstilo();
};

// ------------------------------------------------------------
// V5.5: FORMAS DE ESTILO VOLTAM À BASE AO SAIR DA BATALHA
// ------------------------------------------------------------

const v5SairBatalhaAnterior = window.sairDaBatalha;

window.sairDaBatalha = function sairDaBatalhaV5() {
    voltarFormaEstiloBase();
    if (typeof v5SairBatalhaAnterior === 'function') {
        v5SairBatalhaAnterior();
    }
    voltarFormaEstiloBase();
};

// ------------------------------------------------------------
// V5.6: LOGIAS EXIGEM HAKI
// Enel tem a regra especial: Haki OU Gomu/Nika.
// ------------------------------------------------------------

const v5BossesParaRequisitos = [];
ilhas.forEach(ilhaAtualV5 => ilhaAtualV5.bosses.forEach(bossAtualV5 => v5BossesParaRequisitos.push(bossAtualV5)));
if (typeof v4SkyBosses !== 'undefined') v4SkyBosses.forEach(bossAtualV5 => v5BossesParaRequisitos.push(bossAtualV5));

v5BossesParaRequisitos.forEach(bossAtualV5 => {
    if (['Aokiji (Kuzan)', 'Kizaru (Borsalino)', 'Kizaru', 'Crocodile', 'Enel'].includes(bossAtualV5.nome)) {
        bossAtualV5.logia = true;
        bossAtualV5.requerHaki = true;
    }
});

const v5Enel = v5BossesParaRequisitos.find(bossAtualV5 => bossAtualV5.nome === 'Enel');
if (v5Enel) {
    v5Enel.requerGomu = true;
    v5Enel.requerHakiOuGomu = true;
}

const v5TemHakiAtivoAnterior = window.temHakiAtivo;

window.temHakiAtivo = function temHakiAtivoV5() {
    if (v5Enel && estado.bossAtivo?.nome === 'Enel' && ehGomuNika()) {
        return true;
    }

    if (typeof v5TemHakiAtivoAnterior === 'function') {
        return v5TemHakiAtivoAnterior();
    }

    return Boolean(estado.hakiArmAtivo || estado.hakiObsAtivo || estado.hakiReiAtivo);
};

// ------------------------------------------------------------
// V5.7: ENEL = HAKI OU GOMU/NIKA, OUTRAS LOGIAS = HAKI OBRIGATÓRIO
// ------------------------------------------------------------

const v5UsarAtaqueAntesDaLogia = window.usarAtaque;

window.usarAtaque = function usarAtaqueV5(golpe) {
    const boss = estado.bossAtivo;
    if (boss && boss.requerHaki) {
        const enelComGomu = boss.nome === 'Enel' && ehGomuNika();
        if (!temHakiAtivo() && !enelComGomu) {
            logBatalha(`⚔ ${boss.nome} exige Haki para ser atingido. ${boss.nome === 'Enel' ? 'A Gomu Gomu/Nika também é uma exceção válida nesta luta.' : 'Ative seu Haki antes de atacar.'}`);
            return;
        }
    }

    if (typeof v5UsarAtaqueAntesDaLogia === 'function') {
        v5UsarAtaqueAntesDaLogia(golpe);
    }
};

// ------------------------------------------------------------
// V5.8: HAKI DO REI EM DUAS ETAPAS VISÍVEIS
// Adormecido -> 30/30 -> 50/50.
// O primeiro salto ocorre somente no x1 com Akainu.
// O segundo salto ocorre posteriormente na pressão de Kaido.
// ------------------------------------------------------------

jogador.haki.reiAvancado = Boolean(jogador.haki.reiAvancado);

const v5DespertarReiAnterior = window.despertarHakiRei;

window.despertarHakiRei = function despertarHakiReiV5() {
    if (!jogador.haki.rei || jogador.haki.reiEstado === 'Despertado!') return;

    jogador.haki.reiEstado = 'Despertado!';
    jogador.haki.reiValor = 30;
    jogador.haki.reiMax = 30;
    jogador.haki.reiAvancado = false;

    if (typeof v5DespertarReiAnterior === 'function') {
        // Não chamamos a versão antiga para evitar que ela substitua 30/30 por 30/50.
    }

    atualizarCartaz();
    mostrarBotaoHakiRei();
    logBatalha('👑 AKAINU: seu Haki do Rei finalmente reagiu NO MEIO DO X1. O poder conquistador despertou! Agora: 30/30.');
    montarPainelAtaques();
};

const v5TentarReiAnterior = window.tentarDespertarHakiReiNaturalmente;

window.tentarDespertarHakiReiNaturalmente = function tentarDespertarHakiReiV5() {
    const boss = estado.bossAtivo;
    if (!boss) return false;
    if (!jogador.haki.rei || jogador.haki.reiEstado !== 'Adormecido') return false;
    if (!boss.nome.includes('Akainu')) return false;

    // Segurança extra: o evento só pode ocorrer depois de alguns turnos e
    // nunca no começo do combate.
    if (estado.turnoCombate < 4) return false;

    const playerCritico = jogador.vida <= jogador.vidaMaxima * 0.58;
    const bossCritico = estado.bossHP <= boss.hpMax * 0.58;
    if (!playerCritico && !bossCritico) return false;

    if (Math.random() < 0.70 || estado.turnoCombate >= 7) {
        despertarHakiRei();
        return true;
    }

    return false;
};

function v5AvancarReiNoKaido() {
    const boss = estado.bossAtivo;
    if (!boss || boss.nome !== 'Kaido') return false;
    if (jogador.haki.reiEstado !== 'Despertado!') return false;
    if (jogador.haki.reiAvancado) return false;
    if (estado.turnoCombate < 4) return false;

    const playerCritico = jogador.vida <= jogador.vidaMaxima * 0.48;
    const bossCritico = estado.bossHP <= boss.hpMax * 0.48;
    if (!playerCritico && !bossCritico) return false;

    jogador.haki.reiAvancado = true;
    jogador.haki.reiValor = 50;
    jogador.haki.reiMax = 50;
    atualizarCartaz();
    mostrarBotaoHakiRei();
    logBatalha('👑⚡ KAIDO: seu Haki do Rei rompeu outra barreira no meio da luta. Agora: 50/50. O revestimento conquistador pode acompanhar seus golpes.');
    montarPainelAtaques();
    return true;
}

// ------------------------------------------------------------
// V5.9: CARTAZ CORRETO PARA O HAKI DO REI
// Não exibe 0/30 enquanto Adormecido e só mostra 50/50 na segunda etapa.
// ------------------------------------------------------------

const v5AtualizarCartazAnterior = window.atualizarCartaz;

window.atualizarCartaz = function atualizarCartazV5() {
    if (typeof v5AtualizarCartazAnterior === 'function') {
        v5AtualizarCartazAnterior();
    }

    if (jogador.haki.reiEstado === 'Despertado!') {
        const valor = jogador.haki.reiAvancado ? 50 : 30;
        const max = jogador.haki.reiAvancado ? 50 : 30;
        jogador.haki.reiValor = valor;
        jogador.haki.reiMax = max;
        el('haki-rei').textContent = `${valor}/${max}`;
    } else if (jogador.haki.rei) {
        el('haki-rei').textContent = 'Adormecido';
    } else {
        el('haki-rei').textContent = 'Não possui';
    }
};

// ------------------------------------------------------------
// V5.10: HAKI AVANÇADO E REI SÃO ATUALIZADOS DURANTE OS TURNOS
// ------------------------------------------------------------

const v5ContraAtaqueAnterior = window.contraAtaqueBoss;

window.contraAtaqueBoss = function contraAtaqueBossV5(multBoss = 1) {
    if (typeof v5ContraAtaqueAnterior === 'function') {
        const retorno = v5ContraAtaqueAnterior(multBoss);
        v5AvancarReiNoKaido();
        atualizarCartaz();
        return retorno;
    }
    return undefined;
};

// ------------------------------------------------------------
// V5.11: A ARMA DE REI SÓ APARECE APÓS O DESPERTAR
// E O COATING CONTINUA EXCLUSIVO DA LUTA CONTRA KAIDO.
// ------------------------------------------------------------

window.mostrarBotaoHakiRei = function mostrarBotaoHakiReiV5() {
    const btn = el('btn-buff-rei');
    if (!btn) return;

    const despertado = jogador.haki.reiEstado === 'Despertado!';
    btn.hidden = !despertado;
    btn.disabled = !despertado;

    const small = btn.querySelector('small');
    if (small) {
        if (!despertado) small.textContent = 'Ainda adormecido';
        else if (jogador.haki.reiAvancado) small.textContent = 'ATIVO • 50/50 • Conquistador avançado';
        else small.textContent = 'ATIVO • 30/30 • Conquistador despertado';
    }
};

window.mostrarBotaoRevestimentoRei = function mostrarBotaoRevestimentoReiV5() {
    const btn = el('btn-revestir-rei');
    if (!btn) return;

    const boss = estado.bossAtivo;
    const contraKaido = Boolean(boss && boss.nome === 'Kaido');
    const possuiRei = jogador.haki.reiEstado === 'Despertado!';

    btn.hidden = !contraKaido;
    btn.disabled = !contraKaido || !possuiRei;
    btn.classList.toggle('ativado', estado.revestimentoReiAtivo);

    const small = btn.querySelector('small');
    if (small) {
        if (!contraKaido) small.textContent = 'Disponível somente contra Kaido';
        else if (!possuiRei) small.textContent = 'Primeiro desperte o Haki do Rei contra Akainu';
        else if (jogador.haki.reiAvancado) small.textContent = estado.revestimentoReiAtivo ? 'ATIVO • 50/50 • Golpes revestidos' : 'LIBERADO • Revestimento conquistador';
        else small.textContent = 'LIBERADO • Seu Haki do Rei está em 30/30';
    }
};

// ------------------------------------------------------------
// V5.12: O DESPERTAR DO REI NÃO ACONTECE NO COMEÇO DA LUTA.
// Não há rolagem genérica escondida para outros bosses.
// ------------------------------------------------------------

// ------------------------------------------------------------
// V5.13: HAKI DE OBSERVAÇÃO / ARMAMENTO AVANÇADOS
// Mantêm os 30 pontos como base e liberam 30/50 apenas no boss correto.
// ------------------------------------------------------------

const v5DespertarObsOriginal = window.v4DespertarObsNoKatakuri;
const v5DespertarArmOriginal = window.v4DespertarArmNoKaido;

window.v4DespertarObsNoKatakuri = function v4DespertarObsNoKatakuriV5() {
    const boss = estado.bossAtivo;
    if (!boss || boss.nome !== 'Katakuri') return false;
    if (jogador.haki.obsAvancado) return false;
    if (estado.turnoCombate < 4) return false;
    if (jogador.vida > jogador.vidaMaxima * 0.60 && estado.bossHP > boss.hpMax * 0.60) return false;

    jogador.haki.obsAvancado = true;
    jogador.haki.obs = 30;
    jogador.haki.obsMax = 50;
    atualizarCartaz();
    logBatalha('👁 KATAKURI: no meio do x1, sua percepção atravessou o limite. HAKI DA OBSERVAÇÃO AVANÇADO! Agora: 30/50.');
    montarPainelAtaques();
    return true;
};

window.v4DespertarArmNoKaido = function v4DespertarArmNoKaidoV5() {
    const boss = estado.bossAtivo;
    if (!boss || boss.nome !== 'Kaido') return false;
    if (jogador.haki.armAvancado) return false;
    if (estado.turnoCombate < 4) return false;
    if (jogador.vida > jogador.vidaMaxima * 0.58 && estado.bossHP > boss.hpMax * 0.58) return false;

    jogador.haki.armAvancado = true;
    jogador.haki.arm = 30;
    jogador.haki.armMax = 50;
    atualizarCartaz();
    logBatalha('✊ KAIDO: seu Armamento atravessou o limite no meio do x1. HAKI DO ARMAMENTO AVANÇADO! Agora: 30/50.');
    montarPainelAtaques();
    return true;
};

// ------------------------------------------------------------
// V5.14: APLICAR TRANSFORMAÇÃO DE ESTILO NO DANO/REDUÇÃO
// ------------------------------------------------------------

const v5CalcularAtributosAnterior = window.calcularAtributosCombate;

window.calcularAtributosCombate = function calcularAtributosCombateV5() {
    const atributos = typeof v5CalcularAtributosAnterior === 'function'
        ? v5CalcularAtributosAnterior()
        : { dano: 12, reducao: 2, vidaMaxima: jogador.vidaMaxima };

    const transformacao = obterTransformacaoEstiloAtual();
    if (transformacao) {
        atributos.dano = Math.round(atributos.dano * transformacao.multDano);
        atributos.reducao = Math.min(30, atributos.reducao + Math.round(transformacao.reducaoExtra * 100));
    }

    return atributos;
};

// ------------------------------------------------------------
// V5.15: RESET DA TRANSFORMAÇÃO DO ESTILO AO INICIAR CADA NOVA LUTA
// ------------------------------------------------------------

const v5IniciarBossAnterior = window.iniciarBoss;

window.iniciarBoss = function iniciarBossV5() {
    voltarFormaEstiloBase();
    if (typeof v5IniciarBossAnterior === 'function') {
        return v5IniciarBossAnterior();
    }
};

// ------------------------------------------------------------
// V5.16: BUSCA DE FRUTA RECONHECE NIKA COMO A MESMA FRUTA RARA
// ------------------------------------------------------------

const v5ProcurarFrutaAnterior = window.procurarFruta;

window.procurarFruta = function procurarFrutaV5() {
    if (typeof v5ProcurarFrutaAnterior === 'function') {
        return v5ProcurarFrutaAnterior();
    }
};

// ------------------------------------------------------------
// V5.17: ATAQUES COM ESTILO TRANSFORMADO MANTÊM A COMPATIBILIDADE
// COM AS TRANSFORMAÇÕES DE FRUTA.
// ------------------------------------------------------------

const v5MontarPainelAtaquesFinal = window.montarPainelAtaques;
window.montarPainelAtaques = function montarPainelAtaquesV5Final() {
    if (typeof v5MontarPainelAtaquesFinal === 'function') {
        v5MontarPainelAtaquesFinal();
    }
    montarFormasEstilo();
};

// ------------------------------------------------------------
// V5.18: INICIALIZAÇÃO FINAL
// ------------------------------------------------------------

(function iniciarPatchV5() {
    jogador.formaEstiloAtual = 'base';
    jogador.haki.reiAvancado = Boolean(jogador.haki.reiAvancado);

    const bossesV5Final = [];
    ilhas.forEach(ilhaAtualV5 => ilhaAtualV5.bosses.forEach(bossAtualV5 => bossesV5Final.push(bossAtualV5)));
    if (typeof v4SkyBosses !== 'undefined') v4SkyBosses.forEach(bossAtualV5 => bossesV5Final.push(bossAtualV5));

    bossesV5Final.forEach(bossAtualV5 => {
        if (['Aokiji (Kuzan)', 'Kizaru (Borsalino)', 'Kizaru', 'Crocodile', 'Enel'].includes(bossAtualV5.nome)) {
            bossAtualV5.logia = true;
            bossAtualV5.requerHaki = true;
        }
    });

    const enelFinal = bossesV5Final.find(bossAtualV5 => bossAtualV5.nome === 'Enel');
    if (enelFinal) {
        enelFinal.requerGomu = true;
        enelFinal.requerHakiOuGomu = true;
    }

    atualizarCartaz();
    mostrarBotaoHakiRei();
    mostrarBotaoRevestimentoRei();
    montarPainelAtaques();
})();


// ============================================================
// V5.19: NIKA É O NOME VISÍVEL, GOMU É O IDENTIFICADOR INTERNO
// ============================================================

function frutaGomuNikaAtiva() {
    return ehGomuNika(jogador.fruta);
}

function resetarFormaDaFrutaParaBase() {
    if (!jogador.fruta || !frutaGomuNikaAtiva()) return;
    if (jogador.fruta.formas?.base) {
        jogador.fruta.formaAtual = 'base';
    }
}

// Corrige o reset que acontecia no motor antigo antes que o V5 pudesse
// reconhecer o novo nome da fruta despertada.
const v5SairBatalhaComFormaAnterior = window.sairDaBatalha;

window.sairDaBatalha = function sairDaBatalhaV5Final() {
    resetarFormaDaFrutaParaBase();
    voltarFormaEstiloBase();

    if (typeof v5SairBatalhaComFormaAnterior === 'function') {
        v5SairBatalhaComFormaAnterior();
    }

    resetarFormaDaFrutaParaBase();
    voltarFormaEstiloBase();
};

// O mesmo reset é aplicado quando uma nova batalha começa.
const v5IniciarBossComFormaAnterior = window.iniciarBoss;

window.iniciarBoss = function iniciarBossV5Final() {
    resetarFormaDaFrutaParaBase();
    voltarFormaEstiloBase();

    if (typeof v5IniciarBossComFormaAnterior === 'function') {
        return v5IniciarBossComFormaAnterior();
    }
};

// ------------------------------------------------------------
// V5.20: GOMU DESPERTADA MOSTRA HITO HITO NO MI, MODELO NIKA
// SEM PERDER O MOTOR DE FORMAS.
// ------------------------------------------------------------

const v5AtualizarCartazNikaAnterior = window.atualizarCartaz;

window.atualizarCartaz = function atualizarCartazV5Nika() {
    if (typeof v5AtualizarCartazNikaAnterior === 'function') {
        v5AtualizarCartazNikaAnterior();
    }

    if (jogador.fruta && frutaGomuNikaAtiva()) {
        jogador.fruta.nomeOriginal = 'Gomu Gomu no Mi';
        jogador.fruta.gomuNika = true;
        if (jogador.fruta.despertada) {
            jogador.fruta.nome = 'Hito Hito no Mi, Modelo: Nika';
        }
    }
};

// ------------------------------------------------------------
// V5.21: FORMAS DE ESTILO E DA FRUTA PODEM SER COMBINADAS
// Ex.: Gear 4 + Asura, Gear 2 + Diable Jambe.
// ------------------------------------------------------------

const v5MontarFormasEstiloAnterior = window.montarFormasEstilo;

window.montarFormasEstilo = function montarFormasEstiloV5Final() {
    if (typeof v5MontarFormasEstiloAnterior === 'function') {
        v5MontarFormasEstiloAnterior();
    }

    const formaFruta = frutaGomuNikaAtiva() && jogador.fruta?.formas
        ? jogador.fruta.formas[jogador.fruta.formaAtual || 'base']
        : null;
    const formaEstilo = obterTransformacaoEstiloAtual();
    const area = el('painel-formas-estilo');

    if (area && formaEstilo) {
        area.classList.toggle('style-transform-active', Boolean(formaEstilo && formaEstilo.nome !== 'Perna Negra • Base' && formaEstilo.nome !== 'Santoryu • Base'));
        const combo = document.createElement('div');
        combo.className = 'style-fruit-combo';
        combo.textContent = formaFruta
            ? `COMBINAÇÃO ATUAL: ${formaFruta.nome} + ${formaEstilo.nome}`
            : `FORMA DE ESTILO ATUAL: ${formaEstilo.nome}`;
        area.appendChild(combo);
    }
};

// ------------------------------------------------------------
// V5.22: LOGIAS EXIGEM HAKI, ENEL ACEITA GOMU/NIKA COMO EXCEÇÃO
// ------------------------------------------------------------

const v5ListaLogiasDefinitiva = [
    'Aokiji (Kuzan)',
    'Kizaru (Borsalino)',
    'Kizaru',
    'Crocodile',
    'Enel'
];


ilhas.forEach(ilhaAtualV5Final => {
    ilhaAtualV5Final.bosses.forEach(bossAtualV5Final => {
        if (v5ListaLogiasDefinitiva.includes(bossAtualV5Final.nome)) {
            bossAtualV5Final.logia = true;
            bossAtualV5Final.requerHaki = true;
        }
    });
});

if (typeof v4SkyBosses !== 'undefined') {
    v4SkyBosses.forEach(bossAtualV5Final => {
        if (v5ListaLogiasDefinitiva.includes(bossAtualV5Final.nome)) {
            bossAtualV5Final.logia = true;
            bossAtualV5Final.requerHaki = true;
        }
    });
}

// ------------------------------------------------------------
// V5.23: REGRAS DE HAKI DO REI DEFINITIVAS
// Adormecido não possui fração numérica.
// Primeiro despertar: 30/30 em Akainu.
// Segunda evolução: 50/50 em Kaido.
// ------------------------------------------------------------

jogador.haki.reiMax = jogador.haki.reiEstado === 'Despertado!'
    ? (jogador.haki.reiAvancado ? 50 : 30)
    : 30;

if (jogador.haki.reiEstado === 'Despertado!' && jogador.haki.reiAvancado) {
    jogador.haki.reiValor = 50;
} else if (jogador.haki.reiEstado === 'Despertado!') {
    jogador.haki.reiValor = 30;
} else {
    jogador.haki.reiValor = 0;
}

// ------------------------------------------------------------
// V5.24: ATAQUES DO NIKA USAM AS FORMAS DA GOMU NORMALMENTE
// ------------------------------------------------------------

const v5UsarAtaqueNikaAnterior = window.usarAtaque;

window.usarAtaque = function usarAtaqueV5NikaFinal(golpe) {
    const boss = estado.bossAtivo;

    if (boss && boss.requerHaki) {
        const enelComNika = boss.nome === 'Enel' && frutaGomuNikaAtiva();
        if (!temHakiAtivo() && !enelComNika) {
            logBatalha(`⚔ ${boss.nome} exige Haki para ser derrotado. ${boss.nome === 'Enel' ? 'Contra Enel, a Gomu Gomu/Nika também funciona como a exceção da luta.' : 'Ative seu Haki antes de atacar.'}`);
            return;
        }
    }

    if (typeof v5UsarAtaqueNikaAnterior === 'function') {
        v5UsarAtaqueNikaAnterior(golpe);
    }
};

// ------------------------------------------------------------
// V5.25: O DESPERTAR DE NIKA LIBERA GEAR 5 DE FORMA CONFIÁVEL
// ------------------------------------------------------------

function garantirGear5DepoisDoDespertar() {
    if (!jogador.fruta || !frutaGomuNikaAtiva()) return;
    if (!jogador.fruta.formas) return;

    if (!jogador.fruta.formas.gear5) {
        jogador.fruta.formas.gear5 = {
            nome: 'Gear 5',
            req: 0,
            requerDespertar: true,
            img: img('GEAR+5+NIKA', '3a3a32', 220, 140),
            ataques: [
                ataque('Bajrang Gun', 390, 0, 'BAJRANG+GUN+NIKA', '4c4935'),
                ataque('Dawn Rocket', 450, 0, 'DAWN+ROCKET+NIKA', '3b4034')
            ]
        };
    }
}

const v5DespertarFrutaSegundaVidaFinal = window.despertarFrutaSegundaVida;

window.despertarFrutaSegundaVida = function despertarFrutaSegundaVidaV5Final() {
    if (typeof v5DespertarFrutaSegundaVidaFinal === 'function') {
        const resultado = v5DespertarFrutaSegundaVidaFinal();
        if (resultado) {
            garantirGear5DepoisDoDespertar();
            resetarFormaDaFrutaParaBase();
            atualizarCartaz();
            montarPainelAtaques();
            return true;
        }
    }

    return false;
};

// ------------------------------------------------------------
// V5.26: 50/50 DO REI SÓ NASCE NO X1 COM KAIDO
// ------------------------------------------------------------

const v5AvancarReiKaidoAnterior = v5AvancarReiNoKaido;

v5AvancarReiNoKaido = function v5AvancarReiNoKaidoDefinitivo() {
    if (typeof v5AvancarReiKaidoAnterior === 'function') {
        const resultado = v5AvancarReiKaidoAnterior();
        if (resultado) {
            jogador.haki.reiValor = 50;
            jogador.haki.reiMax = 50;
            jogador.haki.reiAvancado = true;
            atualizarCartaz();
            mostrarBotaoHakiRei();
        }
        return resultado;
    }
    return false;
};

// ------------------------------------------------------------
// V5.27: O BOTÃO DE COATING APARECE APENAS EM KAIDO,
// MAS O HAKI DO REI CONTINUA DISPONÍVEL NAS OUTRAS BATALHAS.
// ------------------------------------------------------------

window.mostrarBotaoRevestimentoRei = function mostrarBotaoRevestimentoReiV5Definitivo() {
    const btn = el('btn-revestir-rei');
    if (!btn) return;

    const boss = estado.bossAtivo;
    const contraKaido = Boolean(boss && boss.nome === 'Kaido');
    const possuiRei = jogador.haki.reiEstado === 'Despertado!';

    btn.hidden = !contraKaido;
    btn.disabled = !contraKaido || !possuiRei;
    btn.classList.toggle('ativado', estado.revestimentoReiAtivo);

    const small = btn.querySelector('small');
    if (!small) return;

    if (!contraKaido) {
        small.textContent = 'Disponível somente contra Kaido';
    } else if (!possuiRei) {
        small.textContent = 'Primeiro desperte o Haki do Rei contra Akainu';
    } else if (jogador.haki.reiAvancado) {
        small.textContent = estado.revestimentoReiAtivo
            ? 'ATIVO • 50/50 • Revestimento conquistador'
            : 'LIBERADO • 50/50 • Revestir golpes';
    } else {
        small.textContent = 'Haki do Rei desperto em 30/30 • revestimento disponível';
    }
};

// ------------------------------------------------------------
// V5.28: INICIALIZAÇÃO FINAL
// ------------------------------------------------------------

(function iniciarPatchV5Definitivo() {
    jogador.formaEstiloAtual = jogador.formaEstiloAtual || 'base';

    const bossesFinaisV5 = [];
    ilhas.forEach(ilhaAtualV5Final => ilhaAtualV5Final.bosses.forEach(bossAtualV5Final => bossesFinaisV5.push(bossAtualV5Final)));
    if (typeof v4SkyBosses !== 'undefined') v4SkyBosses.forEach(bossAtualV5Final => bossesFinaisV5.push(bossAtualV5Final));

    bossesFinaisV5.forEach(bossAtualV5Final => {
        if (v5ListaLogiasDefinitiva.includes(bossAtualV5Final.nome)) {
            bossAtualV5Final.logia = true;
            bossAtualV5Final.requerHaki = true;
        }
    });

    const enelDefinitivo = bossesFinaisV5.find(bossAtualV5Final => bossAtualV5Final.nome === 'Enel');
    if (enelDefinitivo) {
        enelDefinitivo.requerHaki = true;
        enelDefinitivo.requerHakiOuGomu = true;
        enelDefinitivo.requerGomu = true;
    }

    if (frutaGomuNikaAtiva() && jogador.fruta.despertada) {
        garantirGear5DepoisDoDespertar();
    }

    atualizarCartaz();
    mostrarBotaoHakiRei();
    mostrarBotaoRevestimentoRei();
    montarPainelAtaques();
    montarFormasEstilo();
})();

// ============================================================
// V6: PROGRESSÃO DOS ESTILOS + ARLONG + REVERSE MOUNTAIN + MAPA
// Esta camada é adicionada no final para preservar integralmente
// o código anterior e apenas corrigir/expandir o comportamento.
// ============================================================

// ------------------------------------------------------------
// V6.1: SANTORYU EM ESTÁGIOS
// 1 espada -> 2 espadas -> 3 espadas -> 6 espadas + 3 cabeças.
// A transformação do estilo continua independente da fruta.
// ------------------------------------------------------------

transformacoesEstiloV5['Santoryu'] = {
    base: {
        nome: 'Santoryu • 1 Espada',
        req: 0,
        multDano: 1.00,
        reducaoExtra: 0,
        img: img('SANTORYU+1+ESPADA', '1b2633', 260, 150),
        descricao: 'Você ainda está começando o caminho de espadachim. Apenas uma espada está liberada.'
    },
    duasEspadas: {
        nome: 'Santoryu • 2 Espadas',
        req: 1,
        multDano: 1.10,
        reducaoExtra: 0.01,
        img: img('SANTORYU+2+ESPADAS', '253646', 260, 150),
        descricao: 'A segunda espada entrou no estilo. Os cortes ficam mais rápidos e agressivos.'
    },
    tresEspadas: {
        nome: 'Santoryu • 3 Espadas',
        req: 3,
        multDano: 1.24,
        reducaoExtra: 0.02,
        img: img('SANTORYU+3+ESPADAS', '161c25', 260, 150),
        descricao: 'Agora você finalmente domina o Santoryu clássico: três espadas.'
    },
    asura: {
        nome: 'Asura • 6 Espadas + 3 Cabeças',
        req: 6,
        multDano: 1.48,
        reducaoExtra: 0.035,
        img: img('ASURA+6+ESPADAS+3+CABECAS', '261b2f', 260, 150),
        descricao: 'A manifestação monstruosa do estilo: seis espadas, três cabeças e três pares de braços.'
    }
};

// ------------------------------------------------------------
// V6.2: PERNA NEGRA COM FOGO AZUL
// Diable Jambe -> Ifrit Jambe.
// ------------------------------------------------------------

transformacoesEstiloV5['Perna Negra'] = {
    base: {
        nome: 'Perna Negra • Base',
        req: 0,
        multDano: 1.00,
        reducaoExtra: 0,
        img: img('PERNA+NEGRA+BASE', '402b1f', 260, 150),
        descricao: 'Os golpes normais da Perna Negra.'
    },
    diableJambe: {
        nome: 'Diable Jambe • Fogo Vermelho',
        req: 2,
        multDano: 1.32,
        reducaoExtra: 0.01,
        img: img('DIABLE+JAMBE+FOGO', '641f18', 260, 150),
        descricao: 'A perna entra em chamas. O estilo passa a causar muito mais dano.'
    },
    ifritJambe: {
        nome: 'Ifrit Jambe • Fogo Azul',
        req: 6,
        multDano: 1.50,
        reducaoExtra: 0.025,
        img: img('IFRIT+JAMBE+FOGO+AZUL', '1d4d71', 260, 150),
        descricao: 'O fogo azul aparece após domínio suficiente. Os golpes ficam ainda mais destrutivos.'
    }
};

// ------------------------------------------------------------
// V6.3: ARLONG EM ILHA CONOMI
// ------------------------------------------------------------

(function adicionarArlongV6() {
    const conomi = ilhas.find(i => i.nome === 'Ilha Conomi');
    if (!conomi) return;

    const jaTemArlong = conomi.bosses.some(b => b.nome === 'Arlong');
    if (!jaTemArlong) {
        conomi.bosses.push(
            boss('Arlong', 1200, 155, 280000, 'ARLONG', true, {
                obs: false,
                arm: false,
                rei: false
            })
        );
    }

    conomi.options = conomi.options || {};
    conomi.options.frutaQualidade = Math.max(Number(conomi.options.frutaQualidade || 1), 1.35);
})();

// ------------------------------------------------------------
// V6.4: REVERSE MOUNTAIN VIRA UM QUADRADO PRÓPRIO.
// LOGUETOWN -> REVERSE MOUNTAIN -> CACTUS ISLAND.
// ------------------------------------------------------------

(function inserirReverseMountainV6() {
    const existe = ilhas.some(i => i.nome === 'Reverse Mountain');
    if (existe) return;

    const cactusIndex = ilhas.findIndex(i => i.nome === 'Cactus Island');
    if (cactusIndex === -1) return;

    const reverse = ilha(
        'Reverse Mountain',
        'A entrada da Grand Line. Piratas sobem a montanha. Marinheiros atravessam o Calm Belt.',
        0.18,
        [],
        {
            evento: 'reverse-mountain',
            reverseResolvida: false,
            frutaQualidade: 1.20
        }
    );

    ilhas.splice(cactusIndex, 0, reverse);
})();

// ------------------------------------------------------------
// V6.5: REVERSE MOUNTAIN / CALM BELT
// Um único bloco para a travessia e outro bloco para Cactus.
// ------------------------------------------------------------

function mostrarEventoReverseMountainV6() {
    const reverse = ilhas.find(i => i.nome === 'Reverse Mountain');
    if (!reverse) return;

    el('titulo-evento').textContent = jogador.faccao === 'Marinha'
        ? 'CALM BELT'
        : 'REVERSE MOUNTAIN';

    el('nome-evento').textContent = jogador.faccao === 'Marinha'
        ? 'Você vai atravessar o Calm Belt.'
        : 'A subida da Reverse Mountain começa agora.';

    if (jogador.faccao === 'Marinha') {
        el('desc-evento').textContent = 'A Marinha não sobe a Reverse Mountain. A rota militar passa pelo Calm Belt e leva até Cactus Island.';
        el('img-evento').src = img('CALM+Belt', '2a4653', 600, 420);
    } else {
        el('desc-evento').textContent = 'Você precisa subir a Reverse Mountain. A chance de o barco sobreviver é de 60%. Se ele quebrar, você chega a Cactus Island sem embarcação e terá que roubar outra.';
        el('img-evento').src = img('REVERSE+MOUNTAIN', '3c4b5d', 600, 420);
    }

    el('botoes-evento').innerHTML = '';

    const acao = criarBotaoEvento(
        jogador.faccao === 'Marinha' ? 'ATRAVESSAR CALM BELT' : 'SUBIR A REVERSE MOUNTAIN',
        jogador.faccao === 'Marinha'
            ? img('CALM+Belt+TRAVESSIA', '31546a')
            : img('SUBIR+REVERSE+MOUNTAIN', '3c4b5d'),
        () => {
            reverse.options.reverseTentativaFeita = true;

            if (jogador.faccao === 'Marinha') {
                reverse.options.reverseResolvida = true;
                reverse.options.eventoResolvido = true;
                estado.travessiaResolvida = true;
                log('⚓ Você atravessou o Calm Belt com a embarcação da Marinha. Cactus Island é a próxima parada.');
                carregarTelaDaIlha();
                return;
            }

            if (Math.random() < 0.60) {
                reverse.options.reverseResolvida = true;
                reverse.options.eventoResolvido = true;
                estado.travessiaResolvida = true;
                log('⛰️ Você sobreviveu à Reverse Mountain! O barco saiu inteiro por um fio. Cactus Island é o próximo quadrado.');
                carregarTelaDaIlha();
                return;
            }

            const cactus = ilhas.findIndex(i => i.nome === 'Cactus Island');
            log('🌊 O barco virou na Reverse Mountain! Ele foi destruído e você foi parar em Cactus Island sem embarcação. Agora é roubar outro barco.');
            if (typeof window.naufragarReverseMountain === 'function') {
                window.naufragarReverseMountain(cactus);
            } else {
                estado.barcoConseguido = false;
                estado.contextoBarco = 'cactus';
                estado.ilhaIndex = cactus;
                jogador.ilhaIndex = cactus;
                estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, cactus);
                carregarTelaDaIlha();
            }
        }
    );

    el('botoes-evento').appendChild(acao);
    mudarTela('tela-evento');
}

const v5PrepararEventoDeIlhaAnteriorV6 = window.prepararEventoDeIlha;
window.prepararEventoDeIlha = function prepararEventoDeIlhaV6(tipo) {
    if (tipo === 'reverse-mountain') {
        mostrarEventoReverseMountainV6();
        return;
    }

    if (typeof v5PrepararEventoDeIlhaAnteriorV6 === 'function') {
        return v5PrepararEventoDeIlhaAnteriorV6(tipo);
    }
};

// ------------------------------------------------------------
// V6.6: MAPA HORIZONTAL COM AUTO-AVANÇO PARA O ÚLTIMO QUADRADO
// O jogador pode continuar arrastando/rolando os quadrados para os lados.
// Ao descobrir uma nova ilha, o mapa leva a visão automaticamente até ela.
// ------------------------------------------------------------

function rolarMapaParaUltimoQuadradoV6() {
    const mapa = el('rota-ilhas');
    if (!mapa) return;

    const ultimo = mapa.querySelector('.route-node:last-of-type');
    if (!ultimo) return;

    setTimeout(() => {
        ultimo.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    }, 60);
}

const v5AtualizarMapRouteAnteriorV6 = window.atualizarMapRoute;
window.atualizarMapRoute = function atualizarMapRouteV6() {
    if (typeof v5AtualizarMapRouteAnteriorV6 === 'function') {
        v5AtualizarMapRouteAnteriorV6();
    }

    rolarMapaParaUltimoQuadradoV6();
};

// ------------------------------------------------------------
// V6.7: AO CHEGAR EM UMA NOVA ILHA O MAPA MARCA IMEDIATAMENTE
// O QUADRADO NOVO E O ÚLTIMO QUADRADO ALCANÇADO FICA EM FOCO.
// ------------------------------------------------------------

function atualizarDescobertaMapaV6() {
    atualizarMapRoute();
    rolarMapaParaUltimoQuadradoV6();
}

// ------------------------------------------------------------
// V6.8: VIAGEM USA NOME DA ILHA, NÃO NÚMERO FIXO.
// Isso evita que a inserção do quadrado Reverse Mountain quebre
// o tempo da viagem ou coloque Cactus no lugar errado.
// ------------------------------------------------------------

const v5IniciarViagemAnteriorV6 = window.iniciarViagem;
window.iniciarViagem = function iniciarViagemV6(destino) {
    if (!estado.barcoConseguido) {
        log('⛵ Você não tem barco. A viagem foi bloqueada. Volte e consiga uma embarcação primeiro.');
        window.voltarParaEscolhaDeBarco();
        return;
    }

    if (!Number.isInteger(destino) || !ilhas[destino]) {
        log('❌ Destino inválido. A rota não conseguiu localizar esse quadrado.');
        return;
    }

    if (ilhas[destino].nome === 'Reverse Mountain') {
        mudarTela('tela-navegacao');
        el('subtexto-navegando').textContent = 'Rumo à entrada da Grand Line...';

        let pontos = 0;
        const intervalo = setInterval(() => {
            pontos = (pontos + 1) % 4;
            el('texto-navegando').textContent = 'NAVEGANDO' + '.'.repeat(pontos);
        }, 320);

        setTimeout(() => {
            clearInterval(intervalo);

            estado.ilhaIndex = destino;
            jogador.ilhaIndex = destino;
            estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
            v4CarregarProgressoBoss();
            atualizarMapRoute();
            carregarTelaDaIlha();
        }, 2300);
        return;
    }

    if (typeof v5IniciarViagemAnteriorV6 === 'function') {
        return v5IniciarViagemAnteriorV6(destino);
    }
};

// ------------------------------------------------------------
// V6.9: JAYA SEGUE SENDO UM QUADRADO ÚNICO ANTES DO SKY FALL.
// Sem Skypiea como quadrado físico.
// ------------------------------------------------------------

const v5CarregarTelaDaIlhaAnteriorV6 = window.carregarTelaDaIlha;
window.carregarTelaDaIlha = function carregarTelaDaIlhaV6() {
    if (typeof v5CarregarTelaDaIlhaAnteriorV6 === 'function') {
        v5CarregarTelaDaIlhaAnteriorV6();
    }
    atualizarMapRoute();
    rolarMapaParaUltimoQuadradoV6();
};

// ------------------------------------------------------------
// V6.10: REINÍCIO DE FORMA NÃO ACONTECE NO MAPA.
// O que foi escolhido fica na ilha, e voltar à batalha sempre começa
// da forma base, preservando a possibilidade de combinar as formas
// enquanto a luta está acontecendo.
// ------------------------------------------------------------

const v6ReaplicarFormaSantoryuInicial = window.procurarEstilo;
window.procurarEstilo = function procurarEstiloV6() {
    const resultado = typeof v6ReaplicarFormaSantoryuInicial === 'function'
        ? v6ReaplicarFormaSantoryuInicial()
        : undefined;

    if (jogador.estiloLuta === 'Santoryu' && !jogador.formaEstiloAtual) {
        jogador.formaEstiloAtual = 'base';
    }

    return resultado;
};

// ------------------------------------------------------------
// V6.11: LABELS DOS ESTILOS MOSTRAM A PROGRESSÃO REAL.
// ------------------------------------------------------------

const v6MontarFormasEstiloAnterior = window.montarFormasEstilo;
window.montarFormasEstilo = function montarFormasEstiloV6() {
    if (typeof v6MontarFormasEstiloAnterior === 'function') {
        v6MontarFormasEstiloAnterior();
    }

    const transformacoes = transformacoesEstiloV5[jogador.estiloLuta];
    if (!transformacoes) return;

    const area = el('painel-formas-estilo');
    if (!area) return;

    const botoes = area.querySelectorAll('.estilo-form-btn');
    botoes.forEach(btn => {
        const texto = btn.textContent || '';
        if (jogador.estiloLuta === 'Santoryu') {
            if (texto.includes('Santoryu • 1 Espada')) btn.title = 'Primeiro estágio: 1 espada.';
            if (texto.includes('Santoryu • 2 Espadas')) btn.title = 'Segundo estágio: 2 espadas. Requer 1 de maestria.';
            if (texto.includes('Santoryu • 3 Espadas')) btn.title = 'Terceiro estágio: 3 espadas. Requer 3 de maestria.';
            if (texto.includes('Asura')) btn.title = 'Estágio final: 6 espadas + 3 cabeças. Requer 6 de maestria.';
        }

        if (jogador.estiloLuta === 'Perna Negra') {
            if (texto.includes('Diable Jambe')) btn.title = 'Fogo vermelho. Requer 2 de maestria.';
            if (texto.includes('Ifrit Jambe')) btn.title = 'Fogo azul. Requer 6 de maestria.';
        }
    });
};

// ------------------------------------------------------------
// V6.12: O ÚLTIMO QUADRADO SEMPRE RECEBE FOCO QUANDO O MAPA É ABERTO.
// ------------------------------------------------------------

const v6MudarTelaAnterior = window.mudarTela;
window.mudarTela = function mudarTelaV6(idTela) {
    if (typeof v6MudarTelaAnterior === 'function') {
        v6MudarTelaAnterior(idTela);
    }

    if (idTela === 'tela-mapa') {
        atualizarMapRoute();
        rolarMapaParaUltimoQuadradoV6();
    }
};

// ------------------------------------------------------------
// V6.13: GARANTIA FINAL DO NOME DO CAMINHO E DA ROTA.
// ------------------------------------------------------------

(function inicializarPatchV6() {
    const reverse = ilhas.find(i => i.nome === 'Reverse Mountain');
    if (reverse) {
        reverse.options = reverse.options || {};
        reverse.options.evento = 'reverse-mountain';
        reverse.options.eventoResolvido = Boolean(reverse.options.eventoResolvido);
    }

    const arlong = ilhas.find(i => i.nome === 'Ilha Conomi')?.bosses?.find(b => b.nome === 'Arlong');
    if (arlong) {
        arlong.temAliados = true;
        arlong.reducaoDano = 0.30;
    }

    if (jogador.estiloLuta === 'Santoryu' && !jogador.formaEstiloAtual) {
        jogador.formaEstiloAtual = 'base';
    }

    atualizarCartaz();
    atualizarMapRoute();
    montarFormasEstilo();
})();

// ============================================================
// V6.14: DESPERTAR DOS ESTILOS RESTAURADO
// Os estágios dos estilos não são apenas "skins": cada estágio
// é registrado como um despertar alcançado pela maestria.
// A transformação de estilo continua independente da fruta.
// ============================================================

if (!jogador.despertaresEstilo) {
    jogador.despertaresEstilo = {};
}

function garantirDespertaresDoEstilo() {
    const estiloAtual = jogador.estiloLuta;
    const conjunto = transformacoesEstiloV5[estiloAtual];
    if (!conjunto) return;

    if (!jogador.despertaresEstilo[estiloAtual]) {
        jogador.despertaresEstilo[estiloAtual] = {};
    }

    Object.entries(conjunto).forEach(([chave, forma]) => {
        const req = Number(forma.req || 0);

        if (jogador.maestria >= req) {
            if (jogador.despertaresEstilo[estiloAtual][chave] !== true) {
                jogador.despertaresEstilo[estiloAtual][chave] = true;

                if (chave !== 'base') {
                    log(`⚔️ DESPERTAR DO ESTILO! ${forma.nome} foi desbloqueado com ${jogador.maestria} de maestria.`);
                }
            }
        }
    });
}

function estiloEstaDespertado(chave) {
    const estiloAtual = jogador.estiloLuta;

    if (!estiloAtual) return false;

    garantirDespertaresDoEstilo();

    return Boolean(
        jogador.despertaresEstilo[estiloAtual] &&
        jogador.despertaresEstilo[estiloAtual][chave]
    );
}

function montarPainelDespertarEstiloV6() {
    let area = el('painel-formas-estilo');
    const painelAtaques = el('painel-ataques');

    if (!painelAtaques || !jogador.estiloLuta) return;

    if (!area) {
        area = document.createElement('div');
        area.id = 'painel-formas-estilo';
        area.className = 'style-form-grid';
        painelAtaques.parentElement.insertBefore(area, painelAtaques);
    }

    garantirDespertaresDoEstilo();

    area.hidden = false;
    area.innerHTML = '';

    const titulo = document.createElement('div');
    titulo.className = 'attack-group-title';
    titulo.textContent = `DESPERTARES DO ESTILO • ${jogador.estiloLuta}`;
    area.appendChild(titulo);

    const descricaoInicial = document.createElement('small');
    descricaoInicial.className = 'style-transform-description';
    descricaoInicial.textContent = 'Cada boss derrotado concede 1 de maestria. Quando você alcança o requisito, o próximo estágio do estilo DESPERTA automaticamente. As formas da fruta continuam independentes.';
    area.appendChild(descricaoInicial);

    const botoes = document.createElement('div');
    botoes.className = 'fruit-form-buttons';

    const transformacoes = transformacoesEstiloV5[jogador.estiloLuta];

    Object.entries(transformacoes).forEach(([chave, forma]) => {
        const btn = document.createElement('button');
        btn.className = 'btn-acao estilo-form-btn';
        aplicarImagemBotao(btn, forma.img);

        const despertado = estiloEstaDespertado(chave);
        const selecionado = jogador.formaEstiloAtual === chave;

        let estadoTexto = '';

        if (chave === 'base') {
            estadoTexto = 'DESPERTADO';
        } else if (despertado) {
            estadoTexto = 'DESPERTADO';
        } else {
            estadoTexto = `FALTA ${Math.max(0, Number(forma.req || 0) - jogador.maestria)} MAESTRIA`;
        }

        btn.textContent = `${forma.nome} • Req. ${forma.req} • ${estadoTexto}`;
        btn.disabled = !despertado;

        if (selecionado) {
            btn.classList.add('selecionado');
        }

        if (despertado) {
            btn.classList.add('style-transform-awakened');
        } else {
            btn.classList.add('style-transform-locked');
        }

        btn.title = forma.descricao;

        if (!btn.disabled) {
            btn.onclick = () => {
                jogador.formaEstiloAtual = chave;

                estado.ataqueEmAndamento = false;

                montarPainelAtaques();

                const formaFruta = jogador.fruta && frutaGomuNikaAtiva() && jogador.fruta.formas
                    ? jogador.fruta.formas[jogador.fruta.formaAtual || 'base']
                    : null;

                if (formaFruta && forma.nome !== 'Perna Negra • Base' && forma.nome !== 'Santoryu • 1 Espada') {
                    logBatalha(`🔥⚔️ ${formaFruta.nome} + ${forma.nome} estão ativos ao mesmo tempo.`);
                } else {
                    logBatalha(`⚔️ ${forma.nome} foi ativada.`);
                }
            };
        }

        botoes.appendChild(btn);
    });

    area.appendChild(botoes);

    const formaAtual = obterTransformacaoEstiloAtual();
    const atual = document.createElement('small');
    atual.className = 'style-transform-current';
    atual.textContent = `ESTADO ATUAL: ${formaAtual ? formaAtual.nome : 'Base'}`;
    area.appendChild(atual);
}

// O painel final é sempre reconstruído junto dos ataques.
const v6PainelAtaquesAntesDespertar = window.montarPainelAtaques;
window.montarPainelAtaques = function montarPainelAtaquesV6DespertarEstilo() {
    if (typeof v6PainelAtaquesAntesDespertar === 'function') {
        v6PainelAtaquesAntesDespertar();
    }

    if (jogador.estiloLuta) {
        garantirDespertaresDoEstilo();
        montarPainelDespertarEstiloV6();
    }
};

// Cada vez que um boss entrega maestria, o próximo estágio do estilo
// é marcado como despertado sem criar outro botão obrigatório.
const v6VencerBossAntesDespertarEstilo = window.vencerBoss;
window.vencerBoss = function vencerBossV6DespertarEstilo() {
    const maestriaAntes = jogador.maestria;

    if (typeof v6VencerBossAntesDespertarEstilo === 'function') {
        v6VencerBossAntesDespertarEstilo();
    }

    const maestriaDepois = jogador.maestria;

    if (jogador.estiloLuta && maestriaDepois > maestriaAntes) {
        garantirDespertaresDoEstilo();
    }

    atualizarCartaz();
    montarPainelDespertarEstiloV6();
};

// Ao aprender um novo estilo, o estágio base nasce despertado.
const v6ProcurarEstiloAntesDespertarEstilo = window.procurarEstilo;
window.procurarEstilo = function procurarEstiloV6DespertarEstilo() {
    return typeof v6ProcurarEstiloAntesDespertarEstilo === 'function'
        ? v6ProcurarEstiloAntesDespertarEstilo()
        : undefined;
};

// Regra visual definitiva da progressão pedida:
// Santoryu = 1 espada -> 2 -> 3 -> Asura (6 espadas + 3 cabeças)
// Perna Negra = Base -> Diable Jambe -> Ifrit Jambe (fogo azul)
if (transformacoesEstiloV5['Santoryu']) {
    transformacoesEstiloV5['Santoryu'].base.nome = 'Santoryu • 1 Espada';
    transformacoesEstiloV5['Santoryu'].duasEspadas.nome = 'Santoryu • 2 Espadas';
    transformacoesEstiloV5['Santoryu'].tresEspadas.nome = 'Santoryu • 3 Espadas';
    transformacoesEstiloV5['Santoryu'].asura.nome = 'Asura • 6 Espadas + 3 Cabeças';
}

if (transformacoesEstiloV5['Perna Negra']) {
    transformacoesEstiloV5['Perna Negra'].diableJambe.nome = 'Diable Jambe • Fogo Vermelho';
    transformacoesEstiloV5['Perna Negra'].ifritJambe.nome = 'Ifrit Jambe • Fogo Azul';
}


// ============================================================
// V6.6: CORREÇÕES FINAIS DE ESTILOS, TREINO E CACTUS ISLAND
// Esta camada é SOMENTE ADITIVA. Nenhuma linha anterior é removida.
// ============================================================

// ------------------------------------------------------------
// V6.6.2: GOLPES DIFERENTES PARA CADA ESTÁGIO DO SANTORYU
// A forma escolhida agora realmente muda o conjunto de golpes.
// ------------------------------------------------------------

const golpesPorEstagioSantoryuV6 = {
    base: [
        ataque('Oni Giri • Uma Espada', 30, 0, 'SANTORYU+1+ESPADA+ONI+GIRI', '1b2633'),
        ataque('Shishi Sonson • Uma Espada', 42, 0, 'SANTORYU+1+ESPADA+SHISHI', '18232d')
    ],
    duasEspadas: [
        ataque('Nigori Zake', 38, 0, 'SANTORYU+2+ESPADAS+NIGORI+ZAKE', '253646'),
        ataque('Taka Nami', 48, 0, 'SANTORYU+2+ESPADAS+TAKA+NAMI', '202f40')
    ],
    tresEspadas: [
        ataque('Tatsu Maki', 52, 0, 'SANTORYU+3+ESPADAS+TATSU+MAKI', '161c25'),
        ataque('Shi Shison Son', 66, 0, 'SANTORYU+3+ESPADAS+SHI+SHISON+SON', '10161c')
    ],
    asura: [
        ataque('Asura: Ichibugin', 82, 0, 'ASURA+ICHIBUGIN', '261b2f'),
        ataque('Asura: Bakkei', 105, 0, 'ASURA+BAKKEI', '34223d')
    ]
};

const golpesPorEstagioPernaNegraV6 = {
    base: [
        ataque('Collier', 31, 0, 'PERNA+NEGRA+COLLIER', '402b1f'),
        ataque('Concassé', 45, 0, 'PERNA+NEGRA+CONCASSE', '2b2020')
    ],
    diableJambe: [
        ataque('Bien Cuit: Grill Shot', 56, 0, 'DIABLE+JAMBE+GRILL+SHOT', '641f18'),
        ataque('Flambage Shot', 72, 0, 'DIABLE+JAMBE+FLAMBAGE+SHOT', '7a241a')
    ],
    ifritJambe: [
        ataque('Rotisserie', 88, 0, 'IFRIT+JAMBE+ROTISSERIE', '1d4d71'),
        ataque('Collier Coup', 108, 0, 'IFRIT+JAMBE+COLLIER+COUP', '143b58')
    ]
};

function golpesDoEstiloTransformadoV6() {
    if (jogador.estiloLuta === 'Santoryu') {
        return (golpesPorEstagioSantoryuV6[jogador.formaEstiloAtual || 'base'] || golpesPorEstagioSantoryuV6.base);
    }

    if (jogador.estiloLuta === 'Perna Negra') {
        return (golpesPorEstagioPernaNegraV6[jogador.formaEstiloAtual || 'base'] || golpesPorEstagioPernaNegraV6.base);
    }

    return null;
}

// ------------------------------------------------------------
// V6.6.3: RECONSTRÓI OS GOLPES DE ESTILO CONFORME A FORMA ATUAL
// ------------------------------------------------------------

const v6MontarPainelAtaquesAntesDosGolpesPorEstagio = window.montarPainelAtaques;

window.montarPainelAtaques = function montarPainelAtaquesV6GolpesPorEstagio() {
    if (typeof v6MontarPainelAtaquesAntesDosGolpesPorEstagio === 'function') {
        v6MontarPainelAtaquesAntesDosGolpesPorEstagio();
    }

    const painel = el('painel-ataques');
    if (!painel || !jogador.estiloLuta) return;

    const nomeEstilo = jogador.estiloLuta;
    const botoesAntigos = Array.from(painel.querySelectorAll('.ataque-btn'));

    botoesAntigos.forEach(btn => {
        const req = btn.querySelector('.ataque-btn-req');
        if (req && req.textContent.startsWith(`${nomeEstilo} •`)) {
            btn.remove();
        }
    });

    const golpesEstagio = golpesDoEstiloTransformadoV6();
    if (!golpesEstagio || !golpesEstagio.length) return;

    const grupo = jogador.formaEstiloAtual
        ? `${nomeEstilo} • ${jogador.formaEstiloAtual}`
        : nomeEstilo;

    golpesEstagio.forEach(golpe => {
        adicionarBotaoAtaque(painel, {
            ...golpe,
            grupo,
            tipo: 'estilo'
        });
    });
};

// ------------------------------------------------------------
// V6.6.4: ZONAS VERDES ALEATÓRIAS EM CADA NOVO TREINO
// Observação já tinha alvo móvel por tentativa; Armamento passa a
// escolher outra posição para a zona verde a cada abertura.
// ------------------------------------------------------------

function reposicionarZonaVerdeArmamentoV6() {
    const stage = document.querySelector('.heavy-stage');
    const zona = el('arm-zone');
    if (!stage || !zona) return;

    const larguraZona = zona.offsetWidth || 90;
    const margem = 12;
    const maxLeft = Math.max(margem, stage.clientWidth - larguraZona - margem);
    const novaPosicao = margem + Math.random() * (maxLeft - margem);

    zona.style.left = `${novaPosicao}px`;
    zona.dataset.left = String(novaPosicao);
};

const v6AbrirMinigameAntesDasZonasAleatorias = window.abrirMinigame;

window.abrirMinigame = function abrirMinigameV6ZonasAleatorias(tipo) {
    if (typeof v6AbrirMinigameAntesDasZonasAleatorias === 'function') {
        v6AbrirMinigameAntesDasZonasAleatorias(tipo);
    }

    if (tipo === 'arm') {
        requestAnimationFrame(() => {
            reposicionarZonaVerdeArmamentoV6();
        });
    }

    if (tipo === 'obs') {
        requestAnimationFrame(() => {
            moverAlvoObs();
        });
    }
};

// ------------------------------------------------------------
// V6.6.5: VALIDAR ARMAMENTO USA A POSIÇÃO REAL DA ZONA VERDE
// ------------------------------------------------------------

const v6ValidarArmamentoAntesDaZonaDinamica = window.validarMinigameArm;

window.validarMinigameArm = function validarMinigameArmV6ZonaDinamica() {
    if (!minigameAtivo || mgTipo !== 'arm') return;

    const stage = document.querySelector('.heavy-stage');
    const zona = el('arm-zone');

    if (!stage || !zona) {
        if (typeof v6ValidarArmamentoAntesDaZonaDinamica === 'function') {
            return v6ValidarArmamentoAntesDaZonaDinamica();
        }
        return;
    }

    const inicioZona = parseFloat(zona.dataset.left || zona.offsetLeft || 0);
    const fimZona = inicioZona + (zona.offsetWidth || 90);
    const centroAgulha = mgPos + 11;
    const distancia = centroAgulha < inicioZona
        ? inicioZona - centroAgulha
        : centroAgulha > fimZona
            ? centroAgulha - fimZona
            : 0;

    let nota = Math.round(10 - distancia / 18);
    nota = clamped(nota, 0, 10);

    minigameAtivo = false;
    cancelarLoopsMinigame();

    const acertou = nota >= 5;
    mostrarNotaTreino(nota, 'arm', acertou);

    if (acertou) {
        log(`✊ Endurecimento concluído. Você acertou uma zona verde nova: ${jogador.haki.arm}/${jogador.haki.armAvancado ? 50 : 30}.`);
    } else {
        log('❌ A agulha caiu fora da nova zona verde. Tente novamente.');
        el('btn-tentar-novamente').hidden = false;
    }
};

// ------------------------------------------------------------
// V6.6.6: CACTUS ISLAND TEM ROUBO 100%
// O roubo normal continua com 50%.
// ------------------------------------------------------------

const v6RoubarBarcoAntesCactus100 = window.roubarBarco;

window.roubarBarco = function roubarBarcoV6Cactus100() {
    if (estado.contextoBarco === 'cactus') {
        if (jogador.faccao !== 'Pirata') {
            log('🚫 A Marinha não rouba barcos em Cactus Island.');
            return;
        }

        jogador.recompensa += 500;
        window.conseguirBarco(
            '🏜️ Você roubou um barco em Cactus Island. Não existe presença da Marinha aqui para impedir o roubo. 100% de sucesso.',
            'barco roubado em Cactus Island'
        );
        atualizarCartaz();
        return;
    }

    if (typeof v6RoubarBarcoAntesCactus100 === 'function') {
        return v6RoubarBarcoAntesCactus100();
    }
};

// ------------------------------------------------------------
// V6.6.7: AO TROCAR O ESTÁGIO, O CONJUNTO DE GOLPES É ATUALIZADO
// imediatamente, sem alterar a transformação da fruta.
// ------------------------------------------------------------

const v6MontarFormasEstiloAntesDosGolpes = window.montarFormasEstilo;

window.montarFormasEstilo = function montarFormasEstiloV6Golpes() {
    if (typeof v6MontarFormasEstiloAntesDosGolpes === 'function') {
        v6MontarFormasEstiloAntesDosGolpes();
    }

    const area = el('painel-formas-estilo');
    if (!area || !jogador.estiloLuta) return;

    area.querySelectorAll('.estilo-form-btn').forEach(btn => {
        if (btn.dataset.v6GolpeAtualizado === '1') return;
        btn.dataset.v6GolpeAtualizado = '1';
    });
};

// ------------------------------------------------------------
// V6.6.8: GARANTE QUE O PAINEL DE ATAQUES E O DE DESPERTARES
// SEJAM SINCRONIZADOS DEPOIS DE QUALQUER TROCA DE FORMA.
// ------------------------------------------------------------

const v6MontarFormasFinalAntesSincronizacao = window.montarFormasEstilo;
window.montarFormasEstilo = function montarFormasEstiloV6Sincronizado() {
    if (typeof v6MontarFormasFinalAntesSincronizacao === 'function') {
        v6MontarFormasFinalAntesSincronizacao();
    }

    const botoes = document.querySelectorAll('#painel-formas-estilo .estilo-form-btn');
    botoes.forEach(btn => {
        btn.title = `${btn.title || ''}\nTrocar esta forma também troca os golpes de estilo quando aplicável.`.trim();
    });
};

// A inicialização final reaplica as novas regras sem apagar as anteriores.
(function iniciarCorrecoesFinaisV6() {
    if (jogador.estiloLuta === 'Ittoryu') {
        jogador.estiloLuta = '';
        jogador.formaEstiloAtual = 'base';
    }

    atualizarCartaz();
    montarPainelAtaques();
    montarFormasEstilo();
})();

// ============================================================
// V6.14: HOTFIX REVERSE MOUNTAIN -> CACTUS ISLAND
// A Reverse Mountain só é resolvida quando o jogador chega ao quadrado
// da própria montanha. Depois de sobreviver, clicar em Cactus não
// repete a travessia nem cria uma segunda rolagem de naufrágio.
// ============================================================

const hotfixV6ResolverTravessiaOriginal = resolverTravessia;
resolverTravessia = function resolverTravessiaV6Hotfix(destino) {
    const origemHotfix = ilhas[estado.ilhaIndex];
    const destinoHotfix = ilhas[destino];

    if (origemHotfix && destinoHotfix
        && origemHotfix.nome === 'Reverse Mountain'
        && destinoHotfix.nome === 'Cactus Island') {

        const cactus = destino;
        estado.travessiaResolvida = true;
        estado.ilhaIndex = cactus;
        jogador.ilhaIndex = cactus;
        estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, cactus);
        estado.bossIndex = 0;

        const reverse = ilhas.find(ilhaHotfix => ilhaHotfix.nome === 'Reverse Mountain');
        if (reverse) {
            reverse.options = reverse.options || {};
            reverse.options.reverseResolvida = true;
            reverse.options.eventoResolvido = true;
            reverse.options.reverseTentativaFeita = true;
        }

        log('🏜️ Cactus Island é o próximo quadrado. A Reverse Mountain já foi concluída e não será repetida.');
        carregarTelaDaIlha();
        return;
    }

    return hotfixV6ResolverTravessiaOriginal(destino);
};

// ============================================================
// V6.15: HOTFIX DA CHANCE DE NAUFRÁGIO
// A única rolagem da Reverse Mountain continua sendo 60% sobrevivência
// e 40% naufrágio. O bug anterior fazia a mesma subida ser executada
// novamente ao clicar em Cactus, dando a sensação de 100% de queda.
// ============================================================

function hotfixV6ChanceReverseMountain() {
    const reverse = ilhas.find(ilhaHotfix => ilhaHotfix.nome === 'Reverse Mountain');
    if (!reverse) return;

    reverse.options = reverse.options || {};
    reverse.options.chanceSobrevivencia = 0.60;
    reverse.options.chanceNaufragio = 0.40;
}

hotfixV6ChanceReverseMountain();

// ============================================================
// V6.16: CACTUS ISLAND = ROUBO 100%
// Não existe Marinha ocupando o porto como no começo da aventura.
// Portanto, chegando em Cactus sem barco, o roubo é garantido.
// ============================================================

function atualizarTextoRouboCactusV6() {
    const bloco = el('opcoes-pirata');
    if (!bloco) return;

    bloco.querySelectorAll('button').forEach(btn => {
        const onclick = btn.getAttribute('onclick') || '';
        if (!onclick.includes('roubarBarco')) return;

        const pequeno = btn.querySelector('small');
        if (pequeno) {
            if (estado.contextoBarco === 'cactus' && !estado.barcoConseguido) {
                pequeno.textContent = '100% de chance • Cactus Island • 1 tentativa';
            } else {
                pequeno.textContent = '50% de chance • 1 tentativa';
            }
        }
    });
}

const hotfixV6PrepararOpcoesBarcoOriginal = window.prepararOpcoesDeBarco;
window.prepararOpcoesDeBarco = function prepararOpcoesDeBarcoV6Hotfix() {
    if (typeof hotfixV6PrepararOpcoesBarcoOriginal === 'function') {
        hotfixV6PrepararOpcoesBarcoOriginal();
    }
    atualizarTextoRouboCactusV6();
};

const hotfixV6MostrarEventoCactusOriginal = window.mostrarEventoCactus;
window.mostrarEventoCactus = function mostrarEventoCactusV6Hotfix() {
    if (typeof hotfixV6MostrarEventoCactusOriginal === 'function') {
        hotfixV6MostrarEventoCactusOriginal();
    }

    atualizarTextoRouboCactusV6();

    if (!estado.barcoConseguido && estado.contextoBarco === 'cactus') {
        const descricao = el('desc-evento');
        if (descricao) {
            descricao.textContent = 'Você chegou em Cactus Island sem embarcação. Aqui não há Marinha no porto: roubar outro barco tem 100% de chance.';
        }
    }
};

// O roubo em Cactus pula a rolagem de 50% e é sempre bem-sucedido.
const hotfixV6RoubarBarcoOriginal = window.roubarBarco;
window.roubarBarco = function roubarBarcoV6Hotfix() {
    if (estado.contextoBarco === 'cactus' && !estado.barcoConseguido) {
        if (jogador.faccao !== 'Pirata') {
            log('🚫 Só existe essa situação para quem chegou a Cactus como pirata e perdeu o barco.');
            return;
        }

        jogador.recompensa += 500;
        estado.tentativasRoubo = 1;
        atualizarTextoRouboCactusV6();
        window.conseguirBarco('🏜️ Você roubou outro barco em Cactus Island. Aqui o sucesso era garantido: não havia Marinha no porto.', 'barco roubado em Cactus Island');
        atualizarCartaz();
        return;
    }

    if (typeof hotfixV6RoubarBarcoOriginal === 'function') {
        return hotfixV6RoubarBarcoOriginal();
    }
};

// ============================================================
// V6.17: GEAR 5 SÓ APARECE DEPOIS DE PERDER PARA KAIDO
// Katakuri pode despertar a fruta, mas Gear 5 não aparece por isso.
// O botão só fica enumerável e visível após a derrota contra Kaido.
// ============================================================

if (jogador.gear5LiberadoAposKaido == null) {
    jogador.gear5LiberadoAposKaido = false;
}

function prepararGear5EspecificoV6() {
    if (!jogador.fruta) return;
    if (typeof frutaGomuNikaAtiva === 'function' && !frutaGomuNikaAtiva()) return;
    if (!jogador.fruta.formas) return;

    if (typeof garantirGear5DepoisDoDespertar === 'function') {
        garantirGear5DepoisDoDespertar();
    }

    const gear5 = jogador.fruta.formas.gear5;
    if (!gear5) return;

    Object.defineProperty(jogador.fruta.formas, 'gear5', {
        value: gear5,
        writable: true,
        configurable: true,
        enumerable: true
    });
}

function esconderGear5EnquantoNaoPerderKaidoV6() {
    if (!jogador.fruta?.formas?.gear5) return;

    const gear5 = jogador.fruta.formas.gear5;

    if (!jogador.gear5LiberadoAposKaido) {
        Object.defineProperty(jogador.fruta.formas, 'gear5', {
            value: gear5,
            writable: true,
            configurable: true,
            enumerable: false
        });
    } else {
        Object.defineProperty(jogador.fruta.formas, 'gear5', {
            value: gear5,
            writable: true,
            configurable: true,
            enumerable: true
        });
    }
}

function liberarGear5DepoisDaDerrotaKaidoV6(bossDerrota) {
    if (!bossDerrota || bossDerrota.nome !== 'Kaido') return;
    if (!jogador.fruta) return;
    if (typeof frutaGomuNikaAtiva === 'function' && !frutaGomuNikaAtiva()) return;

    jogador.gear5LiberadoAposKaido = true;
    prepararGear5EspecificoV6();

    logBatalha('☀️ Depois da derrota contra Kaido, o limite da sua Akuma no Mi foi rompido. GEAR 5 AGORA ESTÁ DISPONÍVEL.');
};

// Impede que a enumeração da forma mostre Gear 5 antes da derrota contra Kaido.
const hotfixV6MontarFormasGomuOriginal = window.montarFormasGomu;
window.montarFormasGomu = function montarFormasGomuV6Hotfix() {
    esconderGear5EnquantoNaoPerderKaidoV6();

    if (typeof hotfixV6MontarFormasGomuOriginal === 'function') {
        hotfixV6MontarFormasGomuOriginal();
    }

    // O render anterior pode reconstruir a propriedade. Esconde novamente
    // antes de qualquer novo acesso ao painel enquanto a condição não existir.
    esconderGear5EnquantoNaoPerderKaidoV6();
};

// ============================================================
// V6.18: DERROTA CONTRA KAIDO LIBERA GEAR 5, MAS NÃO ALTERA
// A REGRA DA SEGUNDA VIDA NEM O HP SALVO DO BOSS.
// ============================================================

const hotfixV6TratarDerrotaOriginal = tratarDerrotaContraBoss;
tratarDerrotaContraBoss = function tratarDerrotaContraBossV6Hotfix(bossDerrota) {
    const eraKaido = Boolean(bossDerrota && bossDerrota.nome === 'Kaido');
    const tinhaGomuAntes = Boolean(jogador.fruta && typeof frutaGomuNikaAtiva === 'function' && frutaGomuNikaAtiva());

    const resultado = hotfixV6TratarDerrotaOriginal(bossDerrota);

    if (eraKaido && tinhaGomuAntes) {
        liberarGear5DepoisDaDerrotaKaidoV6(bossDerrota);
        montarPainelAtaques();
    }

    return resultado;
};

// ============================================================
// V6.19: SKYPIEA NÃO REINICIA NO OHM
// A progressão dos bosses do céu é salva imediatamente após cada vitória.
// Isso impede que sair/voltar para a ilha recarregue o índice 0.
// ============================================================

const hotfixV6VencerBossOriginal = window.vencerBoss;
window.vencerBoss = function vencerBossV6Hotfix() {
    const eraSkyAntes = typeof v4EstaNoCeu === 'function' ? v4EstaNoCeu() : false;
    const bossAntes = estado.bossAtivo;
    const indiceAntes = estado.bossIndex;

    const resultado = typeof hotfixV6VencerBossOriginal === 'function'
        ? hotfixV6VencerBossOriginal()
        : undefined;

    if (eraSkyAntes && bossAntes) {
        estado.skypieaBossProgresso = Math.max(indiceAntes + 1, Number(estado.skypieaBossProgresso || 0));
        estado.bossIndex = Math.max(estado.bossIndex, estado.skypieaBossProgresso);
        if (typeof v4SalvarProgressoBoss === 'function') {
            v4SalvarProgressoBoss();
        }
        atualizarMapRoute();
    }

    return resultado;
};

// ============================================================
// V6.20: CARREGAMENTO DO CÉU USA O PROGRESSO SALVO IMEDIATAMENTE.
// ============================================================

const hotfixV6CarregarTelaOriginal = window.carregarTelaDaIlha;
window.carregarTelaDaIlha = function carregarTelaDaIlhaV6Hotfix() {
    if (typeof v4EstaNoCeu === 'function' && v4EstaNoCeu()) {
        const totalSky = typeof v4SkyBosses !== 'undefined' ? v4SkyBosses.length : 0;
        estado.skypieaBossProgresso = clamped(
            Number(estado.skypieaBossProgresso || 0),
            0,
            totalSky
        );
        estado.bossIndex = estado.skypieaBossProgresso;
    }

    if (typeof hotfixV6CarregarTelaOriginal === 'function') {
        hotfixV6CarregarTelaOriginal();
    }

    if (typeof v4EstaNoCeu === 'function' && v4EstaNoCeu()) {
        const totalSky = typeof v4SkyBosses !== 'undefined' ? v4SkyBosses.length : 0;
        estado.bossIndex = clamped(Number(estado.skypieaBossProgresso || 0), 0, totalSky);
        atualizarBotoesIlha();
        montarPainelAtaques();
    }

    atualizarTextoRouboCactusV6();
    esconderGear5EnquantoNaoPerderKaidoV6();
};

// ============================================================
// V6.21: GARANTIA DE ESTADO NO MAPA
// Se a Reverse já foi concluída, Cactus é apenas a próxima ilha.
// ============================================================

(function hotfixV6InicialFinal() {
    hotfixV6ChanceReverseMountain();

    const reverse = ilhas.find(ilhaHotfix => ilhaHotfix.nome === 'Reverse Mountain');
    const cactus = ilhas.find(ilhaHotfix => ilhaHotfix.nome === 'Cactus Island');

    if (reverse) {
        reverse.options = reverse.options || {};
        reverse.options.chanceSobrevivencia = 0.60;
        reverse.options.chanceNaufragio = 0.40;
    }

    if (cactus) {
        cactus.options = cactus.options || {};
        cactus.options.rouboBarcoChance = 1.00;
        cactus.options.rouboBarcoDescricao = '100% de chance • sem Marinha no porto';
    }

    esconderGear5EnquantoNaoPerderKaidoV6();
    atualizarTextoRouboCactusV6();
    atualizarMapRoute();
})();

// ============================================================
// V6.22: COMPATIBILIDADE FINAL COM O BOTÃO DE NOVA JORNADA
// ============================================================

const hotfixV6ResetarEstadoOriginal = resetarEstadoDoJogador;
resetarEstadoDoJogador = function resetarEstadoDoJogadorV6Hotfix() {
    hotfixV6ResetarEstadoOriginal();
    jogador.gear5LiberadoAposKaido = false;
};
// ========================================================================
// V7 PATCH: ALIADOS, CATÁLOGOS PESQUISÁVEIS, PROGRESSÃO EQUILIBRADA E V2
// Esta camada fica no final do arquivo para preservar o comportamento antigo
// que ainda é compatível. Os comentários IMAGE abaixo indicam onde trocar
// imagens de retrato, frutas, bosses, estilos e botões.
// ========================================================================

// V8 CLEANUP: estilos obsoletos removidos diretamente dos catálogos e transformações.

jogador.estilosAprendidos = jogador.estilosAprendidos || {};
jogador.maestriaEstilos = jogador.maestriaEstilos || {};
jogador.despertaresEstilo = jogador.despertaresEstilo || {};
jogador.aliados = Array.isArray(jogador.aliados) ? jogador.aliados : [];
jogador.inventario = Array.isArray(jogador.inventario) ? jogador.inventario : [];

if (jogador.estiloLuta && estilos.some(v7Estilo => v7Estilo.nome === jogador.estiloLuta)) {
    jogador.estilosAprendidos[jogador.estiloLuta] = true;
    if (jogador.maestriaEstilos[jogador.estiloLuta] == null) {
        jogador.maestriaEstilos[jogador.estiloLuta] = Number(jogador.maestriaEstilo || 0);
    }
}

// ------------------------------------------------------------------------
// V7.02: GOLPES E ESTÁGIOS DE CADA ESTILO
// IMAGE GOLPES: edite os parâmetros de ataque() abaixo para mudar imagem,
// nome, dano ou maestria necessária de um golpe.
// ------------------------------------------------------------------------

// PERSONALIZAR IMAGENS DOS GOLPES DOS ESTILOS DE LUTA.
// Use o nome exato do golpe como chave. Vazio = imagem padrão.
// Isto inclui Santoryu, Perna Negra, Rokushiki e Karatê dos Homens-Peixe,
// incluindo golpes das formas/despertares de cada estilo.
const IMAGENS_ATAQUES_ESTILOS = {
    'Tatsu Maki': '', 'Shi Shison Son': '',
    'Diable Jambe': '', 'Concassé': '',
    'Shigan': '', 'Rankyaku': '',
    'Samegawara Seiken': '', 'Kaimen Wari': '',
    'Iai: Shishi Sonson • Uma Espada': '', 'Corte de Uma Espada': '',
    'Nitoryu: Tora Gari': '', 'Nitoryu: Rashomon': '',
    'Santoryu: Tatsu Maki': '', 'Santoryu: Oni Giri': '',
    'Asura: Ichibugin': '', 'Asura: Makyusen': '',
    'Collier': '', 'Diable Jambe: Flambage Shot': '',
    'Diable Jambe: Mouton Shot': '', 'Ifrit Jambe: Boeuf Burst': '',
    'Ifrit Jambe: Hell Memories': '', 'Soru: Golpe Relâmpago': '',
    'Rankyaku: Tempestade': '', 'Shigan: Oren': '',
    'Rokuogan': '', 'Rokuogan: Impacto Final': '',
    'Karatê: Vagabond Drill': '', 'Karatê: Buraikan': ''
};

const v7GolpesPorEstilo = {
    'Santoryu': {
        base: [
            ataque('Iai: Shishi Sonson • Uma Espada', 26, 0, 'IAI+SHISHI+SONSON', '26343d'),
            ataque('Corte de Uma Espada', 31, 0, 'CORTE+UMA+ESPADA', '26343d')
        ],
        duasEspadas: [
            ataque('Nitoryu: Tora Gari', 38, 1, 'NITORYU+TORA+GARI', '26343d'),
            ataque('Nitoryu: Rashomon', 44, 1, 'NITORYU+RASHOMON', '1b2834')
        ],
        tresEspadas: [
            ataque('Santoryu: Tatsu Maki', 55, 3, 'SANTORYU+TATSU+MAKI', '1b2633'),
            ataque('Santoryu: Oni Giri', 63, 3, 'SANTORYU+ONI+GIRI', '1b2633')
        ],
        asura: [
            ataque('Asura: Ichibugin', 88, 6, 'ASURA+ICHIBUGIN', '261b2f'),
            ataque('Asura: Makyusen', 103, 6, 'ASURA+MAKYUSEN', '302139')
        ]
    },
    'Perna Negra': {
        base: [
            ataque('Concassé', 30, 0, 'CONCASSE', '402b1f'),
            ataque('Collier', 34, 0, 'COLLIER', '402b1f')
        ],
        diableJambe: [
            ataque('Diable Jambe: Flambage Shot', 56, 2, 'DIABLE+FLAMBAGE', '641f18'),
            ataque('Diable Jambe: Mouton Shot', 62, 2, 'DIABLE+MOUTON+SHOT', '641f18')
        ],
        ifritJambe: [
            ataque('Ifrit Jambe: Boeuf Burst', 86, 6, 'IFRIT+BOEUF+BURST', '176bb0'),
            ataque('Ifrit Jambe: Hell Memories', 101, 6, 'IFRIT+HELL+MEMORIES', '104c91')
        ]
    },
    'Rokushiki': {
        base: [
            ataque('Shigan', 29, 0, 'SHIGAN', '172d3f'),
            ataque('Rankyaku', 34, 0, 'RANKYAKU', '24313b'),
            ataque('Soru: Golpe Relâmpago', 31, 1, 'SORU+GOLPE', '172d3f')
        ],
        tekkai: [
            ataque('Rankyaku: Tempestade', 45, 2, 'RANKYAKU+TEMPESTADE', '24313b'),
            ataque('Shigan: Oren', 49, 2, 'SHIGAN+OREN', '172d3f')
        ],
        rokuogan: [
            ataque('Rokuogan', 83, 6, 'ROKUOGAN', '132331'),
            ataque('Rokuogan: Impacto Final', 99, 6, 'ROKUOGAN+FINAL', '101d28')
        ]
    },
    'Karatê dos Homens-Peixe': {
        base: [
            ataque('Samegawara Seiken', 31, 0, 'SAMEGAWARA', '153c4c'),
            ataque('Kaimen Wari', 37, 0, 'KAIMEN+WARI', '0f3342')
        ],
        soshark: [
            ataque('Karatê: Vagabond Drill', 62, 5, 'VAGABOND+DRILL', '0f4152'),
            ataque('Karatê: Buraikan', 72, 5, 'BURAIKAN', '0b3545')
        ]
    }
};

// Aplica as imagens personalizadas aos ataques de todos os estilos.
function aplicarImagensAtaquesDosEstilos() {
    const aplicar = golpe => {
        const url = IMAGENS_ATAQUES_ESTILOS[golpe?.nome];
        if (typeof url === 'string' && url.trim()) golpe.img = url.trim();
    };
    (estilos || []).forEach(estilo => (estilo.ataques || []).forEach(aplicar));
    Object.values(v7GolpesPorEstilo || {}).forEach(formas =>
        Object.values(formas || {}).forEach(golpes => {
            if (Array.isArray(golpes)) golpes.forEach(aplicar);
        })
    );
}
aplicarImagensAtaquesDosEstilos();

// Garante que o painel existente conhece as formas V7, sem substituir o
// sistema de transformações da fruta. Uma forma de estilo e uma Gear podem
// continuar ativas ao mesmo tempo.
transformacoesEstiloV5['Santoryu'] = {
    base: { nome: 'Santoryu • 1 Espada', req: 0, multDano: 1, img: img('SANTORYU+1+ESPADA', '26343d'), descricao: 'Primeiro estágio, uma espada.' },
    duasEspadas: { nome: 'Santoryu • 2 Espadas', req: 1, multDano: 1.08, img: img('SANTORYU+2+ESPADAS', '253646'), descricao: 'Segundo estágio, duas espadas.' },
    tresEspadas: { nome: 'Santoryu • 3 Espadas', req: 3, multDano: 1.16, img: img('SANTORYU+3+ESPADAS', '161c25'), descricao: 'Terceiro estágio, três espadas.' },
    asura: { nome: 'Asura • 6 Espadas + 3 Cabeças', req: 6, multDano: 1.28, img: img('ASURA+6+ESPADAS+3+CABECAS', '261b2f'), descricao: 'Despertar avançado do Santoryu.' }
};
transformacoesEstiloV5['Perna Negra'] = {
    base: { nome: 'Perna Negra • Base', req: 0, multDano: 1, img: img('PERNA+NEGRA+BASE', '402b1f'), descricao: 'Chutes sem ignição.' },
    diableJambe: { nome: 'Diable Jambe • Fogo Vermelho', req: 2, multDano: 1.12, img: img('DIABLE+JAMBE+FOGO+VERMELHO', '641f18'), descricao: 'A perna pega fogo.' },
    ifritJambe: { nome: 'Ifrit Jambe • Fogo Azul', req: 6, multDano: 1.25, img: img('IFRIT+JAMBE+FOGO+AZUL', '176bb0'), descricao: 'A evolução azul de Diable Jambe.' }
};
transformacoesEstiloV5['Rokushiki'] = {
    base: { nome: 'Rokushiki • Base', req: 0, multDano: 1, img: img('ROKUSHIKI+BASE', '172d3f'), descricao: 'Técnicas de combate do Governo Mundial.' },
    tekkai: { nome: 'Tekkai', req: 2, multDano: 1.08, img: img('TEKKAI', '263949'), descricao: 'Defesa corporal temporária; botão especial reduz 90% de um golpe.' },
    rokuogan: { nome: 'Rokuogan • Despertar', req: 6, multDano: 1.22, img: img('ROKUOGAN', '132331'), descricao: 'Técnica secreta avançada do Rokushiki.' }
};
transformacoesEstiloV5['Karatê dos Homens-Peixe'] = {
    base: { nome: 'Karatê dos Homens-Peixe • Base', req: 0, multDano: 1, img: img('FISHMAN+KARATE+BASE', '153c4c'), descricao: 'Manipulação da água e golpes de impacto.' },
    soshark: { nome: 'Karatê dos Homens-Peixe • Forma Superior', req: 5, multDano: 1.18, img: img('FISHMAN+KARATE+SUPERIOR', '0f4152'), descricao: 'Postura avançada de Karatê dos Homens-Peixe.' }
};

// PERSONALIZAR FOTOS DAS FORMAS/DESPERTARES DOS ESTILOS:
// Cada chave deve ser exatamente o nome mostrado no catálogo de formas.
// Exemplo: 'Asura • 6 Espadas + 3 Cabeças': 'imagens/estilos/asura.png'.
const IMAGENS_FORMAS_ESTILO = {
    'Santoryu • 1 Espada': 'https://static.wikia.nocookie.net/onepiece/images/e/e6/Daz_Bones_derrotado_por_Zoro.png/revision/latest?cb=20220826075251&path-prefix=es',
    'Santoryu • 2 Espadas': 'https://static.wikia.nocookie.net/onepiece/images/2/26/Nigiri.png/revision/latest?cb=20190614222331&path-prefix=pt',
    'Santoryu • 3 Espadas': 'imagens\\which-way-does-zoros-mouth-sword-go-v0-crmb0l65r5ac1.webp',
    'Asura • 6 Espadas + 3 Cabeças': 'imagens\\zoros-ashura-comes-from-his-haki-and-will-be-a-devil-fruit-v0-q7ss6q3nk7ze1.webp',
    'Perna Negra • Base': 'https://static.wikia.nocookie.net/onepiece/images/8/8e/Estilo_Perna_Negra_Infobox.png/revision/latest?cb=20190615220302&path-prefix=pt',
    'Diable Jambe • Fogo Vermelho': 'https://static.wikia.nocookie.net/onepiece/images/9/9b/Diable_Jambe_Infobox.png/revision/latest?cb=20190120215713&path-prefix=pt',
    'Ifrit Jambe • Fogo Azul': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGDsTpEvfrtbdNL1z43C6E3BmOWK7Cz523Cdhs7rBfkhe5ZfkbHb-KwiB&s=10',
    'Rokushiki • Base': 'https://static.wikia.nocookie.net/oproleplaying/images/b/b2/Rokushiki_Infobox.png/revision/latest?cb=20200817030945',
    'Tekkai': 'https://static.wikia.nocookie.net/a-fanon-one-piece-rp/images/7/7f/Tekkai.png/revision/latest?cb=20250117083504',
    'Rokuogan • Despertar': 'https://i.makeagif.com/media/10-12-2015/yoxITQ.gif',
    'Karatê dos Homens-Peixe • Base': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9psNZBnYIuuhUtKeTcNd7FWVLu_ZnTZjcCxkWD2xxUewu8jeEP6fP06Oj&s=10',
    'Karatê dos Homens-Peixe • Forma Superior': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifVOzyHpar-gOogQ5VEY3vtiJ5Lm5W9nAGgWSjhE44Oyx1XX0PdWA_J5h3a6KE-jYeO-WM4rIVssUcFMOyUZP4cMaSUVsek_cGfzIwLWd3Jloj2ze0Do6W9b7z49gVZ2SDw6ChvemYUWzN/s280/111111.gif',
};
Object.values(transformacoesEstiloV5).forEach(formas => {
    Object.values(formas || {}).forEach(forma => {
        const url = IMAGENS_FORMAS_ESTILO[forma.nome];
        if (typeof url === 'string' && url.trim()) forma.img = url.trim();
    });
});

function v7MaestriaDoEstilo(nome = jogador.estiloLuta) {
    return Math.max(0, Number(jogador.maestriaEstilos?.[nome] || 0));
}

function v7GarantirDespertaresEstilo() {
    const v7Nome = jogador.estiloLuta;
    const v7Formas = transformacoesEstiloV5[v7Nome];
    if (!v7Nome || !v7Formas) return;
    jogador.despertaresEstilo[v7Nome] = jogador.despertaresEstilo[v7Nome] || {};
    const v7Maestria = v7MaestriaDoEstilo(v7Nome);
    Object.entries(v7Formas).forEach(([v7Chave, v7Forma]) => {
        const v7Desbloqueado = v7Maestria >= Number(v7Forma.req || 0);
        jogador.despertaresEstilo[v7Nome][v7Chave] = v7Desbloqueado;
    });
}

window.garantirDespertaresDoEstilo = v7GarantirDespertaresEstilo;
window.estiloEstaDespertado = function estiloEstaDespertadoV7(chave) {
    v7GarantirDespertaresEstilo();
    return Boolean(jogador.despertaresEstilo?.[jogador.estiloLuta]?.[chave]);
};

// ------------------------------------------------------------------------
// V7.03: ATRIBUTOS REBALANCEADOS
// O Haki do Armamento ativo concede 10% de redução. Nenhuma fruta, raça ou
// estilo concede redução passiva. Tekkai é a exceção temporária de 1 turno.
// ------------------------------------------------------------------------

const v7AtualizarPoderAnterior = window.atualizarPoder;
window.atualizarPoder = function atualizarPoderV7() {
    const v7Raca = racas.find(v7Item => v7Item.nome === jogador.raca);
    const v7Fruta = jogador.fruta ? Number(jogador.fruta.poder || 0) : 0;
    const v7EstiloMastery = v7MaestriaDoEstilo();
    let v7Poder = 10 + Number(jogador.poderBase || 10) * 0.28;
    if (v7Raca) v7Poder += v7Raca.bonusPoder * 0.45;
    v7Poder += Number(jogador.haki.obs || 0) * 0.35;
    v7Poder += Number(jogador.haki.arm || 0) * 0.55;
    v7Poder += Number(jogador.haki.reiValor || 0) * 0.35;
    v7Poder += Number(jogador.maestria || 0) * 1.2;
    v7Poder += v7Fruta * 0.55;
    if (jogador.fruta?.despertada) v7Poder += Math.min(12, v7Fruta * 0.15);
    if (jogador.estiloLuta) v7Poder += 5 + v7EstiloMastery * 0.8;
    if (jogador.haki.obsAvancado) v7Poder += 4;
    if (jogador.haki.armAvancado) v7Poder += 5;
    if (jogador.semSombra) v7Poder = Math.max(4, v7Poder - 8);

    jogador.aliados.forEach(v7Aliado => {
        v7Aliado.haki = v7Aliado.haki || { obs: 0, arm: 0 };
        v7Poder += Number(v7Aliado.poder || 0) * 0.30;
        if (v7Aliado.fruta) v7Poder += Number(v7Aliado.fruta.poder || 0) * 0.20;
        v7Poder += Number(v7Aliado.haki.arm || 0) * 0.15;
        v7Poder += Number(v7Aliado.haki.obs || 0) * 0.10;
        v7Poder += (v7Aliado.estilos || []).length * 0.7;
    });

    jogador.poder = Math.max(1, Math.round(v7Poder));
    jogador.maestriaEstilo = v7EstiloMastery;
    const v7Atributos = window.calcularAtributosCombate();
    if (el('poder-jogador-poster')) el('poder-jogador-poster').textContent = jogador.poder;
    if (el('dano-combate-jogador')) el('dano-combate-jogador').textContent = v7Atributos.dano;
    if (el('reducao-combate-jogador')) el('reducao-combate-jogador').textContent = `${v7Atributos.reducao}%`;
};

window.calcularAtributosCombate = function calcularAtributosCombateV7() {
    const v7Maestria = Math.max(0, Number(jogador.maestria || 0));
    const v7FrutaPoder = Math.min(70, Number(jogador.fruta?.poder || 0));
    const v7HakiObs = Math.min(50, Number(jogador.haki.obs || 0));
    const v7HakiArm = Math.min(50, Number(jogador.haki.arm || 0));
    const v7RaçaBonus = jogador.raca === 'Lunaria' ? 18 : jogador.raca === 'Homem-Peixe' ? 12 : 0;
    const v7EstiloBonus = jogador.estiloLuta ? 12 : 0;

    // A progressão cresce, mas não transforma o player num boss antes de Alabasta.
    let v7VidaMax = 120
        + v7Maestria * 18
        + v7HakiArm * 1.2
        + v7HakiObs * 0.7
        + v7FrutaPoder * 1.35
        + v7RaçaBonus
        + v7EstiloBonus;
    if (jogador.fruta?.despertada) v7VidaMax += 35;
    if (jogador.haki.reiEstado === 'Despertado!') v7VidaMax += 25;
    if (jogador.haki.armAvancado) v7VidaMax += 12;
    jogador.vidaMaxima = Math.min(900, Math.round(v7VidaMax));
    jogador.vida = Math.min(Number(jogador.vida || jogador.vidaMaxima), jogador.vidaMaxima);

    // Dano cresce com progressão, mas em escala sublinear para evitar valores absurdos.
    const v7PoderAtual = Math.max(1, Number(jogador.poder || 10));
    let v7Dano = 12
        + Math.log2(v7PoderAtual + 1) * 5.5
        + v7Maestria * 1.35
        + v7HakiArm * 0.28
        + v7HakiObs * 0.12
        + v7FrutaPoder * 0.17
        + v7EstiloBonus * 0.25;
    if (jogador.fruta?.despertada) v7Dano += Math.min(12, v7FrutaPoder * 0.14);
    if (jogador.haki.armAvancado) v7Dano += 6;

    // Só o Haki Armamento ativo oferece 10% de redução constante.
    // Tekkai é uma técnica temporária separada, usada sacrificando o turno.
    let v7Reducao = estado.tekkaiAtivo ? 90 : (estado.hakiArmAtivo && v7HakiArm > 0 ? 10 : 0);

    return {
        dano: Math.max(12, Math.round(v7Dano)),
        reducao: v7Reducao,
        vidaMaxima: jogador.vidaMaxima
    };
};

const v7CalcularMultiplicadoresAnterior = window.calcularMultiplicadoresCombate;
window.calcularMultiplicadoresCombate = function calcularMultiplicadoresCombateV7() {
    window.atualizarPoder();
    const v7Boss = estado.bossAtivo;
    if (!v7Boss) return { multJogador: 1, multBoss: 1 };

    const v7RatioBoss = Number(v7Boss.poder || 1) / Math.max(1, Number(jogador.poder || 1));
    const v7RatioPlayer = Number(jogador.poder || 1) / Math.max(1, Number(v7Boss.poder || 1));
    let v7MultJogador = 1;
    if (v7RatioPlayer >= 1.5) v7MultJogador = 1.05;
    if (v7RatioPlayer >= 2.3) v7MultJogador = 1.12;
    let v7MultBoss = 1;
    // Escala de vantagem bem mais gradual: ser fraco dói, mas não vira
    // multiplicador x5 em quase toda luta do meio da Grand Line.
    if (v7RatioBoss >= 1.2) v7MultBoss = 1.12;
    if (v7RatioBoss >= 1.6) v7MultBoss = 1.25;
    if (v7RatioBoss >= 2.3) v7MultBoss = 1.45;
    if (v7RatioBoss >= 3.5) v7MultBoss = 1.65;
    if (v7Boss.esmagador) v7MultBoss = Math.max(v7MultBoss, 2.25);

    // Bosses com Haki do Armamento reduzem em 10% o dano recebido.
    if (v7Boss.haki?.arm || v7Boss.haki?.armamento || v7Boss.hakiArmamento) v7MultJogador *= 0.90;
    return { multJogador: v7MultJogador, multBoss: v7MultBoss };
};

// Haki de chefes pesquisado: Armamento funciona como defesa e ataque, e pode
// atingir Logias; Observação dá leitura de intenção/predição. Nem todo chefão
// possui todos os tipos. FONTES: One Piece Wiki, Haki/Armament e Observation.
(function v7AplicarHakiCanonicoAosBosses() {
    const v7PerfisHaki = {
        'Smoker': { arm: true, obs: true },
        'Crocodile': { arm: true, obs: true },
        'Enel': { obs: true },
        'Aokiji (Kuzan)': { arm: true, obs: true },
        'Akainu (Sakazuki)': { arm: true, obs: true, rei: false },
        'Kizaru (Borsalino)': { arm: true, obs: true },
        'Kizaru': { arm: true, obs: true },
        'Doflamingo': { arm: true, obs: true, rei: true },
        'Katakuri': { arm: true, obs: true, rei: true },
        'Kaido': { arm: true, obs: true, rei: true },
        'Barba Branca': { arm: true, obs: true, rei: true },
        'Marco': { arm: true, obs: true },
        'Ace libertado das algemas de Kairosek': { arm: true, obs: true },
        'Rob Lucci': { arm: true, obs: true },
        'Nosjuro': { arm: true, obs: true, rei: true },
        'Saturn': { arm: true, obs: true, rei: true },
        'Imu': { arm: true, obs: true, rei: true },
        'Imu no corpo da Gunko': { arm: true, obs: true, rei: true }
    };
    const v7TodosBosses = [];
    ilhas.forEach(v7Ilha => (v7Ilha.bosses || []).forEach(v7Boss => v7TodosBosses.push(v7Boss)));
    if (typeof v4SkyBosses !== 'undefined') v4SkyBosses.forEach(v7Boss => v7TodosBosses.push(v7Boss));
    v7TodosBosses.forEach(v7Boss => {
        const v7Perfil = v7PerfisHaki[v7Boss.nome];
        if (v7Perfil) v7Boss.haki = { ...v7Perfil };
        else v7Boss.haki = v7Boss.haki || { arm: false, obs: false, rei: false };
        if (['Aokiji (Kuzan)', 'Akainu (Sakazuki)', 'Kizaru (Borsalino)', 'Kizaru', 'Crocodile', 'Enel'].includes(v7Boss.nome)) {
            v7Boss.logia = true;
            v7Boss.requerHaki = true;
        }
    });
})();

// ------------------------------------------------------------------------
// V7.04: FRUTAS COM TIPO E CONJUNTO DE DESPERTAR/V2
// IMAGE FRUTAS: mude img e as cores na declaração `frutas` acima; para mudar
// imagens dos golpes despertados, edite as chamadas ataque() nesta seção.
// ------------------------------------------------------------------------

const v7DadosFrutas = {
    'Bara Bara no Mi': { tipo: 'Paramecia', nomeV2: 'Bara Bara no Mi • Despertada V2', ataques: [
        ataque('Bara Bara: Festival Desperto', 72, 1, 'BARA+FESTIVAL+V2', '4b334d'),
        ataque('Bara Bara: Desmembramento Total', 88, 4, 'BARA+DESMEMBRAMENTO+V2', '403040')
    ] },
    'Sube Sube no Mi': { tipo: 'Paramecia', nomeV2: 'Sube Sube no Mi • Despertada V2', ataques: [
        ataque('Corpo Escorregadio V2', 65, 1, 'SUBE+ESCORREGADIO+V2', '6f526f'),
        ataque('Deslize Imparável', 83, 4, 'SUBE+DESLIZE+V2', '5b425b')
    ] },
    'Gomu Gomu no Mi': { tipo: 'Paramecia', nomeV2: 'Hito Hito no Mi, Modelo: Nika', ataques: [] },
    'Mera Mera no Mi': { tipo: 'Logia', nomeV2: 'Mera Mera no Mi • Despertada V2', ataques: [
        ataque('Hiken: Entei V2', 94, 1, 'ENTEI+V2', '7a291c'),
        ataque('Higan: Chamas em Área', 118, 4, 'HIGAN+V2', '5a1f17')
    ] },
    'Mochi Mochi no Mi': { tipo: 'Paramecia Especial', nomeV2: 'Mochi Mochi no Mi • Despertada V2', ataques: [
        ataque('Mochi: Kagami Mochi Desperto', 105, 1, 'MOCHI+KAGAMI+V2', '614436'),
        ataque('Mochi: Buzzcut Desperto', 130, 4, 'MOCHI+BUZZCUT+V2', '4c352c')
    ] },
    'Hie Hie no Mi': { tipo: 'Logia', nomeV2: 'Hie Hie no Mi • Despertada V2', ataques: [
        ataque('Ice Age Desperto', 130, 1, 'ICE+AGE+V2', '355c71'),
        ataque('Pheasant Beak Desperto', 158, 4, 'PHEASANT+BEAK+V2', '223f4f')
    ] },
    'Yami Yami no Mi': { tipo: 'Logia', nomeV2: 'Yami Yami no Mi • Despertada V2', ataques: [
        ataque('Black Hole Desperto', 142, 1, 'BLACK+HOLE+V2', '100e15'),
        ataque('Liberation Desperto', 170, 4, 'LIBERATION+V2', '241d2f')
    ] },
    'Pika Pika no Mi': { tipo: 'Logia', nomeV2: 'Pika Pika no Mi • Despertada V2', ataques: [
        ataque('Yata no Kagami: Velocidade da Luz', 140, 1, 'YATA+KAGAMI+V2', 'b79a32'),
        ataque('Chute da Luz', 168, 4, 'LIGHT+KICK+V2', 'e0c64f')
    ] },
    'Goro Goro no Mi': { tipo: 'Logia', nomeV2: 'Goro Goro no Mi • Despertada V2', ataques: [
        ataque('El Thor: Céu Desperto', 138, 1, 'EL+THOR+V2', 'a8952d'),
        ataque('Raigo: Julgamento', 172, 4, 'RAIGO+V2', 'd4b832')
    ] },
    'Magu Magu no Mi': { tipo: 'Logia', nomeV2: 'Magu Magu no Mi • Despertada V2', ataques: [
        ataque('Ryusei Kazan: Chuva de Magma', 145, 1, 'RYUSEI+KAZAN+V2', '8c281c'),
        ataque('Meigo: Punho Vulcânico', 180, 4, 'MEIGO+V2', 'c43b25')
    ] },
    'Suna Suna no Mi': { tipo: 'Logia', nomeV2: 'Suna Suna no Mi • Despertada V2', ataques: [
        ataque('Desert Spada: Corte Profundo', 108, 1, 'DESERT+SPADA+V2', '8e7849'),
        ataque('Tempestade de Areia', 136, 4, 'SANDSTORM+V2', 'b19a5c')
    ] },
    'Mori Mori no Mi': { tipo: 'Logia', nomeV2: 'Mori Mori no Mi • Despertada V2', ataques: [
        ataque('Espinhos da Floresta Despertos', 132, 1, 'MORI+THORNS+V2', '315b30'),
        ataque('Floresta Devoradora V2', 166, 4, 'DEVOURING+FOREST+V2', '244523')
    ] },
    'Gasu Gasu no Mi': { tipo: 'Logia', nomeV2: 'Gasu Gasu no Mi • Despertada V2', ataques: [
        ataque('Gastanet: Nuvem Tóxica', 112, 1, 'GASTANET+V2', '607b7a'),
        ataque('Shinokuni: Zona Mortal', 140, 4, 'SHINOKUNI+V2', '526b6b')
    ] },
    'Tori Tori no Mi, Modelo: Falcão': { tipo: 'Zoan', nomeV2: 'Tori Tori no Mi, Modelo: Falcão • Despertada', ataques: [ataque('Mergulho do Falcão Desperto', 108, 1, 'FALCAO+V2', '665a42'), ataque('Garras Celestes V2', 132, 4, 'GARRAS+CELESTES+V2', '8b7955')] },
    'Inu Inu no Mi, Modelo: Chacal': { tipo: 'Zoan', nomeV2: 'Inu Inu no Mi, Modelo: Chacal • Despertada', ataques: [ataque('Investida do Chacal V2', 105, 1, 'CHACAL+V2', '76583a'), ataque('Corte Crescente V2', 128, 4, 'CORTE+CRESCENTE+V2', '60452e')] },
    'Ushi Ushi no Mi, Modelo: Bisão': { tipo: 'Zoan', nomeV2: 'Ushi Ushi no Mi, Modelo: Bisão • Despertada', ataques: [ataque('Investida do Bisão V2', 110, 1, 'BISAO+V2', '584b3d'), ataque('Chifrada Devastadora V2', 135, 4, 'CHIFRADA+V2', '3e352d')] },
    'Neko Neko no Mi, Modelo: Leopardo': { tipo: 'Zoan', nomeV2: 'Neko Neko no Mi, Modelo: Leopardo • Despertada', ataques: [ataque('Shigan Desperto', 130, 1, 'SHIGAN+V2', '826b45'), ataque('Rokuogan Desperto', 158, 4, 'ROKUOGAN+V2', '4a3d2d')] },
    'Inu Inu no Mi, Modelo: Lobo': { tipo: 'Zoan', nomeV2: 'Inu Inu no Mi, Modelo: Lobo • Despertada', ataques: [ataque('Presas do Lobo V2', 112, 1, 'LOBO+V2', '555b63'), ataque('Uivo Cortante V2', 138, 4, 'UIVO+CORTANTE+V2', '3d4249')] },
    'Zou Zou no Mi': { tipo: 'Zoan', nomeV2: 'Zou Zou no Mi • Despertada', ataques: [ataque('Tromba Esmagadora V2', 115, 1, 'TROMBA+V2', '625548'), ataque('Pisada Colossal V2', 140, 4, 'PISADA+V2', '463b32')] },
    'Hito Hito no Mi, Modelo: Daibutsu': { tipo: 'Zoan Mítica', nomeV2: 'Hito Hito no Mi, Modelo: Daibutsu • Despertada', ataques: [ataque('Onda Dourada V2', 140, 1, 'ONDA+DOURADA+V2', '8b7435'), ataque('Impacto do Buda V2', 170, 4, 'BUDA+V2', '655323')] },
    'Tori Tori no Mi, Modelo: Fênix': { tipo: 'Zoan Mítica', nomeV2: 'Tori Tori no Mi, Modelo: Fênix • Despertada', ataques: [ataque('Chamas Azuis V2', 140, 1, 'CHAMAS+AZUIS+V2', '285f96'), ataque('Regeneração Fênix V2', 168, 4, 'FENIX+V2', '377cb0')] },
    'Uo Uo no Mi, Modelo: Seiryu': { tipo: 'Zoan Mítica', nomeV2: 'Uo Uo no Mi, Modelo: Seiryu • Despertada', ataques: [ataque('Boro Breath Desperto', 150, 1, 'BORO+BREATH+V2', '235b70'), ataque('Tornado Dracônico V2', 185, 4, 'TORNADO+DRACONICO+V2', '173d51')] },
    'Inu Inu no Mi, Modelo: Okuchi no Makami': { tipo: 'Zoan Mítica', nomeV2: 'Inu Inu no Mi, Modelo: Okuchi no Makami • Despertada', ataques: [ataque('Presas Sagradas V2', 145, 1, 'PRESAS+SAGRADAS+V2', '477b9e'), ataque('Guardião do Amanhecer V2', 178, 4, 'GUARDIAO+AMANHECER+V2', '315b7a')] },
    'Ryu Ryu no Mi, Modelo: Allosaurus': { tipo: 'Zoan Antiga', nomeV2: 'Ryu Ryu no Mi, Modelo: Allosaurus • Despertada', ataques: [ataque('Mordida do Allosaurus V2', 132, 1, 'ALLOSAURUS+V2', '634a35'), ataque('Cauda Esmagadora V2', 160, 4, 'CAUDA+ESMAGADORA+V2', '493626')] },
    'Ryu Ryu no Mi, Modelo: Pteranodon': { tipo: 'Zoan Antiga', nomeV2: 'Ryu Ryu no Mi, Modelo: Pteranodon • Despertada', ataques: [ataque('Voo Rasante V2', 130, 1, 'PTERANODON+V2', '7e654d'), ataque('Corte Supersônico V2', 158, 4, 'CORTE+SUPERSONICO+V2', '5e4937')] },
    'Ryu Ryu no Mi, Modelo: Brachiosaurus': { tipo: 'Zoan Antiga', nomeV2: 'Ryu Ryu no Mi, Modelo: Brachiosaurus • Despertada', ataques: [ataque('Pescoço Esmagador V2', 135, 1, 'BRACHIOSAURUS+V2', '52603c'), ataque('Bombardeio Colossal V2', 165, 4, 'BOMBARDEIO+V2', '3c482b')] },
    'Ryu Ryu no Mi, Modelo: Spinosaurus': { tipo: 'Zoan Antiga', nomeV2: 'Ryu Ryu no Mi, Modelo: Spinosaurus • Despertada', ataques: [ataque('Mandíbula do Espinossauro V2', 134, 1, 'SPINOSAURUS+V2', '784535'), ataque('Caçada Pré-histórica V2', 162, 4, 'CASSADA+PREHISTORICA+V2', '563326')] },
    'Hebi Hebi no Mi, Modelo: Yamata no Orochi': { tipo: 'Zoan Mítica', nomeV2: 'Hebi Hebi no Mi, Modelo: Yamata no Orochi • Despertada', ataques: [ataque('Mordida das Oito Cabeças V2', 148, 1, 'OITO+CABECAS+V2', '68517e'), ataque('Hidra Devastadora V2', 180, 4, 'HIDRA+V2', '48365d')] },
    'Yuami Yamkio no Mi': { tipo: 'Zoan Mítica', nomeV2: 'Yuami Yamkio no Mi • Fúria do Yuami', ataques: [
        ataque('Pereça', 999999999999, 0, 'PERECA', '210b28'),
        ataque('Olhar de mil jardas', 999999999999, 0, 'OLHAR+DE+MIL+JARDAS', '30103d'),
        ataque('Fúria dos mil homens', 250, 0, 'FURIA+DOS+MIL+HOMENS', '591b45')
    ] },
    'Yomi Yomi no Mi': { tipo: 'Paramecia', nomeV2: 'Yomi Yomi no Mi • Alma Desperta', ataques: [
        ataque('Soul Solid: Corte da Alma', 138, 1, 'SOUL+SOLID+V2', '8ca9b8'),
        ataque('Soul Parade: Marcha dos Mortos', 174, 4, 'SOUL+PARADE+V2', '526c83'),
        ataque('Ice Burn: Geada do Submundo', 212, 6, 'ICE+BURN+V2', 'b9e8f5')
    ] }
};

frutas.forEach(v7FrutaCatalogo => {
    const v7Dado = v7DadosFrutas[v7FrutaCatalogo.nome] || { tipo: 'Paramecia', nomeV2: `${v7FrutaCatalogo.nome} • Despertada V2`, ataques: [] };
    v7FrutaCatalogo.tipo = v7Dado.tipo;
    v7FrutaCatalogo.ataquesDespertados = v7Dado.ataques;
    v7FrutaCatalogo.nomeV2 = v7Dado.nomeV2;
});

// ============================================================
// PERSONALIZAR TODAS AS FOTOS DAS AKUMA NO MI EM UM SÓ LUGAR (Ctrl+F: IMAGENS_FRUTAS).
// Troque '' pelo URL direto ou caminho, por exemplo 'imagens/frutas/gomu.png'.
// Deixe '' para manter o placeholder gerado automaticamente. Os arquivos locais
// devem ficar em uma pasta relativa ao HTML. O nome da fruta precisa coincidir exatamente.
// ============================================================
const IMAGENS_FRUTAS = {
    'Bara Bara no Mi': '',
    'Sube Sube no Mi': '',
    'Gomu Gomu no Mi': '',
    'Mera Mera no Mi': '',
    'Mochi Mochi no Mi': '',
    'Hie Hie no Mi': '',
    'Yami Yami no Mi': '',
    'Pika Pika no Mi': '',
    'Goro Goro no Mi': '',
    'Magu Magu no Mi': '',
    'Suna Suna no Mi': '',
    'Mori Mori no Mi': '',
    'Gasu Gasu no Mi': '',
    'Tori Tori no Mi, Modelo: Falcão': '',
    'Inu Inu no Mi, Modelo: Chacal': '',
    'Ushi Ushi no Mi, Modelo: Bisão': '',
    'Neko Neko no Mi, Modelo: Leopardo': '',
    'Inu Inu no Mi, Modelo: Lobo': '',
    'Zou Zou no Mi': '',
    'Hito Hito no Mi, Modelo: Daibutsu': '',
    'Tori Tori no Mi, Modelo: Fênix': '',
    'Uo Uo no Mi, Modelo: Seiryu': '',
    'Inu Inu no Mi, Modelo: Okuchi no Makami': '',
    'Ryu Ryu no Mi, Modelo: Allosaurus': '',
    'Ryu Ryu no Mi, Modelo: Pteranodon': '',
    'Ryu Ryu no Mi, Modelo: Brachiosaurus': '',
    'Ryu Ryu no Mi, Modelo: Spinosaurus': '',
    'Hebi Hebi no Mi, Modelo: Yamata no Orochi': '',
    'Yuami Yamkio no Mi': 'imagens\\89a9501d-0514-48fe-8b26-32c5c1e457f3.jpg',
    'Yomi Yomi no Mi': ''
};
frutas.forEach(frutaCatalogo => {
    const caminho = IMAGENS_FRUTAS[frutaCatalogo.nome];
    if (typeof caminho === 'string' && caminho.trim()) frutaCatalogo.img = caminho.trim();
});

// IMAGENS DO ESTADO DESPERTADO DE CADA FRUTA (não são imagens de ataques).
// Ao despertar, esta imagem substitui a imagem da fruta no perfil/evento.
// Deixe '' para manter a imagem que a fruta já tinha.
const IMAGENS_DESPERTAR_FRUTAS = {
    'Bara Bara no Mi': '', 'Sube Sube no Mi': '', 'Gomu Gomu no Mi': '',
    'Mera Mera no Mi': '', 'Mochi Mochi no Mi': '', 'Hie Hie no Mi': '',
    'Yami Yami no Mi': '', 'Pika Pika no Mi': '', 'Goro Goro no Mi': '',
    'Magu Magu no Mi': '', 'Suna Suna no Mi': '', 'Mori Mori no Mi': '',
    'Gasu Gasu no Mi': '', 'Tori Tori no Mi, Modelo: Falcão': '',
    'Inu Inu no Mi, Modelo: Chacal': '', 'Ushi Ushi no Mi, Modelo: Bisão': '',
    'Neko Neko no Mi, Modelo: Leopardo': '', 'Inu Inu no Mi, Modelo: Lobo': '',
    'Zou Zou no Mi': '', 'Hito Hito no Mi, Modelo: Daibutsu': '',
    'Tori Tori no Mi, Modelo: Fênix': '', 'Uo Uo no Mi, Modelo: Seiryu': '',
    'Inu Inu no Mi, Modelo: Okuchi no Makami': '',
    'Ryu Ryu no Mi, Modelo: Allosaurus': '', 'Ryu Ryu no Mi, Modelo: Pteranodon': '',
    'Ryu Ryu no Mi, Modelo: Brachiosaurus': '', 'Ryu Ryu no Mi, Modelo: Spinosaurus': '',
    'Hebi Hebi no Mi, Modelo: Yamata no Orochi': '', 'Yuami Yamkio no Mi': '',
    'Yomi Yomi no Mi': ''
};

// IMAGENS DOS BOTÕES DE FORMAS/TRANSFORMAÇÕES DE FRUTAS.
// Chave = nome original da fruta + :: + chave interna da forma.
// Exemplos: 'Gomu Gomu no Mi::gear2', 'Gomu Gomu no Mi::gear5',
// 'Yuami Yamkio no Mi::despertada'. Vazio = imagem padrão.
const IMAGENS_FORMAS_FRUTAS = {
    'Gomu Gomu no Mi::base': '',
    'Gomu Gomu no Mi::gear2': '',
    'Gomu Gomu no Mi::gear3': '',
    'Gomu Gomu no Mi::boundman': '',
    'Gomu Gomu no Mi::snakeman': '',
    'Gomu Gomu no Mi::gear5': '',
    'Tori Tori no Mi, Modelo: Falcão::base': '',
    'Tori Tori no Mi, Modelo: Falcão::hibrida': '',
    'Tori Tori no Mi, Modelo: Falcão::animal': '',
    'Inu Inu no Mi, Modelo: Chacal::base': '',
    'Inu Inu no Mi, Modelo: Chacal::hibrida': '',
    'Inu Inu no Mi, Modelo: Chacal::animal': '',
    'Ushi Ushi no Mi, Modelo: Bisão::base': '',
    'Ushi Ushi no Mi, Modelo: Bisão::hibrida': '',
    'Ushi Ushi no Mi, Modelo: Bisão::animal': '',
    'Neko Neko no Mi, Modelo: Leopardo::base': '',
    'Neko Neko no Mi, Modelo: Leopardo::hibrida': '',
    'Neko Neko no Mi, Modelo: Leopardo::animal': '',
    'Inu Inu no Mi, Modelo: Lobo::base': '',
    'Inu Inu no Mi, Modelo: Lobo::hibrida': '',
    'Inu Inu no Mi, Modelo: Lobo::animal': '',
    'Zou Zou no Mi::base': '',
    'Zou Zou no Mi::hibrida': '',
    'Zou Zou no Mi::animal': '',
    'Hito Hito no Mi, Modelo: Daibutsu::base': '',
    'Hito Hito no Mi, Modelo: Daibutsu::hibrida': '',
    'Hito Hito no Mi, Modelo: Daibutsu::animal': '',
    'Tori Tori no Mi, Modelo: Fênix::base': '',
    'Tori Tori no Mi, Modelo: Fênix::hibrida': '',
    'Tori Tori no Mi, Modelo: Fênix::animal': '',
    'Uo Uo no Mi, Modelo: Seiryu::base': '',
    'Uo Uo no Mi, Modelo: Seiryu::hibrida': '',
    'Uo Uo no Mi, Modelo: Seiryu::animal': '',
    'Inu Inu no Mi, Modelo: Okuchi no Makami::base': '',
    'Inu Inu no Mi, Modelo: Okuchi no Makami::hibrida': '',
    'Inu Inu no Mi, Modelo: Okuchi no Makami::animal': '',
    'Ryu Ryu no Mi, Modelo: Allosaurus::base': '',
    'Ryu Ryu no Mi, Modelo: Allosaurus::hibrida': '',
    'Ryu Ryu no Mi, Modelo: Allosaurus::animal': '',
    'Ryu Ryu no Mi, Modelo: Pteranodon::base': '',
    'Ryu Ryu no Mi, Modelo: Pteranodon::hibrida': '',
    'Ryu Ryu no Mi, Modelo: Pteranodon::animal': '',
    'Ryu Ryu no Mi, Modelo: Brachiosaurus::base': '',
    'Ryu Ryu no Mi, Modelo: Brachiosaurus::hibrida': '',
    'Ryu Ryu no Mi, Modelo: Brachiosaurus::animal': '',
    'Ryu Ryu no Mi, Modelo: Spinosaurus::base': '',
    'Ryu Ryu no Mi, Modelo: Spinosaurus::hibrida': '',
    'Ryu Ryu no Mi, Modelo: Spinosaurus::animal': '',
    'Hebi Hebi no Mi, Modelo: Yamata no Orochi::base': '',
    'Hebi Hebi no Mi, Modelo: Yamata no Orochi::hibrida': '',
    'Hebi Hebi no Mi, Modelo: Yamata no Orochi::animal': '',
    'Yuami Yamkio no Mi::base': '',
    'Yuami Yamkio no Mi::hibrida': '',
    'Yuami Yamkio no Mi::animal': '',
    'Yuami Yamkio no Mi::despertada': ''
};

// ============================================================================
// COMO TROCAR A IMAGEM DE UM ATAQUE DE FRUTA (normais e despertados)
//
// 1) Escolha a imagem que quer usar. Pode ser:
//    • URL direta da imagem, por exemplo https://meusite.com/divine-impact.png
//    • arquivo local dentro de uma pasta ao lado do index.html, por exemplo
//      imagens/ataques/divine-impact.png
// 2) Encontre o nome exato do golpe nesta lista e troque APENAS o valor vazio
//    entre aspas por sua URL/caminho. Não altere o nome à esquerda.
// 3) Exemplo de como fica uma linha preenchida:
//    'Bara Bara: Chop': 'imagens/ataques/bara-chop.png',
// 4) Ataques normais ficam em IMAGENS_ATAQUES_FRUTAS.
//    Ataques DESPERTADOS ficam em IMAGENS_ATAQUES_DESPERTADOS_FRUTAS.
// 5) Deixe o valor como '' para usar a imagem padrão gerada pelo jogo.
//
// IMPORTANTE: a URL/caminho precisa apontar para um arquivo de imagem válido.
// Os nomes abaixo são os nomes exatos usados nos ataques do jogo.
// ============================================================================
const IMAGENS_ATAQUES_FRUTAS = {
    'Bara Bara: Chop': '',
    'Bara Bara: Buzzsaw': '',
    'Corpo Escorregadio': '',
    'Deslize Brutal': '',
    'Gomu Gomu no Pistol': '',
    'Gomu Gomu no Elephant Gun': '',
    'Hiken': '',
    'Higan': '',
    'Mochi Gatling': '',
    'Mochi Buzzcut': '',
    'Ice Saber': '',
    'Ice Time': '',
    'Kurouzu': '',
    'Black Hole': '',
    'Yata no Kagami': '',
    'Ama no Murakumo': '',
    'El Thor': '',
    'Raigo': '',
    'Ryusei Kazan': '',
    'Meigo': '',
    'Desert Spada': '',
    'Ground Secco': '',
    '枝突き: Espinhos da Floresta': '',
    'Floresta Devoradora': '',
    'Gastanet': '',
    'Shinokuni': '',
    'Mergulho do Falcão': '',
    'Garras Celestes': '',
    'Investida do Chacal': '',
    'Corte Crescente': '',
    'Investida do Bisão': '',
    'Chifrada Devastadora': '',
    'Shigan': '',
    'Rokuogan': '',
    'Presas do Lobo': '',
    'Uivo Cortante': '',
    'Tromba Esmagadora': '',
    'Pisada Colossal': '',
    'Onda Dourada': '',
    'Impacto do Buda': '',
    'Chamas Azuis': '',
    'Regeneração Fênix': '',
    'Boro Breath': '',
    'Tornado Dracônico': '',
    'Presas Sagradas': '',
    'Guardião do Amanhecer': '',
    'Mordida do Allosaurus': '',
    'Cauda Esmagadora': '',
    'Voo Rasante': '',
    'Corte Supersônico': '',
    'Pescoço Esmagador': '',
    'Bombardeio Colossal': '',
    'Mandíbula do Espinossauro': '',
    'Caçada Pré-histórica': '',
    'Mordida das Oito Cabeças': '',
    'Hidra Devastadora': '',
    'Divine Impact': '',
    'Multiversal Departure': '',
    'Yuami Yamkio: multivesal end': '',
    'Yomi Yomi: Soul Solid': '',
    'Yomi Yomi: Soul Parade': '',
    'Ice Burn: Alma Congelante': ''
};

const IMAGENS_ATAQUES_DESPERTADOS_FRUTAS = {
    // Yuami Yamkio no Mi: imagens dos golpes da Fúria do Yuami. Troque '' pelo caminho/URL.
    'Pereça': '',
    'Olhar de mil jardas': '',
    'Fúria dos mil homens': '',
    'Bara Bara: Festival Desperto': '',
    'Bara Bara: Desmembramento Total': '',
    'Corpo Escorregadio V2': '',
    'Deslize Imparável': '',
    'Hiken: Entei V2': '',
    'Higan: Chamas em Área': '',
    'Mochi: Kagami Mochi Desperto': '',
    'Mochi: Buzzcut Desperto': '',
    'Ice Age Desperto': '',
    'Pheasant Beak Desperto': '',
    'Black Hole Desperto': '',
    'Liberation Desperto': '',
    'Yata no Kagami: Velocidade da Luz': '',
    'Chute da Luz': '',
    'El Thor: Céu Desperto': '',
    'Raigo: Julgamento': '',
    'Ryusei Kazan: Chuva de Magma': '',
    'Meigo: Punho Vulcânico': '',
    'Desert Spada: Corte Profundo': '',
    'Tempestade de Areia': '',
    'Espinhos da Floresta Despertos': '',
    'Floresta Devoradora V2': '',
    'Gastanet: Nuvem Tóxica': '',
    'Shinokuni: Zona Mortal': '',
    'Mergulho do Falcão Desperto': '',
    'Garras Celestes V2': '',
    'Investida do Chacal V2': '',
    'Corte Crescente V2': '',
    'Investida do Bisão V2': '',
    'Chifrada Devastadora V2': '',
    'Shigan Desperto': '',
    'Rokuogan Desperto': '',
    'Presas do Lobo V2': '',
    'Uivo Cortante V2': '',
    'Tromba Esmagadora V2': '',
    'Pisada Colossal V2': '',
    'Onda Dourada V2': '',
    'Impacto do Buda V2': '',
    'Chamas Azuis V2': '',
    'Regeneração Fênix V2': '',
    'Boro Breath Desperto': '',
    'Tornado Dracônico V2': '',
    'Presas Sagradas V2': '',
    'Guardião do Amanhecer V2': '',
    'Mordida do Allosaurus V2': '',
    'Cauda Esmagadora V2': '',
    'Voo Rasante V2': '',
    'Corte Supersônico V2': '',
    'Pescoço Esmagador V2': '',
    'Bombardeio Colossal V2': '',
    'Mandíbula do Espinossauro V2': '',
    'Caçada Pré-histórica V2': '',
    'Mordida das Oito Cabeças V2': '',
    'Hidra Devastadora V2': '',
    'DIVINE IMPACT: DEUS EX-KRIEG': '',
    'MULTIVERSAL DEPARTURE: RESET DO INFINITO': '',
    'KRIEG! KRIEG!! KRIEG!!!: FIM DE TODAS AS NARRATIVAS': '',
    'Soul Solid: Corte da Alma': '',
    'Soul Parade: Marcha dos Mortos': '',
    'Ice Burn: Geada do Submundo': ''
};

// Aplica as URLs definidas acima aos ataques do catálogo de frutas.
// A chamada fica DEPOIS dos mapas para evitar acessar const antes de inicializar.
function aplicarImagensAtaquesDasFrutas() {
    frutas.forEach(frutaCatalogo => {
        (frutaCatalogo.ataques || []).forEach(golpe => {
            const url = IMAGENS_ATAQUES_FRUTAS[golpe.nome];
            if (typeof url === 'string' && url.trim()) golpe.img = url.trim();
        });
        (frutaCatalogo.ataquesDespertados || []).forEach(golpe => {
            const url = IMAGENS_ATAQUES_DESPERTADOS_FRUTAS[golpe.nome];
            if (typeof url === 'string' && url.trim()) golpe.img = url.trim();
        });
    });
}

// Neste ponto os dois mapas já existem, então é seguro aplicar as imagens.
aplicarImagensAtaquesDasFrutas();

// O catálogo de frutas continua disponível no sistema de frutas, sem painel separado.

const v7DespertarFrutaAnterior = window.despertarFrutaSegundaVida;
window.despertarFrutaSegundaVida = function despertarFrutaSegundaVidaV7() {
    const v7FrutaAntes = jogador.fruta;
    if (!v7FrutaAntes || v7FrutaAntes.despertada) return false;
    const v7NomeAntes = v7FrutaAntes.nome;
    const v7Resultado = typeof v7DespertarFrutaAnterior === 'function' ? v7DespertarFrutaAnterior() : false;
    if (!v7Resultado || !jogador.fruta) return v7Resultado;

    const v7FrutaAtual = jogador.fruta;
    const v7Original = v7FrutaAtual.nomeOriginal || v7NomeAntes;
    v7FrutaAtual.nomeOriginal = v7Original;
    const v7Dado = v7DadosFrutas[v7Original] || v7DadosFrutas[v7NomeAntes];
    if (v7Dado) {
        v7FrutaAtual.tipo = v7Dado.tipo;
        v7FrutaAtual.ataquesDespertados = v7Dado.ataques;
        v7FrutaAtual.nomeV2 = v7Dado.nomeV2;
    }

    // A camada antiga concedia +25 pontos de poder-base de uma vez. Reduzo esse
    // bônus legado para +8 para que a segunda vida seja forte, sem explodir o balanceamento.
    jogador.poderBase = Math.max(10, Number(jogador.poderBase || 10) - 17);

    if (!ehGomuNika(v7FrutaAtual)) {
        v7FrutaAtual.nome = v7FrutaAtual.nomeV2 || `${v7Original} • Despertada V2`;
        v7FrutaAtual.despertada = true;
        v7FrutaAtual.poder = Math.round(Number(v7FrutaAtual.poder || 0) * 1.15);
        logBatalha(`✨ DESPERTAR V2: ${v7Original} alcançou uma nova fase. Os golpes despertados agora estão disponíveis.`);
    }

    atualizarCartaz();
    return true;
};

// ------------------------------------------------------------------------
// V7.05: COOLDOWN VERDADEIRO, DANO DE ALIADOS E PROGRESSO DE SKYPIEA
// ------------------------------------------------------------------------

// `1` era consumido pelo turno do próprio contra-ataque, zerando na hora.
// Com `2`, o movimento fica bloqueado durante o próximo turno do jogador.
window.aplicarCooldownDoGolpe = function aplicarCooldownDoGolpeV7(golpe) {
    estado.cooldownsAtaques[chaveDoGolpe(golpe)] = 2;
};

const v7AtaqueAliadoAnterior = window.usarAtaqueDoAliado;
window.usarAtaqueDoAliado = function usarAtaqueDoAliadoV7(index) {
    const v7Boss = estado.bossAtivo;
    const v7Aliado = jogador.aliados[index];
    if (!v7Boss || !v7Aliado || estado.ataqueEmAndamento || estado.aliadoAtacou || estado.bossHP <= 0) return;
    if (Number(v7Aliado.cooldown || 0) > 0) {
        logBatalha(`${v7Aliado.nome} está em cooldown. Espere 1 turno.`);
        return;
    }

    estado.ataqueEmAndamento = true;
    estado.aliadoAtacou = true;
    v7Aliado.ataqueUsadoNaRodada = true;
    v7Aliado.cooldown = 2;
    v7Aliado.haki = v7Aliado.haki || { obs: 0, arm: 0 };

    let v7Dano = 5 + Math.sqrt(Math.max(0, Number(v7Aliado.poder || 0))) * 6.5;
    if (v7Aliado.fruta) v7Dano += Math.sqrt(Math.max(0, Number(v7Aliado.fruta.poder || 0))) * 2.4;
    v7Dano += Math.sqrt(Math.max(0, Number(v7Aliado.haki.arm || 0))) * 1.2;
    v7Dano += (v7Aliado.estilos || []).length * 2;
    if (v7Boss.haki?.arm || v7Boss.haki?.armamento || v7Boss.hakiArmamento) v7Dano *= 0.90;
    if (v7Boss.resistenciaDano && v7Boss.resistenciaDano < 1) v7Dano *= v7Boss.resistenciaDano;
    v7Dano = Math.max(1, Math.round(v7Dano));
    estado.bossHP = Math.max(0, estado.bossHP - v7Dano);
    atualizarBarrasHP();
    logBatalha(`👥 ${v7Aliado.nome} atacou e causou ${v7Dano} de dano${v7Aliado.fruta ? ` com ${v7Aliado.fruta.nome}` : ''}.`);

    if (estado.bossHP <= 0) {
        vencerBoss();
        return;
    }

    const v7Mults = window.calcularMultiplicadoresCombate();
    setTimeout(() => window.contraAtaqueBoss(v7Mults.multBoss), 650);
};

// Haki de aliados é utilizado na ficha e melhora o ataque; não vira bônus
// global gratuito de milhares de pontos de poder.
function v7NormalizarAliado(aliado) {
    aliado.haki = aliado.haki || { obs: 0, arm: 0 };
    aliado.haki.obs = Number(aliado.haki.obs || aliado.hakiObs || 0);
    aliado.haki.arm = Number(aliado.haki.arm || aliado.hakiArm || 0);
    aliado.estilos = Array.isArray(aliado.estilos) ? aliado.estilos : [];
    aliado.estilosRecusados = Array.isArray(aliado.estilosRecusados) ? aliado.estilosRecusados : [];
    aliado.hakiRecusas = aliado.hakiRecusas || { obs: false, arm: false };
    return aliado;
}

// ------------------------------------------------------------------------
// PERSONALIZAR FOTOS DOS ALIADOS:
// Preencha o valor da pessoa com uma URL direta ou caminho relativo.
// Exemplo: 'Mestre das Panelas': 'imagens/aliados/mestre-das-panelas.png'
// Os nomes precisam ser iguais aos exibidos nos cartões da tripulação.
const IMAGENS_ALIADOS = {
    'Mestre das Panelas': 'https://static.wikia.nocookie.net/onepiece/images/4/42/Wanze_Digitally_Colored_Manga.png/revision/latest?cb=20211117214519',
    'Caçadora de Tesouros': 'https://static.wikia.nocookie.net/onepiece/images/2/24/Gol_D._Roger_Anime_Infobox.png/revision/latest?cb=20240727163729&path-prefix=pt',
    'Atirador Desastrado': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nv_r2S6UWdJiBPYKfkLxnmR0v0BgjECjEQGrriL5JagY1xyGEq1Vf9I&s=10',
    'Espadachim Perdido': 'https://i.pinimg.com/1200x/fd/94/09/fd94091c2805db9f429cf6c36e70f8f4.jpg',
    'Médica Improvisada': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JrX-DJL3RoIuATPk148HmXVXMt0NVjAZwd4Mr1GZxYzebfd1Zxca1lQR&s=10',
    'Cozinheiro Rabugento': 'https://nectar.empregare.com/wp-content/uploads/2023/10/Cozinheiro.jpg',
    'Navegador de Quinta': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScocDcJ6Fq9f62V_O64DwnGrQFNCYH3t4WOqs1H_YSRJFu79V1akTZiijp&s=10',
    'Mecânico do Porto': 'https://st.depositphotos.com/3917667/54936/i/110/depositphotos_549360598-stock-photo-collage-with-young-serious-man.jpg',
    'Carpinteiro de Water 7': 'https://i.ytimg.com/vi/cJ2jAbuReTc/sddefault.jpg',
    'Gigante do Novo Mundo': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Ethan_Crough%2C_male_dwarf.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
    'Homem-Peixe do Farol': 'https://i.ytimg.com/vi/YGrJYSkjDCk/sddefault.jpg'
};

// V7.06: ALIADOS COM FRUTAS, HAKI E ESTILOS (ACEITAÇÃO DE 40%)
// ------------------------------------------------------------------------

window.montarListaAliados = function montarListaAliadosV7() {
    const v7Lista = el('lista-aliados');
    if (!v7Lista) return;
    v7Lista.innerHTML = '';
    if (el('contador-tripulacao')) el('contador-tripulacao').textContent = `Tripulação: ${jogador.aliados.length}`;

    if (!jogador.aliados.length) {
        v7Lista.innerHTML = '<div class="empty-card">Nenhum aliado ainda. Procure alguém no porto.</div>';
        return;
    }

    jogador.aliados.forEach((v7AliadoRaw, v7Index) => {
        const v7Aliado = v7NormalizarAliado(v7AliadoRaw);
        const v7Card = document.createElement('article');
        v7Card.className = 'ally-card';
        const v7Avatar = document.createElement('img');
        v7Avatar.className = 'ally-avatar';
        // IMAGE ALIADO: substitua a URL deste avatar ou crie um mapa por personagem.
        v7Avatar.src = (IMAGENS_ALIADOS[v7Aliado.nome] && IMAGENS_ALIADOS[v7Aliado.nome].trim()) || v7Aliado.img || img(v7Aliado.raca === 'Gigante' ? 'GIGANTE' : v7Aliado.nome.split(' ')[0].toUpperCase(), '263c4e', 200, 200);
        v7Avatar.alt = v7Aliado.nome;

        const v7Body = document.createElement('div');
        v7Body.className = 'ally-body';
        const v7EstilosTexto = v7Aliado.estilos.length ? v7Aliado.estilos.join(', ') : 'Nenhum estilo ensinado';
        const v7FrutaTexto = v7Aliado.fruta ? v7Aliado.fruta.nome : v7Aliado.recusouFrutas ? 'Recusa fruta permanentemente' : 'Sem fruta';
        v7Body.innerHTML = `<div class="ally-name">${v7Aliado.nome}</div>
            <div class="ally-meta">Raça: ${v7Aliado.raca}<br>Poder: +${Math.round(v7Aliado.poder || 0)}<br>
            Fruta: ${v7FrutaTexto}<br>Haki Obs.: ${v7Aliado.haki.obs} • Arm.: ${v7Aliado.haki.arm}<br>
            Estilos: ${v7EstilosTexto}</div>`;

        if (!v7Aliado.fruta && !v7Aliado.recusouFrutas) {
            const v7BtnFruta = document.createElement('button');
            v7BtnFruta.className = 'btn-acao';
            v7BtnFruta.textContent = 'OFERECER FRUTA (40%)';
            aplicarImagemBotao(v7BtnFruta, img('OFERECER+FRUTA', '3b5840', 120, 90));
            v7BtnFruta.disabled = jogador.inventario.length === 0;
            v7BtnFruta.onclick = () => window.abrirBauFrutasParaAliado(v7Index);
            v7Body.appendChild(v7BtnFruta);
        }

        const v7BtnObs = document.createElement('button');
        v7BtnObs.className = 'btn-acao';
        v7BtnObs.textContent = v7Aliado.hakiRecusas.obs ? 'RECUSOU OBSERVAÇÃO' : v7Aliado.haki.obs > 0 ? 'OBSERVAÇÃO ENSINADA' : 'ENSINAR HAKI OBS. (40%)';
        v7BtnObs.disabled = v7Aliado.haki.obs > 0 || v7Aliado.hakiRecusas.obs;
        aplicarImagemBotao(v7BtnObs, img('ENSINAR+OBS', '2f503d', 120, 90));
        v7BtnObs.onclick = () => window.ensinarHakiAliado(v7Index, 'obs');
        v7Body.appendChild(v7BtnObs);

        const v7BtnArm = document.createElement('button');
        v7BtnArm.className = 'btn-acao';
        v7BtnArm.textContent = v7Aliado.hakiRecusas.arm ? 'RECUSOU ARMAMENTO' : v7Aliado.haki.arm > 0 ? 'ARMAMENTO ENSINADO' : 'ENSINAR HAKI ARM. (40%)';
        v7BtnArm.disabled = v7Aliado.haki.arm > 0 || v7Aliado.hakiRecusas.arm;
        aplicarImagemBotao(v7BtnArm, img('ENSINAR+ARM', '4b3b2a', 120, 90));
        v7BtnArm.onclick = () => window.ensinarHakiAliado(v7Index, 'arm');
        v7Body.appendChild(v7BtnArm);

        const v7BtnEstilo = document.createElement('button');
        v7BtnEstilo.className = 'btn-acao';
        v7BtnEstilo.textContent = 'ENSINAR ESTILO (40%)';
        aplicarImagemBotao(v7BtnEstilo, img('ENSINAR+ESTILO', '26343d', 120, 90));
        v7BtnEstilo.onclick = () => window.abrirCatalogoEstilos('ensinar', v7Index);
        v7Body.appendChild(v7BtnEstilo);

        v7Card.append(v7Avatar, v7Body);
        v7Lista.appendChild(v7Card);
    });
};

window.ensinarHakiAliado = function ensinarHakiAliadoV7(aliadoIndex, tipo) {
    const v7Aliado = jogador.aliados[aliadoIndex];
    if (!v7Aliado || !['obs', 'arm'].includes(tipo)) return;
    v7NormalizarAliado(v7Aliado);
    if (v7Aliado.haki[tipo] > 0 || v7Aliado.hakiRecusas[tipo]) return;

    if (Math.random() < 0.40) {
        v7Aliado.haki[tipo] = 2;
        v7Aliado.poder = Number(v7Aliado.poder || 0) + 6;
        log(`🌟 ${v7Aliado.nome} aceitou seu treinamento de Haki da ${tipo === 'obs' ? 'Observação' : 'Armamento'}! O poder aumentou.`);
    } else {
        v7Aliado.hakiRecusas[tipo] = true;
        log(`😅 ${v7Aliado.nome} recusou aprender Haki da ${tipo === 'obs' ? 'Observação' : 'Armamento'}. Essa escolha é permanente para esse tipo de Haki.`);
    }
    window.atualizarPoder();
    window.montarListaAliados();
    window.montarPainelAliadosBatalha();
    window.atualizarCartaz();
};

window.ensinarEstiloAliado = function ensinarEstiloAliadoV7(aliadoIndex, estiloNome) {
    const v7Aliado = jogador.aliados[aliadoIndex];
    const v7Estilo = estilos.find(v7Item => v7Item.nome === estiloNome);
    if (!v7Aliado || !v7Estilo) return;
    v7NormalizarAliado(v7Aliado);
    if (v7Aliado.estilos.includes(estiloNome) || v7Aliado.estilosRecusados.includes(estiloNome)) return;

    if (Math.random() < 0.40) {
        v7Aliado.estilos.push(estiloNome);
        v7Aliado.poder = Number(v7Aliado.poder || 0) + 8;
        v7Aliado.maestriaEstilos = v7Aliado.maestriaEstilos || {};
        v7Aliado.maestriaEstilos[estiloNome] = 0;
        log(`⚔️ ${v7Aliado.nome} aceitou aprender ${estiloNome}! Seu poder aumentou.`);
    } else {
        v7Aliado.estilosRecusados.push(estiloNome);
        log(`🙅 ${v7Aliado.nome} recusou aprender ${estiloNome}. Ele não será pressionado a repetir a escolha.`);
    }

    window.atualizarPoder();
    window.montarListaAliados();
    window.montarPainelAliadosBatalha();
    window.atualizarCartaz();
    window.abrirCatalogoEstilos('ensinar', aliadoIndex);
};

// ------------------------------------------------------------------------
// V7.07: BAÚ DO NAVIO COM FILTROS DE NOME, TIPO E PODER
// A lista antiga embaixo da tripulação é mantida vazia e escondida.
// ------------------------------------------------------------------------

estado.v7BauAberto = false;
estado.v7AliadoAlvoFruta = null;

window.montarInventarioFrutas = function montarInventarioFrutasV7() {
    const v7ListaAntiga = el('lista-inventario-frutas');
    if (v7ListaAntiga) {
        v7ListaAntiga.innerHTML = '';
        v7ListaAntiga.hidden = true;
        v7ListaAntiga.style.display = 'none';
    }
    const v7PainelBau = el('painel-bau-frutas');
    if (!v7PainelBau) return;
    v7PainelBau.hidden = !estado.v7BauAberto;
    if (estado.v7BauAberto) window.renderizarBauFrutas();
};

window.abrirAliados = function abrirAliadosV7() {
    estado.v7BauAberto = false;
    estado.v7AliadoAlvoFruta = null;
    window.montarListaAliados();
    window.montarInventarioFrutas();
    mudarTela('tela-aliados');
};

window.abrirBauFrutas = function abrirBauFrutasV7() {
    estado.v7BauAberto = true;
    estado.v7AliadoAlvoFruta = null;
    window.montarInventarioFrutas();
    const painel = el('painel-bau-frutas');
    if (painel) painel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

window.abrirBauFrutasParaAliado = function abrirBauFrutasParaAliadoV7(aliadoIndex) {
    const aliado = jogador.aliados[aliadoIndex];
    if (!aliado || aliado.fruta || aliado.recusouFrutas) {
        log(`${aliado?.nome || 'Esse aliado'} não pode receber outra fruta.`);
        return;
    }
    if (!jogador.inventario.length) {
        log('🍈 O baú está vazio. Primeiro encontre e guarde uma fruta no navio.');
        return;
    }
    estado.v7BauAberto = true;
    estado.v7AliadoAlvoFruta = aliadoIndex;
    window.montarInventarioFrutas();
};

window.renderizarBauFrutas = function renderizarBauFrutasV7() {
    const v7Painel = el('painel-bau-frutas');
    if (!v7Painel) return;
    v7Painel.hidden = false;
    v7Painel.innerHTML = `
        <div class="v7-bau-head">
            <h3>BAÚ DO NAVIO • ${jogador.inventario.length} FRUTA(S)</h3>
            <p>Pesquise por nome, tipo (Logia, Paramecia Especial, Zoan...) ou poder mínimo.</p>
            <div class="v7-filter-grid">
                <label>Pesquisar nome
                    <input id="v7-bau-busca" type="search" placeholder="Ex.: Mera, Mochi, Gomu...">
                </label>
                <label>Tipo de fruta
                    <select id="v7-bau-tipo">
                        <option value="Todos">Todos os tipos</option>
                        <option value="Logia">Logia</option>
                        <option value="Paramecia">Paramecia</option>
                        <option value="Paramecia Especial">Paramecia Especial</option>
                        <option value="Zoan">Zoan</option>
                        <option value="Zoan Mítica">Zoan Mítica</option>
                    </select>
                </label>
                <label>Poder mínimo
                    <input id="v7-bau-poder" type="number" min="0" step="1" value="0">
                </label>
            </div>
            <div class="v7-bau-target">${estado.v7AliadoAlvoFruta == null ? 'Selecione um aliado em um card para oferecer uma fruta, ou use os botões individuais abaixo.' : `Destino: ${jogador.aliados[estado.v7AliadoAlvoFruta]?.nome || 'aliado'}`}</div>
        </div>
        <div id="v7-bau-resultados" class="fruit-inventory"></div>
        <button class="btn-acao" data-img="https://placehold.co/120x90/2e3d4e/ffffff?text=FECHAR" onclick="fecharBauFrutas()">FECHAR BAÚ</button>
    `;

    const v7Busca = el('v7-bau-busca');
    const v7Tipo = el('v7-bau-tipo');
    const v7Poder = el('v7-bau-poder');
    const v7Refiltrar = () => window.renderizarResultadosBauFrutas({
        busca: v7Busca.value.trim().toLowerCase(),
        tipo: v7Tipo.value,
        poder: Math.max(0, Number(v7Poder.value || 0))
    });
    v7Busca.addEventListener('input', v7Refiltrar);
    v7Tipo.addEventListener('change', v7Refiltrar);
    v7Poder.addEventListener('input', v7Refiltrar);
    v7Refiltrar();
    renderizarImagensDosBotoes();
};

window.renderizarResultadosBauFrutas = function renderizarResultadosBauFrutasV7(filtro = {}) {
    const v7Resultados = el('v7-bau-resultados');
    if (!v7Resultados) return;
    v7Resultados.innerHTML = '';

    const v7Filtradas = jogador.inventario.map((v7Fruta, v7Index) => ({ fruta: v7Fruta, index: v7Index }))
        .filter(v7Item => {
            const v7Nome = String(v7Item.fruta.nome || '').toLowerCase();
            const v7Tipo = String(v7Item.fruta.tipo || 'Paramecia');
            return v7Nome.includes(filtro.busca || '')
                && (filtro.tipo === 'Todos' || !filtro.tipo || v7Tipo === filtro.tipo)
                && Number(v7Item.fruta.poder || 0) >= Number(filtro.poder || 0);
        });

    if (!v7Filtradas.length) {
        v7Resultados.innerHTML = '<div class="empty-card">Nenhuma fruta corresponde aos filtros. Tente outro tipo, nome ou poder.</div>';
        return;
    }

    v7Filtradas.forEach(({ fruta: v7Fruta, index: v7Index }) => {
        const v7Card = document.createElement('article');
        v7Card.className = 'inventory-card v7-fruit-card';
        const v7Img = document.createElement('img');
        v7Img.className = 'inventory-fruit-img';
        // IMAGE FRUTA NO BAÚ: substitua a URL `v7Fruta.img` para cada fruta do catálogo.
        v7Img.src = v7Fruta.img;
        v7Img.alt = v7Fruta.nome;
        const v7Info = document.createElement('div');
        v7Info.innerHTML = `<div class="inventory-name">${v7Fruta.nome}</div>
            <div class="inventory-meta">${v7Fruta.tipo || 'Paramecia'} • ${v7Fruta.raridade} • Poder +${v7Fruta.poder}${v7Fruta.despertada ? ' • DESPERTADA V2' : ''}</div>`;
        v7Card.append(v7Img, v7Info);

        const v7Alvos = estado.v7AliadoAlvoFruta == null
            ? jogador.aliados.map((v7A, v7I) => ({ aliado: v7A, index: v7I })).filter(v7Item => !v7Item.aliado.fruta && !v7Item.aliado.recusouFrutas)
            : [{ aliado: jogador.aliados[estado.v7AliadoAlvoFruta], index: estado.v7AliadoAlvoFruta }].filter(v7Item => v7Item.aliado);

        if (!v7Alvos.length) {
            const v7Vazio = document.createElement('small');
            v7Vazio.textContent = 'Não há aliado disponível para receber esta fruta.';
            v7Card.appendChild(v7Vazio);
        } else {
            v7Alvos.forEach(v7Alvo => {
                if (v7Alvo.aliado.fruta || v7Alvo.aliado.recusouFrutas) return;
                const v7Btn = document.createElement('button');
                v7Btn.className = 'btn-acao';
                v7Btn.textContent = `OFERECER A ${v7Alvo.aliado.nome} (40%)`;
                aplicarImagemBotao(v7Btn, img('OFERECER+FRUTA', '3b5840', 120, 90));
                v7Btn.onclick = () => window.resolverOfertaFrutaV7(v7Alvo.index, v7Index);
                v7Card.appendChild(v7Btn);
            });
        }
        v7Resultados.appendChild(v7Card);
    });
};

window.fecharBauFrutas = function fecharBauFrutasV7() {
    estado.v7BauAberto = false;
    estado.v7AliadoAlvoFruta = null;
    window.montarInventarioFrutas();
};

window.resolverOfertaFrutaV7 = function resolverOfertaFrutaV7(aliadoIndex, inventarioIndex) {
    const v7Aliado = jogador.aliados[aliadoIndex];
    const v7Fruta = jogador.inventario[inventarioIndex];
    if (!v7Aliado || !v7Fruta) return;
    if (v7Aliado.fruta || v7Aliado.recusouFrutas) {
        log(`${v7Aliado.nome} não pode receber outra fruta.`);
        return;
    }

    v7NormalizarAliado(v7Aliado);
    if (Math.random() < 0.40) {
        v7Aliado.fruta = { ...v7Fruta };
        v7Aliado.aceitouFruta = true;
        v7Aliado.poder = Number(v7Aliado.poder || 0) + Math.max(3, Math.round(Number(v7Fruta.poder || 0) * 0.25));
        jogador.inventario.splice(inventarioIndex, 1);
        log(`🍈 ${v7Aliado.nome} aceitou a ${v7Fruta.nome}! O poder do aliado aumentou graças à fruta.`);
        estado.v7BauAberto = true;
        estado.v7AliadoAlvoFruta = null;
    } else {
        v7Aliado.recusouFrutas = true;
        log(`🙅 ${v7Aliado.nome} recusou a ${v7Fruta.nome}. Ele não aceitará outra fruta no futuro, e a fruta ficou guardada no navio.`);
        estado.v7BauAberto = true;
    }

    window.atualizarPoder();
    window.montarListaAliados();
    window.montarInventarioFrutas();
    window.atualizarCartaz();
};

window.resolverOfertaFruta = function resolverOfertaFrutaV7Compat(aliadoIndex, inventarioIndex) {
    return window.resolverOfertaFrutaV7(aliadoIndex, inventarioIndex);
};

window.abrirEscolhaFrutaParaAliado = function abrirEscolhaFrutaParaAliadoV7(aliadoIndex) {
    return window.abrirBauFrutasParaAliado(aliadoIndex);
};

window.oferecerFrutaQualquerAliado = function oferecerFrutaQualquerAliadoV7(inventarioIndex) {
    estado.v7BauAberto = true;
    estado.v7AliadoAlvoFruta = null;
    window.montarInventarioFrutas();
};

// ------------------------------------------------------------------------
// V7.08: VÁRIOS ESTILOS APRENDIDOS, SÓ UM EQUIPADO, MAESTRIA SEPARADA
// IMAGE ESTILOS: alterar `.img` de cada item em `estilos`; golpes têm
// imagens independentes no objeto `v7GolpesPorEstilo`.
// ------------------------------------------------------------------------

window.abrirCatalogoEstilos = function abrirCatalogoEstilosV7(modo = 'equipar', aliadoIndex = null) {
    estado.v7ModoCatalogoEstilos = modo;
    estado.v7AliadoAlvoEstilo = aliadoIndex;
    const input = el('filtro-estilos-jogador');
    if (input) input.value = '';
    window.renderizarCatalogoEstilos();
    mudarTela('tela-estilos');
};

window.renderizarCatalogoEstilos = function renderizarCatalogoEstilosV7() {
    const v7Catalogo = el('catalogo-estilos-jogador');
    if (!v7Catalogo) return;
    const v7Modo = estado.v7ModoCatalogoEstilos || 'equipar';
    const v7AlvoIndex = estado.v7AliadoAlvoEstilo;
    const v7Filtro = (el('filtro-estilos-jogador')?.value || '').trim().toLowerCase();
    v7Catalogo.innerHTML = '';

    if (v7Modo === 'ensinar') {
        const v7Aliado = jogador.aliados[v7AlvoIndex];
        if (!v7Aliado) {
            v7Catalogo.innerHTML = '<div class="empty-card">Aliado não encontrado.</div>';
            return;
        }
        v7NormalizarAliado(v7Aliado);
    }

    const v7Lista = estilos.filter(v7Estilo => v7Estilo.nome.toLowerCase().includes(v7Filtro));
    if (!v7Lista.length) {
        v7Catalogo.innerHTML = '<div class="empty-card">Nenhum estilo corresponde à pesquisa.</div>';
        return;
    }

    v7Lista.forEach(v7Estilo => {
        const v7Card = document.createElement('article');
        v7Card.className = 'style-catalog-card';
        const v7Image = document.createElement('img');
        v7Image.src = v7Estilo.img;
        v7Image.alt = v7Estilo.nome;
        const v7Body = document.createElement('div');
        v7Body.className = 'style-catalog-body';

        if (v7Modo === 'ensinar') {
            const v7Aliado = jogador.aliados[v7AlvoIndex];
            const v7JaTem = v7Aliado.estilos.includes(v7Estilo.nome);
            const v7Recusou = v7Aliado.estilosRecusados.includes(v7Estilo.nome);
            v7Body.innerHTML = `<h3>${v7Estilo.nome}</h3><p>${v7Estilo.descricao}</p><p>Aliado: ${v7Aliado.nome} • Poder atual: ${Math.round(v7Aliado.poder)}</p><p>Chance de aceitar: 40%</p>`;
            const v7Btn = document.createElement('button');
            v7Btn.className = 'btn-acao';
            v7Btn.textContent = v7JaTem ? 'JÁ APRENDEU' : v7Recusou ? 'RECUSADO PERMANENTEMENTE' : `ENSINAR ${v7Estilo.nome.toUpperCase()}`;
            v7Btn.disabled = v7JaTem || v7Recusou;
            aplicarImagemBotao(v7Btn, img('ENSINAR+ESTILO', '26343d', 120, 90));
            v7Btn.onclick = () => window.ensinarEstiloAliado(v7AlvoIndex, v7Estilo.nome);
            v7Body.appendChild(v7Btn);
        } else {
            const v7Aprendido = Boolean(jogador.estilosAprendidos[v7Estilo.nome]);
            const v7Maestria = v7MaestriaDoEstilo(v7Estilo.nome);
            const v7FormaAtual = v7Estilo.nome === jogador.estiloLuta ? (obterTransformacaoEstiloAtual()?.nome || 'Base') : 'Não equipado';
            v7Body.innerHTML = `<h3>${v7Estilo.nome}</h3><p>${v7Estilo.descricao}</p><p>Maestria guardada: <strong>${v7Maestria}</strong> • ${v7Aprendido ? `Aprendido • ${v7FormaAtual}` : 'Ainda não aprendido'}</p>`;
            const v7Btn = document.createElement('button');
            v7Btn.className = 'btn-acao';

            if (v7Modo === 'mestre' && !v7Aprendido) {
                v7Btn.textContent = `APRENDER ${v7Estilo.nome.toUpperCase()}`;
                v7Btn.disabled = Boolean(v7Estilo.bloqueadoComFruta && jogador.fruta);
                v7Btn.onclick = () => window.aprenderEstiloJogador(v7Estilo.nome);
            } else if (v7Aprendido) {
                v7Btn.textContent = v7Estilo.nome === jogador.estiloLuta ? 'EQUIPADO' : `EQUIPAR ${v7Estilo.nome.toUpperCase()}`;
                v7Btn.disabled = v7Estilo.nome === jogador.estiloLuta;
                v7Btn.onclick = () => window.equiparEstiloJogador(v7Estilo.nome);
            } else {
                v7Btn.textContent = 'APRENDA AO ENCONTRAR UM MESTRE';
                v7Btn.disabled = true;
            }
            aplicarImagemBotao(v7Btn, v7Estilo.img);
            v7Body.appendChild(v7Btn);
        }

        v7Card.append(v7Image, v7Body);
        v7Catalogo.appendChild(v7Card);
    });
    renderizarImagensDosBotoes();
};

window.aprenderEstiloJogador = function aprenderEstiloJogadorV7(nome) {
    const v7Estilo = estilos.find(v7Item => v7Item.nome === nome);
    if (!v7Estilo) return;
    if (v7Estilo.bloqueadoComFruta && jogador.fruta) {
        log('Karatê dos Homens-Peixe fica bloqueado para usuários de Akuma no Mi.');
        return;
    }

    jogador.estilosAprendidos[nome] = true;
    if (jogador.maestriaEstilos[nome] == null) jogador.maestriaEstilos[nome] = 0;
    jogador.estiloLuta = nome;
    jogador.maestriaEstilo = v7MaestriaDoEstilo(nome);
    jogador.formaEstiloAtual = 'base';
    jogador.despertaresEstilo[nome] = jogador.despertaresEstilo[nome] || { base: true };
    window.atualizarPoder();
    window.atualizarCartaz();
    window.montarPainelAtaques();
    log(`⚔️ Você aprendeu ${nome} e o equipou. Treinamentos de outros estilos e suas maestrias permanecem guardados.`);
    // O minigame continua valendo como confirmação de treinamento, mas não concede maestria de boss.
    if (typeof abrirMinigameEstilo === 'function') abrirMinigameEstilo();
    else mudarTela('tela-ilha');
};

window.equiparEstiloJogador = function equiparEstiloJogadorV7(nome) {
    if (!jogador.estilosAprendidos[nome]) {
        log(`${nome} ainda não foi aprendido. Procure um mestre primeiro.`);
        return;
    }
    jogador.estiloLuta = nome;
    jogador.maestriaEstilo = v7MaestriaDoEstilo(nome);
    jogador.formaEstiloAtual = 'base';
    window.atualizarPoder();
    window.atualizarCartaz();
    window.montarPainelAtaques();
    log(`⚔️ ${nome} equipado. Maestria salva: ${v7MaestriaDoEstilo(nome)}. Os outros estilos continuam no inventário de estilos.`);
    window.renderizarCatalogoEstilos();
};

window.procurarEstilo = function procurarEstiloV7() {
    const v7Ilha = ilhaAtual();
    if (!v7Ilha) return;
    if (v7Ilha.estiloBuscaDisponivel === false) {
        log('Você já procurou mestre nesta ilha. Os estilos que aprendeu continuam disponíveis no botão MEUS ESTILOS.');
        return;
    }
    v7Ilha.estiloBuscaDisponivel = false;
    window.abrirCatalogoEstilos('mestre');
    log('⚔️ Você encontrou mestres pela ilha. Pesquise o estilo desejado e escolha APRENDER. Um estilo diferente não apaga a maestria dos demais.');
};

// Painel de estilos: maestria individual, estágio e escolha equipável.
window.montarFormasEstilo = function montarFormasEstiloV7() {
    const v7PainelAtaques = el('painel-ataques');
    if (!v7PainelAtaques || !jogador.estiloLuta) return;
    let v7Area = el('painel-formas-estilo');
    if (!v7Area) {
        v7Area = document.createElement('div');
        v7Area.id = 'painel-formas-estilo';
        v7Area.className = 'style-form-grid';
        const v7AreaFruta = el('painel-formas-fruta');
        (v7AreaFruta || v7PainelAtaques).parentElement.insertBefore(v7Area, (v7AreaFruta || v7PainelAtaques).nextSibling);
    }
    const v7Formas = transformacoesEstiloV5[jogador.estiloLuta];
    if (!v7Formas) {
        v7Area.hidden = true;
        return;
    }
    v7Area.hidden = false;
    v7Area.innerHTML = '';
    const v7Titulo = document.createElement('div');
    v7Titulo.className = 'attack-group-title';
    v7Titulo.textContent = `ESTILO EQUIPADO: ${jogador.estiloLuta} • MAESTRIA ${v7MaestriaDoEstilo()}`;
    v7Area.appendChild(v7Titulo);
    const v7Botoes = document.createElement('div');
    v7Botoes.className = 'fruit-form-buttons';

    v7GarantirDespertaresEstilo();
    Object.entries(v7Formas).forEach(([v7Chave, v7Forma]) => {
        const v7Desbloqueado = v7MaestriaDoEstilo() >= Number(v7Forma.req || 0);
        const v7Botao = document.createElement('button');
        v7Botao.className = 'btn-acao estilo-form-btn';
        v7Botao.textContent = `${v7Forma.nome} • ${v7Desbloqueado ? 'DESPERTADO' : `FALTA ${Number(v7Forma.req || 0) - v7MaestriaDoEstilo()} MAESTRIA`}`;
        aplicarImagemBotao(v7Botao, v7Forma.img);
        v7Botao.disabled = !v7Desbloqueado;
        if ((jogador.formaEstiloAtual || 'base') === v7Chave) v7Botao.classList.add('selecionado');
        v7Botao.onclick = () => {
            jogador.formaEstiloAtual = v7Chave;
            window.montarPainelAtaques();
            const v7FrutaForma = jogador.fruta?.formas?.[jogador.fruta.formaAtual || 'base'];
            logBatalha(v7FrutaForma && v7Chave !== 'base'
                ? `🔥⚔️ ${v7FrutaForma.nome} + ${v7Forma.nome} ativados ao mesmo tempo.`
                : `⚔️ Transformação de estilo ativada: ${v7Forma.nome}.`);
        };
        v7Botoes.appendChild(v7Botao);
    });
    v7Area.appendChild(v7Botoes);

    // Tekkai: passa o turno para sobreviver ao próximo ataque, com 90% DR.
    if (jogador.estiloLuta === 'Rokushiki' && v7MaestriaDoEstilo() >= 2 && estado.bossAtivo) {
        const v7Tekkai = document.createElement('button');
        v7Tekkai.className = 'btn-acao v7-tekkai-button';
        v7Tekkai.textContent = estado.tekkaiAtivo ? 'TEKKAI ATIVO • 90% DR' : 'USAR TEKKAI • PULAR TURNO, 90% DR';
        aplicarImagemBotao(v7Tekkai, img('TEKKAI+90+DR', '263949', 160, 100));
        v7Tekkai.disabled = estado.ataqueEmAndamento || estado.tekkaiAtivo || estado.bossHP <= 0;
        v7Tekkai.onclick = () => window.usarTekkaiV7();
        v7Area.appendChild(v7Tekkai);
    }
};

window.montarPainelDespertarEstiloV6 = function montarPainelDespertarEstiloV7NoOp() {
    // O painel atual é montado por montarFormasEstiloV7, usando maestria individual.
};

window.ataqueDisponivel = function ataqueDisponivelV7(golpe) {
    if (golpe?.tipo === 'estilo' || (golpe?.grupo && estilos.some(v7Estilo => v7Estilo.nome === golpe.grupo))) {
        return v7MaestriaDoEstilo(golpe.grupo || jogador.estiloLuta) >= Number(golpe.req || 0);
    }
    return jogador.maestria >= Number(golpe?.req || 0);
};

window.montarPainelAtaques = function montarPainelAtaquesV7() {
    const v7Painel = el('painel-ataques');
    if (!v7Painel) return;
    v7Painel.innerHTML = '';
    if (!estado.bossAtivo || estado.bossHP <= 0) {
        window.montarFormasEstilo();
        return;
    }

    if (typeof montarFormasGomu === 'function') montarFormasGomu();
    adicionarBotaoAtaque(v7Painel, {
        nome: 'Soco Básico', dano: 10, req: 0,
        img: (typeof IMAGEM_SOCO_BASICO === 'string' && IMAGEM_SOCO_BASICO.trim()) ? IMAGEM_SOCO_BASICO.trim() : 'https://i.pinimg.com/originals/2c/0d/c0/2c0dc0dec97a65dbc0e9506cc9939b38.gif', grupo: 'Base', tipo: 'base'
    });

    const v7EstiloEquipado = estilos.find(v7Estilo => v7Estilo.nome === jogador.estiloLuta);
    const v7FormaEstilo = jogador.formaEstiloAtual || 'base';
    const v7AtaquesEstilo = v7GolpesPorEstilo[jogador.estiloLuta]?.[v7FormaEstilo]
        || v7GolpesPorEstilo[jogador.estiloLuta]?.base
        || v7EstiloEquipado?.ataques
        || [];
    v7AtaquesEstilo.forEach(v7Golpe => adicionarBotaoAtaque(v7Painel, {
        ...v7Golpe,
        grupo: jogador.estiloLuta,
        tipo: 'estilo'
    }));

    if (jogador.fruta) {
        let v7AtaquesFruta = jogador.fruta.ataques || [];
        let v7GrupoFruta = jogador.fruta.nome;
        if (ehGomuNika(jogador.fruta) && jogador.fruta.formas) {
            const v7FormaFruta = jogador.fruta.formas[jogador.fruta.formaAtual || 'base'];
            if (v7FormaFruta) {
                v7AtaquesFruta = v7FormaFruta.ataques;
                v7GrupoFruta += ` • ${v7FormaFruta.nome}`;
            }
        } else if (jogador.fruta.despertada && jogador.fruta.ataquesDespertados?.length) {
            v7AtaquesFruta = jogador.fruta.ataquesDespertados;
            v7GrupoFruta += ' • DESPERTADA V2';
        }
        v7AtaquesFruta.forEach(v7Golpe => adicionarBotaoAtaque(v7Painel, {
            ...v7Golpe, grupo: v7GrupoFruta, tipo: 'fruta'
        }));
    }

    window.montarFormasEstilo();
    renderizarImagensDosBotoes();
};

const v7VencerBossAnterior = window.vencerBoss;
window.vencerBoss = function vencerBossV7() {
    const v7EstiloVencendo = jogador.estiloLuta;
    const v7MaestriaAntes = Number(jogador.maestria || 0);
    const v7EraCeo = typeof v4EstaNoCeu === 'function' && v4EstaNoCeu();
    const v7BossCeoAntes = v7EraCeo ? (typeof bossAtualReal === 'function' ? bossAtualReal() : estado.bossAtivo) : null;
    const v7IndiceCeoAntes = Number(estado.skypieaBossProgresso ?? estado.bossIndex ?? 0);

    if (typeof v7VencerBossAnterior === 'function') v7VencerBossAnterior();

    if (v7EstiloVencendo && Number(jogador.maestria || 0) > v7MaestriaAntes) {
        jogador.estilosAprendidos[v7EstiloVencendo] = true;
        jogador.maestriaEstilos[v7EstiloVencendo] = v7MaestriaDoEstilo(v7EstiloVencendo) + 1;
        jogador.maestriaEstilo = v7MaestriaDoEstilo(v7EstiloVencendo);
        v7GarantirDespertaresEstilo();
        logBatalha(`🏆 Maestria de ${v7EstiloVencendo}: ${v7MaestriaDoEstilo(v7EstiloVencendo)}. Só o estilo equipado recebeu este ponto.`);
    }

    // Enel nunca reinicia a sequência para Ohm. O índice do céu é persistido
    // de forma independente da progressão global do mapa.
    if (v7EraCeo && v7BossCeoAntes) {
        const v7TotalCeo = typeof v4SkyBosses !== 'undefined' ? v4SkyBosses.length : 5;
        const v7NovoProgresso = Math.min(v7TotalCeo, v7IndiceCeoAntes + 1);
        estado.skypieaBossProgresso = Math.max(Number(estado.skypieaBossProgresso || 0), v7NovoProgresso);
        if (v7BossCeoAntes.nome === 'Enel' || estado.skypieaBossProgresso >= v7TotalCeo) {
            estado.skypieaBossProgresso = v7TotalCeo;
            estado.skypieaConcluida = true;
            estado.skypieaAtivo = false;
            if (ilhas[estado.ilhaIndex]) ilhas[estado.ilhaIndex].options.skyfallConcluido = true;
            estado.bossIndex = 0;
            if (typeof v4SalvarProgressoBoss === 'function') v4SalvarProgressoBoss();
        } else {
            estado.bossIndex = estado.skypieaBossProgresso;
        }
    }

    window.atualizarPoder();
    window.atualizarCartaz();
    window.montarPainelAtaques();
    window.montarListaAliados();
    window.atualizarMapRoute();
};

// Tekkai consome a ação do jogador, não é uma transformação passiva.
window.usarTekkaiV7 = function usarTekkaiV7() {
    if (jogador.estiloLuta !== 'Rokushiki' || v7MaestriaDoEstilo() < 2 || !estado.bossAtivo || estado.bossHP <= 0) {
        logBatalha('Tekkai requer Rokushiki equipado e 2 de maestria nesse estilo.');
        return;
    }
    if (estado.ataqueEmAndamento || estado.tekkaiAtivo) return;
    estado.tekkaiAtivo = true;
    estado.ataqueEmAndamento = true;
    const v7Mult = window.calcularMultiplicadoresCombate().multBoss;
    logBatalha('🛡️ Você sacrificou seu turno para usar Tekkai. O próximo golpe recebido terá 90% de redução.');
    window.montarPainelAtaques();
    setTimeout(() => window.contraAtaqueBoss(v7Mult), 650);
};

const v7ContraAtaqueAnterior = window.contraAtaqueBoss;
window.contraAtaqueBoss = function contraAtaqueBossV7(multBoss = 1) {
    const v7TekkaiEstavaAtivo = Boolean(estado.tekkaiAtivo);
    if (typeof v7ContraAtaqueAnterior === 'function') v7ContraAtaqueAnterior(multBoss);
    if (v7TekkaiEstavaAtivo) {
        estado.tekkaiAtivo = false;
        window.montarPainelAtaques();
        if (el('log-batalha') && jogador.vida > 0) logBatalha('🛡️ Tekkai terminou. A proteção de 90% era válida por um único ataque.');
    }
};

// ------------------------------------------------------------------------
// V7.09: CORRIGE A FUGA DE KATAKURI E O AVANÇO DE SKYPIEA
// ------------------------------------------------------------------------

window.prepararFugaDepoisDeKatakuri = function prepararFugaDepoisDeKatakuriV7() {
    el('titulo-evento').textContent = 'FUGA DE TOTTO LAND';
    el('nome-evento').textContent = 'Você derrotou Katakuri, agora corre.';
    el('desc-evento').textContent = 'A luta acabou. Fuja para concluir o evento e destravar a rota.';
    // IMAGE EVENTO: troque este helper img() para substituir a imagem da fuga.
    el('img-evento').src = img('FUGA+TOTTO+LAND', '522c3b', 600, 420);
    el('botoes-evento').innerHTML = '';
    const v7Botao = criarBotaoEvento('FUGIR PELA VIDA', img('FUGIR', '5b1d25'), () => {
        const v7Ilha = ilhas[estado.ilhaIndex];
        if (v7Ilha) v7Ilha.options.eventoResolvido = true;
        const v7TotalBoss = listaBossesDaIlha().length;
        estado.bossIndex = v7TotalBoss;
        estado.bossProgressoPorIlha[estado.ilhaIndex] = v7TotalBoss;
        estado.eventoPendente = null;
        salvarProgressoBossDaIlha();
        log('🏃‍♂️ Você escapou de Totto Land. Katakuri e o objetivo da ilha estão registrados como concluídos. A próxima ilha é Wano.');
        atualizarBotoesIlha();
        atualizarMapRoute();
        window.carregarTelaDaIlha();
    });
    el('botoes-evento').appendChild(v7Botao);
    mudarTela('tela-evento');
};

// ------------------------------------------------------------------------
// V7.10: CORRIGE BOTÕES DE FOOSHA/BASE QUE VAZAVAM PARA CACTUS
// ------------------------------------------------------------------------

function v7LimparBotoesDeContextoDaIlha() {
    const v7NomeIlha = typeof ilhaAtual === 'function' ? ilhaAtual()?.nome : '';
    const v7Foosha = v7NomeIlha === 'Vila Foosha';
    document.querySelectorAll('#tela-barco button, #tela-ilha button, #tela-evento button').forEach(v7Botao => {
        const v7Texto = `${v7Botao.textContent || ''} ${v7Botao.getAttribute('onclick') || ''}`.toLowerCase();
        if (v7Texto.includes('foosha') || v7Texto.includes('irparabase')) {
            v7Botao.hidden = !v7Foosha;
        }
        if (v7Texto.includes('apresentar-se na base') || v7Texto.includes('apresentar na base')) {
            v7Botao.hidden = !(jogador.faccao === 'Marinha' && v7Foosha);
        }
    });
}

const v7CarregarTelaAnterior = window.carregarTelaDaIlha;
window.carregarTelaDaIlha = function carregarTelaDaIlhaV7() {
    if (typeof v7CarregarTelaAnterior === 'function') v7CarregarTelaAnterior();
    v7LimparBotoesDeContextoDaIlha();
    if (ilhaAtual()?.nome === 'Cactus Island') {
        if (el('nome-ilha-atual')) el('nome-ilha-atual').textContent = 'Cactus Island';
        if (el('descricao-ilha')) el('descricao-ilha').textContent = 'Uma ilha de festa e descanso. A Reverse Mountain já ficou para trás.';
    }
};

// ------------------------------------------------------------------------
// V7.11: POSTER E STATUS SEM DUPLICAR /30
// ------------------------------------------------------------------------

const v7AtualizarCartazAnterior = window.atualizarCartaz;
window.atualizarCartaz = function atualizarCartazV7() {
    if (typeof v7AtualizarCartazAnterior === 'function') v7AtualizarCartazAnterior();
    const v7Obs = el('haki-obs');
    const v7Arm = el('haki-arm');
    if (v7Obs) v7Obs.textContent = `${jogador.haki.obs}/${jogador.haki.obsAvancado ? 50 : 30}`;
    if (v7Arm) v7Arm.textContent = `${jogador.haki.arm}/${jogador.haki.armAvancado ? 50 : 30}`;
    const v7Estilo = el('estilo-pirata');
    if (v7Estilo) v7Estilo.textContent = jogador.estiloLuta
        ? `${jogador.estiloLuta} • Maestria ${v7MaestriaDoEstilo()}`
        : 'Nenhum';
};

// ------------------------------------------------------------------------
// V7.12: PERSISTÊNCIA SEGURA DE RESET E INICIALIZAÇÃO FINAL
// ------------------------------------------------------------------------

const v7ResetOriginal = window.resetarEstadoDoJogador;
if (typeof v7ResetOriginal === 'function') {
    window.resetarEstadoDoJogador = function resetarEstadoDoJogadorV7() {
        const v7Resultado = v7ResetOriginal();
        jogador.estilosAprendidos = {};
        jogador.maestriaEstilos = {};
        jogador.despertaresEstilo = {};
        estado.v7BauAberto = false;
        estado.v7AliadoAlvoFruta = null;
        estado.v7ModoCatalogoEstilos = 'equipar';
        estado.v7AliadoAlvoEstilo = null;
        estado.tekkaiAtivo = false;
        return v7Resultado;
    };
}

(function iniciarV7Catalogos() {
    // Os estilos aprendidos anteriormente são mantidos ao atualizar o código.
    if (jogador.estiloLuta && estilos.some(v7Estilo => v7Estilo.nome === jogador.estiloLuta)) {
        jogador.estilosAprendidos[jogador.estiloLuta] = true;
        if (jogador.maestriaEstilos[jogador.estiloLuta] == null) {
            jogador.maestriaEstilos[jogador.estiloLuta] = Number(jogador.maestriaEstilo || 0);
        }
    }
    window.renderizarImagensDosBotoes();
    window.montarListaAliados();
    window.montarInventarioFrutas();
    window.atualizarPoder();
    window.atualizarCartaz();
})();

// Contra-ataque rebalanceado: a chance de esquiva fica limitada a 32%,
// e Haki Observação aumenta a previsão sem tornar o jogador intocável.
window.contraAtaqueBoss = function contraAtaqueBossV7Final(multBoss = 1) {
    const v7Boss = estado.bossAtivo;
    if (!v7Boss || estado.bossHP <= 0 || jogador.vida <= 0) {
        estado.tekkaiAtivo = false;
        estado.ataqueEmAndamento = false;
        return;
    }

    const v7Atributos = window.calcularAtributosCombate();
    const v7DanoBase = Math.max(8, Math.floor(Number(v7Boss.poder || 10) * 0.14) + Math.floor(Math.random() * 7));
    let v7Dano = Math.round(v7DanoBase * Number(multBoss || 1));
    if (v7Boss.nome === 'Kaido') v7Dano = Math.round(v7Dano * 1.35);

    let v7Esquiva = 0.02 + Math.min(50, Number(jogador.haki.obs || 0)) * 0.002;
    if (estado.hakiObsAtivo) v7Esquiva += 0.06 + Math.min(50, Number(jogador.haki.obs || 0)) * 0.001;
    if (jogador.haki.obsAvancado) v7Esquiva += 0.12;
    v7Esquiva = clamped(v7Esquiva, 0.02, 0.32);

    v7Dano = Math.max(1, Math.round(v7Dano * (1 - Number(v7Atributos.reducao || 0) / 100)));
    const v7TekkaiFoiUsado = Boolean(estado.tekkaiAtivo);

    if (Math.random() < v7Esquiva) {
        logBatalha(`👁 Você leu o movimento de ${v7Boss.nome} e esquivou! (${Math.round(v7Esquiva * 100)}% de chance)`);
    } else {
        jogador.vida = Math.max(0, Number(jogador.vida || 0) - v7Dano);
        logBatalha(`💥 ${v7Boss.nome} contra-atacou e causou ${v7Dano} de dano. Redução aplicada: ${v7Atributos.reducao}%.`);
    }

    estado.tekkaiAtivo = false;
    tentarDespertarHakiReiNaturalmente();
    atualizarBarrasHP();

    if (jogador.vida <= 0) {
        tratarDerrotaContraBoss(v7Boss);
        return;
    }

    // O contra-ataque conclui o turno. Cooldowns foram iniciados em 2 e caem
    // para 1 agora, ficando realmente indisponíveis no próximo turno do jogador.
    reduzirCooldownsDeAtaques();
    reduzirCooldownsDosAliados();
    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    montarPainelAtaques();
    montarPainelAliadosBatalha();
    if (v7TekkaiFoiUsado) logBatalha('🛡️ Tekkai terminou. A proteção de 90% valeu por um único ataque.');
};


// ------------------------------------------------------------------------
// V7.13: NAVEGAÇÃO DE VOLTA DO CATÁLOGO + BALANCE FINAL
// ------------------------------------------------------------------------

// Guarda a tela de origem antes de abrir estilos. Ao voltar, o jogador não
// perde o contexto da ilha, nem fica preso na tela MEUS ESTILOS.
const v7AbrirCatalogoEstilosAnterior = window.abrirCatalogoEstilos;
window.abrirCatalogoEstilos = function abrirCatalogoEstilosV7ComOrigem(modo = 'equipar', aliadoIndex = null) {
    const v7TelaAtiva = document.querySelector('#right-panel .tela-ativa');
    if (modo === 'ensinar') {
        estado.v7OrigemCatalogoEstilos = 'tela-aliados';
    } else if (v7TelaAtiva && v7TelaAtiva.id !== 'tela-estilos') {
        estado.v7OrigemCatalogoEstilos = v7TelaAtiva.id;
    } else if (!estado.v7OrigemCatalogoEstilos) {
        estado.v7OrigemCatalogoEstilos = 'tela-ilha';
    }
    return v7AbrirCatalogoEstilosAnterior(modo, aliadoIndex);
};

window.voltarDoCatalogoEstilos = function voltarDoCatalogoEstilosV7() {
    const v7Origem = estado.v7OrigemCatalogoEstilos;
    const v7Modo = estado.v7ModoCatalogoEstilos;
    if (v7Modo === 'ensinar' && typeof window.abrirAliados === 'function') {
        window.abrirAliados();
        return;
    }
    if (v7Origem && document.getElementById(v7Origem)) {
        mudarTela(v7Origem);
    } else {
        mudarTela('tela-ilha');
    }
    if (typeof window.carregarTelaDaIlha === 'function' && v7Origem === 'tela-ilha') {
        window.carregarTelaDaIlha();
    }
};

// Os ataques dos inimigos são fortes, mas o crescimento não deve pulverizar
// o jogador antes de Alabasta. Kaido mantém uma exceção esmagadora.
window.calcularMultiplicadoresCombate = function calcularMultiplicadoresCombateV7Final() {
    window.atualizarPoder();
    const v7BossFinal = estado.bossAtivo;
    if (!v7BossFinal) return { multJogador: 1, multBoss: 1 };

    const v7PoderPlayerFinal = Math.max(1, Number(jogador.poder || 1));
    const v7PoderBossFinal = Math.max(1, Number(v7BossFinal.poder || 1));
    const v7RatioBossFinal = v7PoderBossFinal / v7PoderPlayerFinal;
    const v7RatioPlayerFinal = v7PoderPlayerFinal / v7PoderBossFinal;

    let multJogador = 1;
    if (v7RatioPlayerFinal >= 1.5) multJogador = 1.05;
    if (v7RatioPlayerFinal >= 2.3) multJogador = 1.12;

    let multBoss = 1;
    if (v7RatioBossFinal >= 1.2) multBoss = 1.12;
    if (v7RatioBossFinal >= 1.6) multBoss = 1.25;
    if (v7RatioBossFinal >= 2.3) multBoss = 1.45;
    if (v7RatioBossFinal >= 3.5) multBoss = 1.65;
    if (v7BossFinal.esmagador) multBoss = Math.max(multBoss, 2.25);

    // Haki do Armamento de bosses confirmados oferece 10% de mitigação.
    if (v7BossFinal.haki?.arm || v7BossFinal.haki?.armamento || v7BossFinal.hakiArmamento) {
        multJogador *= 0.90;
    }
    return { multJogador, multBoss };
};

// Contra-ataque: dano base sublinear + multiplicadores de diferença de poder.
// Só Haki do Armamento ativo dá 10% de redução normal; Tekkai é exceção de 1 golpe.
const v7DanoFinalAnterior = window.contraAtaqueBoss;
window.contraAtaqueBoss = function contraAtaqueBossV7Balanceado(multBoss = 1) {
    const v7BossFinal = estado.bossAtivo;
    if (!v7BossFinal || estado.bossHP <= 0 || jogador.vida <= 0) {
        estado.tekkaiAtivo = false;
        estado.ataqueEmAndamento = false;
        return;
    }
    const v7AtributosFinal = window.calcularAtributosCombate();
    const v7DanoBaseFinal = Math.max(8, Math.floor(Number(v7BossFinal.poder || 10) * 0.14) + Math.floor(Math.random() * 7));
    let v7DanoFinal = Math.round(v7DanoBaseFinal * Number(multBoss || 1));
    if (v7BossFinal.nome === 'Kaido') v7DanoFinal = Math.round(v7DanoFinal * 1.35);
    let v7EsquivaFinal = 0.02 + Math.min(50, Number(jogador.haki.obs || 0)) * 0.002;
    if (estado.hakiObsAtivo) v7EsquivaFinal += 0.06 + Math.min(50, Number(jogador.haki.obs || 0)) * 0.001;
    if (jogador.haki.obsAvancado) v7EsquivaFinal += 0.12;
    v7EsquivaFinal = clamped(v7EsquivaFinal, 0.02, 0.32);
    v7DanoFinal = Math.max(1, Math.round(v7DanoFinal * (1 - Number(v7AtributosFinal.reducao || 0) / 100)));

    if (Math.random() < v7EsquivaFinal) {
        logBatalha(`👁 Você leu o movimento de ${v7BossFinal.nome} e esquivou! (${Math.round(v7EsquivaFinal * 100)}% de chance)`);
    } else {
        jogador.vida = Math.max(0, Number(jogador.vida || 0) - v7DanoFinal);
        logBatalha(`💥 ${v7BossFinal.nome} contra-atacou e causou ${v7DanoFinal} de dano. Redução aplicada: ${v7AtributosFinal.reducao}%.`);
    }

    const v7TekkaiFinalFoiUsado = Boolean(estado.tekkaiAtivo);
    estado.tekkaiAtivo = false;
    tentarDespertarHakiReiNaturalmente();
    atualizarBarrasHP();
    if (jogador.vida <= 0) {
        tratarDerrotaContraBoss(v7BossFinal);
        return;
    }
    reduzirCooldownsDeAtaques();
    reduzirCooldownsDosAliados();
    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    montarPainelAtaques();
    montarPainelAliadosBatalha();
    if (v7TekkaiFinalFoiUsado) {
        logBatalha('🛡️ Tekkai terminou. A proteção de 90% valeu por um único ataque.');
    }
};


// ------------------------------------------------------------------------
// V7.14: VIDA SEM TETO FIXO + BALANCEAMENTO PELO DANO DOS INIMIGOS
// A vida máxima NÃO tem limite numérico. O crescimento vem de maestria,
// Haki, fruta e despertares; o combate é equilibrado pela pressão dos bosses,
// em vez de cortar a vida do jogador em um número artificial.
// ------------------------------------------------------------------------

window.calcularAtributosCombate = function calcularAtributosCombateV714SemTeto() {
    const v714Maestria = Math.max(0, Number(jogador.maestria || 0));
    const v714FrutaPoder = Math.max(0, Number(jogador.fruta?.poder || 0));
    const v714HakiObs = Math.max(0, Number(jogador.haki.obs || 0));
    const v714HakiArm = Math.max(0, Number(jogador.haki.arm || 0));
    const v714RacaBonus = jogador.raca === 'Lunaria' ? 18
        : jogador.raca === 'Homem-Peixe' ? 12 : 0; // Mink: sem bônus racial, conforme configuração do jogo.
    const v714EstiloBonus = jogador.estiloLuta ? 12 : 0;

    // Sem Math.min/teto de HP: a progressão continua acima de 900 quando
    // os atributos realmente levarem o personagem até lá.
    const v714VidaCalculada = Math.round(
        120
        + v714Maestria * 18
        + v714HakiArm * 1.2
        + v714HakiObs * 0.7
        + v714FrutaPoder * 1.35
        + v714RacaBonus
        + v714EstiloBonus
        + (jogador.fruta?.despertada ? 35 : 0)
        + (jogador.haki.reiEstado === 'Despertado!' ? 25 : 0)
        + (jogador.haki.armAvancado ? 12 : 0)
        + (jogador.haki.obsAvancado ? 10 : 0)
    );

    // Nunca reduz a vida máxima já conquistada nem deixa HP atual acima dela.
    // Isto preserva personagens antigos sem criar um novo limite máximo.
    const v714VidaAtual = Math.max(0, Number(jogador.vida || 0));
    const v714VidaMaxAnterior = Math.max(120, Number(jogador.vidaMaxima || 120));
    jogador.vidaMaxima = Math.max(120, v714VidaCalculada, v714VidaMaxAnterior, v714VidaAtual);
    if (!Number.isFinite(Number(jogador.vida))) jogador.vida = jogador.vidaMaxima;

    // Dano de ficha cresce de forma gradual. Golpes, fruta, Haki e forma ainda
    // acrescentam seus próprios efeitos, mas o bônus de base não explode.
    const v714PoderAtual = Math.max(1, Number(jogador.poder || 10));
    let v714Dano = 12
        + Math.log2(v714PoderAtual + 1) * 4.2
        + Math.sqrt(v714Maestria) * 3.2
        + Math.sqrt(v714HakiArm) * 1.4
        + Math.sqrt(v714HakiObs) * 0.8
        + Math.sqrt(v714FrutaPoder) * 2
        + v714EstiloBonus * 0.25;
    if (jogador.fruta?.despertada) v714Dano += Math.sqrt(v714FrutaPoder) * 1.25;
    if (jogador.haki.armAvancado) v714Dano += 5;
    if (jogador.haki.obsAvancado) v714Dano += 3;
    if (jogador.haki.reiAvancado) v714Dano += 4;

    // Regra solicitada: só o Armamento ligado protege 10% normalmente.
    // Tekkai ainda é uma técnica temporária de 90% por um único golpe.
    const v714Reducao = estado.tekkaiAtivo
        ? 90
        : (estado.hakiArmAtivo && v714HakiArm > 0 ? 10 : 0);

    return {
        dano: Math.max(12, Math.round(v714Dano)),
        reducao: v714Reducao,
        vidaMaxima: jogador.vidaMaxima
    };
};

// O inimigo acompanha a vida máxima do jogador. Assim, 1.300 HP ou 3.000 HP
// não tornam as lutas triviais: o dano esperado aumenta conforme o nível de
// ameaça do boss, sem impor um teto à progressão do jogador.
window.contraAtaqueBoss = function contraAtaqueBossV714ComPressao(multBoss = 1) {
    const v714Boss = estado.bossAtivo;
    if (!v714Boss || estado.bossHP <= 0 || jogador.vida <= 0) {
        estado.tekkaiAtivo = false;
        estado.ataqueEmAndamento = false;
        return;
    }

    window.atualizarPoder();
    const v714Atributos = window.calcularAtributosCombate();
    const v714PoderBoss = Math.max(1, Number(v714Boss.poder || 10));
    const v714PoderPlayer = Math.max(1, Number(jogador.poder || 10));
    const v714Razao = v714PoderBoss / v714PoderPlayer;
    const v714VidaReferencia = Math.max(120, Number(jogador.vidaMaxima || 120));

    // Taxa de pressão por turno: aumenta conforme o boss supera o jogador.
    // É uma percentagem da vida, não um limite de vida.
    let v714PressaoHP = 0.055;
    if (v714Razao >= 1.2) v714PressaoHP = 0.070;
    if (v714Razao >= 1.6) v714PressaoHP = 0.085;
    if (v714Razao >= 2.3) v714PressaoHP = 0.100;
    if (v714Razao >= 3.5) v714PressaoHP = 0.120;
    if (v714Boss.esmagador) v714PressaoHP = Math.max(v714PressaoHP, 0.120);

    const v714DanoPorHP = Math.ceil(v714VidaReferencia * v714PressaoHP);
    const v714DanoPorPoder = Math.max(
        8,
        Math.floor(v714PoderBoss * 0.10) + Math.floor(Math.random() * 6)
    );
    let v714Dano = Math.max(v714DanoPorHP, v714DanoPorPoder);
    v714Dano = Math.round(v714Dano * Math.max(0.85, Number(multBoss || 1)));

    // Kaido permanece esmagador, mas a ameaça escala com a luta em vez de
    // depender de uma vida máxima artificialmente limitada.
    if (v714Boss.nome === 'Kaido') v714Dano = Math.round(v714Dano * 1.15);

    // V11: a chance de esquiva evolui com o treino. O 30/30 avançado mantém
    // exatamente a chance anterior; de 30/50 até 50/50, ganha +5 pontos percentuais.
    let v714Esquiva = v11CalcularChanceEsquiva();

    // Mitigação aplicada depois do cálculo de pressão. Armamento ativo = 10%;
    // Tekkai continua em 90% e é consumido ao receber este golpe.
    v714Dano = Math.max(1, Math.round(v714Dano * (1 - Number(v714Atributos.reducao || 0) / 100)));
    const v714TekkaiUsado = Boolean(estado.tekkaiAtivo);

    if (Math.random() < v714Esquiva) {
        logBatalha(`👁 Você leu o movimento de ${v714Boss.nome} e esquivou! (${Math.round(v714Esquiva * 100)}% de chance)`);
    } else {
        jogador.vida = Math.max(0, Number(jogador.vida || 0) - v714Dano);
        logBatalha(`💥 ${v714Boss.nome} contra-atacou e causou ${v714Dano} de dano. Redução aplicada: ${v714Atributos.reducao}%.`);
    }

    estado.tekkaiAtivo = false;
    tentarDespertarHakiReiNaturalmente();
    atualizarBarrasHP();

    if (jogador.vida <= 0) {
        tratarDerrotaContraBoss(v714Boss);
        return;
    }

    reduzirCooldownsDeAtaques();
    reduzirCooldownsDosAliados();
    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    montarPainelAtaques();
    montarPainelAliadosBatalha();
    if (v714TekkaiUsado) {
        logBatalha('🛡️ Tekkai terminou. A proteção de 90% valeu por um único ataque.');
    }
};


// ------------------------------------------------------------------------
// V7.14 HOTFIX: BUSCA DE MESTRE NO FLUXO CLÁSSICO + ENSINO RESTRITO A ALIADOS
// A busca por mestre volta ao evento clássico (um mestre aleatório, aceitar/recusar).
// O botão MEUS ESTILOS continua usando o catálogo pesquisável normalmente.
// ------------------------------------------------------------------------
window.procurarEstilo = function procurarEstiloV714FluxoClassico() {
    const v714Ilha = ilhaAtual();
    if (!v714Ilha) return;
    if (v714Ilha.estiloBuscaDisponivel === false) {
        log('Você já procurou um mestre nesta ilha. Use MEUS ESTILOS para consultar e equipar o que aprendeu.');
        return;
    }

    v714Ilha.estiloBuscaDisponivel = false;
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    jogador.maestriaEstilos = jogador.maestriaEstilos || {};

    let v714Candidatos = estilos.filter(v714Estilo =>
        !jogador.estilosAprendidos[v714Estilo.nome] &&
        !(v714Estilo.bloqueadoComFruta && jogador.fruta)
    );
    if (jogador.raca === 'Homem-Peixe' && !jogador.fruta) {
        const v714Fishman = v714Candidatos.find(v714Estilo => v714Estilo.nome === 'Karatê dos Homens-Peixe');
        if (v714Fishman && Math.random() < 0.65) v714Candidatos = [v714Fishman];
    }
    if (!v714Candidatos.length) {
        log('Você já aprendeu todos os estilos compatíveis encontrados nesta aventura. Seus estilos e maestrias continuam guardados em MEUS ESTILOS.');
        atualizarBotoesIlha();
        return;
    }

    const v714Estilo = randomItem(v714Candidatos);
    el('titulo-evento').textContent = 'MESTRE ENCONTRADO';
    el('nome-evento').textContent = v714Estilo.nome;
    el('desc-evento').textContent = `${v714Estilo.descricao} O mestre oferece ensinar esse estilo. Você aceita?`;
    el('img-evento').src = v714Estilo.img;
    el('img-evento').alt = `Mestre de ${v714Estilo.nome}`;
    el('botoes-evento').innerHTML = '';

    const v714Aceitar = criarBotaoEvento(`APRENDER ${v714Estilo.nome.toUpperCase()}`, v714Estilo.img, () => {
        window.aprenderEstiloJogador(v714Estilo.nome);
    });
    const v714Recusar = criarBotaoEvento('RECUSAR ESTILO', img('RECUSAR', '5c2a2a'), () => {
        log(`Você recusou ${v714Estilo.nome}. O estilo não foi aprendido nem equipado.`);
        mudarTela('tela-ilha');
        atualizarBotoesIlha();
    });
    el('botoes-evento').append(v714Aceitar, v714Recusar);
    mudarTela('tela-evento');
};

// Um aliado só pode receber um estilo, e apenas se o jogador já o conhece.
const v714EnsinarEstiloAnterior = window.ensinarEstiloAliado;
window.ensinarEstiloAliado = function ensinarEstiloAliadoV714(aliadoIndex, estiloNome) {
    const v714Aliado = jogador.aliados[aliadoIndex];
    if (!v714Aliado) return;
    v714NormalizarAliado(v714Aliado);
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    const v714JogadorConhece = Boolean(jogador.estilosAprendidos[estiloNome]) || jogador.estiloLuta === estiloNome;
    if (!v714JogadorConhece) {
        log(`Você não pode ensinar ${estiloNome}: primeiro precisa aprender esse estilo você mesmo.`);
        return;
    }
    if (v714Aliado.estilos.length > 0 && !v714Aliado.estilos.includes(estiloNome)) {
        log(`${v714Aliado.nome} já possui um estilo de luta. Cada aliado só pode aprender um estilo.`);
        window.montarListaAliados();
        return;
    }
    if (v714EnsinarEstiloAnterior) return v714EnsinarEstiloAnterior(aliadoIndex, estiloNome);
};

// O catálogo também bloqueia visualmente estilos que o jogador não conhece
// e impede selecionar outro estilo quando o aliado já tem um.
const v714RenderizarCatalogoAnterior = window.renderizarCatalogoEstilos;
window.renderizarCatalogoEstilos = function renderizarCatalogoEstilosV714() {
    if (typeof v714RenderizarCatalogoAnterior === 'function') v714RenderizarCatalogoAnterior();
    if ((estado.v7ModoCatalogoEstilos || 'equipar') !== 'ensinar') return;
    const v714Aliado = jogador.aliados[estado.v7AliadoAlvoEstilo];
    const v714Catalogo = el('catalogo-estilos-jogador');
    if (!v714Aliado || !v714Catalogo) return;
    v714NormalizarAliado(v714Aliado);
    const v714TemEstilo = v714Aliado.estilos.length > 0;
    v714Catalogo.querySelectorAll('.style-catalog-card').forEach((v714Card, v714Index) => {
        const v714Estilo = estilos.filter(v714Item => v714Item.nome.toLowerCase().includes((el('filtro-estilos-jogador')?.value || '').trim().toLowerCase()))[v714Index];
        if (!v714Estilo) return;
        const v714Botao = v714Card.querySelector('button');
        const v714Conhece = Boolean(jogador.estilosAprendidos?.[v714Estilo.nome]) || jogador.estiloLuta === v714Estilo.nome;
        const v714JaTem = v714Aliado.estilos.includes(v714Estilo.nome);
        if (!v714Conhece) {
            v714Card.querySelector('p')?.insertAdjacentHTML('afterend', '<p class="style-restriction-note">Você precisa aprender este estilo primeiro.</p>');
            if (v714Botao) { v714Botao.disabled = true; v714Botao.textContent = 'VOCÊ NÃO CONHECE ESTE ESTILO'; }
        } else if (v714TemEstilo && !v714JaTem) {
            if (v714Botao) { v714Botao.disabled = true; v714Botao.textContent = 'ALIADO JÁ TEM UM ESTILO'; }
        }
    });
};


// ============================================================================
// V7.15 HOTFIX: SELETOR DE ESTILOS PARA ALIADOS + CONTAGEM + SAÍDA DE SKYPIEA
//
// ONDE MUDAR FOTOS:
// - Estilos: no array `estilos`, propriedade `img` de cada estilo.
// - Frutas: entradas do array `frutas` e helper `fruta()`.
// - Bosses: helper `boss()` / propriedade `img` dos bosses.
// - Retrato do aliado: `aliado.img` (ou fallback no bloco de montarListaAliados).
// - Imagens dos botões HTML: atributo `data-img` no op_rpg_v8.html.
// - Visual/layout: `kingofpirates_V8.css`; classes adicionadas aqui usam `v8-style-offer-*`.
// ONDE MUDAR O SITE:
// - Ficha/cartaz: #left-panel e #cartaz no HTML/CSS.
// - Ilha/ações: #tela-ilha. Tripulação: #tela-aliados.
// - Catálogo pessoal: #tela-estilos. Batalha: #tela-combate.
// ============================================================================

estado.v8AliadoAlvoEstilo = null;

function v8EstiloAprendidoDeVerdade(nome) {
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    jogador.maestriaEstilos = jogador.maestriaEstilos || {};
    return jogador.estiloLuta === nome || (
        Boolean(jogador.estilosAprendidos[nome]) &&
        Object.prototype.hasOwnProperty.call(jogador.maestriaEstilos, nome)
    );
}

function v8RenderizarSeletorEstilosAliado() {
    const v8Painel = el('painel-seletor-estilos-aliado');
    if (!v8Painel) return;
    const v8Alvo = estado.v8AliadoAlvoEstilo;
    const v8Aliado = jogador.aliados[v8Alvo];
    if (v8Alvo == null || !v8Aliado) {
        v8Painel.hidden = true;
        v8Painel.innerHTML = '';
        return;
    }

    v8NormalizarAliado(v8Aliado);
    v8Painel.hidden = false;
    v8Painel.innerHTML = `
        <div class="v8-style-offer-head">
            <h3>⚔️ ESCOLHER ESTILO PARA ${v8Aliado.nome.toUpperCase()}</h3>
            <button type="button" class="btn-acao" id="v8-fechar-seletor-estilos">FECHAR</button>
        </div>
        <p>Escolha um dos estilos que você já aprendeu. O aliado tem 40% de chance de aceitar, e cada aliado pode aprender somente um estilo.</p>
        <div class="v8-style-offer-grid" id="v8-style-offer-grid"></div>
    `;
    const v8Fechar = el('v8-fechar-seletor-estilos');
    if (v8Fechar) v8Fechar.onclick = () => {
        estado.v8AliadoAlvoEstilo = null;
        v8Painel.hidden = true;
        v8Painel.innerHTML = '';
    };

    const v8Grid = el('v8-style-offer-grid');
    if (!v8Grid) return;
    if (v8Aliado.estilos.length > 0) {
        const v8EstiloAtual = v8Aliado.estilos[0];
        v8Grid.innerHTML = `<div class="v8-style-offer-message">${v8Aliado.nome} já aprendeu <strong>${v8EstiloAtual}</strong>. Cada aliado só pode ter um estilo, então não dá para ensinar outro.</div>`;
        return;
    }

    const v8Conhecidos = estilos.filter(v8Estilo => v8EstiloAprendidoDeVerdade(v8Estilo.nome));
    if (!v8Conhecidos.length) {
        v8Grid.innerHTML = '<div class="v8-style-offer-message">Você ainda não aprendeu nenhum estilo. Primeiro use PROCURAR MESTRE na tela da ilha.</div>';
        return;
    }

    v8Conhecidos.forEach(v8Estilo => {
        const v8Card = document.createElement('article');
        v8Card.className = 'v8-style-offer-card';
        const v8Img = document.createElement('img');
        v8Img.src = v8Estilo.img;
        v8Img.alt = `Imagem de ${v8Estilo.nome}`;
        const v8Body = document.createElement('div');
        const v8Recusou = v8Aliado.estilosRecusados.includes(v8Estilo.nome);
        v8Body.innerHTML = `<h4>${v8Estilo.nome}</h4><p>${v8Estilo.descricao}</p><p>${v8Recusou ? 'Este aliado já recusou esse estilo.' : 'Chance de aceitar: 40%'}</p>`;
        const v8Btn = document.createElement('button');
        v8Btn.type = 'button';
        v8Btn.className = 'btn-acao';
        v8Btn.textContent = v8Recusou ? 'RECUSADO PERMANENTEMENTE' : `OFERECER ${v8Estilo.nome.toUpperCase()}`;
        v8Btn.disabled = v8Recusou;
        aplicarImagemBotao(v8Btn, v8Estilo.img);
        v8Btn.onclick = () => window.ensinarEstiloAliado(v8Alvo, v8Estilo.nome);
        v8Body.appendChild(v8Btn);
        v8Card.append(v8Img, v8Body);
        v8Grid.appendChild(v8Card);
    });
    renderizarImagensDosBotoes();
}

window.abrirSeletorEstilosParaAliado = function abrirSeletorEstilosParaAliadoV8(aliadoIndex) {
    if (!jogador.aliados[aliadoIndex]) {
        log('Escolha um aliado válido para oferecer um estilo.');
        return;
    }
    estado.v8BauAberto = false;
    estado.v7AliadoAlvoFruta = null;
    estado.v8AliadoAlvoEstilo = aliadoIndex;
    if (typeof window.montarInventarioFrutas === 'function') window.montarInventarioFrutas();
    if (typeof window.abrirAliados === 'function') {
        // A função abrirAliados já desenha a tripulação; em seguida o painel de estilos abre aqui.
        const v8PainelAntes = el('painel-seletor-estilos-aliado');
        if (!document.querySelector('#tela-aliados.tela-ativa')) window.abrirAliados();
        if (v8PainelAntes) v8RenderizarSeletorEstilosAliado();
    }
    v8RenderizarSeletorEstilosAliado();
    el('painel-seletor-estilos-aliado')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// O botão do cartão do aliado abre o seletor no estilo do baú de frutas,
// em vez de mandar o jogador para a tela geral MEUS ESTILOS.
const v8MontarListaAliadosAnterior = window.montarListaAliados;
window.montarListaAliados = function montarListaAliadosV8() {
    const v8Retorno = typeof v8MontarListaAliadosAnterior === 'function'
        ? v8MontarListaAliadosAnterior()
        : undefined;
    document.querySelectorAll('#lista-aliados .ally-card').forEach((v8Card, v8Index) => {
        const v8Btn = [...v8Card.querySelectorAll('button')].find(v8Item => /ENSINAR ESTILO|ESTILO DE LUTA|ESCOLHER ESTILO/i.test(v8Item.textContent || ''));
        if (v8Btn) {
            v8Btn.textContent = 'ESCOLHER ESTILO DE LUTA';
            v8Btn.disabled = false;
            v8Btn.onclick = () => window.abrirSeletorEstilosParaAliado(v8Index);
        }
    });
    return v8Retorno;
};

// A regra é aplicada também ao clicar diretamente via código: sem estilos inventados
// e sem permitir segundo estilo ao mesmo aliado.
window.ensinarEstiloAliado = function ensinarEstiloAliadoV8(aliadoIndex, estiloNome) {
    const v8Aliado = jogador.aliados[aliadoIndex];
    const v8Estilo = estilos.find(v8Item => v8Item.nome === estiloNome);
    if (!v8Aliado || !v8Estilo) return;
    v8NormalizarAliado(v8Aliado);
    if (!v8EstiloAprendidoDeVerdade(estiloNome)) {
        log(`Você não pode ensinar ${estiloNome}: primeiro precisa aprender esse estilo você mesmo.`);
        v8RenderizarSeletorEstilosAliado();
        return;
    }
    if (v8Aliado.estilos.length > 0) {
        log(`${v8Aliado.nome} já possui ${v8Aliado.estilos[0]}. Cada aliado só pode aprender um estilo.`);
        v8RenderizarSeletorEstilosAliado();
        return;
    }
    if (v8Aliado.estilosRecusados.includes(estiloNome)) {
        log(`${v8Aliado.nome} já recusou ${estiloNome}; essa oferta não pode ser repetida.`);
        v8RenderizarSeletorEstilosAliado();
        return;
    }

    if (Math.random() < 0.40) {
        v8Aliado.estilos.push(estiloNome);
        v8Aliado.poder = Number(v8Aliado.poder || 0) + 8;
        v8Aliado.maestriaEstilos = v8Aliado.maestriaEstilos || {};
        v8Aliado.maestriaEstilos[estiloNome] = 0;
        log(`⚔️ ${v8Aliado.nome} aceitou aprender ${estiloNome}! Seu poder aumentou.`);
    } else {
        v8Aliado.estilosRecusados.push(estiloNome);
        log(`🙅 ${v8Aliado.nome} recusou aprender ${estiloNome}. Essa oferta de estilo foi recusada permanentemente.`);
    }
    window.atualizarPoder();
    window.montarListaAliados();
    window.montarPainelAliadosBatalha();
    window.atualizarCartaz();
    v8RenderizarSeletorEstilosAliado();
};

// Corrige flags antigas sem maestria associada que podiam fazer o jogo contar
// um estilo não aprendido como conhecido e dizer falsamente que todos foram encontrados.
window.procurarEstilo = function procurarEstiloV8ContagemCorrigida() {
    const v8Ilha = ilhaAtual();
    if (!v8Ilha) return;
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    jogador.maestriaEstilos = jogador.maestriaEstilos || {};

    estilos.forEach(v8Estilo => {
        const v8FlagSemRegistro = Boolean(jogador.estilosAprendidos[v8Estilo.nome]) &&
            jogador.estiloLuta !== v8Estilo.nome &&
            !Object.prototype.hasOwnProperty.call(jogador.maestriaEstilos, v8Estilo.nome);
        if (v8FlagSemRegistro) delete jogador.estilosAprendidos[v8Estilo.nome];
    });

    if (v8Ilha.estiloBuscaDisponivel === false) {
        const v8ConhecidosAgora = estilos.filter(v8Estilo => v8EstiloAprendidoDeVerdade(v8Estilo.nome)).length;
        log(`Você já procurou um mestre nesta ilha. Estilos aprendidos: ${v8ConhecidosAgora}/${estilos.length}. Use MEUS ESTILOS para consultar ou equipar os seus.`);
        return;
    }

    const v8Conhecidos = new Set(estilos.filter(v8Estilo => v8EstiloAprendidoDeVerdade(v8Estilo.nome)).map(v8Estilo => v8Estilo.nome));
    const v8Bloqueados = estilos.filter(v8Estilo => !v8Conhecidos.has(v8Estilo.nome) && v8Estilo.bloqueadoComFruta && jogador.fruta);
    const v8Candidatos = estilos.filter(v8Estilo => !v8Conhecidos.has(v8Estilo.nome) && !(v8Estilo.bloqueadoComFruta && jogador.fruta));

    if (!v8Candidatos.length) {
        const v8Faltam = estilos.filter(v8Estilo => !v8Conhecidos.has(v8Estilo.nome));
        if (v8Faltam.length) {
            log(`Você aprendeu ${v8Conhecidos.size}/${estilos.length} estilos. Ainda falta(m): ${v8Faltam.map(v8Estilo => v8Estilo.nome).join(', ')}, mas sua Akuma no Mi bloqueia ${v8Bloqueados.map(v8Estilo => v8Estilo.nome).join(', ')}.`);
            // Não gasta a busca quando nenhum mestre compatível pode aparecer.
            atualizarBotoesIlha();
            return;
        }
        v8Ilha.estiloBuscaDisponivel = false;
        log(`Você aprendeu todos os estilos disponíveis (${v8Conhecidos.size}/${estilos.length}). Seus estilos e maestrias continuam guardados em MEUS ESTILOS.`);
        atualizarBotoesIlha();
        return;
    }

    v8Ilha.estiloBuscaDisponivel = false;
    let v8Pool = v8Candidatos;
    if (jogador.raca === 'Homem-Peixe' && !jogador.fruta) {
        const v8Fishman = v8Pool.find(v8Estilo => v8Estilo.nome === 'Karatê dos Homens-Peixe');
        if (v8Fishman && Math.random() < 0.65) v8Pool = [v8Fishman];
    }
    const v8Escolhido = randomItem(v8Pool);
    el('titulo-evento').textContent = 'MESTRE ENCONTRADO';
    el('nome-evento').textContent = v8Escolhido.nome;
    el('desc-evento').textContent = `${v8Escolhido.descricao} O mestre oferece ensinar esse estilo. Você aceita? Estilos aprendidos: ${v8Conhecidos.size}/${estilos.length}.`;
    el('img-evento').src = v8Escolhido.img;
    el('img-evento').alt = `Mestre de ${v8Escolhido.nome}`;
    el('botoes-evento').innerHTML = '';
    const v8Aceitar = criarBotaoEvento(`APRENDER ${v8Escolhido.nome.toUpperCase()}`, v8Escolhido.img, () => {
        window.aprenderEstiloJogador(v8Escolhido.nome);
    });
    const v8Recusar = criarBotaoEvento('RECUSAR ESTILO', img('RECUSAR', '5c2a2a'), () => {
        log(`Você recusou ${v8Escolhido.nome}. O estilo não foi aprendido nem equipado.`);
        mudarTela('tela-ilha');
        atualizarBotoesIlha();
    });
    el('botoes-evento').append(v8Aceitar, v8Recusar);
    mudarTela('tela-evento');
};

// Conclusão blindada de Skypiea: o evento de Jaya é marcado como resolvido e
// a progressão do céu nunca mais é gravada como um boss pendente da rota.
function v8FinalizarSkypiea() {
    const v8TotalCeu = typeof v4SkyBosses !== 'undefined' ? v4SkyBosses.length : 5;
    estado.skypieaBossProgresso = v8TotalCeu;
    estado.skypieaConcluida = true;
    estado.skypieaAtivo = false;
    const v8IlhaAtual = ilhas[estado.ilhaIndex];
    if (v8IlhaAtual) {
        v8IlhaAtual.options = v8IlhaAtual.options || {};
        v8IlhaAtual.options.skyfallConcluido = true;
        v8IlhaAtual.options.eventoResolvido = true;
        // Jaya tem zero bosses na rota física. Mantemos o índice coerente com essa rota,
        // em vez de deixar nela o índice 5 dos cinco bosses virtuais de Skypiea.
        const v8TotalBossesFisicos = typeof v4BossesAtuais === 'function'
            ? v4BossesAtuais().length
            : (v8IlhaAtual.bosses || []).length;
        estado.bossIndex = v8TotalBossesFisicos;
        estado.bossProgressoPorIlha[estado.ilhaIndex] = v8TotalBossesFisicos;
        if (typeof salvarProgressoBossDaIlha === 'function') salvarProgressoBossDaIlha();
    }
    if (typeof window.atualizarBotoesIlha === 'function') window.atualizarBotoesIlha();
    if (typeof window.atualizarMapRoute === 'function') window.atualizarMapRoute();
}

const v8VencerBossAnterior = window.vencerBoss;
window.vencerBoss = function vencerBossV8DestravarSkypiea() {
    const v8EraSkypiea = typeof v4EstaNoCeu === 'function' && v4EstaNoCeu();
    const v8BossVencido = estado.bossAtivo;
    const v8Resultado = typeof v8VencerBossAnterior === 'function'
        ? v8VencerBossAnterior()
        : undefined;
    if (v8EraSkypiea && v8BossVencido?.nome === 'Enel') {
        v8FinalizarSkypiea();
        log('☁ Skypiea concluída! Enel foi derrotado, o evento de Jaya foi encerrado e a rota para Water 7 está liberada.');
    }
    return v8Resultado;
};

// Plano B para uma partida em que o índice do céu já chegou ao fim, mas o
// estado ativo ficou preso: concluir Skypiea e deixar o botão seguir avançar.
const v8IrParaProximaIlhaAnterior = window.irParaProximaIlha;
window.irParaProximaIlha = function irParaProximaIlhaV8DestravarSkypiea() {
    const v8TotalCeu = typeof v4SkyBosses !== 'undefined' ? v4SkyBosses.length : 5;
    const v8ProgressoCeu = Math.max(Number(estado.skypieaBossProgresso || 0), Number(estado.bossIndex || 0));
    if (typeof v4EstaNoCeu === 'function' && v4EstaNoCeu()) {
        if (estado.skypieaConcluida || v8ProgressoCeu >= v8TotalCeu) {
            v8FinalizarSkypiea();
        } else {
            log(`☁ Ainda faltam desafios em Skypiea. Progresso salvo: ${v8ProgressoCeu}/${v8TotalCeu}. Derrote o próximo boss antes de sair.`);
            return;
        }
    }
    if (!v4EstaNoCeu() && estado.skypieaConcluida && ilhaAtual()?.nome === 'Jaya') {
        const v8Jaya = ilhaAtual();
        v8Jaya.options = v8Jaya.options || {};
        v8Jaya.options.skyfallConcluido = true;
        v8Jaya.options.eventoResolvido = true;
        const v8BossesFisicos = typeof v4BossesAtuais === 'function' ? v4BossesAtuais().length : (v8Jaya.bosses || []).length;
        estado.bossIndex = v8BossesFisicos;
        estado.bossProgressoPorIlha[estado.ilhaIndex] = v8BossesFisicos;
    }
    if (typeof v8IrParaProximaIlhaAnterior === 'function') return v8IrParaProximaIlhaAnterior();
};


// ============================================================================
// V8: CORREÇÕES DE ESTILOS, PASSIVAS DE FRUTAS E TREINO DE ARMAMENTO
// PERSONALIZAÇÃO: imagens continuam nas propriedades `img` de frutas/estilos/bosses
// e nos atributos `data-img` de op_rpg_v8.html. Layout novo: kingofpirates_V8.css.
// ============================================================================

// V8.1: estilo aprendido é definido pela flag de aprendizagem ou pelo estilo equipado.
// Saves antigos podem não conter uma chave de maestria para cada estilo; nesse caso,
// inicializamos a maestria em zero em vez de apagar o estilo aprendido.
function v8EstiloAprendidoValido(nome) {
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    jogador.maestriaEstilos = jogador.maestriaEstilos || {};
    const conhecido = Boolean(jogador.estilosAprendidos[nome]) || jogador.estiloLuta === nome;
    if (conhecido && jogador.maestriaEstilos[nome] == null) {
        jogador.maestriaEstilos[nome] = jogador.estiloLuta === nome
            ? Number(jogador.maestriaEstilo || 0)
            : 0;
    }
    return conhecido;
}

// Substitui também o helper usado pelo primeiro renderizador do seletor.
v8EstiloAprendidoDeVerdade = function v8EstiloAprendidoDeVerdadeCorrigido(nome) {
    return v8EstiloAprendidoValido(nome);
};

// O botão de estilo é reinstalado após CADA renderização da tripulação.
// Se algum render antigo não criou o botão, a V8 cria um no cartão do aliado.
const v8MontarListaAliadosAntesDoFixFinal = window.montarListaAliados;
window.montarListaAliados = function montarListaAliadosV8Estavel() {
    const retorno = typeof v8MontarListaAliadosAntesDoFixFinal === 'function'
        ? v8MontarListaAliadosAntesDoFixFinal()
        : undefined;
    const cards = Array.from(document.querySelectorAll('#lista-aliados .ally-card'));
    cards.forEach((card, index) => {
        const body = card.querySelector('.ally-body') || card;
        let btn = Array.from(card.querySelectorAll('button')).find(item =>
            /ENSINAR ESTILO|ESTILO DE LUTA|ESCOLHER ESTILO/i.test(item.textContent || '')
        );
        if (!btn) {
            btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'btn-acao v8-ally-style-button';
            body.appendChild(btn);
            aplicarImagemBotao(btn, img('ENSINAR+ESTILO', '26343d', 120, 90));
        }
        btn.type = 'button';
        btn.classList.add('v8-ally-style-button');
        btn.textContent = 'ESCOLHER ESTILO DE LUTA';
        btn.disabled = false;
        // Remove qualquer ação antiga (abrir catálogo geral) e liga ao seletor específico.
        btn.onclick = event => {
            event.preventDefault();
            event.stopPropagation();
            window.abrirSeletorEstilosParaAliado(index);
        };
        btn.setAttribute('aria-label', `Escolher estilo de luta para ${jogador.aliados[index]?.nome || 'aliado'}`);
    });
    renderizarImagensDosBotoes();
    return retorno;
};

// Abre o seletor de maneira idempotente, garantindo que a tela da tripulação esteja visível.
window.abrirSeletorEstilosParaAliado = function abrirSeletorEstilosParaAliadoV8Final(aliadoIndex) {
    const index = Number(aliadoIndex);
    if (!Number.isInteger(index) || !jogador.aliados[index]) {
        log('Escolha um aliado válido para oferecer um estilo.');
        return;
    }
    estado.v8AliadoAlvoEstilo = index;
    estado.v7BauAberto = false;
    estado.v7AliadoAlvoFruta = null;
    const telaAliados = el('tela-aliados');
    if (!telaAliados || !telaAliados.classList.contains('tela-ativa')) {
        if (typeof window.abrirAliados === 'function') window.abrirAliados();
        else mudarTela('tela-aliados');
    }
    window.montarListaAliados();
    if (typeof window.montarInventarioFrutas === 'function') window.montarInventarioFrutas();
    v8RenderizarSeletorEstilosAliado();
    const painel = el('painel-seletor-estilos-aliado');
    if (painel) {
        painel.hidden = false;
        try { painel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (_) {}
    }
};

// Render final: aceita estilos aprendidos mesmo em saves sem maestria registrada.
window.renderizarSeletorEstilosAliado = window.renderizarSeletorEstilosAliado || v8RenderizarSeletorEstilosAliado;
const v8RenderizarSeletorAnteriorFinal = v8RenderizarSeletorEstilosAliado;
v8RenderizarSeletorEstilosAliado = function renderizarSeletorEstilosAliadoV8Final() {
    // Atualiza os dados antigos antes de desenhar os cartões.
    const jogadorAnterior = jogador.estilosAprendidos || {};
    const maestriaAnterior = jogador.maestriaEstilos || {};
    jogador.estilosAprendidos = jogadorAnterior;
    jogador.maestriaEstilos = maestriaAnterior;
    estilos.forEach(item => v8EstiloAprendidoValido(item.nome));
    return v8RenderizarSeletorAnteriorFinal();
};

// V8.2: busca de mestre não apaga flags válidas em saves antigos e conta estilos aprendidos corretamente.
window.procurarEstilo = function procurarEstiloV8ContagemFinal() {
    const ilha = ilhaAtual();
    if (!ilha) return;
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    jogador.maestriaEstilos = jogador.maestriaEstilos || {};
    estilos.forEach(item => v8EstiloAprendidoValido(item.nome));

    const conhecidos = estilos.filter(item => v8EstiloAprendidoValido(item.nome));
    const candidatos = estilos.filter(item =>
        !v8EstiloAprendidoValido(item.nome) && !(item.bloqueadoComFruta && jogador.fruta)
    );
    if (ilha.estiloBuscaDisponivel === false) {
        log(`Você já procurou um mestre nesta ilha. Estilos aprendidos: ${conhecidos.length}/${estilos.length}. Use MEUS ESTILOS para consultar ou equipar os seus.`);
        return;
    }
    if (!candidatos.length) {
        const bloqueados = estilos.filter(item => !v8EstiloAprendidoValido(item.nome) && item.bloqueadoComFruta && jogador.fruta);
        if (bloqueados.length) {
            log(`Você aprendeu ${conhecidos.length}/${estilos.length} estilos. Ainda faltam ${bloqueados.map(item => item.nome).join(', ')}, bloqueado(s) pela sua Akuma no Mi.`);
            atualizarBotoesIlha();
            return;
        }
        ilha.estiloBuscaDisponivel = false;
        log(`Você aprendeu todos os estilos disponíveis (${conhecidos.length}/${estilos.length}). Seus estilos e maestrias continuam guardados em MEUS ESTILOS.`);
        atualizarBotoesIlha();
        return;
    }

    ilha.estiloBuscaDisponivel = false;
    let pool = candidatos;
    if (jogador.raca === 'Homem-Peixe' && !jogador.fruta) {
        const karatê = pool.find(item => item.nome === 'Karatê dos Homens-Peixe');
        if (karatê && Math.random() < 0.65) pool = [karatê];
    }
    const escolhido = randomItem(pool);
    el('titulo-evento').textContent = 'MESTRE ENCONTRADO';
    el('nome-evento').textContent = escolhido.nome;
    el('desc-evento').textContent = `${escolhido.descricao} O mestre oferece ensinar esse estilo. Você aceita? Estilos aprendidos: ${conhecidos.length}/${estilos.length}.`;
    el('img-evento').src = escolhido.img;
    el('img-evento').alt = `Mestre de ${escolhido.nome}`;
    el('botoes-evento').innerHTML = '';
    const aceitar = criarBotaoEvento(`APRENDER ${escolhido.nome.toUpperCase()}`, escolhido.img, () => window.aprenderEstiloJogador(escolhido.nome));
    const recusar = criarBotaoEvento('RECUSAR ESTILO', img('RECUSAR', '5c2a2a'), () => {
        log(`Você recusou ${escolhido.nome}. O estilo não foi aprendido nem equipado.`);
        mudarTela('tela-ilha');
        atualizarBotoesIlha();
    });
    el('botoes-evento').append(aceitar, recusar);
    mudarTela('tela-evento');
};

// V8.3: identifica a categoria a partir do objeto salvo ou do catálogo interno.
function v8TipoFrutaJogador() {
    const fruta = jogador.fruta;
    if (!fruta) return '';
    const tipo = fruta.tipo || v7DadosFrutas?.[fruta.nome]?.tipo || '';
    return String(tipo).toLowerCase();
}
function v8JogadorTemZoan() { return v8TipoFrutaJogador().includes('zoan'); }
function v8JogadorTemLogia() { return v8TipoFrutaJogador().includes('logia'); }
function v8BossTemHakiArmamento(boss) {
    return Boolean(boss && (boss.haki?.arm || boss.haki?.armamento || boss.hakiArmamento));
}

// Zoan e Zoan Mítica recuperam 1% da vida máxima por ação que cause dano, com mínimo de 2 HP.
const v8UsarAtaqueAntesDaRegeneracaoZoan = window.usarAtaque;
window.usarAtaque = function usarAtaqueV8RegeneracaoZoan(...args) {
    const hpBossAntes = Number(estado.bossHP);
    const vidaAntes = Number(jogador.vida || 0);
    const resultado = typeof v8UsarAtaqueAntesDaRegeneracaoZoan === 'function'
        ? v8UsarAtaqueAntesDaRegeneracaoZoan.apply(this, args)
        : undefined;
    const danoRealizado = Number.isFinite(hpBossAntes) && Number(estado.bossHP) < hpBossAntes;
    if (danoRealizado && vidaAntes > 0 && v8JogadorTemZoan()) {
        const maxVida = Math.max(1, Number(jogador.vidaMaxima || 120));
        const cura = Math.max(2, Math.ceil(maxVida * 0.01));
        const vidaDepois = Math.min(maxVida, Math.max(0, Number(jogador.vida || 0)) + cura);
        const curado = vidaDepois - Math.max(0, Number(jogador.vida || 0));
        if (curado > 0) {
            jogador.vida = vidaDepois;
            atualizarBarrasHP();
            logBatalha(`🦴 Resistência Zoan: você recuperou ${curado} HP.`);
        }
    }
    return resultado;
};

// Logia: bosses sem Haki do Armamento não conseguem acertar dano físico.
// O turno/cooldowns ainda avançam, evitando travar a batalha em uma esquiva infinita.
const v8ContraAtaqueAntesDaLogiaImune = window.contraAtaqueBoss;
window.contraAtaqueBoss = function contraAtaqueBossV8LogiaImune(multBoss = 1) {
    const boss = estado.bossAtivo;
    if (!boss || !v8JogadorTemLogia() || v8BossTemHakiArmamento(boss)) {
        return typeof v8ContraAtaqueAntesDaLogiaImune === 'function'
            ? v8ContraAtaqueAntesDaLogiaImune.call(this, multBoss)
            : undefined;
    }

    const tekkaiFoiAtivado = Boolean(estado.tekkaiAtivo);
    estado.tekkaiAtivo = false;
    logBatalha(`🌫️ Sua Logia tornou seu corpo intangível: ${boss.nome} não possui Haki do Armamento e não consegue tocar você.`);
    tentarDespertarHakiReiNaturalmente();
    atualizarBarrasHP();
    if (jogador.vida <= 0) {
        tratarDerrotaContraBoss(boss);
        return;
    }
    reduzirCooldownsDeAtaques();
    reduzirCooldownsDosAliados();
    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    montarPainelAtaques();
    montarPainelAliadosBatalha();
    if (tekkaiFoiAtivado) logBatalha('🛡️ Tekkai terminou. A proteção de 90% valeu por um único ataque.');
};

// V8.4: a agulha do Armamento usa Pointer Capture. Assim, arrastar o mouse para
// fora do botão AÇÃO não simula um soltamento; a tentativa termina no pointerup real.
const v8AbrirMinigameAntesDoPonteiro = window.abrirMinigame;
window.abrirMinigame = function abrirMinigameV8Ponteiro(tipo) {
    const resultado = typeof v8AbrirMinigameAntesDoPonteiro === 'function'
        ? v8AbrirMinigameAntesDoPonteiro.call(this, tipo)
        : undefined;
    if (tipo !== 'arm' || !minigameAtivo || mgTipo !== 'arm') return resultado;
    const btn = el('btn-acao-minigame');
    if (!btn) return resultado;

    // Remove handlers de mouse/toque herdados para não haver dois eventos de soltura.
    ['onmousedown', 'onmouseup', 'ontouchstart', 'ontouchend'].forEach(attr => btn.removeAttribute(attr));
    btn.onmousedown = null;
    btn.onmouseup = null;
    btn.ontouchstart = null;
    btn.ontouchend = null;
    btn.style.touchAction = 'none';
    btn.style.userSelect = 'none';

    btn.onpointerdown = event => {
        if (!minigameAtivo || mgTipo !== 'arm' || (event.button != null && event.button !== 0)) return;
        event.preventDefault();
        segurandoArm = true;
        try { btn.setPointerCapture(event.pointerId); } catch (_) {}
    };
    btn.onpointerup = event => {
        if (!minigameAtivo || mgTipo !== 'arm') return;
        event.preventDefault();
        segurandoArm = false;
        validarMinigameArm();
    };
    btn.onpointercancel = () => {
        // Se o sistema cancelar um toque, não computa uma falha fantasma.
        if (minigameAtivo && mgTipo === 'arm') segurandoArm = false;
    };
    return resultado;
};


// V8.5: a Gomu aparece como Paramecia antes do despertar e revela a identidade Zoan Mítica ao despertar.
// A identidade interna gomuNika/nomeOriginal é mantida para não quebrar Gear 2, 3, 4 e 5.
const v8DespertarFrutaAntesDaIdentidadeNika = window.despertarFrutaSegundaVida;
window.despertarFrutaSegundaVida = function despertarFrutaV8IdentidadeNika(...args) {
    const eraGomu = typeof ehGomuNika === 'function' && ehGomuNika(jogador.fruta);
    const resultado = typeof v8DespertarFrutaAntesDaIdentidadeNika === 'function'
        ? v8DespertarFrutaAntesDaIdentidadeNika.apply(this, args)
        : false;
    if (resultado && eraGomu && jogador.fruta) {
        jogador.fruta.nomeOriginal = 'Gomu Gomu no Mi';
        jogador.fruta.gomuNika = true;
        jogador.fruta.nome = 'Hito Hito no Mi, Modelo: Nika';
        jogador.fruta.tipo = 'Zoan Mítica';
        jogador.fruta.nomeV2 = 'Hito Hito no Mi, Modelo: Nika';
        jogador.fruta.despertada = true;
        const imagemNika = IMAGENS_FRUTAS['Gomu Gomu no Mi'];
        if (imagemNika) jogador.fruta.img = imagemNika;
        logBatalha('☀️ DESPERTAR ZOAN MÍTICA: a Gomu Gomu revelou sua verdadeira identidade, Hito Hito no Mi, Modelo: Nika!');
        atualizarCartaz();
        if (typeof montarPainelAtaques === 'function') montarPainelAtaques();
    }
    return resultado;
};


// ============================================================================
// V8.6: SISTEMA GERAL DE TRANSFORMAÇÃO ZOAN + CONTINUIDADE ENTRE BOSSES
// Forma inicial de toda Zoan: Normal (base). Também há Híbrida e Animal.
// Para alterar a força das formas, edite os multiplicadores abaixo.
// ============================================================================
const V8_ZOAN_MULT_HIBRIDA = 1.20;
const V8_ZOAN_MULT_ANIMAL = 1.40;

function v8EhZoanSemGomu(fruta = jogador.fruta) {
    if (!fruta || (typeof ehGomuNika === 'function' && ehGomuNika(fruta))) return false;
    const tipo = String(fruta.tipo || v7DadosFrutas?.[fruta.nomeOriginal || fruta.nome]?.tipo || '').toLowerCase();
    return tipo.includes('zoan');
}

function v8GarantirFormasZoan(fruta = jogador.fruta) {
    if (!v8EhZoanSemGomu(fruta)) return false;
    if (!Array.isArray(fruta.ataquesBaseZoan)) {
        fruta.ataquesBaseZoan = Array.isArray(fruta.ataques) ? fruta.ataques.map(g => ({ ...g })) : [];
    }
    const base = fruta.ataquesBaseZoan;
    const multiplicar = (mult, prefixo) => base.map(g => ({
        ...g,
        nome: `${prefixo}: ${g.nome}`,
        dano: Math.max(1, Math.round(Number(g.dano || 1) * mult))
    }));
    fruta.formas = {
        base: {
            nome: 'Forma Normal', req: 0, img: fruta.img,
            multiplicador: 1,
            ataques: base.map(g => ({ ...g }))
        },
        hibrida: {
            nome: 'Forma Híbrida', req: 0, img: fruta.img,
            multiplicador: V8_ZOAN_MULT_HIBRIDA,
            ataques: multiplicar(V8_ZOAN_MULT_HIBRIDA, 'Híbrida')
        },
        animal: {
            nome: 'Forma Animal Completa', req: 0, img: fruta.img,
            multiplicador: V8_ZOAN_MULT_ANIMAL,
            ataques: multiplicar(V8_ZOAN_MULT_ANIMAL, 'Animal')
        }
    };
    if (!['base', 'hibrida', 'animal'].includes(fruta.formaAtual)) fruta.formaAtual = 'base';
    return true;
}

// Qualquer Zoan adquirida recebe suas três formas; a forma Normal é a inicial.
const v8ComerFrutaAntesDasZoan = window.comerFruta;
window.comerFruta = function comerFrutaV86Zoan(...args) {
    const resultado = typeof v8ComerFrutaAntesDasZoan === 'function'
        ? v8ComerFrutaAntesDasZoan.apply(this, args)
        : undefined;
    if (jogador.fruta) {
        if (v8EhZoanSemGomu(jogador.fruta)) {
            v8GarantirFormasZoan(jogador.fruta);
            jogador.fruta.formaAtual = 'base';
        } else if (typeof ehGomuNika === 'function' && ehGomuNika(jogador.fruta)) {
            jogador.fruta.formaAtual = 'base';
        }
    }
    if (typeof montarPainelAtaques === 'function') montarPainelAtaques();
    return resultado;
};

function v8MontarPainelFormasZoan() {
    let area = el('painel-formas-fruta');
    const painelAtaques = el('painel-ataques');
    if (!painelAtaques || !jogador.fruta || !v8GarantirFormasZoan(jogador.fruta)) {
        if (area && !jogador.fruta) area.hidden = true;
        return;
    }
    if (!area) {
        area = document.createElement('div');
        area.id = 'painel-formas-fruta';
        area.className = 'fruit-form-grid';
        painelAtaques.parentElement.insertBefore(area, painelAtaques);
    }
    area.innerHTML = '';
    area.hidden = false;
    const titulo = document.createElement('div');
    titulo.className = 'attack-group-title';
    titulo.textContent = `TRANSFORMAÇÃO ZOAN • ${jogador.fruta.nomeOriginal || jogador.fruta.nome}`;
    area.appendChild(titulo);
    const botoes = document.createElement('div');
    botoes.className = 'fruit-form-buttons';
    Object.entries(jogador.fruta.formas).forEach(([chave, forma]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn-acao fruta-form-btn';
        btn.textContent = `${forma.nome}${chave === 'base' ? ' • INICIAL' : ` • DANO +${Math.round((forma.multiplicador - 1) * 100)}%`}`;
        if (jogador.fruta.formaAtual === chave) btn.classList.add('selecionado');
        btn.onclick = () => {
            jogador.fruta.formaAtual = chave;
            estado.ataqueEmAndamento = false;
            logBatalha(`🦖 Transformação Zoan: ${forma.nome} ativada.`);
            montarPainelAtaques();
        };
        botoes.appendChild(btn);
    });
    area.appendChild(botoes);
}

// Usa os ataques correspondentes à forma ativa e depois restaura o catálogo base.
const v8MontarPainelAtaquesAntesDasZoan = window.montarPainelAtaques;
window.montarPainelAtaques = function montarPainelAtaquesV86Zoan(...args) {
    const fruta = jogador.fruta;
    const zoan = v8GarantirFormasZoan(fruta);
    const ataquesBase = zoan ? fruta.ataques : null;
    if (zoan) fruta.ataques = fruta.formas[fruta.formaAtual || 'base'].ataques;
    let resultado;
    try {
        resultado = typeof v8MontarPainelAtaquesAntesDasZoan === 'function'
            ? v8MontarPainelAtaquesAntesDasZoan.apply(this, args)
            : undefined;
    } finally {
        if (zoan) fruta.ataques = ataquesBase;
    }
    if (zoan) v8MontarPainelFormasZoan();
    return resultado;
};

// O motor antigo voltava para Base ao iniciar cada boss. Guardamos e restauramos
// a forma selecionada após a inicialização, para que a transformação dure pela ilha.
const v8IniciarBossAntesDaPersistencia = window.iniciarBoss;
window.iniciarBoss = function iniciarBossV86PersistirTransformacao(...args) {
    // Inicializa a ficha de formas antes de capturar a seleção atual.
    if (v8EhZoanSemGomu(jogador.fruta)) v8GarantirFormasZoan(jogador.fruta);
    const formaFruta = jogador.fruta?.formaAtual || 'base';
    const formaEstilo = jogador.formaEstiloAtual || 'base';
    const resultado = typeof v8IniciarBossAntesDaPersistencia === 'function'
        ? v8IniciarBossAntesDaPersistencia.apply(this, args)
        : undefined;
    if (jogador.fruta && jogador.fruta.formas && Object.prototype.hasOwnProperty.call(jogador.fruta.formas, formaFruta)) {
        jogador.fruta.formaAtual = formaFruta;
    }
    jogador.formaEstiloAtual = formaEstilo;
    if (typeof montarPainelAtaques === 'function' && estado.bossAtivo) montarPainelAtaques();
    if (typeof montarPainelTransformacoesEstilo === 'function') montarPainelTransformacoesEstilo();
    return resultado;
};

// Também preserva as formas após uma saída/retorno de combate na mesma ilha.
// Se o jogador realmente mudou de ilha, a fruta e o estilo voltam para a forma base.
const v8SairBatalhaAntesDaPersistencia = window.sairDaBatalha;
window.sairDaBatalha = function sairDaBatalhaV86PersistirTransformacao(...args) {
    const ilhaAntes = estado.ilhaIndex;
    const formaFruta = jogador.fruta?.formaAtual || 'base';
    const formaEstilo = jogador.formaEstiloAtual || 'base';
    const resultado = typeof v8SairBatalhaAntesDaPersistencia === 'function'
        ? v8SairBatalhaAntesDaPersistencia.apply(this, args)
        : undefined;
    if (estado.ilhaIndex === ilhaAntes) {
        if (jogador.fruta && jogador.fruta.formas && Object.prototype.hasOwnProperty.call(jogador.fruta.formas, formaFruta)) {
            jogador.fruta.formaAtual = formaFruta;
        }
        jogador.formaEstiloAtual = formaEstilo;
    } else {
        if (jogador.fruta?.formas) jogador.fruta.formaAtual = 'base';
        voltarFormaEstiloBase();
    }
    return resultado;
};

// Inicializa formas em saves antigos que já tenham uma Zoan equipada.
if (v8EhZoanSemGomu(jogador.fruta)) v8GarantirFormasZoan(jogador.fruta);



// ============================================================================
// V9: PERSISTÊNCIA DE TRANSFORMAÇÕES/HAKI, ENSINO DE ESTILOS E BALANCEAMENTO
// Este bloco é aditivo: mantém o motor anterior e corrige os pontos finais.
// ============================================================================

// V9.1: alias que faltava no hotfix V8. Algumas rotinas chamavam
// v8NormalizarAliado(), mas só existia v7NormalizarAliado(). Isso interrompia
// o fluxo de ensinar estilos com ReferenceError antes de chegar à aceitação.
function v8NormalizarAliado(aliado) {
    return v7NormalizarAliado(aliado);
}

function v9EstiloAprendido(nome) {
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    jogador.maestriaEstilos = jogador.maestriaEstilos || {};
    return jogador.estiloLuta === nome || Boolean(jogador.estilosAprendidos[nome]);
}

function v9NormalizarEstiloDoJogador() {
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    jogador.maestriaEstilos = jogador.maestriaEstilos || {};
    jogador.despertaresEstilo = jogador.despertaresEstilo || {};
    if (jogador.estiloLuta) {
        jogador.estilosAprendidos[jogador.estiloLuta] = true;
        if (jogador.maestriaEstilos[jogador.estiloLuta] == null) {
            jogador.maestriaEstilos[jogador.estiloLuta] = Number(jogador.maestriaEstilo || 0);
        }
    }
}

// V9.2: o ensino de estilo de aliado agora é independente dos renderizadores
// antigos e usa uma normalização real do aliado antes de tentar ensinar.
window.ensinarEstiloAliado = function ensinarEstiloAliadoV9(aliadoIndex, estiloNome) {
    const aliado = jogador.aliados[Number(aliadoIndex)];
    const estilo = estilos.find(item => item.nome === estiloNome);
    if (!aliado || !estilo) {
        log('Não foi possível ensinar: aliado ou estilo não encontrado.');
        return false;
    }
    v8NormalizarAliado(aliado);
    v9NormalizarEstiloDoJogador();
    aliado.estilos = Array.isArray(aliado.estilos) ? aliado.estilos : [];
    aliado.estilosRecusados = Array.isArray(aliado.estilosRecusados) ? aliado.estilosRecusados : [];
    if (!v9EstiloAprendido(estiloNome)) {
        log(`Você precisa aprender ${estiloNome} antes de ensiná-lo a um aliado.`);
        return false;
    }
    if (aliado.estilos.length > 0) {
        log(`${aliado.nome} já possui ${aliado.estilos[0]}. Cada aliado só pode aprender um estilo.`);
        if (typeof window.montarListaAliados === 'function') window.montarListaAliados();
        if (typeof v8RenderizarSeletorEstilosAliado === 'function') v8RenderizarSeletorEstilosAliado();
        return false;
    }
    if (aliado.estilosRecusados.includes(estiloNome)) {
        log(`${aliado.nome} já recusou ${estiloNome}; essa oferta não pode ser repetida.`);
        if (typeof v8RenderizarSeletorEstilosAliado === 'function') v8RenderizarSeletorEstilosAliado();
        return false;
    }
    if (Math.random() < 0.40) {
        aliado.estilos.push(estiloNome);
        aliado.poder = Number(aliado.poder || 0) + 8;
        aliado.maestriaEstilos = aliado.maestriaEstilos || {};
        aliado.maestriaEstilos[estiloNome] = 0;
        log(`⚔️ ${aliado.nome} aceitou aprender ${estiloNome}! Seu poder aumentou.`);
    } else {
        aliado.estilosRecusados.push(estiloNome);
        log(`🙅 ${aliado.nome} recusou aprender ${estiloNome}. Essa oferta não será repetida.`);
    }
    if (typeof window.atualizarPoder === 'function') window.atualizarPoder();
    if (typeof window.montarListaAliados === 'function') window.montarListaAliados();
    if (typeof window.montarPainelAliadosBatalha === 'function') window.montarPainelAliadosBatalha();
    if (typeof window.atualizarCartaz === 'function') window.atualizarCartaz();
    if (typeof v8RenderizarSeletorEstilosAliado === 'function') v8RenderizarSeletorEstilosAliado();
    return true;
};

// V9.3: regra do Karatê dos Homens-Peixe. É possível aprendê-lo antes da fruta,
// mas comer uma Akuma no Mi depois faz o personagem perder esse estilo. A
// interface recebe o aviso antes e depois, sem impedir o aprendizado prévio.
function v9PerderKarateSeTiverFruta() {
    const nome = 'Karatê dos Homens-Peixe';
    const temKaratê = jogador.estiloLuta === nome || Boolean(jogador.estilosAprendidos?.[nome]);
    if (!jogador.fruta || !temKaratê) return false;
    jogador.estilosAprendidos = jogador.estilosAprendidos || {};
    jogador.maestriaEstilos = jogador.maestriaEstilos || {};
    jogador.despertaresEstilo = jogador.despertaresEstilo || {};
    delete jogador.estilosAprendidos[nome];
    delete jogador.maestriaEstilos[nome];
    delete jogador.despertaresEstilo[nome];
    if (jogador.estiloLuta === nome) {
        jogador.estiloLuta = null;
        jogador.maestriaEstilo = 0;
        jogador.formaEstiloAtual = 'base';
    }
    log('🌊🍈 Você comeu uma Akuma no Mi e perdeu o Karatê dos Homens-Peixe. Esse estilo não é compatível com usuário de fruta.');
    return true;
}

const v9ComerFrutaAntesDaRegraKaratê = window.comerFruta;
window.comerFruta = function comerFrutaV9(frutaAtual, ...args) {
    if (jogador.fruta) {
        log('Você já comeu uma Akuma no Mi. O jogo bloqueou a segunda.');
        return;
    }
    const tinhaKaratê = jogador.estiloLuta === 'Karatê dos Homens-Peixe' || Boolean(jogador.estilosAprendidos?.['Karatê dos Homens-Peixe']);
    if (tinhaKaratê) {
        const confirmou = window.confirm('ATENÇÃO: ao comer esta Akuma no Mi, você perderá permanentemente o Karatê dos Homens-Peixe e a maestria desse estilo. Quer continuar?');
        if (!confirmou) {
            log('🍈 Você desistiu de comer a fruta e manteve o Karatê dos Homens-Peixe.');
            return;
        }
    }
    const resultado = typeof v9ComerFrutaAntesDaRegraKaratê === 'function'
        ? v9ComerFrutaAntesDaRegraKaratê.call(this, frutaAtual, ...args)
        : undefined;
    if (jogador.fruta && tinhaKaratê) v9PerderKarateSeTiverFruta();
    if (typeof window.atualizarCartaz === 'function') window.atualizarCartaz();
    if (typeof window.montarPainelAtaques === 'function') window.montarPainelAtaques();
    return resultado;
};

// O catálogo pessoal informa a restrição mesmo quando o estilo foi aprendido
// antes da fruta. O aviso é inserido sem substituir os cards nem suas ações.
function v9AdicionarAvisoKarate() {
    const painel = el('catalogo-estilos-jogador');
    if (painel && !painel.querySelector('.v9-fishman-warning')) {
        const aviso = document.createElement('div');
        aviso.className = 'v9-fishman-warning';
        aviso.innerHTML = '<strong>🌊 Karatê dos Homens-Peixe:</strong> pode ser aprendido antes de comer uma Akuma no Mi. Se comer uma fruta depois, você perderá o estilo e a maestria. Com fruta já consumida, não é possível aprendê-lo.';
        painel.prepend(aviso);
    }
    const seletor = el('painel-seletor-estilos-aliado');
    if (seletor && !seletor.querySelector('.v9-fishman-warning')) {
        const avisoAliado = document.createElement('div');
        avisoAliado.className = 'v9-fishman-warning';
        avisoAliado.textContent = 'Só é possível ensinar estilos que você já aprendeu; cada aliado pode aprender apenas um estilo.';
        seletor.prepend(avisoAliado);
    }
}

const v9RenderizarCatalogoEstilosAntesAviso = window.renderizarCatalogoEstilos;
window.renderizarCatalogoEstilos = function renderizarCatalogoEstilosV9(...args) {
    const resultado = typeof v9RenderizarCatalogoEstilosAntesAviso === 'function'
        ? v9RenderizarCatalogoEstilosAntesAviso.apply(this, args)
        : undefined;
    v9AdicionarAvisoKarate();
    return resultado;
};

// V9.4: as formas e os Hakis ativos persistem entre bosses da mesma ilha somente
// quando há uma sequência com 2+ bosses. Depois do último boss, voltam ao estado
// base/desligado. A mesma regra vale para fruta, transformação de estilo e Haki.
estado.v9PersistenciaSequenciaBoss = null;
function v9TotalBossesDaIlhaAtual() {
    try {
        if (typeof listaBossesDaIlha === 'function') return listaBossesDaIlha().length;
        return ilhaAtual()?.bosses?.length || 0;
    } catch (erro) {
        return ilhaAtual()?.bosses?.length || 0;
    }
}
function v9ResetarFormasEHaki() {
    if (jogador.fruta?.formas && Object.prototype.hasOwnProperty.call(jogador.fruta.formas, 'base')) {
        jogador.fruta.formaAtual = 'base';
    } else if (jogador.fruta && Object.prototype.hasOwnProperty.call(jogador.fruta, 'formaAtual')) {
        jogador.fruta.formaAtual = 'base';
    }
    voltarFormaEstiloBase();
    estado.hakiArmAtivo = false;
    estado.hakiObsAtivo = false;
    estado.hakiReiAtivo = false;
    estado.revestimentoReiAtivo = false;
    estado.v9PersistenciaSequenciaBoss = null;
    if (typeof window.montarPainelAtaques === 'function') window.montarPainelAtaques();
    if (typeof window.montarPainelTransformacoesEstilo === 'function') window.montarPainelTransformacoesEstilo();
    if (typeof window.atualizarBotoesHakiAtivo === 'function') window.atualizarBotoesHakiAtivo();
}
function v9SalvarEstadoDeSequencia() {
    estado.v9PersistenciaSequenciaBoss = {
        ilhaIndex: estado.ilhaIndex,
        formaFruta: jogador.fruta?.formaAtual || 'base',
        formaEstilo: jogador.formaEstiloAtual || 'base',
        hakiArm: Boolean(estado.hakiArmAtivo),
        hakiObs: Boolean(estado.hakiObsAtivo),
        hakiRei: Boolean(estado.hakiReiAtivo),
        revestimentoRei: Boolean(estado.revestimentoReiAtivo)
    };
}
function v9RestaurarEstadoDeSequencia() {
    const salvo = estado.v9PersistenciaSequenciaBoss;
    if (!salvo || salvo.ilhaIndex !== estado.ilhaIndex || v9TotalBossesDaIlhaAtual() < 2) return false;
    if (jogador.fruta?.formas && Object.prototype.hasOwnProperty.call(jogador.fruta.formas, salvo.formaFruta)) {
        jogador.fruta.formaAtual = salvo.formaFruta;
    } else if (jogador.fruta && Object.prototype.hasOwnProperty.call(jogador.fruta, 'formaAtual')) {
        jogador.fruta.formaAtual = salvo.formaFruta || 'base';
    }
    jogador.formaEstiloAtual = salvo.formaEstilo || 'base';
    estado.hakiArmAtivo = salvo.hakiArm;
    estado.hakiObsAtivo = salvo.hakiObs;
    estado.hakiReiAtivo = salvo.hakiRei;
    estado.revestimentoReiAtivo = salvo.revestimentoRei;
    if (typeof window.montarPainelAtaques === 'function') window.montarPainelAtaques();
    if (typeof window.montarPainelTransformacoesEstilo === 'function') window.montarPainelTransformacoesEstilo();
    if (typeof window.atualizarBotoesHakiAtivo === 'function') window.atualizarBotoesHakiAtivo();
    return true;
}

const v9IniciarBossAnterior = window.iniciarBoss;
window.iniciarBoss = function iniciarBossV9(...args) {
    const ilhaAntes = estado.ilhaIndex;
    const temSequencia = estado.v9PersistenciaSequenciaBoss && estado.v9PersistenciaSequenciaBoss.ilhaIndex === ilhaAntes && v9TotalBossesDaIlhaAtual() >= 2;
    const resultado = typeof v9IniciarBossAnterior === 'function'
        ? v9IniciarBossAnterior.apply(this, args)
        : undefined;
    if (estado.ilhaIndex === ilhaAntes && temSequencia && estado.bossAtivo) {
        v9RestaurarEstadoDeSequencia();
        estado.v9PersistenciaSequenciaBoss = null;
    } else if (estado.ilhaIndex !== ilhaAntes || v9TotalBossesDaIlhaAtual() < 2) {
        estado.v9PersistenciaSequenciaBoss = null;
    }
    return resultado;
};

const v9VencerBossAnterior = window.vencerBoss;
window.vencerBoss = function vencerBossV9(...args) {
    const ilhaAntes = estado.ilhaIndex;
    const totalAntes = v9TotalBossesDaIlhaAtual();
    const formaFrutaAntes = jogador.fruta?.formaAtual || 'base';
    const formaEstiloAntes = jogador.formaEstiloAtual || 'base';
    const hakiArmAntes = Boolean(estado.hakiArmAtivo);
    const hakiObsAntes = Boolean(estado.hakiObsAtivo);
    const hakiReiAntes = Boolean(estado.hakiReiAtivo);
    const revestimentoAntes = Boolean(estado.revestimentoReiAtivo);
    const resultado = typeof v9VencerBossAnterior === 'function'
        ? v9VencerBossAnterior.apply(this, args)
        : undefined;
    const restamBosses = estado.ilhaIndex === ilhaAntes && totalAntes >= 2 && estado.bossIndex < totalAntes;
    if (restamBosses) {
        estado.v9PersistenciaSequenciaBoss = {
            ilhaIndex: ilhaAntes,
            formaFruta: formaFrutaAntes,
            formaEstilo: formaEstiloAntes,
            hakiArm: hakiArmAntes,
            hakiObs: hakiObsAntes,
            hakiRei: hakiReiAntes,
            revestimentoRei: revestimentoAntes
        };
    } else {
        v9ResetarFormasEHaki();
    }
    return resultado;
};

const v9SairDaBatalhaAnterior = window.sairDaBatalha;
window.sairDaBatalha = function sairDaBatalhaV9(...args) {
    const ilhaAntes = estado.ilhaIndex;
    const totalAntes = v9TotalBossesDaIlhaAtual();
    const bossIndexAntes = estado.bossIndex;
    const resultado = typeof v9SairDaBatalhaAnterior === 'function'
        ? v9SairDaBatalhaAnterior.apply(this, args)
        : undefined;
    if (estado.ilhaIndex !== ilhaAntes || totalAntes < 2 || bossIndexAntes >= totalAntes) {
        v9ResetarFormasEHaki();
    } else if (estado.v9PersistenciaSequenciaBoss && estado.v9PersistenciaSequenciaBoss.ilhaIndex === ilhaAntes) {
        v9RestaurarEstadoDeSequencia();
    }
    return resultado;
};

// V9.5: Marineford tinha HP muito acima do ritmo de progressão do jogador.
// Reduzimos HP máximo em 30% e poder ofensivo em 28%, sem mexer nos outros arcos.
// A alteração é aplicada uma única vez a cada objeto boss e mantém HP coerente.
(function v9BalancearMarineford() {
    const marineford = ilhas.find(item => item.nome === 'Marineford');
    if (!marineford || marineford.options?.v9Balanceado) return;
    marineford.bosses.forEach(inimigo => {
        if (!inimigo || inimigo.v9Balanceado) return;
        inimigo.hpMax = Math.max(1, Math.round(Number(inimigo.hpMax || inimigo.hp || 1) * 0.70));
        inimigo.hp = inimigo.hpMax;
        inimigo.poder = Math.max(1, Math.round(Number(inimigo.poder || 1) * 0.72));
        inimigo.v9Balanceado = true;
    });
    marineford.options = marineford.options || {};
    marineford.options.v9Balanceado = true;
})();

// Ao atualizar o painel de estilos, reapresenta o aviso de compatibilidade.
const v9AtualizarCartazAnterior = window.atualizarCartaz;
window.atualizarCartaz = function atualizarCartazV9(...args) {
    const resultado = typeof v9AtualizarCartazAnterior === 'function'
        ? v9AtualizarCartazAnterior.apply(this, args)
        : undefined;
    v9AdicionarAvisoKarate();
    return resultado;
};

// Garantia para saves e telas já abertas no carregamento da V9.
v9NormalizarEstiloDoJogador();
v9AdicionarAvisoKarate();


// ------------------------------------------------------------------------
// V9.7: CURVA DE HP GLOBAL, NÃO SÓ MARINEFORD.
// Os multiplicadores atuam uma única vez sobre cada boss e acompanham a
// progressão. O objetivo é preservar o desafio sem transformar cada luta
// tardia num teste de resistência contra barras de HP absurdas.
// Marineford conserva sua redução própria de 30% aplicada logo acima.
// ------------------------------------------------------------------------
(function v9BalancearHPDeTodosOsArcos() {
    const escalaPorIlha = {
        'Vila Foosha': 1.00,
        'Yotsuba': 1.00,
        'Orange Town': 0.98,
        'Baratie': 0.98,
        'Ilha Conomi': 0.98,
        'Loguetown': 0.96,
        'Reverse Mountain': 0.96,
        'Cactus Island': 0.96,
        'Little Garden': 0.94,
        'Drum': 0.94,
        'Alabasta': 0.92,
        'Jaya': 0.92,
        'Water 7': 0.90,
        'Thriller Bark': 0.88,
        'Sabaody': 0.86,
        'Ilha dos Homens-Peixe': 0.80,
        'Punk Hazard': 0.78,
        'Dressrosa': 0.76,
        'Zou': 0.76,
        'Totto Land': 0.72,
        'Wano': 0.66,
        'Egghead': 0.60,
        'Elbaf': 0.45
    };
    ilhas.forEach((ilhaAtual, indiceIlhaV10) => {
        const escala = escalaPorIlha[ilhaAtual.nome];
        if (escala == null || ilhaAtual.options?.v9HpGlobalBalanceado) return;
        // A pressão dos bosses também cai gradualmente pela rota: -12% no começo,
        // chegando a -35% em Elbaf. Assim não basta encurtar barras e deixar o dano absurdo.
        const escalaPoderV10 = Math.max(0.65, 0.88 - indiceIlhaV10 * 0.01);
        (ilhaAtual.bosses || []).forEach(bossAtual => {
            if (!bossAtual || bossAtual.v9HpGlobalBalanceado) return;
            const hpOriginal = Number(bossAtual.hpMax || bossAtual.hp || 1);
            const poderOriginal = Number(bossAtual.poder || 1);
            bossAtual.hpMax = Math.max(1, Math.round(hpOriginal * escala));
            bossAtual.hp = bossAtual.hpMax;
            bossAtual.poder = Math.max(1, Math.round(poderOriginal * escalaPoderV10));
            bossAtual.v10EscalaPoder = escalaPoderV10;
            bossAtual.v9HpGlobalBalanceado = true;
        });
        ilhaAtual.options = ilhaAtual.options || {};
        ilhaAtual.options.v9HpGlobalBalanceado = true;
    });
    // Teste de progressão Gear 5 + Haki do Rei: Elbaf é o arco final, mas
    // a barra de Imu não deve exigir dezenas de ataques depois de Gunko.
    // Os valores são absolutos e substituem a escala geral só nesses dois bosses.
    const elbafBalanceado = ilhas.find(i => i.nome === 'Elbaf');
    if (elbafBalanceado) {
        const gunko = elbafBalanceado.bosses.find(b => b.nome.includes('Gunko'));
        const imuFinal = elbafBalanceado.bosses.find(b => b.nome === 'Imu');
        if (gunko) { gunko.hpMax = 1900; gunko.hp = 1900; }
        if (imuFinal) { imuFinal.hpMax = 2600; imuFinal.hp = 2600; }
    }
    // A rota especial de Skypiea e os Vegapunks da rota da Marinha também
    // entram na curva, pois são gerados fora da lista comum de ilhas.
    if (Array.isArray(window.v4SkyBosses)) {
        window.v4SkyBosses.forEach(bossAtual => {
            if (!bossAtual || bossAtual.v9HpGlobalBalanceado) return;
            bossAtual.hpMax = Math.max(1, Math.round(Number(bossAtual.hpMax || bossAtual.hp || 1) * 0.92));
            bossAtual.hp = bossAtual.hpMax;
            bossAtual.poder = Math.max(1, Math.round(Number(bossAtual.poder || 1) * 0.78));
            bossAtual.v9HpGlobalBalanceado = true;
        });
    }
    ilhas.filter(i => i.nome === 'Egghead').forEach(i => {
        if (Array.isArray(i._vegapunks)) i._vegapunks.forEach(bossAtual => {
            if (!bossAtual || bossAtual.v9HpGlobalBalanceado) return;
            bossAtual.hpMax = Math.max(1, Math.round(Number(bossAtual.hpMax || bossAtual.hp || 1) * 0.60));
            bossAtual.hp = bossAtual.hpMax;
            bossAtual.poder = Math.max(1, Math.round(Number(bossAtual.poder || 1) * 0.65));
            bossAtual.v9HpGlobalBalanceado = true;
        });
    });
})();

// Yomi Yomi (Brook) e Don Krieg: três ressurreições cada. O HP do boss
// e o progresso da luta ficam intactos; esgotadas as três, vale a derrota normal.
const v9TratarDerrotaAntesYuami = tratarDerrotaContraBoss;
tratarDerrotaContraBoss = function tratarDerrotaContraBossYuami(bossDerrota) {
    const frutaAtual = jogador.fruta;
    const nomeOriginal = String(frutaAtual?.nomeOriginal || frutaAtual?.nome || '');
    const nomeFrutaAtual = String(frutaAtual?.nome || '');
    const eYomiOuYuami = nomeOriginal === 'Yomi Yomi no Mi'
        || nomeOriginal === 'Yuami Yamkio no Mi'
        || nomeFrutaAtual.startsWith('Yomi Yomi no Mi')
        || nomeFrutaAtual.startsWith('Yuami Yamkio no Mi');
    const nomeRessurreicao = nomeFrutaAtual.startsWith('Yomi Yomi no Mi') ? 'Yomi Yomi' : 'Don Krieg';

    if (eYomiOuYuami && Number(frutaAtual.ressurreicoesRestantes ?? 3) > 0) {
        frutaAtual.ressurreicoesMax = 3;
        frutaAtual.ressurreicoesRestantes = Math.max(0, Number(frutaAtual.ressurreicoesRestantes ?? 3) - 1);
        jogador.vida = Math.max(1, Math.floor(Number(jogador.vidaMaxima || 120) * 0.55));
        jogador.segundaVidaAkumaUsada = true;
        estado.ataqueEmAndamento = false;
        estado.aliadoAtacou = false;
        estado.hakiArmAtivo = false;
        estado.hakiObsAtivo = false;
        estado.hakiReiAtivo = false;
        estado.revestimentoReiAtivo = false;
        atualizarCartaz();
        atualizarBarrasHP();
        montarPainelAtaques();
        montarPainelAliadosBatalha();
        logBatalha(`🩸 ${nomeRessurreicao}: você ressuscitou com ${jogador.vida} HP! Restam ${frutaAtual.ressurreicoesRestantes} de 3 ressurreições. ${bossDerrota?.nome || 'O inimigo'} continua com ${estado.bossHP} HP: o progresso foi preservado.`);
        return;
    }

    if (eYomiOuYuami && Number(frutaAtual.ressurreicoesRestantes || 0) <= 0) {
        // Impede que a vida genérica de Akuma no Mi conceda uma quarta chance.
        jogador.segundaVidaAkumaUsada = true;
    }
    return typeof v9TratarDerrotaAntesYuami === 'function'
        ? v9TratarDerrotaAntesYuami(bossDerrota)
        : undefined;
};

// Inclui a contagem atual no cartaz quando a fruta especial estiver equipada.
const v9AtualizarCartazAntesContadorYuami = window.atualizarCartaz;
window.atualizarCartaz = function atualizarCartazV96(...args) {
    const resultado = typeof v9AtualizarCartazAntesContadorYuami === 'function'
        ? v9AtualizarCartazAntesContadorYuami.apply(this, args)
        : undefined;
    const cartaz = document.getElementById('cartaz') || document.getElementById('cartaz-jogador') || document.getElementById('painel-perfil') || document.getElementById('perfil-jogador');
    const nomeFrutaContador = String(jogador.fruta?.nome || '');
    const temFrutaComRessurreicao = nomeFrutaContador.startsWith('Yomi Yomi no Mi') || nomeFrutaContador.startsWith('Yuami Yamkio no Mi');
    if (cartaz && jogador.fruta && temFrutaComRessurreicao) {
        let indicador = document.getElementById('contador-ressurreicoes-yuami');
        if (!indicador) {
            indicador = document.createElement('div');
            indicador.id = 'contador-ressurreicoes-yuami';
            indicador.className = 'yuami-resurrection-counter yomi-resurrection-counter';
            cartaz.appendChild(indicador);
        }
        const nomeCurto = nomeFrutaContador.startsWith('Yomi Yomi no Mi') ? 'Yomi Yomi' : 'Don Krieg';
        indicador.textContent = `🩸 Ressurreições ${nomeCurto}: ${Number(jogador.fruta.ressurreicoesRestantes || 0)}/3`;
    } else {
        document.getElementById('contador-ressurreicoes-yuami')?.remove();
    }
    return resultado;
};

// V9.7: as três ressurreições da Yomi Yomi também cobrem mortes fora de boss.
// A derrota em boss já é tratada acima para preservar exatamente o HP do inimigo;
// este fallback cobre eventos e outras rotas que chamam finalizarMorte diretamente.
const v9FinalizarMorteAntesRessurreicaoYomi = finalizarMorte;
finalizarMorte = function finalizarMorteV97RessurreicaoYomi(mensagem) {
    const frutaAtual = jogador.fruta;
    const nomeFruta = String(frutaAtual?.nomeOriginal || frutaAtual?.nome || '');
    const nomeAtual = String(frutaAtual?.nome || '');
    const temRessurreicao = nomeFruta === 'Yomi Yomi no Mi'
        || nomeFruta === 'Yuami Yamkio no Mi'
        || nomeAtual.startsWith('Yomi Yomi no Mi')
        || nomeAtual.startsWith('Yuami Yamkio no Mi');
    const restantes = Number(frutaAtual?.ressurreicoesRestantes ?? 0);

    if (temRessurreicao && restantes > 0) {
        frutaAtual.ressurreicoesMax = 3;
        frutaAtual.ressurreicoesRestantes = restantes - 1;
        jogador.vida = Math.max(1, Math.floor(Number(jogador.vidaMaxima || 120) * 0.55));
        jogador.emJornada = true;
        jogador.segundaVidaAkumaUsada = true;
        estado.ataqueEmAndamento = false;
        estado.aliadoAtacou = false;
        estado.hakiArmAtivo = false;
        estado.hakiObsAtivo = false;
        estado.hakiReiAtivo = false;
        estado.revestimentoReiAtivo = false;
        atualizarCartaz();
        atualizarBarrasHP();
        montarPainelAtaques();
        montarPainelAliadosBatalha();
        const nomeCurto = nomeAtual.startsWith('Yomi Yomi no Mi') ? 'Yomi Yomi' : 'Don Krieg';
        const mensagemRessurreicao = `🩸 ${nomeCurto}: você voltou à vida com ${jogador.vida} HP! Restam ${frutaAtual.ressurreicoesRestantes} de 3 ressurreições.`;
        if (estado.bossAtivo) logBatalha(`${mensagemRessurreicao} ${estado.bossAtivo.nome} continua com ${estado.bossHP} HP.`);
        else log(mensagemRessurreicao);
        return;
    }

    return typeof v9FinalizarMorteAntesRessurreicaoYomi === 'function'
        ? v9FinalizarMorteAntesRessurreicaoYomi.call(this, mensagem)
        : undefined;
};


// V9.7: a rota alternativa de Vegapunk é criada sob demanda, então seu HP
// recebe o mesmo ajuste de Egghead no instante em que a lista é montada.
const v9CriarMissaoVegapunksAntesBalanceamento = criarMissaoVegapunks;
criarMissaoVegapunks = function criarMissaoVegapunksV97Balanceada() {
    const listaVegapunks = v9CriarMissaoVegapunksAntesBalanceamento.apply(this, arguments);
    listaVegapunks.forEach(bossAtual => {
        if (!bossAtual || bossAtual.v9HpGlobalBalanceado) return;
        bossAtual.hpMax = Math.max(1, Math.round(Number(bossAtual.hpMax || bossAtual.hp || 1) * 0.60));
        bossAtual.hp = bossAtual.hpMax;
        bossAtual.poder = Math.max(1, Math.round(Number(bossAtual.poder || 1) * 0.65));
        bossAtual.v9HpGlobalBalanceado = true;
    });
    return listaVegapunks;
};


// V10 final: balanceamento de HP e poder em todos os arcos, progressão de Haki do Rei e Yomi Yomi com três ressurreições.


// ============================================================================
// V11: ESQUIVA PROGRESSIVA + INTIMIDAÇÃO DO HAKI DO REI
// * Observação 0-30/30: mantém a curva de esquiva já existente.
// * Depois do despertar em Katakuri, 30/50 preserva a chance que havia em 30/30.
// * A evolução de Observação até 50/50 acrescenta exatamente 5 pontos percentuais.
// * A Intimidação só aparece após despertar o Haki do Rei e elimina inimigos
//   claramente inferiores, nunca bosses de categoria extrema ou especiais.
// ============================================================================

function v11CalcularChanceEsquiva() {
    const obs = clamped(Number(jogador.haki.obs || 0), 0, jogador.haki.obsAvancado ? 50 : 30);
    const obsAtivo = Boolean(estado.hakiObsAtivo);
    const avancado = Boolean(jogador.haki.obsAvancado);

    // Antes do despertar avançado, esta é a curva original de treino, incluindo
    // o bônus de ativação. Em 30/30, portanto, não se perde nenhuma chance atual.
    const obsBase = Math.min(30, obs);
    let chance = 0.02 + obsBase * 0.002;
    if (obsAtivo) chance += 0.06 + obsBase * 0.001;
    if (avancado) chance += 0.12;

    // O estágio avançado começa em 30/50 com a mesma chance que havia em 30/30.
    // Os 20 pontos restantes concedem +5% no total, em vez de inflar duas vezes
    // a fórmula antiga e gerar um aumento acidental de 6%.
    if (avancado && obs > 30) {
        chance += ((obs - 30) / 20) * 0.05;
    }
    return clamped(chance, 0.02, 0.34);
}

function v11EhBossImuneAIntimidacao(boss) {
    if (!boss) return true;
    const nome = String(boss.nome || '').toLowerCase();
    const nomesIntocaveis = [
        'imu', 'kaido', 'akainu', 'aokiji', 'kizaru', 'big mom',
        'shanks', 'mihawk', 'blackbeard', 'barba negra', 'gorosei',
        'joy boy', 'luffy', 'garp'
    ];
    return Boolean(
        boss.extremo || boss.esmagador || boss.despertarRei || boss.resistenciaDano ||
        boss.requerHaki || boss.logia || nomesIntocaveis.some(nomeForte => nome.includes(nomeForte))
    );
}

function v11PodeIntimidarBoss(boss = estado.bossAtivo) {
    if (jogador.haki.reiEstado !== 'Despertado!' || !boss || !estado.bossAtivo) return false;
    if (v11EhBossImuneAIntimidacao(boss)) return false;

    if (typeof window.atualizarPoder === 'function') window.atualizarPoder();
    const poderJogador = Math.max(1, Number(jogador.poder || 1));
    const poderBoss = Math.max(1, Number(boss.poder || 1));
    const hpMaxBoss = Math.max(1, Number(boss.hpMax || boss.hp || estado.bossHP || 1));

    // Só permite a finalização quando a diferença é esmagadora: pelo menos 4x
    // de poder e uma barra compatível com um inimigo muito abaixo do jogador.
    return poderJogador >= poderBoss * 4 && hpMaxBoss <= poderJogador * 5 + 150;
}

function v11AtualizarBotaoIntimidacao() {
    const painel = document.querySelector('#tela-combate .combat-haki');
    if (!painel) return;
    let botao = document.getElementById('btn-haki-rei-hitkill');
    if (!botao) {
        botao = document.createElement('button');
        botao.type = 'button';
        botao.id = 'btn-haki-rei-hitkill';
        botao.className = 'btn-haki-toggle v11-hitkill-toggle';
        botao.innerHTML = '<span>👑 INTIMIDAÇÃO CONQUISTADORA</span><small>O Haki do Rei apaga inimigos muito inferiores.</small>';
        botao.onclick = () => window.usarIntimidacaoConquistadora();
        painel.appendChild(botao);
    }
    const batalhaAtiva = Boolean(estado.bossAtivo && estado.bossHP > 0 && document.getElementById('tela-combate')?.classList.contains('tela-ativa'));
    const despertado = jogador.haki.reiEstado === 'Despertado!';
    const alvoFraco = v11PodeIntimidarBoss();
    // Não existe botão antes do despertar. Contra rivais fortes, o botão também
    // fica oculto: não oferece um golpe falso contra um chefe imune.
    botao.hidden = !(batalhaAtiva && despertado && alvoFraco);
    botao.disabled = Boolean(estado.ataqueEmAndamento) || !alvoFraco;
    botao.title = alvoFraco ? 'Usar o Haki do Rei para nocautear um oponente muito inferior.' : 'O adversário ainda é forte demais.';
    botao.classList.toggle('ativado', !botao.hidden);
}

window.usarIntimidacaoConquistadora = function usarIntimidacaoConquistadoraV11() {
    const boss = estado.bossAtivo;
    if (jogador.haki.reiEstado !== 'Despertado!') {
        logBatalha('👑 Seu Haki do Rei ainda não despertou. Esta técnica continua indisponível.');
        v11AtualizarBotaoIntimidacao();
        return;
    }
    if (!boss || estado.bossHP <= 0 || !v11PodeIntimidarBoss(boss)) {
        logBatalha('👑 A pressão conquistadora não basta para eliminar este adversário.');
        v11AtualizarBotaoIntimidacao();
        return;
    }
    if (estado.ataqueEmAndamento) return;

    estado.ataqueEmAndamento = true;
    estado.hakiReiAtivo = true;
    const hpRestante = Math.max(1, Number(estado.bossHP || boss.hpMax || 1));
    logBatalha(`👑💥 INTIMIDAÇÃO CONQUISTADORA! ${boss.nome} é esmagado pela diferença de força e cai instantaneamente (${hpRestante} HP eliminados).`);
    estado.bossHP = 0;
    if (typeof atualizarBarrasHP === 'function') atualizarBarrasHP();
    if (typeof window.vencerBoss === 'function') window.vencerBoss();
    else vencerBoss();
    v11AtualizarBotaoIntimidacao();
};

// Mantém o botão atualizado após iniciar uma luta, redesenhar os ataques, ativar
// o Haki do Rei ou mudar o HP do adversário. O botão não é desenhado fora de combate.
const v11MontarPainelAtaquesAnterior = window.montarPainelAtaques;
window.montarPainelAtaques = function montarPainelAtaquesV11(...args) {
    const resultado = typeof v11MontarPainelAtaquesAnterior === 'function'
        ? v11MontarPainelAtaquesAnterior.apply(this, args)
        : undefined;
    v11AtualizarBotaoIntimidacao();
    return resultado;
};

const v11IniciarBossAnterior = window.iniciarBoss;
window.iniciarBoss = function iniciarBossV11(...args) {
    const resultado = typeof v11IniciarBossAnterior === 'function'
        ? v11IniciarBossAnterior.apply(this, args)
        : undefined;
    v11AtualizarBotaoIntimidacao();
    return resultado;
};

const v11ToggleHakiReiAnterior = window.toggleHakiRei;
if (typeof v11ToggleHakiReiAnterior === 'function') {
    window.toggleHakiRei = function toggleHakiReiV11(...args) {
        const resultado = v11ToggleHakiReiAnterior.apply(this, args);
        v11AtualizarBotaoIntimidacao();
        return resultado;
    };
}

const v11AtualizarBarrasAnterior = window.atualizarBarrasHP;
if (typeof v11AtualizarBarrasAnterior === 'function') {
    window.atualizarBarrasHP = function atualizarBarrasHPV11(...args) {
        const resultado = v11AtualizarBarrasAnterior.apply(this, args);
        v11AtualizarBotaoIntimidacao();
        return resultado;
    };
}

// O botão aparece imediatamente quando o Rei desperta durante um turno,
// sem depender de sair e reabrir a batalha para redesenhar a interface.
const v11DespertarReiAnterior = window.despertarHakiRei;
if (typeof v11DespertarReiAnterior === 'function') {
    window.despertarHakiRei = function despertarHakiReiV11(...args) {
        const resultado = v11DespertarReiAnterior.apply(this, args);
        v11AtualizarBotaoIntimidacao();
        return resultado;
    };
}
const v11TentarDespertarReiAnterior = window.tentarDespertarHakiReiNaturalmente;
if (typeof v11TentarDespertarReiAnterior === 'function') {
    window.tentarDespertarHakiReiNaturalmente = function tentarDespertarHakiReiV11(...args) {
        const resultado = v11TentarDespertarReiAnterior.apply(this, args);
        v11AtualizarBotaoIntimidacao();
        return resultado;
    };
}

// Recalcula a apresentação inicial sem exibir nada antes do despertar.
v11AtualizarBotaoIntimidacao();


// V11.1: DESPERTAR DA DON KRIEG NO MI (5%, com bônus em ilhas especiais).
// A chance é aplicada quando a fruta é encontrada. Ilhas especiais aumentam o drop.
const v11MostrarEventoFrutaOriginal = window.mostrarEventoFruta || mostrarEventoFruta;
window.mostrarEventoFruta = function mostrarEventoFrutaComDespertarDonKrieg(frutaEncontrada) {
    const frutaEvento = { ...frutaEncontrada };
    const nomeOriginal = String(frutaEvento.nomeOriginal || frutaEvento.nome || '');
    if (nomeOriginal === 'Yuami Yamkio no Mi' || String(frutaEvento.nome || '').startsWith('Yuami Yamkio no Mi')) {
        const ilhaNome = String(ilhaAtual()?.nome || '');
        const chanceDespertar = 0; // O despertar agora só pode acontecer após derrotar um boss.
        frutaEvento.nomeOriginal = 'Yuami Yamkio no Mi';
        frutaEvento.despertada = false;
        if (frutaEvento.despertada) {
            const imagemDespertarDonKrieg = IMAGENS_DESPERTAR_FRUTAS['Yuami Yamkio no Mi'];
            if (typeof imagemDespertarDonKrieg === 'string' && imagemDespertarDonKrieg.trim()) {
                frutaEvento.img = imagemDespertarDonKrieg.trim();
            }
            frutaEvento.poder = Math.max(Number(frutaEvento.poder || 0), 120);
            frutaEvento.ataquesDespertados = (v7DadosFrutas['Yuami Yamkio no Mi']?.ataques || []).map(golpe => ({ ...golpe }));
            frutaEvento.nomeV2 = 'Yuami Yamkio no Mi • Fúria do Yuami';
        }
        const resultado = typeof v11MostrarEventoFrutaOriginal === 'function'
            ? v11MostrarEventoFrutaOriginal(frutaEvento)
            : undefined;
        if (frutaEvento.despertada) {
            const descricao = document.getElementById('desc-evento');
            if (descricao) descricao.textContent = `⚠️ DESPERTAR MULTIVERSAL DESBLOQUEADO! Chance nesta ilha: ${Math.round(chanceDespertar * 100)}%. Os ataques despertados são absurdamente fortes.`;
        }
        return resultado;
    }
    return typeof v11MostrarEventoFrutaOriginal === 'function'
        ? v11MostrarEventoFrutaOriginal(frutaEvento)
        : undefined;
};

// Reaplica as imagens configuradas antes de cada renderização, incluindo os golpes despertados.
const v11MontarPainelAtaquesAntesImagensFruta = window.montarPainelAtaques;
window.montarPainelAtaques = function montarPainelAtaquesComImagensFruta(...args) {
    aplicarImagensAtaquesDasFrutas();
    if (jogador.fruta) {
        const nome = String(jogador.fruta.nomeOriginal || jogador.fruta.nome || '');
        const catalogo = frutas.find(f => f.nome === nome);
        if (catalogo) {
            (jogador.fruta.ataques || []).forEach(golpe => {
                const url = IMAGENS_ATAQUES_FRUTAS[golpe.nome];
                if (typeof url === 'string' && url.trim()) golpe.img = url.trim();
            });
            (jogador.fruta.ataquesDespertados || []).forEach(golpe => {
                const url = IMAGENS_ATAQUES_DESPERTADOS_FRUTAS[golpe.nome];
                if (typeof url === 'string' && url.trim()) golpe.img = url.trim();
            });
        }
    }
    return typeof v11MontarPainelAtaquesAntesImagensFruta === 'function'
        ? v11MontarPainelAtaquesAntesImagensFruta.apply(this, args)
        : undefined;
};
// ============================================================================
// V11.2: IMAGENS PERSONALIZÁVEIS PARA DESPERTAR DE FRUTAS, SOCO BÁSICO E GOLPES DE ESTILO
// ============================================================================
function v112NomeOriginalFruta(frutaAlvo) {
    return String(frutaAlvo?.nomeOriginal || (frutaAlvo?.nome === 'Hito Hito no Mi, Modelo: Nika' ? 'Gomu Gomu no Mi' : frutaAlvo?.nome) || '');
}

function v112AplicarImagemDespertar(frutaAlvo) {
    if (!frutaAlvo || !frutaAlvo.despertada) return;
    const nome = v112NomeOriginalFruta(frutaAlvo);
    const url = IMAGENS_DESPERTAR_FRUTAS[nome];
    if (typeof url === 'string' && url.trim()) frutaAlvo.img = url.trim();
}

function v112AplicarImagensFormasFruta(frutaAlvo) {
    if (!frutaAlvo?.formas) return;
    const nome = v112NomeOriginalFruta(frutaAlvo);
    Object.entries(frutaAlvo.formas).forEach(([chave, forma]) => {
        const url = IMAGENS_FORMAS_FRUTAS[`${nome}::${chave}`];
        if (typeof url === 'string' && url.trim()) forma.img = url.trim();
    });
}

function v112AplicarTodasImagensAtaquesEstilo() {
    const aplicar = golpe => {
        const url = IMAGENS_ATAQUES_ESTILOS[golpe?.nome];
        if (typeof url === 'string' && url.trim()) golpe.img = url.trim();
    };
    (estilos || []).forEach(estilo => (estilo.ataques || []).forEach(aplicar));
    Object.values(v7GolpesPorEstilo || {}).forEach(formas =>
        Object.values(formas || {}).forEach(golpes => { if (Array.isArray(golpes)) golpes.forEach(aplicar); })
    );
    if (jogador.estiloLuta && jogador.formaEstiloAtual) {
        const formas = transformacoesEstiloV5?.[jogador.estiloLuta];
        const forma = formas?.[jogador.formaEstiloAtual];
        if (forma) {
            const url = IMAGENS_FORMAS_ESTILO?.[forma.nome];
            if (typeof url === 'string' && url.trim()) forma.img = url.trim();
        }
    }
}

// Ao renderizar, aplica os URLs antes de o jogo desenhar os botões.
const v112MontarPainelAtaquesAnterior = window.montarPainelAtaques;
window.montarPainelAtaques = function montarPainelAtaquesComTodasImagensV112(...args) {
    v112AplicarTodasImagensAtaquesEstilo();
    if (jogador.fruta) {
        v112AplicarImagemDespertar(jogador.fruta);
        v112AplicarImagensFormasFruta(jogador.fruta);
        const nome = v112NomeOriginalFruta(jogador.fruta);
        const aplicarGolpe = (golpe, mapa) => {
            const url = mapa[golpe?.nome];
            if (typeof url === 'string' && url.trim()) golpe.img = url.trim();
        };
        (jogador.fruta.ataques || []).forEach(golpe => aplicarGolpe(golpe, IMAGENS_ATAQUES_FRUTAS));
        (jogador.fruta.ataquesDespertados || []).forEach(golpe => aplicarGolpe(golpe, IMAGENS_ATAQUES_DESPERTADOS_FRUTAS));
        Object.values(jogador.fruta.formas || {}).forEach(forma => (forma.ataques || []).forEach(golpe => aplicarGolpe(golpe, IMAGENS_ATAQUES_FRUTAS)));
        // Para formas Zoan geradas pelo jogo, permite personalizar pelo nome exato
        // que aparece no botão, adicionando a chave correspondente ao mapa.
        void nome;
    }
    return typeof v112MontarPainelAtaquesAnterior === 'function'
        ? v112MontarPainelAtaquesAnterior.apply(this, args)
        : undefined;
};

// Se uma fruta despertar durante uma batalha, troca a imagem do perfil também.
const v112DespertarFrutaAnterior = window.despertarFrutaSegundaVida;
window.despertarFrutaSegundaVida = function despertarFrutaComImagemV112(...args) {
    const resultado = typeof v112DespertarFrutaAnterior === 'function'
        ? v112DespertarFrutaAnterior.apply(this, args)
        : false;
    if (resultado && jogador.fruta) {
        v112AplicarImagemDespertar(jogador.fruta);
        v112AplicarImagensFormasFruta(jogador.fruta);
        const imagem = IMAGENS_DESPERTAR_FRUTAS[v112NomeOriginalFruta(jogador.fruta)];
        if (typeof imagem === 'string' && imagem.trim()) {
            const elemento = document.getElementById('img-evento');
            if (elemento) elemento.src = imagem.trim();
        }
    }
    return resultado;
};

// Também cobre a Yuami Yamkio no Mi que já aparece despertada ao ser encontrada.
const v112MostrarEventoFrutaAnterior = window.mostrarEventoFruta;
window.mostrarEventoFruta = function mostrarEventoFrutaComImagemDespertarV112(frutaEncontrada, ...args) {
    const resultado = typeof v112MostrarEventoFrutaAnterior === 'function'
        ? v112MostrarEventoFrutaAnterior.call(this, frutaEncontrada, ...args)
        : undefined;
    if (frutaEncontrada?.despertada) {
        v112AplicarImagemDespertar(frutaEncontrada);
        const nome = v112NomeOriginalFruta(frutaEncontrada);
        const url = IMAGENS_DESPERTAR_FRUTAS[nome];
        if (typeof url === 'string' && url.trim()) {
            const elemento = document.getElementById('img-evento');
            if (elemento) elemento.src = url.trim();
        }
    }
    return resultado;
};

// Atualiza também o retrato do evento se a fruta já estiver equipada e despertada.
if (jogador.fruta?.despertada) v112AplicarImagemDespertar(jogador.fruta);


// ============================================================================
// V11.3: RAÇAS + DESPERTAR DA YUAMI YAMKIO NO MI APÓS BOSSES
// CONFIGURAÇÃO RÁPIDA:
// - Chance base do despertar: 5% (YUAMI_CHANCE_BASE)
// - Quanto mais poder o boss tiver, maior a chance (bônus calculado abaixo, até +30%).
// - Lunarianos: 30% de chance de acender as chamas durante a luta, ficando invulneráveis por 2 rounds.
// - Gigantes: +25% de dano. Humanos: +20% de ganho no treino de Haki. Minks: sem bônus racial.
// - Imagens dos golpes: Ctrl+F IMAGENS_ATAQUES_FRUTAS / IMAGENS_ATAQUES_DESPERTADOS_FRUTAS.
// ============================================================================
const YUAMI_CHANCE_BASE = 0.05;
const YUAMI_BONUS_DIFICULDADE_MAX = 0.30;
const LUNARIANO_CHANCE_CHAMAS = 0.30;
const LUNARIANO_ROUNDS_INVULNERAVEL = 2;

function v113TemYuamiEquipada() {
    return Boolean(jogador.fruta && String(jogador.fruta.nomeOriginal || jogador.fruta.nome || '').startsWith('Yuami Yamkio no Mi'));
}

function v113AtaquesDespertarYuami() {
    return [
        ataque('Pereça', 999999999999, 0, 'PERECA', '210b28'),
        ataque('Olhar de mil jardas', 999999999999, 0, 'OLHAR+DE+MIL+JARDAS', '30103d'),
        ataque('Fúria dos mil homens', 250, 0, 'FURIA+DOS+MIL+HOMENS', '591b45')
    ];
}

function v113ChanceDespertarYuami(boss) {
    const poderBoss = Math.max(0, Number(boss?.poder || 0));
    // 5% garantidos como base + até 30 pontos percentuais conforme o poder do boss.
    const bonusDificuldade = Math.min(YUAMI_BONUS_DIFICULDADE_MAX, poderBoss / 1000);
    return Math.min(0.95, YUAMI_CHANCE_BASE + bonusDificuldade);
}

function v113TentarDespertarYuamiAposBoss(bossVencido) {
    if (!bossVencido || !v113TemYuamiEquipada() || jogador.fruta.despertada) return false;
    const chance = v113ChanceDespertarYuami(bossVencido);
    if (Math.random() >= chance) return false; // Falha silenciosa: o jogo só avisa se der certo.

    jogador.fruta.despertada = true;
    jogador.fruta.nomeOriginal = 'Yuami Yamkio no Mi';
    jogador.fruta.nomeV2 = 'Yuami Yamkio no Mi • Fúria do Yuami';
    jogador.fruta.ataquesDespertados = v113AtaquesDespertarYuami();
    jogador.fruta.poder = Math.max(Number(jogador.fruta.poder || 0), 120);
    estado.furiaYuamiRounds = 0;
    window.montarPainelAtaques?.();
    window.atualizarPoder?.();
    window.atualizarCartaz?.();
    logBatalha(`🌌 DESPERTAR DESBLOQUEADO! A Yuami Yamkio no Mi despertou após derrotar ${bossVencido.nome}! FÚRIA DO YUAMI liberada. Chance nesse boss: ${Math.round(chance * 100)}%.`);
    return true;
}

const v113VencerBossAnteriorYuami = window.vencerBoss;
window.vencerBoss = function vencerBossComChanceDespertarYuami(...args) {
    const bossAntes = estado.bossAtivo ? { ...estado.bossAtivo } : null;
    const hpAntes = Number(estado.bossHP || 0);
    const resultado = typeof v113VencerBossAnteriorYuami === 'function'
        ? v113VencerBossAnteriorYuami.apply(this, args)
        : undefined;
    const venceu = Boolean(bossAntes && (hpAntes <= 0 || Number(estado.bossHP || 0) <= 0 || !estado.bossAtivo));
    if (venceu) v113TentarDespertarYuamiAposBoss(bossAntes);
    return resultado;
};

// Golpes especiais do despertar. Pereça e Olhar de mil jardas são hitkill.
const v113UsarAtaqueAnteriorYuami = window.usarAtaque;
window.usarAtaque = function usarAtaqueComEfeitosYuami(golpe, ...args) {
    if (!golpe || !v113TemYuamiEquipada() || !jogador.fruta.despertada) {
        return typeof v113UsarAtaqueAnteriorYuami === 'function'
            ? v113UsarAtaqueAnteriorYuami.call(this, golpe, ...args) : undefined;
    }
    const nomeGolpe = String(golpe.nome || '');
    if (nomeGolpe === 'Fúria dos mil homens') {
        const resultado = typeof v113UsarAtaqueAnteriorYuami === 'function'
            ? v113UsarAtaqueAnteriorYuami.call(this, golpe, ...args) : undefined;
        estado.furiaYuamiRounds = 5;
        logBatalha('🔥 FÚRIA DOS MIL HOMENS! Seu dano aumentou em 500% pelos próximos 5 rounds.');
        return resultado;
    }
    if (nomeGolpe === 'Pereça' || nomeGolpe === 'Olhar de mil jardas') {
        const hpAntes = Number(estado.bossHP || 0);
        const danoOriginal = golpe.dano;
        golpe.dano = 999999999999;
        try {
            return typeof v113UsarAtaqueAnteriorYuami === 'function'
                ? v113UsarAtaqueAnteriorYuami.call(this, golpe, ...args) : undefined;
        } finally {
            golpe.dano = danoOriginal;
        }
    }
    const resultado = typeof v113UsarAtaqueAnteriorYuami === 'function'
        ? v113UsarAtaqueAnteriorYuami.call(this, golpe, ...args) : undefined;
    return resultado;
};

// Decrementa a Fúria após cada ataque que realmente atingiu o boss, sem contar o golpe que a ativa.
const v113UsarAtaqueContagemFuriaAnterior = window.usarAtaque;
window.usarAtaque = function usarAtaqueContagemFuriaYuami(golpe, ...args) {
    const hpAntes = Number(estado.bossHP || 0);
    const furiaAntes = Number(estado.furiaYuamiRounds || 0);
    const ativaFuria = golpe?.nome === 'Fúria dos mil homens';
    const resultado = typeof v113UsarAtaqueContagemFuriaAnterior === 'function'
        ? v113UsarAtaqueContagemFuriaAnterior.call(this, golpe, ...args) : undefined;
    if (!ativaFuria && furiaAntes > 0 && Number(estado.bossHP || 0) < hpAntes) {
        estado.furiaYuamiRounds = Math.max(0, furiaAntes - 1);
        if (estado.furiaYuamiRounds === 0) logBatalha('🔥 A Fúria dos mil homens terminou.');
    }
    return resultado;
};

// Lunarianos podem despertar as chamas espontaneamente durante uma batalha.
// A rodada protegida é consumida sem dano, mas os cooldowns/turnos continuam avançando.
const v113ContraAtaqueAnteriorChamas = window.contraAtaqueBoss;
window.contraAtaqueBoss = function contraAtaqueComChamasLunarianas(multBoss = 1) {
    const boss = estado.bossAtivo;
    if (!boss || jogador.raca !== 'Lunaria') {
        return typeof v113ContraAtaqueAnteriorChamas === 'function'
            ? v113ContraAtaqueAnteriorChamas.call(this, multBoss) : undefined;
    }
    if (Number(estado.chamasLunarianasRounds || 0) <= 0 && Math.random() < LUNARIANO_CHANCE_CHAMAS) {
        estado.chamasLunarianasRounds = LUNARIANO_ROUNDS_INVULNERAVEL;
        logBatalha('🔥 As chamas Lunarianas despertaram do nada! Você ficará invulnerável por 2 rounds.');
    }
    if (Number(estado.chamasLunarianasRounds || 0) > 0) {
        estado.chamasLunarianasRounds = Math.max(0, Number(estado.chamasLunarianasRounds) - 1);
        estado.tekkaiAtivo = false;
        logBatalha(`🪽 Chamas Lunarianas: o ataque de ${boss.nome} não causou dano! Proteção restante: ${estado.chamasLunarianasRounds} round(s).`);
        tentarDespertarHakiReiNaturalmente();
        atualizarBarrasHP();
        reduzirCooldownsDeAtaques();
        reduzirCooldownsDosAliados();
        estado.ataqueEmAndamento = false;
        estado.aliadoAtacou = false;
        montarPainelAtaques();
        montarPainelAliadosBatalha();
        return;
    }
    return typeof v113ContraAtaqueAnteriorChamas === 'function'
        ? v113ContraAtaqueAnteriorChamas.call(this, multBoss) : undefined;
};

// ============================================================================
// V11.4 HOTFIX: TENRYUUBITO EXCLUSIVO, PROTEÇÃO DOS ALMIRANTES, PÓS-TIMESKIP E FOTOS DO MAPA
// ============================================================================

// Lista de proteção dos Nobres Mundiais. Antes do salto temporal: trio clássico.
// Depois do salto temporal: Kizaru, Fujitora e Ryokugyu.
const ALMIRANTES_TENRYUUBITO_PRE_TIMESKIP = [
    { nome: 'Aokiji (Kuzan)', fatorDano: 1.00 },
    { nome: 'Kizaru (Borsalino)', fatorDano: 1.05 },
    { nome: 'Akainu (Sakazuki)', fatorDano: 1.10 }
];
const ALMIRANTES_TENRYUUBITO_POS_TIMESKIP = [
    { nome: 'Kizaru (Borsalino)', fatorDano: 1.05 },
    { nome: 'Fujitora (Issho)', fatorDano: 1.00 },
    { nome: 'Ryokugyu (Aramaki)', fatorDano: 1.10 }
];

function obterAlmirantesAtuaisTenryuubito() {
    return estado.almirantesPosTimeskip
        ? ALMIRANTES_TENRYUUBITO_POS_TIMESKIP
        : ALMIRANTES_TENRYUUBITO_PRE_TIMESKIP;
}

function chamarAlmiranteTenryuubito(bossAtacado) {
    if (jogador.faccao !== 'Tenryuubito' || estado.tenryuubitoAlmiranteChamado) return false;
    estado.tenryuubitoAlmiranteChamado = true;
    estado.tenryuubitoSocorroPendente = false;

    const lista = obterAlmirantesAtuaisTenryuubito();
    const boss = estado.bossAtivo || bossAtacado;
    logBatalha('☼ Você levou um golpe. Como Tenryuubito, pode convocar um Almirante para intervir. Escolha quem vai cuidar do agressor.');
    if (boss && Number(estado.bossHP || 0) > 0) {
        window.mostrarEscolhaAlmiranteTenryuubito(lista, boss);
    } else {
        logBatalha('☼ O Governo Mundial recebeu o chamado, mas não há um inimigo ativo para o Almirante atacar.');
    }
    return true;
}

function mostrarEscolhaAlmiranteTenryuubito(lista, bossAtacado) {
    if (!el('botoes-evento') || !el('tela-evento')) {
        // Fallback defensivo caso a tela de evento tenha sido removida do HTML.
        window.executarGolpeAlmiranteTenryuubito(lista[0], bossAtacado);
        return;
    }
    el('titulo-evento').textContent = 'ORDEM DO GOVERNO MUNDIAL';
    el('nome-evento').textContent = 'Qual Almirante você vai chamar?';
    el('desc-evento').textContent = `Você sofreu o primeiro golpe desta luta. Escolha quem vai enfrentar ${bossAtacado.nome}. O Almirante assume a luta sozinho; você acompanha o duelo e não ataca enquanto ele estiver em campo. Você pode convocar apenas um Almirante por batalha.`;
    el('img-evento').src = img('ALMIRANTE+CONVOCADO', '263a52', 600, 420);
    el('botoes-evento').innerHTML = '';

    lista.forEach(almirante => {
        const btn = criarBotaoEvento(`CHAMAR ${almirante.nome.toUpperCase()}`, img(almirante.nome.toUpperCase().replaceAll(' ', '+'), '263a52', 220, 130), () => {
            window.executarGolpeAlmiranteTenryuubito(almirante, bossAtacado);
        });
        el('botoes-evento').appendChild(btn);
    });
    mudarTela('tela-evento');
}

function executarGolpeAlmiranteTenryuubito(almirante, bossAtacado) {
    const boss = estado.bossAtivo || bossAtacado;
    if (!boss || Number(estado.bossHP || 0) <= 0) {
        logBatalha(`☼ ${almirante.nome} chegou, mas não há mais um inimigo ativo para atacar.`);
        mudarTela('tela-combate');
        return;
    }

    const hpReferencia = Math.max(1, Number(boss.hpMax || boss.hp || estado.bossHP));
    const danoAlmirante = Math.max(250, Math.round(hpReferencia * 0.30 * almirante.fatorDano));
    estado.bossHP = Math.max(0, Number(estado.bossHP || 0) - danoAlmirante);
    logBatalha(`☼ ${almirante.nome.toUpperCase()} ATENDEU À SUA ORDEM! O Almirante acertou ${danoAlmirante.toLocaleString('pt-BR')} de dano em ${boss.nome}.`);
    atualizarBarrasHP();
    atualizarCartaz();

    if (estado.bossHP <= 0 && estado.bossAtivo) {
        logBatalha(`💥 ${almirante.nome} neutralizou ${boss.nome} antes que a situação ficasse pior.`);
        if (typeof window.vencerBoss === 'function') window.vencerBoss();
        // Não sobrescreve a tela de vitória quando o boss derrotado é o final.
        if (!boss.final) mudarTela('tela-combate');
        return;
    }

    estado.tekkaiAtivo = false;
    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    if (typeof window.montarPainelAtaques === 'function') window.montarPainelAtaques();
    if (typeof window.montarPainelAliadosBatalha === 'function') window.montarPainelAliadosBatalha();
    mudarTela('tela-combate');
}
// O socorro pode evitar a morte instantânea no primeiro golpe: a ordem de um Tenryuubito
// é prioridade máxima para o Governo. Depois do primeiro chamado, mortes são normais.
const v114TratarDerrotaAnteriorTenryuubito = tratarDerrotaContraBoss;
tratarDerrotaContraBoss = function tratarDerrotaTenryuubito(bossDerrota) {
    if (jogador.faccao === 'Tenryuubito' && !estado.tenryuubitoAlmiranteChamado) {
        estado.tenryuubitoSocorroPendente = true;
        jogador.vida = 1;
        atualizarBarrasHP();
        logBatalha('☼ O golpe quase matou você. O Governo Mundial recebeu o alerta e um Almirante está a caminho!');
        return;
    }
    return typeof v114TratarDerrotaAnteriorTenryuubito === 'function'
        ? v114TratarDerrotaAnteriorTenryuubito.call(this, bossDerrota)
        : undefined;
};
window.tratarDerrotaContraBoss = tratarDerrotaContraBoss;

const v114ContraAtaqueAnteriorTenryuubito = window.contraAtaqueBoss;
window.contraAtaqueBoss = function contraAtaqueTenryuubito(multBoss = 1) {
    const hpAntes = Number(jogador.vida || 0);
    const bossAntes = estado.bossAtivo;
    const tinhaSocorroPendente = Boolean(estado.tenryuubitoSocorroPendente);
    const resultado = typeof v114ContraAtaqueAnteriorTenryuubito === 'function'
        ? v114ContraAtaqueAnteriorTenryuubito.call(this, multBoss)
        : undefined;

    const recebeuDano = Number(jogador.vida || 0) < hpAntes;
    const socorroFatal = tinhaSocorroPendente || Boolean(estado.tenryuubitoSocorroPendente);
    if (jogador.faccao === 'Tenryuubito' && !estado.tenryuubitoAlmiranteChamado && (recebeuDano || socorroFatal)) {
        // Se o primeiro golpe teria sido fatal, o caminho de derrota foi suspenso acima;
        // concluímos o turno agora antes de o Almirante entrar.
        if (socorroFatal && Number(jogador.vida || 0) > 0 && estado.bossAtivo && estado.bossHP > 0) {
            reduzirCooldownsDeAtaques();
            reduzirCooldownsDosAliados();
            estado.ataqueEmAndamento = false;
            estado.aliadoAtacou = false;
        }
        chamarAlmiranteTenryuubito(bossAntes);
    }
    return resultado;
};

// Garante que criar outro personagem resete a proteção e o estado temporal.
const v114ResetAnteriorTenryuubito = window.resetarEstadoDoJogador;
window.resetarEstadoDoJogador = function resetarEstadoDoJogadorTenryuubito(...args) {
    const resultado = typeof v114ResetAnteriorTenryuubito === 'function'
        ? v114ResetAnteriorTenryuubito.apply(this, args)
        : undefined;
    estado.tenryuubitoAlmiranteChamado = false;
    estado.tenryuubitoSocorroPendente = false;
    estado.almirantesPosTimeskip = false;
    return resultado;
};

// Atualiza explicitamente miniaturas nos nós do mapa mesmo que um patch antigo redesenhe a rota.
const v114AtualizarMapaAnteriorImagensIlhas = window.atualizarMapRoute;
window.atualizarMapRoute = function atualizarMapaComImagensPersonalizaveis(...args) {
    const resultado = typeof v114AtualizarMapaAnteriorImagensIlhas === 'function'
        ? v114AtualizarMapaAnteriorImagensIlhas.apply(this, args)
        : undefined;
    const mapa = el('rota-ilhas');
    if (!mapa) return resultado;
    mapa.querySelectorAll('.route-node').forEach((node, indiceVisivel) => {
        const tituloNode = node.querySelector('b')?.textContent?.trim();
        if (!tituloNode) return;
        aplicarImagemBotao(node, imagemMapaIlha(tituloNode, indiceVisivel === estado.ilhaIndex));
    });
    return resultado;
};

// O Tenryuubito pode solicitar um Almirante uma vez em cada combate, não apenas uma vez na vida.
const v114IniciarBossAnteriorTenryuubito = window.iniciarBoss;
window.iniciarBoss = function iniciarBossTenryuubito(...args) {
    if (jogador.faccao === 'Tenryuubito') {
        estado.tenryuubitoAlmiranteChamado = false;
        estado.tenryuubitoSocorroPendente = false;
    }
    return typeof v114IniciarBossAnteriorTenryuubito === 'function'
        ? v114IniciarBossAnteriorTenryuubito.apply(this, args)
        : undefined;
};



// ============================================================================
// V11.5: TENRYUUBITO SEM MECÂNICAS DE PIRATA + ALMIRANTE COMPANHEIRO EM TEMPO REAL
// ============================================================================

function atualizarPainelAlmiranteTenryuubito() {
    const painel = el('painel-almirante-tenryuubito');
    const texto = el('status-almirante-tenryuubito');
    if (!painel || !texto) return;
    const ativo = jogador.faccao === 'Tenryuubito' ? estado.tenryuubitoAlmiranteAtivo : null;
    painel.hidden = !ativo || !estado.bossAtivo || Number(estado.bossHP || 0) <= 0;
    texto.textContent = ativo
        ? `${ativo.nome} está lutando ao seu lado • dano por turno: cerca de 4,5% do HP máximo do inimigo`
        : 'Nenhum Almirante convocado';
}

function causarDanoAlmiranteTenryuubito(almirante, chegada = false) {
    const boss = estado.bossAtivo;
    if (jogador.faccao !== 'Tenryuubito' || !almirante || !boss || Number(estado.bossHP || 0) <= 0) {
        return false;
    }

    const hpMaximoBoss = Math.max(1, Number(boss.hpMax || boss.hp || estado.bossHP));
    const variacao = 0.92 + Math.random() * 0.16;
    const percentual = chegada ? 0.08 : 0.045;
    const dano = Math.min(
        Number(estado.bossHP || 0),
        Math.max(20, Math.round(hpMaximoBoss * percentual * Number(almirante.fatorDano || 1) * variacao))
    );
    estado.bossHP = Math.max(0, Number(estado.bossHP || 0) - dano);
    logBatalha(
        chegada
            ? `☼ ${almirante.nome.toUpperCase()} CHEGOU E ATINGIU ${boss.nome} COM ${dano.toLocaleString('pt-BR')} DE DANO! Ele permanece em campo para lutar ao seu lado.`
            : `⚡ ${almirante.nome.toUpperCase()} continua no combate e acerta ${boss.nome}, causando ${dano.toLocaleString('pt-BR')} de dano!`
    );
    atualizarBarrasHP();
    atualizarPainelAlmiranteTenryuubito();

    if (Number(estado.bossHP || 0) <= 0 && estado.bossAtivo) {
        logBatalha(`💥 ${almirante.nome} derrotou ${boss.nome} protegendo o Tenryuubito!`);
        estado.ataqueEmAndamento = false;
        if (typeof window.vencerBoss === 'function') window.vencerBoss();
        return true;
    }
    return false;
}

// Convocar não é mais um ataque isolado: o escolhido passa a ser companheiro da batalha.
const v115ExecutarGolpeAlmiranteAnterior = executarGolpeAlmiranteTenryuubito;
executarGolpeAlmiranteTenryuubito = function executarGolpeAlmiranteTenryuubitoV115(almirante, bossAtacado) {
    const boss = estado.bossAtivo || bossAtacado;
    if (jogador.faccao !== 'Tenryuubito' || !boss || Number(estado.bossHP || 0) <= 0) {
        return typeof v115ExecutarGolpeAlmiranteAnterior === 'function'
            ? v115ExecutarGolpeAlmiranteAnterior.call(this, almirante, bossAtacado)
            : undefined;
    }

    estado.tenryuubitoAlmiranteAtivo = almirante;
    estado.tenryuubitoSocorroPendente = false;
    logBatalha(`☼ ORDEM CONFIRMADA: ${almirante.nome} permanecerá ao seu lado até esta batalha terminar. Ele atacará junto com você a cada turno.`);
    const derrotou = causarDanoAlmiranteTenryuubito(almirante, true);
    atualizarPainelAlmiranteTenryuubito();
    if (derrotou) return;

    estado.tekkaiAtivo = false;
    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    if (typeof window.montarPainelAtaques === 'function') window.montarPainelAtaques();
    if (typeof window.montarPainelAliadosBatalha === 'function') window.montarPainelAliadosBatalha();
    mudarTela('tela-combate');
};

// Antes do contra-ataque inimigo, o Almirante desfere seu golpe de apoio em todos os turnos.
const v115ContraAtaqueAntesAlmirante = window.contraAtaqueBoss;
window.contraAtaqueBoss = function contraAtaqueBossComAlmiranteEmTempoReal(multBoss = 1) {
    const bossAntesDoGolpe = estado.bossAtivo;
    const almirante = jogador.faccao === 'Tenryuubito' ? estado.tenryuubitoAlmiranteAtivo : null;
    if (almirante && bossAntesDoGolpe && Number(estado.bossHP || 0) > 0) {
        const derrotou = causarDanoAlmiranteTenryuubito(almirante, false);
        if (derrotou) return;
    }
    const resultado = typeof v115ContraAtaqueAntesAlmirante === 'function'
        ? v115ContraAtaqueAntesAlmirante.call(this, multBoss)
        : undefined;
    atualizarPainelAlmiranteTenryuubito();
    return resultado;
};

// O painel acompanha a batalha atual. Ao iniciar um novo boss, a convocação da luta anterior termina.
const v115IniciarBossAnterior = window.iniciarBoss;
window.iniciarBoss = function iniciarBossComAlmirantePersistente(...args) {
    estado.tenryuubitoAlmiranteAtivo = null;
    const resultado = typeof v115IniciarBossAnterior === 'function'
        ? v115IniciarBossAnterior.apply(this, args)
        : undefined;
    atualizarPainelAlmiranteTenryuubito();
    return resultado;
};

const v115ResetAnterior = window.resetarEstadoDoJogador;
window.resetarEstadoDoJogador = function resetarEstadoComAlmirante(...args) {
    const resultado = typeof v115ResetAnterior === 'function'
        ? v115ResetAnterior.apply(this, args)
        : undefined;
    estado.tenryuubitoAlmiranteAtivo = null;
    estado.tenryuubitoAlmiranteChamado = false;
    estado.tenryuubitoSocorroPendente = false;
    atualizarPainelAlmiranteTenryuubito();
    return resultado;
};

// O ponto crítico era misturar a facção Tenryuubito com a rota pirata em Cactus Island.
// Esta camada final força as opções de barco a refletirem UMA facção, inclusive em eventos antigos.
const v115PrepararOpcoesBarcoAnterior = window.prepararOpcoesDeBarco;
window.prepararOpcoesDeBarco = function prepararOpcoesBarcoSemMisturarFaccao(...args) {
    const resultado = typeof v115PrepararOpcoesBarcoAnterior === 'function'
        ? v115PrepararOpcoesBarcoAnterior.apply(this, args)
        : undefined;
    if (jogador.faccao === 'Tenryuubito') {
        const pirata = el('opcoes-pirata');
        const marinha = el('opcoes-marinha');
        const tenryuubito = el('opcoes-tenryuubito');
        if (pirata) pirata.hidden = true;
        if (marinha) marinha.hidden = true;
        if (tenryuubito) tenryuubito.hidden = Boolean(estado.barcoConseguido);
        if (el('texto-inicio-ilha')) {
            el('texto-inicio-ilha').textContent = estado.barcoConseguido
                ? `Você viaja sob proteção do Governo Mundial. Embarcação atual: ${jogador.barcoTipo}.`
                : 'Você é um Tenryuubito. O Governo Mundial enviará sua embarcação; roubar barco e escolher a rota pirata não são opções para você.';
        }
    }
    return resultado;
};

// Sorteia a origem especial antes de exigir uma escolha. Se não sair Tenryuubito
// e nenhuma facção estiver marcada, guarda o resultado enquanto o jogador escolhe.
let v116SorteioTenryuubitoPendente = null;
const v115CriarPersonagemAnterior = window.criarPersonagem;
window.criarPersonagem = function criarPersonagemComFaccaoExclusiva(...args) {
    let botaoEscolhido = document.querySelector('.faccao-btn.selecionado');
    if (v116SorteioTenryuubitoPendente === null) {
        v116SorteioTenryuubitoPendente = Math.random() < CHANCE_TENRYUUBITO;
    }
    const nasceuTenryuubito = v116SorteioTenryuubitoPendente;

    if (!botaoEscolhido && !nasceuTenryuubito) {
        window.__v116SorteioTenryuubito = false;
        alert('O sorteio não deu Tenryuubito desta vez. Escolha Marinha ou Pirata para criar seu personagem.');
        return;
    }

    // Para um Tenryuubito sorteado, marca Marinha apenas temporariamente para passar
    // pelas verificações antigas do criador. A facção real vira Tenryuubito no sorteio.
    const botaoTemporario = !botaoEscolhido && nasceuTenryuubito;
    if (botaoTemporario) {
        jogador.faccao = 'Marinha';
        el('btn-marinha')?.classList.add('selecionado');
        botaoEscolhido = el('btn-marinha');
    }
    const faccaoNormalEscolhida = botaoEscolhido?.id === 'btn-marinha' ? 'Marinha' : 'Pirata';
    window.__v116SorteioTenryuubito = nasceuTenryuubito;
    const resultado = typeof v115CriarPersonagemAnterior === 'function'
        ? v115CriarPersonagemAnterior.apply(this, args)
        : undefined;
    window.__v116SorteioTenryuubito = null;
    v116SorteioTenryuubitoPendente = null;

    if (jogador.faccao === 'Tenryuubito') {
        jogador.faccao = 'Tenryuubito';
        document.querySelectorAll('.faccao-btn').forEach(btn => btn.classList.remove('selecionado'));
        if (el('opcoes-pirata')) el('opcoes-pirata').hidden = true;
        if (el('opcoes-marinha')) el('opcoes-marinha').hidden = true;
        if (el('opcoes-tenryuubito')) el('opcoes-tenryuubito').hidden = false;
        if (el('faccao-pirata')) el('faccao-pirata').textContent = 'Tenryuubito';
        if (typeof definirImagemPersonagem === 'function') definirImagemPersonagem();
        if (typeof atualizarCartaz === 'function') atualizarCartaz();
        if (typeof atualizarHeader === 'function') atualizarHeader();
    } else if (jogador.faccao === 'Pirata' || jogador.faccao === 'Marinha') {
        jogador.faccao = faccaoNormalEscolhida;
        if (typeof atualizarCartaz === 'function') atualizarCartaz();
    }
    if (botaoTemporario) document.querySelectorAll('.faccao-btn').forEach(btn => btn.classList.remove('selecionado'));
    prepararOpcoesDeBarco();
    atualizarPainelAlmiranteTenryuubito();
    return resultado;
};

// Guarda adicional: mesmo uma chamada antiga não permite que Tenryuubito seja tratado como pirata.
const v115ResolverReverseMountainAnterior = window.resolverReverseMountain;
window.resolverReverseMountain = function resolverReverseMountainSemTenryuubito(destino) {
    if (jogador.faccao === 'Tenryuubito') {
        estado.ilhaIndex = destino;
        jogador.ilhaIndex = destino;
        estado.maiorIlhaAlcancada = Math.max(estado.maiorIlhaAlcancada, destino);
        estado.bossIndex = 0;
        estado.travessiaResolvida = true;
        log('☼ A escolta do Governo Mundial leva você em segurança. A Reverse Mountain é uma rota pirata, não sua.');
        carregarTelaDaIlha();
        return;
    }
    if (typeof v115ResolverReverseMountainAnterior === 'function') {
        return v115ResolverReverseMountainAnterior.call(this, destino);
    }
};



// ============================================================================
// V11.6: SORTEIO DE TENRYUUBITO ANTES DA FACÇÃO + EPÍTETOS + DUELO DOS ALMIRANTES
// ============================================================================

function gerarEpitetoPersonagem(faccao, genero) {
    const listas = {
        Marinha: {
            comum: ['Lenda do Quartel', 'Sentinela do Mar', 'Sombra da Justiça', 'Escudo do Porto', 'Recruta Improvável'],
            Macho: ['Herói do Pão', 'Punho da Justiça', 'Capitão da Marinha', 'Lobo da Justiça'],
            Fêmea: ['Heroína do Pão', 'Dama da Justiça', 'Capitã da Marinha', 'Loba da Justiça']
        },
        Pirata: {
            comum: ['Ameaça do Porto', 'Sombra do Convés', 'Caos dos Mares', 'Lenda do Mar', 'Terror dos Sete Mares'],
            Macho: ['Zé Pirata', 'Rei do Convés', 'Capitão Ninguém', 'Pirata Sem Lei'],
            Fêmea: ['Dona do Convés', 'Rainha do Caos', 'Capitã Ninguém', 'Pirata Sem Piedade']
        },
        Tenryuubito: {
            comum: ['Nobre de Mary Geoise', 'Excelência Celestial', 'Herança Mundial', 'Vontade Celestial'],
            Macho: ['Jovem Senhor Celestial', 'Príncipe de Mary Geoise'],
            Fêmea: ['Jovem Senhora Celestial', 'Princesa de Mary Geoise']
        }
    };
    const grupo = listas[faccao] || listas.Pirata;
    const especificos = genero === 'Fêmea' ? grupo.Fêmea : grupo.Macho;
    return randomItem([...grupo.comum, ...especificos]);
}

// Mantém o painel da batalha dedicado ao duelo: o Almirante toma o lugar do jogador.
function v116AtualizarInterfaceDueloAlmirante() {
    const almirante = jogador.faccao === 'Tenryuubito' ? estado.tenryuubitoAlmiranteAtivo : null;
    const boss = estado.bossAtivo;
    const dueloAtivo = Boolean(almirante && boss && Number(estado.bossHP || 0) > 0);
    const tituloLutador = document.querySelector('#tela-combate .player-panel .fighter-title');
    const statusPanel = el('painel-almirante-tenryuubito');
    const status = el('status-almirante-tenryuubito');
    const ataques = document.querySelector('#tela-combate .attack-section');
    const haki = document.querySelector('#tela-combate .combat-haki');
    const painelAliados = el('painel-aliados-batalha');
    const botaoSair = el('btn-sair-batalha');
    const resumoPoder = document.querySelector('#tela-combate .battle-head p:not(.combat-advanced-stats)');
    const resumoDano = document.querySelector('#tela-combate .battle-head .combat-advanced-stats');

    if (tituloLutador) tituloLutador.textContent = dueloAtivo ? `${almirante.nome} • LUTANDO POR VOCÊ` : 'VOCÊ';
    if (statusPanel) statusPanel.hidden = !dueloAtivo;
    if (status) {
        status.textContent = dueloAtivo
            ? `${almirante.nome} enfrenta ${boss.nome} sozinho para proteger o Tenryuubito. HP do Almirante: ${Math.max(0, Math.round(estado.tenryuubitoAlmiranteHP || 0)).toLocaleString('pt-BR')} / ${Math.max(0, Math.round(estado.tenryuubitoAlmiranteHPMax || 0)).toLocaleString('pt-BR')}.`
            : 'Nenhum Almirante convocado';
    }
    if (ataques) ataques.hidden = dueloAtivo;
    if (haki) haki.hidden = dueloAtivo;
    if (painelAliados) painelAliados.hidden = dueloAtivo || !jogador.aliados.length;
    if (botaoSair) {
        botaoSair.disabled = dueloAtivo;
        botaoSair.textContent = dueloAtivo ? 'DUELO EM ANDAMENTO' : 'VOLTAR PARA ILHA';
    }

    const hpJogador = el('hp-jogador');
    const hpMaxJogador = el('hp-max-jogador');
    const barraJogador = el('barra-hp-jogador');
    if (dueloAtivo) {
        const hpAtual = Math.max(0, Number(estado.tenryuubitoAlmiranteHP || 0));
        const hpMax = Math.max(1, Number(estado.tenryuubitoAlmiranteHPMax || 1));
        if (hpJogador) hpJogador.textContent = Math.round(hpAtual).toLocaleString('pt-BR');
        if (hpMaxJogador) hpMaxJogador.textContent = Math.round(hpMax).toLocaleString('pt-BR');
        if (barraJogador) barraJogador.style.width = `${Math.max(0, Math.min(100, hpAtual / hpMax * 100))}%`;
        if (resumoPoder) resumoPoder.innerHTML = `Poder do Almirante: <strong id="poder-combate-jogador">${Math.round(Number(almirante.poder || boss.poder * 1.3 || 100))}</strong> • Poder do inimigo: <strong id="poder-combate-boss">${Number(boss.poder || 0).toLocaleString('pt-BR')}</strong>`;
        if (resumoDano) resumoDano.innerHTML = `DANO DO ALMIRANTE: <strong id="dano-combate-jogador">${Math.round(Number(boss.hpMax || boss.hp || 1) * 0.12 * Number(almirante.fatorDano || 1)).toLocaleString('pt-BR')}</strong> • HP DO ALMIRANTE: <strong id="reducao-combate-jogador">${Math.round(hpAtual).toLocaleString('pt-BR')}</strong>`;
    } else {
        if (hpJogador) hpJogador.textContent = Math.max(0, Number(jogador.vida || 0)).toLocaleString('pt-BR');
        if (hpMaxJogador) hpMaxJogador.textContent = Number(jogador.vidaMaxima || 0).toLocaleString('pt-BR');
        if (barraJogador) {
            const pct = Number(jogador.vidaMaxima || 0) > 0 ? Number(jogador.vida || 0) / Number(jogador.vidaMaxima) * 100 : 0;
            barraJogador.style.width = `${Math.max(0, Math.min(100, pct))}%`;
        }
        if (resumoPoder) resumoPoder.innerHTML = `Poder do jogador: <strong id="poder-combate-jogador">${Math.round(Number(jogador.poder || 0))}</strong> • Poder do inimigo: <strong id="poder-combate-boss">${Number(boss?.poder || 0).toLocaleString('pt-BR')}</strong>`;
        if (resumoDano) { const atributos = calcularAtributosCombate(); resumoDano.innerHTML = `DANO: <strong id="dano-combate-jogador">${Math.round(Number(atributos.dano || 0))}</strong> • REDUÇÃO DE DANO: <strong id="reducao-combate-jogador">${Math.round(Number(atributos.reducao || 0))}%</strong>`; }
    }
}

function v116FinalizarDueloAlmirante(motivo) {
    estado.tenryuubitoDueloToken = Number(estado.tenryuubitoDueloToken || 0) + 1;
    estado.tenryuubitoAlmiranteAtivo = null;
    estado.ataqueEmAndamento = false;
    estado.aliadoAtacou = false;
    v116AtualizarInterfaceDueloAlmirante();
    if (typeof window.atualizarBarrasHP === 'function') window.atualizarBarrasHP();
    if (typeof window.montarPainelAtaques === 'function') window.montarPainelAtaques();
    if (typeof window.montarPainelAliadosBatalha === 'function') window.montarPainelAliadosBatalha();
    if (motivo) logBatalha(motivo);
}

function v116RodadaDueloAlmirante(token) {
    if (token !== Number(estado.tenryuubitoDueloToken || 0)) return;
    const almirante = estado.tenryuubitoAlmiranteAtivo;
    const boss = estado.bossAtivo;
    if (jogador.faccao !== 'Tenryuubito' || !almirante || !boss) {
        v116FinalizarDueloAlmirante('O duelo do Almirante foi encerrado.');
        return;
    }
    if (Number(estado.bossHP || 0) <= 0) {
        estado.tenryuubitoAlmiranteAtivo = null;
        estado.ataqueEmAndamento = false;
        v116AtualizarInterfaceDueloAlmirante();
        if (typeof window.vencerBoss === 'function') window.vencerBoss();
        return;
    }

    const hpMaxBoss = Math.max(1, Number(boss.hpMax || boss.hp || estado.bossHP));
    const variacaoAlmirante = 0.94 + Math.random() * 0.12;
    const danoAlmirante = Math.min(
        Number(estado.bossHP || 0),
        Math.max(30, Math.round(hpMaxBoss * 0.12 * Number(almirante.fatorDano || 1) * variacaoAlmirante))
    );
    estado.bossHP = Math.max(0, Number(estado.bossHP || 0) - danoAlmirante);
    logBatalha(`🛡️ ${almirante.nome.toUpperCase()} intercepta ${boss.nome} e luta em seu nome! Causa ${danoAlmirante.toLocaleString('pt-BR')} de dano.`);
    if (typeof window.atualizarBarrasHP === 'function') window.atualizarBarrasHP();
    v116AtualizarInterfaceDueloAlmirante();

    if (Number(estado.bossHP || 0) <= 0) {
        logBatalha(`☼ ${almirante.nome} derrotou ${boss.nome}. O Tenryuubito não precisou entrar no combate.`);
        estado.tenryuubitoAlmiranteAtivo = null;
        estado.ataqueEmAndamento = false;
        v116AtualizarInterfaceDueloAlmirante();
        if (typeof window.vencerBoss === 'function') window.vencerBoss();
        if (typeof window.atualizarBarrasHP === 'function') window.atualizarBarrasHP();
        if (typeof window.montarPainelAtaques === 'function') window.montarPainelAtaques();
        return;
    }

    // O inimigo revida contra o Almirante, nunca contra o Tenryuubito durante o duelo.
    const danoAoAlmirante = Math.max(10, Math.round(Number(boss.poder || 50) * (0.20 + Math.random() * 0.06)));
    estado.tenryuubitoAlmiranteHP = Math.max(0, Number(estado.tenryuubitoAlmiranteHP || 0) - danoAoAlmirante);
    logBatalha(`⚔️ ${boss.nome} reage e atinge ${almirante.nome}. O Almirante perde ${danoAoAlmirante.toLocaleString('pt-BR')} de HP.`);
    if (typeof window.atualizarBarrasHP === 'function') window.atualizarBarrasHP();
    v116AtualizarInterfaceDueloAlmirante();

    if (Number(estado.tenryuubitoAlmiranteHP || 0) <= 0) {
        v116FinalizarDueloAlmirante(`💥 ${boss.nome} conseguiu derrubar ${almirante.nome}! O Tenryuubito está exposto novamente e precisará lutar pessoalmente.`);
        return;
    }
    setTimeout(() => v116RodadaDueloAlmirante(token), 900);
}

// Convocar significa que o Almirante assume a luta inteira, não que vira aliado atacante.
window.executarGolpeAlmiranteTenryuubito = function executarGolpeAlmiranteTenryuubitoV116(almirante, bossAtacado) {
    const boss = estado.bossAtivo || bossAtacado;
    if (jogador.faccao !== 'Tenryuubito' || !almirante || !boss || Number(estado.bossHP || 0) <= 0) {
        mudarTela('tela-combate');
        return;
    }
    estado.tenryuubitoAlmiranteAtivo = { ...almirante, poder: Math.round(Number(boss.poder || 100) * 1.35) };
    estado.tenryuubitoAlmiranteHPMax = Math.max(350, Math.round(Number(boss.hpMax || boss.hp || estado.bossHP) * 0.45));
    estado.tenryuubitoAlmiranteHP = estado.tenryuubitoAlmiranteHPMax;
    estado.tenryuubitoDueloToken = Number(estado.tenryuubitoDueloToken || 0) + 1;
    const token = estado.tenryuubitoDueloToken;
    estado.tenryuubitoSocorroPendente = false;
    estado.ataqueEmAndamento = true;
    estado.aliadoAtacou = false;
    logBatalha(`☼ ORDEM CONFIRMADA: ${almirante.nome} assume a luta contra ${boss.nome}. Você ficará protegido e não atacará enquanto o duelo estiver acontecendo.`);
    mudarTela('tela-combate');
    if (typeof window.atualizarBarrasHP === 'function') window.atualizarBarrasHP();
    v116AtualizarInterfaceDueloAlmirante();
    setTimeout(() => v116RodadaDueloAlmirante(token), 650);
};

// Durante o duelo, bloqueia todo ataque do jogador e deixa o Almirante simular os turnos sozinho.
const v116UsarAtaqueAnterior = window.usarAtaque;
window.usarAtaque = function usarAtaqueDuranteDueloAlmirante(...args) {
    if (jogador.faccao === 'Tenryuubito' && estado.tenryuubitoAlmiranteAtivo) return;
    return typeof v116UsarAtaqueAnterior === 'function' ? v116UsarAtaqueAnterior.apply(this, args) : undefined;
};
const v116ContraAtaqueAnterior = window.contraAtaqueBoss;
window.contraAtaqueBoss = function contraAtaqueDuranteDueloAlmirante(...args) {
    if (jogador.faccao === 'Tenryuubito' && estado.tenryuubitoAlmiranteAtivo) return;
    return typeof v116ContraAtaqueAnterior === 'function' ? v116ContraAtaqueAnterior.apply(this, args) : undefined;
};
const v116AtaqueAliadoAnterior = window.usarAtaqueDoAliado;
window.usarAtaqueDoAliado = function bloquearAtaqueAliadoDuranteDuelo(...args) {
    if (jogador.faccao === 'Tenryuubito' && estado.tenryuubitoAlmiranteAtivo) return;
    return typeof v116AtaqueAliadoAnterior === 'function' ? v116AtaqueAliadoAnterior.apply(this, args) : undefined;
};

const v116AtualizarBarrasHPAnterior = window.atualizarBarrasHP;
window.atualizarBarrasHP = function atualizarBarrasHPComDueloAlmirante(...args) {
    const resultado = typeof v116AtualizarBarrasHPAnterior === 'function'
        ? v116AtualizarBarrasHPAnterior.apply(this, args)
        : undefined;
    v116AtualizarInterfaceDueloAlmirante();
    return resultado;
};
const v116MontarAtaquesAnterior = window.montarPainelAtaques;
window.montarPainelAtaques = function montarPainelAtaquesComDueloAlmirante(...args) {
    const resultado = typeof v116MontarAtaquesAnterior === 'function'
        ? v116MontarAtaquesAnterior.apply(this, args)
        : undefined;
    v116AtualizarInterfaceDueloAlmirante();
    return resultado;
};
const v116IniciarBossAnterior = window.iniciarBoss;
window.iniciarBoss = function iniciarBossLimparDueloAnterior(...args) {
    estado.tenryuubitoDueloToken = Number(estado.tenryuubitoDueloToken || 0) + 1;
    estado.tenryuubitoAlmiranteAtivo = null;
    const resultado = typeof v116IniciarBossAnterior === 'function'
        ? v116IniciarBossAnterior.apply(this, args)
        : undefined;
    v116AtualizarInterfaceDueloAlmirante();
    return resultado;
};
const v116ResetAnterior = window.resetarEstadoDoJogador;
window.resetarEstadoDoJogador = function resetarDueloTenryuubito(...args) {
    estado.tenryuubitoDueloToken = Number(estado.tenryuubitoDueloToken || 0) + 1;
    estado.tenryuubitoAlmiranteAtivo = null;
    const resultado = typeof v116ResetAnterior === 'function' ? v116ResetAnterior.apply(this, args) : undefined;
    v116AtualizarInterfaceDueloAlmirante();
    return resultado;
};

// Texto da tela de escolha e do painel deixa explícito que ele assume o combate sozinho.
const v116MostrarEscolhaAnterior = window.mostrarEscolhaAlmiranteTenryuubito || mostrarEscolhaAlmiranteTenryuubito;
window.mostrarEscolhaAlmiranteTenryuubito = function mostrarEscolhaAlmiranteComoDuelo(lista, bossAtacado) {
    if (el('desc-evento')) el('desc-evento').textContent = `Você levou o primeiro golpe. Escolha um Almirante para enfrentar ${bossAtacado.nome} em seu lugar. Ele lutará sozinho até vencer ou ser derrotado; durante o duelo, você fica protegido e não usa ataques.`;
    return v116MostrarEscolhaAnterior(lista, bossAtacado);
};


// ============================================================================
// V11.7 HOTFIX: O SORTEIO DEFINE SE A TELA DE FACÇÃO DEVE EXISTIR
// Se nascer Tenryuubito, o jogador nunca vê nem interage com Marinha/Pirata.
// O resultado fica fixo ao abrir a página, sem rerrolar ao clicar em criar.
// ============================================================================
const v117NasceuTenryuubitoNaAbertura = Math.random() < CHANCE_TENRYUUBITO;
const v117CriarPersonagemBase = v115CriarPersonagemAnterior;
const v117EscolherFaccaoBase = window.escolherFaccao;

function v117AtualizarTelaOrigem() {
    const blocoFaccao = el('bloco-escolha-faccao');
    const blocoTenryuubito = el('bloco-tenryuubito-sorteado');
    if (blocoFaccao) blocoFaccao.style.display = v117NasceuTenryuubitoNaAbertura ? 'none' : '';
    if (blocoTenryuubito) blocoTenryuubito.style.display = v117NasceuTenryuubitoNaAbertura ? 'block' : 'none';
    if (v117NasceuTenryuubitoNaAbertura) {
        // A tela deixa claro que a facção não é uma escolha neste caso.
        if (el('log-eventos')) {
            el('log-eventos').textContent = '☼ Origem celestial sorteada: você é Tenryuubito. A escolha de facção foi dispensada.';
        }
        document.querySelectorAll('.faccao-btn').forEach(btn => btn.classList.remove('selecionado'));
    } else if (el('log-eventos')) {
        el('log-eventos').textContent = 'Escolha Marinha ou Pirata para começar sua jornada.';
    }
}

// Bloqueia a função de escolha também no JavaScript quando o sorteio especial ocorre.
window.escolherFaccao = function escolherFaccaoComOrigemFixa(faccao) {
    if (v117NasceuTenryuubitoNaAbertura) return;
    if (typeof v117EscolherFaccaoBase === 'function') return v117EscolherFaccaoBase.call(this, faccao);
};

// Substitui o wrapper antigo, que deixava os botões visíveis até o clique em criar.
window.criarPersonagem = function criarPersonagemComTelaDeOrigemCorreta(...args) {
    const botaoEscolhido = document.querySelector('.faccao-btn.selecionado');

    if (!v117NasceuTenryuubitoNaAbertura && !botaoEscolhido) {
        alert('O sorteio não deu Tenryuubito desta vez. Escolha Marinha ou Pirata para criar seu personagem.');
        return;
    }

    // A função-base possui uma checagem antiga que exige facção; para Tenryuubito
    // usamos uma seleção técnica invisível, mas a tela nunca oferece essa escolha.
    if (v117NasceuTenryuubitoNaAbertura) {
        document.querySelectorAll('.faccao-btn').forEach(btn => btn.classList.remove('selecionado'));
        const botaoTecnico = el('btn-marinha');
        if (botaoTecnico) botaoTecnico.classList.add('selecionado');
        jogador.faccao = 'Marinha';
        window.__v116SorteioTenryuubito = true;
    } else {
        jogador.faccao = botaoEscolhido.id === 'btn-marinha' ? 'Marinha' : 'Pirata';
        window.__v116SorteioTenryuubito = false;
    }

    let resultado;
    try {
        resultado = typeof v117CriarPersonagemBase === 'function'
            ? v117CriarPersonagemBase.apply(this, args)
            : undefined;
    } finally {
        window.__v116SorteioTenryuubito = null;
        if (typeof v116SorteioTenryuubitoPendente !== 'undefined') v116SorteioTenryuubitoPendente = null;
    }

    if (v117NasceuTenryuubitoNaAbertura) {
        jogador.faccao = 'Tenryuubito';
        document.querySelectorAll('.faccao-btn').forEach(btn => btn.classList.remove('selecionado'));
        if (el('faccao-pirata')) el('faccao-pirata').textContent = 'Tenryuubito';
        if (el('opcoes-pirata')) el('opcoes-pirata').hidden = true;
        if (el('opcoes-marinha')) el('opcoes-marinha').hidden = true;
        if (el('opcoes-tenryuubito')) el('opcoes-tenryuubito').hidden = false;
        if (typeof definirImagemPersonagem === 'function') definirImagemPersonagem();
        if (typeof atualizarCartaz === 'function') atualizarCartaz();
        if (typeof atualizarHeader === 'function') atualizarHeader();
    }
    return resultado;
};

// Executa ao final do carregamento do script. O resultado do sorteio não muda
// enquanto o jogador estiver nesta tela de criação.
v117AtualizarTelaOrigem();


// V11.8 HOTFIX: GARANTIR QUE A IMAGEM CONFIGURADA DO SOCO BÁSICO SEJA A USADA
// Esta camada final corrige versões anteriores do painel que reconstruíam o botão
// com outra imagem padrão depois de a configuração ter sido lida.
(function instalarImagemConfiguravelDoSocoBasico() {
    const montarAnterior = window.montarPainelAtaques;
    const imagemPadrao = 'https://media.tenor.com/Q_qlUFgmqGsAAAAM/luffy-one-piece.gif';
    window.montarPainelAtaques = function montarPainelAtaquesComImagemDeSoco(...args) {
        const resultado = typeof montarAnterior === 'function' ? montarAnterior.apply(this, args) : undefined;
        const botao = Array.from(document.querySelectorAll('.ataque-btn')).find(btn =>
            btn.querySelector('.ataque-btn-name')?.textContent.trim() === 'Soco Básico'
        );
        if (botao) {
            const url = (typeof IMAGEM_SOCO_BASICO === 'string' && IMAGEM_SOCO_BASICO.trim())
                ? IMAGEM_SOCO_BASICO.trim() : imagemPadrao;
            botao.style.backgroundImage = `url("${url.replace(/"/g, '%22')}")`;
            botao.style.setProperty('--button-img', `url("${url.replace(/"/g, '%22')}")`);
            botao.classList.add('has-button-image');
        }
        return resultado;
    };
})();
