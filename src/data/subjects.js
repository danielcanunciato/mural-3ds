// MATERIAS DA BASE \\

let __PORTUGUES = [
    {
        id: 100,
        subject: "portugues",
        summary: "Entrega da Redação 01 (Tarefas)",
        items: [
            "Tema: Combate ao racismo no mercado de trabalho: responsabilidade estatal ou das empresas?"
        ],
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        concluded: false,
    },

    {
        id: 101,
        subject: "portugues",
        summary: "Entrega da Redação 01 (Físico)",
        items: [
            "Tema: Combate ao racismo no mercado de trabalho: responsabilidade estatal ou das empresas?"
        ],
        deadline: "24/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 102,
        subject: "portugues",
        summary: "Apostila (* = NOVO)",
        items: [
            "Aula 1 até a Aula 6",
        ],
        deadline: "30/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 103,
        subject: "portugues",
        summary: "Tarefas",
        items: [
            "Tarefa 1: Variação e Norma",
        ],
        deadline: "12/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 104,
        subject: "portugues",
        summary: "Tarefas",
        items: [
            "Tarefa 2: Texto dissertativo-argumentativo",
        ],
        deadline: "18/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 105,
        subject: "portugues",
        summary: "Entrega da Redação 02 (Tarefas)",
        items: [
            "Tema: A manutenção de privilégios e seus impactos no desenvolvimento social brasileiro",
        ],
        deadline: "24/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 106,
        subject: "portugues",
        summary: "Entrega da Redação 02 (Físico)",
        items: [
            "Tema: A manutenção de privilégios e seus impactos no desenvolvimento social brasileiro",
        ],
        deadline: "28/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 107,
        subject: "portugues",
        summary: "Seminário - A terceira geração modernista. Trabalho em grupo com os grupos do TCC",
        items: [
            "Apresentação visual DEVE ser feito pelo Canva",
            "Divisão do conteúdo DEVE ser equilibrada.",
            "Cada grupo tem de 15 a 20 minutos de apresentação.",
            "",
            "GRUPO 1: João Cabral de Melo Neto",
            "GRUPO 2: Guimarães Rosa",
            "GRUPO 3: Clarice Lispector",
        ],
        deadline: "14/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 108,
        subject: "portugues",
        summary: "Leia SP",
        items: [
            "OLHOS D'ÁGUA de Conceição Evaristo",
        ],
        deadline: "31/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 109,
        subject: "portugues",
        summary: "Tarefas SP",
        items: [
            "Tarefa 3: Modernismo: Terceira Geração I",
            "Tarefa 4: Modernismo: Terceira Geração II",
        ],
        deadline: "08/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 110,
        subject: "portugues",
        summary: "Tarefas SP",
        items: [
            "Tarefa 5: Resenha e reflexão crítica"
        ],
        deadline: "08/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 111,
        subject: "portugues",
        summary: "Tarefas SP",
        items: [
            "Tarefa 8: Manifesto e Intervenção Social"
        ],
        deadline: "16/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
];

let __MATEMATICA = [
    {
        id: 200,
        subject: "matematica",
        summary: "Tarefas",
        items: [
            "Tarefa 1: Trigonometria no triângulo retângulo",
        ],
        deadline: "31/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 201,
        subject: "matematica",
        summary: "Tarefas",
        items: [
            "Tarefa 2: Razões trigonométricas",
        ],
        deadline: "11/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 202,
        subject: "matematica",
        summary: "Tarefas",
        items: [
            "Tarefa 3: Trigonometria na circunferência trigonométrica",
            "Tarefa 6: Resolução de problemas envolvendo trigonometria",
        ],
        deadline: "25/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
];

let __HISTORIA = [
    {
        id: 300,
        subject: "historia",
        summary:
            "Seminário de História: Criar uma linha do tempo em cartaz feito com papel Kraft. Datas dos grupos 1 e 2 foram extendidas para a semana posterior.",
        items: [
            "EM GRUPO: Grupos do TCC",
            "[03/09] Grupo 1: Guerra Cubana",
            "[03/09] Grupo 2: Revolução Chinesa",
            "[04/09] Grupo 3: Crise e Desagregação da URSS",
        ],
        downloads: {
            folder: "/documentos/historia/seminario/",
            files: [
                "Historia_Seminario_01.jpeg",
                "Historia_Seminario_02.jpeg"
            ],
        },
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 301,
        subject: "historia",
        summary: "Tarefas SP",
        items: [
            "Tarefa 1: Guerra Fria",
            "Tarefa 2: Nacionalismo e independências na África e Ásia",
            "Tarefa 3: Revolução na China e em Cuba",
        ],
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
    
    {
        id: 302,
        subject: "historia",
        summary:
            "Prepara SP - Logue na Sala do Futuro e depois clique no link",
        items: [
            "História -- Unidade 8: Era Vargas e Guerra-Fria"
        ],
        links: [
            [
                "Cursos: História",
                "https://preparasp.jovensgenios.com/cursos/019c07ee-5114-720c-aa0a-8816c7c33a20"
            ]
        ],
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
    
    {
        id: 303,
        subject: "historia",
        summary: "Apostila",
        items: [
            "Aula 1 até a Aula 12"
        ],
        deadline: "18/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 304,
        subject: "historia",
        summary: "Tarefas SP",
        items: [
            "Tarefa 4: Crise e desagregação da URSS",
            "Tarefa 5: Jânio, Jango e o fim da democracia no Brasil",
            "Tarefa 6: Ditadura civil-militar no Brasil e na América Latina",
            "Tarefa 7: Resistência à ditadura",
        ],
        deadline: "19/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },
];

// MATERIAS DO TECNICO \\

// KASSIO EUGENIO

let __MODELAGEM_DE_BANCO_DE_DADOS = [
    {
        id: 400,
        subject: "modelagem",
        summary: "Registros Semana 15 (EM GRUPO). Pelo menos uma aula.",
        items: [
            "Aula 1 - Roteiro",
            "Aula 2 - Roteiro",
            "Aula 3 - Slide (10 e 11)",
            "Aula 4 - Roteiro"
        ],
        downloads: {
            folder: "/documentos/modelagem/sem15/",
            files: [
                "Modelagem_Sem15_Aula1.docx",
                "Modelagem_Sem15_Aula2.docx",
                "Modelagem_Sem15_Aula3.pdf",
                "Modelagem_Sem15_Aula4.docx",
            ],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 401,
        subject: "modelagem",
        summary: "[PRAZO EXTENDIDO] Registros Semana 16 (Em Grupo). Pelo menos uma aula.",
        items: [
            "Aula 1 - Roteiro",
            "Aula 2 - Slide (20 e 21)",
            "Aula 3 - Roteiro",
            "Aula 4 - Roteiro"
        ],
        downloads: {
            folder: "/documentos/modelagem/sem16/",
            files: [
                "Modelagem_Sem16_Aula1.docx",
                "Modelagem_Sem16_Aula2.pdf",
                "Modelagem_Sem16_Aula3.docx",
                "Modelagem_Sem16_Aula4.docx",
            ],
        },
        deadline: "26/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 402,
        subject: "modelagem",
        summary: "Registros Semana 17. Pelo menos uma aula.",
        items: [
            "Aula 1 - Slide (20 e 21)",
            "Aula 2 - Slide (20 e 21)",
            "Aula 3 - Roteiro",
            "Aula 4 - Roteiro"
        ],
        downloads: {
            folder: "/documentos/modelagem/sem17/",
            files: [
                "Modelagem_Sem17_Aula1.pdf",
                "Modelagem_Sem17_Aula2.docx",
                "Modelagem_Sem17_Aula3.docx",
                "Modelagem_Sem17_Aula4.docx",
            ],
        },
        deadline: "30/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 403,
        subject: "modelagem",
        summary: "Registros Semana 18. Pelo menos uma aula.",
        items: [
            "Aula 1 - Roteiro",
            "Aula 2 - Roteiro"
        ],
        downloads: {
            folder: "/documentos/modelagem/sem18/",
            files: [
                "Modelagem_Sem18_Aula1.docx",
                "Modelagem_Sem18_Aula2.docx",
            ],
        },
        deadline: "06/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 404,
        subject: "modelagem",
        summary: "Registros Semana 19. Pelo menos uma aula.",
        items: [
            "Aula 1 - Roteiro",
            "Aula 2 - Roteiro",
            "Aula 3 - Roteiro",
            "Aula 4 - Roteiro"
        ],
        downloads: {
            folder: "/documentos/modelagem/sem18/",
            files: [
                "Modelagem_Sem18_Aula1.docx",
                "Modelagem_Sem18_Aula2.docx",
                "Modelagem_Sem18_Aula3.docx",
                "Modelagem_Sem18_Aula4.docx",
            ],
        },
        deadline: "13/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 405,
        subject: "modelagem",
        summary: "Avaliação",
        items: [
            "Avaliação Bimestral [3º BIMESTRE]"
        ],
        deadline: "14/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },
];

let __PROGRAMACAO_MOBILE = [
    {
        id: 500,
        subject: "mobile",
        summary: "Roteiros (Semana 15). Pelo menos uma aula.",
        items: [
            "Aula 1 - Perguntas",
            "Aula 2 - Perguntas"
        ],
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 501,
        subject: "mobile",
        summary: "Roteiros (Semana 16). Pelo menos uma aula.",
        items: [
            "Aula 3 - Atividade no Teams",
            "Aula 4 - Atividade no Teams"
        ],
        downloads: {
            folder: "/documentos/mobile/sem16/",
            files: [
                "Mobile_Semana16_Aula3.docx",
                "Mobile_Semana16_Aula4.pdf",
                "AULA4-index.html",
                "AULA4-estilo.css"
            ]
        },
        deadline: "30/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 502,
        subject: "mobile",
        summary: "Roteiros (Semana 17). Pelo menos uma aula.",
        items: [
            "Aula 1 - Roteiro",
            "Aula 2 - Roteiro",
            "Aula 4 - Roteiro",
        ],
        downloads: {
            folder: "/documentos/mobile/sem17/",
            files: [
                "Mobile_Semana17_Aula1.docx",
                "Mobile_Semana17_Aula2.docx",
                "Mobile_Semana17_Aula4.docx",
            ]
        },
        deadline: "06/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 503,
        subject: "mobile",
        summary: "Roteiros (Semana 18). Pelo menos uma aula.",
        items: [
            "Aula 1 - Roteiro : ATÉ 08/09/2026",
            "Aula 2 - Roteiro",
            "Aula 3 - Roteiro",
        ],
        downloads: {
            folder: "/documentos/mobile/sem18/",
            files: [
                "Mobile_Semana18_Aula1.docx",
                "Mobile_Semana18_Aula2.docx",
                "Mobile_Semana18_Aula3.docx",
            ]
        },
        deadline: "13/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 504,
        subject: "mobile",
        summary: "Avaliação",
        items: [
            "Avaliação Bimestral [3º BIMESTRE]"
        ],
        deadline: "14/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },
];

// ROGÉRIO ROCHA

let __INTELIGENCIA_ARTIFICIAL = [
    {
        id: 600,
        subject: "ia",
        summary: "Roteiro (Semana 15) [PRAZO EXTENDIDO]",
        items: ["Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem15/",
            files: ["InteligenciaArtificial_Sem15.docx"],
        },
        deadline: "05/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 601,
        subject: "ia",
        summary: "Roteiro (Semana 16) [PRAZO EXTENDIDO]",
        items: ["Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem16/",
            files: ["InteligenciaArtificial_Sem16.docx"],
        },
        deadline: "05/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 602,
        subject: "ia",
        summary: 'Relatório "Mulheres Mil"',
        items: ["Relatório em Folha de Almaço"],
        deadline: "18/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 603,
        subject: "ia",
        summary: "Roteiro (Semana 17) [PRAZO EXTENDIDO]",
        items: ["Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem17/",
            files: ["InteligenciaArtificial_Sem17.docx"],
        },
        deadline: "05/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 604,
        subject: "ia",
        summary: "Roteiro (Semana 18) [PRAZO EXTENDIDO]",
        items: ["Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem18/",
            files: ["InteligenciaArtificial_Sem18.docx"],
        },
        deadline: "05/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 605,
        subject: "ia",
        summary: "Roteiro (Semana 19)",
        items: ["Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem19/",
            files: ["InteligenciaArtificial_Sem19.docx"],
        },
        deadline: "13/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 606,
        subject: "ia",
        summary: "Roteiro (Semana 20)",
        items: ["Aula 2 - Roteiro", "Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem19/",
            files: [
                "InteligenciaArtificial_Sem20_Aula2.docx",
                "InteligenciaArtificial_Sem20_Aula3.docx"
            ],
        },
        deadline: "13/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 607,
        subject: "ia",
        summary: "Avaliação",
        items: [
            "Avaliação Bimestral [3º BIMESTRE]"
        ],
        deadline: "14/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    }
];

let __PROJETO_MULTIDISCIPLINAR_TCC = [
    {
        id: 700,
        subject: "tcc",
        summary: "Semana 15: Leitura dos slides e roteiro",
        items: [
            "Documentação",
            "Quadro Kanban",
            "Aula 1 em slide de PowerPoint",
            "Aula 2 em documento pdf"
        ],
        downloads: {
            folder: "/documentos/tcc/sem15/",
            files: [
                "TCC_Slides_Aula1_SEM15.pdf",
                "TCC_Roteiro_Aula2_SEM15.docx"
            ],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 701,
        subject: "tcc",
        summary: "Semana 16: Leitura dos slides e roteiro",
        items: [
            "Documentação",
            "Imagem do relatório da primeira apresentação dos MVPs",
            "Quadro Kanban",
            "Aula 1 e 2: Documento em pdf",
            "Aula 3: Documento em pdf",
        ],
        downloads: {
            folder: "/documentos/tcc/sem16/",
            files: [
                "TCC_Roteiro_Aula1_SEM16.docx",
                "TCC_Roteiro_Aula2_SEM16.docx",
                "TCC_Roteiro_Aula3_SEM16.docx",
            ],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 702,
        subject: "tcc",
        summary: "Semana 17: Leitura dos slides e roteiro",
        items: [
            "Documentação",
            "Quadro Kanban",
            "Aula 1, 2 e 3: Documento em pdf"
        ],
        downloads: {
            folder: "/documentos/tcc/sem17/",
            files: [
                "TCC_Roteiro_Aula1_SEM17.docx",
                "TCC_Roteiro_Aula2_SEM17.docx",
                "TCC_Roteiro_Aula3_SEM17.docx",
            ],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 703,
        subject: "tcc",
        summary: "Semana 18: Leitura dos slides e roteiro",
        items: [
            "Documentação",
            "Quadro Kanban",
            "Aula 1, 2 e 3: Documento em pdf",
        ],
        downloads: {
            folder: "/documentos/tcc/sem18/",
            files: [
                "TCC_Roteiro_Aula1_SEM18.docx",
                "TCC_Roteiro_Aula2_SEM18.docx",
                "TCC_Roteiro_Aula3_SEM18.docx",
                "TCC_MaterialDeApoio_SEM18.xlsx",
            ],
        },
        deadline: "23/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 704,
        subject: "tcc",
        summary: "Semana 19: Leitura dos slides e roteiro",
        items: [
            "Documentação",
            "Quadro Kanban",
            "Aula 1, 2 e 3: Documento em pdf",
            "Melhoria contínua do MVP",
        ],
        downloads: {
            folder: "/documentos/tcc/sem19/",
            files: [
                "TCC_Roteiro_Aula1_SEM19.docx",
                "TCC_Roteiro_Aula2_SEM19.docx",
                "TCC_Roteiro_Aula3_SEM19.docx",
            ],
        },
        deadline: "30/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 705,
        subject: "tcc",
        summary: "Semana 20: Leitura dos slides e roteiro",
        items: [
            "Documentação",
            "Quadro Kanban",
            "Aula 1, 2 e 3: Documento em pdf",
            "Formularío para pesquisa de campo",
        ],
        downloads: {
            folder: "/documentos/tcc/sem20/",
            files: [
                "TCC_Roteiro_Aula1_SEM20.docx",
                "TCC_Roteiro_Aula2_SEM20.docx",
                "TCC_Roteiro_Aula3_SEM20.docx",
                "TCC_MaterialDeApoio_SEM20.xlsx",
            ],
        },
        deadline: "06/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 706,
        subject: "tcc",
        summary: "Semana 21: Leitura dos slides e roteiro",
        items: [
            "Documentação",
            "Quadro Kanban",
            "Aula 1, 2 e 3: Documento em pdf",
            "Formularío para pesquisa de campo",
        ],
        downloads: {
            folder: "/documentos/tcc/sem20/",
            files: [
                "TCC_Roteiro_Aula1_SEM21.docx",
                "TCC_Roteiro_Aula2_SEM21.docx",
                "TCC_Roteiro_Aula3_SEM21.docx",
            ],
        },
        deadline: "13/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },
];

// JOÃO YOKADA

let __PROGRAMACAO_FRONTEND = [
    {
        id: 800,
        subject: "frontend",
        summary: "Registro (Semana 15)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/frontend/sem15/",
            files: [
                "Frontend_Sem15.docx",
                "Roteiro-Teorico_Sem15.docx",
                "imagem1.jpg",
                "imagem2.jpg",
                "imagem3.jpg",
            ],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 801,
        subject: "frontend",
        summary: "Registro (Semana 16)",
        items: ["Aula 1: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/frontend/sem16/",
            files: ["Frontend_Sem16.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 802,
        subject: "frontend",
        summary: "Registro (Semana 17)",
        items: ["Aula 2: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/frontend/sem17/",
            files: ["Frontend_Sem17.docx"],
        },
        deadline: "28/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 803,
        subject: "frontend",
        summary: "Registro (Semana 18)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/frontend/sem18/",
            files: ["Frontend_Sem18.docx"],
        },
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 804,
        subject: "frontend",
        summary: "Registro (Semana 19)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/frontend/sem19/",
            files: ["Frontend_Sem19_Adaptado.docx"],
        },
        deadline: "11/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
    
    {
        id: 805,
        subject: "frontend",
        summary: "Atividade Bimestral",
        items: [
            "Criar um site de portfólio com todas as 7 matérias do técnico",
            "Hospedar o site no Vercel (ReactJS) ou no GitHub Pages (Static)",
            "O site deve conter uma página pra cada máteria contendo um resumo da matéria e uma print do envio de cada semana dessa matéria"
        ],
        deadline: "28/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 806,
        subject: "frontend",
        summary: "Registro (Semana 20)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/frontend/sem20/",
            files: ["Frontend_Sem20_AtividadePratica.docx", "Frontend_Sem20_Roteiro.docx", "produto.jpg"],
        },
        deadline: "25/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 807,
        subject: "frontend",
        summary: "Registro (Semana 21)",
        items: ["Aula 2: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/frontend/sem21/",
            files: ["Frontend_Sem21.docx"],
        },
        deadline: "25/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
];

let __PROGRAMACAO_BACKEND = [
    {
        id: 900,
        subject: "backend",
        summary: "Registro (Semana 15)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/backend/sem15/",
            files: ["Backend_Sem15.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 901,
        subject: "backend",
        summary: "Registro (Semana 16)",
        items: ["Aula 2: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/backend/sem16/",
            files: ["Backend_Sem16.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 902,
        subject: "backend",
        summary: "Registro (Semana 17)",
        items: ["Aula 2: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/backend/sem17/",
            files: ["Backend_Sem17.docx"],
        },
        deadline: "28/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 903,
        subject: "backend",
        summary: "Registro (Semana 18)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/backend/sem18/",
            files: ["Backend_Sem18.docx"],
        },
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 904,
        subject: "backend",
        summary: "Registro (Semana 19)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/backend/sem19/",
            files: ["Backend_Sem19.docx"],
        },
        deadline: "11/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 905,
        subject: "backend",
        summary: "Atividade Bimestral",
        items: [
            "Criar um site de portfólio com todas as 7 matérias do técnico",
            "Hospedar o site no Vercel (ReactJS) ou no GitHub Pages (Static)",
            "O site deve conter uma página pra cada máteria contendo um resumo da matéria e uma print do envio de cada semana dessa matéria"
        ],
        deadline: "28/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 906,
        subject: "backend",
        summary: "Registro (Semana 20)",
        items: [
            "Mapa Mental: Comparar AWS Lambda com Azure Functions"
        ],
        deadline: "25/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 907,
        subject: "backend",
        summary: "Registro (Semana 21)",
        items: ["Aula 1: Roteito Adaptado"],
        downloads: {
            folder: "/documentos/backend/sem21/",
            files: ["Backend_Sem21.docx"],
        },
        deadline: "25/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
];

let __VERSIONAMENTO_DE_CODIGO = [
    {
        id: 1000,
        subject: "versionamento",
        summary: "Registro (Semana 15)",
        items: ["Aula 2: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/versionamento/sem15/",
            files: ["Versionamento_Sem15.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 1001,
        subject: "versionamento",
        summary: "Registro (Semana 16)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/versionamento/sem16/",
            files: ["Versionamento_Sem16.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 1002,
        subject: "versionamento",
        summary: "Registro (Semana 17)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/versionamento/sem17/",
            files: ["Versionamento_Sem17.docx"],
        },
        deadline: "28/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 1003,
        subject: "versionamento",
        summary: "Registro (Semana 18)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/versionamento/sem18/",
            files: ["Versionamento_Sem18.docx"],
        },
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 1004,
        subject: "versionamento",
        summary: "Registro (Semana 19)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/versionamento/sem19/",
            files: ["Versionamento_Sem19.docx"],
        },
        deadline: "11/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 1005,
        subject: "versionamento",
        summary: "Atividade Bimestral",
        items: [
            "Criar um site de portfólio com todas as 7 matérias do técnico",
            "Hospedar o site no Vercel (ReactJS) ou no GitHub Pages (Static)",
            "O site deve conter uma página pra cada máteria contendo um resumo da matéria e uma print do envio de cada semana dessa matéria"
        ],
        deadline: "28/09/2026",
        priority: false,
        expired: false,
        big: true,
        concluded: false,
    },

    {
        id: 1006,
        subject: "versionamento",
        summary: "Registro (Semana 20)",
        items: [
            "Fluxograma da Topologia da Mensagem"
        ],
        deadline: "25/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
];

// ATIVIDADES DA ESCOLA / SEDUC-SP

let __SEDUC_SP = [
    {
        id: 1100,
        subject: "seducsp",
        summary: "Prepara SP - Simulados",
        items: [
            "Linguagens",
            "Ciências Humanas",
            "Matemática",
            "Ciências da Natureza"
        ],
        deadline: "24/08/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 1101,
        subject: "seducsp",
        summary: "Pesquisas de Campo",
        items: [
            "Avaliação das Práticas PEI - APP 2ª edição 2026"
        ],
        deadline: "18/09/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },

    {
        id: 1102,
        subject: "seducsp",
        summary: "Especial Revisão Prova Paulista 3º Bimestre",
        items: [
            "Ciências da Natureza",
            "Ciências Humanas",
            "Linguagens",
            "Matemática"
        ],
        deadline: "02/10/2026",
        priority: false,
        expired: false,
        big: false,
        concluded: false,
    },
];

// ============================================================================

let preservedBoolean = [];

function atualizarPrazos(materias) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const regexData = /(\d{2})\/(\d{2})\/(\d{4})/;

    materias.forEach(materia => {

        const materiaItems = [
            materia.id,
            materia.concluded
        ];

        // Keep preservedBoolean available outside this function
        const existing = preservedBoolean.find(
            item => item[0] === materia.id
        );

        if (existing) {
            existing[1] = materia.concluded;
        } else {
            preservedBoolean.push(materiaItems);
        }

        if (!materia || typeof materia.deadline !== "string") {
            return;
        }

        const match = materia.deadline.match(regexData);

        if (match) {
            const dia = parseInt(match[1], 10);
            const mes = parseInt(match[2], 10) - 1;
            const ano = parseInt(match[3], 10);

            const dataPrazo = new Date(ano, mes, dia);
            dataPrazo.setHours(0, 0, 0, 0);

            const diferencaTempo =
                dataPrazo.getTime() - hoje.getTime();

            const diferencaDias = Math.round(
                diferencaTempo / (1000 * 60 * 60 * 24)
            );

            if (diferencaDias < 0) {
                materia.expired = true;
            } else {
                materia.expired = false;
            }

            if (diferencaDias === 0) {
                if (!materia.deadline.includes("(HOJE)")) {
                    materia.deadline = `${match[0]} (HOJE)`;
                }
            }

            if (diferencaDias >= 0 && diferencaDias <= 2) {
                materia.priority = true;
            } else {
                materia.priority = false;
            }
        }
    });
}

function saveConcludedValues() {
    localStorage.setItem(
        "concludedItems",
        JSON.stringify(preservedBoolean)
    );
}

const todasAsMaterias = [
    ...(typeof __PORTUGUES !== "undefined" ? __PORTUGUES : []),
    ...(typeof __MATEMATICA !== "undefined" ? __MATEMATICA : []),
    ...(typeof __HISTORIA !== "undefined" ? __HISTORIA : []),
    ...(typeof __MODELAGEM_DE_BANCO_DE_DADOS !== "undefined"
        ? __MODELAGEM_DE_BANCO_DE_DADOS
        : []),
    ...(typeof __PROGRAMACAO_MOBILE !== "undefined"
        ? __PROGRAMACAO_MOBILE
        : []),
    ...(typeof __INTELIGENCIA_ARTIFICIAL !== "undefined"
        ? __INTELIGENCIA_ARTIFICIAL
        : []),
    ...(typeof __PROJETO_MULTIDISCIPLINAR_TCC !== "undefined"
        ? __PROJETO_MULTIDISCIPLINAR_TCC
        : []),
    ...(typeof __PROGRAMACAO_FRONTEND !== "undefined"
        ? __PROGRAMACAO_FRONTEND
        : []),
    ...(typeof __PROGRAMACAO_BACKEND !== "undefined"
        ? __PROGRAMACAO_BACKEND
        : []),
    ...(typeof __VERSIONAMENTO_DE_CODIGO !== "undefined"
        ? __VERSIONAMENTO_DE_CODIGO
        : []),
    ...(typeof __SEDUC_SP !== "undefined"
        ? __SEDUC_SP
        : []),
];

export const subjects_contents = {
    portugues: __PORTUGUES,
    matematica: __MATEMATICA,
    historia: __HISTORIA,

    modelagem: __MODELAGEM_DE_BANCO_DE_DADOS,
    mobile: __PROGRAMACAO_MOBILE,

    ia: __INTELIGENCIA_ARTIFICIAL,
    tcc: __PROJETO_MULTIDISCIPLINAR_TCC,

    frontend: __PROGRAMACAO_FRONTEND,
    backend: __PROGRAMACAO_BACKEND,
    versionamento: __VERSIONAMENTO_DE_CODIGO,

    seducsp: __SEDUC_SP,
};

export function updateConcludedValue(id, value) {
    const materia = todasAsMaterias.find(
        item => item.id === id
    );

    if (!materia) {
        console.error("Matéria não encontrada:", id);
        return;
    }

    // Update the original object
    materia.concluded = value;

    // Find the existing saved ID
    const savedMateria = preservedBoolean.find(
        item => item[0] === id
    );

    if (savedMateria) {
        // Update only this ID
        savedMateria[1] = value;
    } else {
        // Add this ID without removing the others
        preservedBoolean.push([id, value]);
    }

    // Save the complete array
    saveConcludedValues();
}


// Load all concluded values from localStorage
function loadConcludedValues() {
    const savedValues = JSON.parse(
        localStorage.getItem("concludedItems")
    ) || [];

    // Restore the entire saved array
    preservedBoolean = savedValues;

    // Apply each saved value to the original object
    savedValues.forEach(([id, value]) => {
        const materia = todasAsMaterias.find(
            item => item.id === id
        );

        if (materia) {
            materia.concluded = value;
        }
    });
}

// Load saved values when the module starts
const findStorage = localStorage.getItem("concludedItems");

if (findStorage) {
    loadConcludedValues();

    // Still update deadlines, priority and expired status
    atualizarPrazos(todasAsMaterias);
} else {
    atualizarPrazos(todasAsMaterias);
    saveConcludedValues();
}

//VERSIONING
export const __VERSION__ = "V1.5.54"