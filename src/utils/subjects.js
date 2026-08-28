// MATERIAS DA BASE \\
const __PORTUGUES = [
    {
        summary: "Entrega da Redação 01 (Tarefas)",
        items: [
           "Tema: Combate ao racismo no mercado de trabalho: responsabilidade estatal ou das empresas?"
        ],
        deadline: "21/08/2026",
        priority: false,
        expired: true,
    },

    {
        summary: "Entrega da Redação 01 (Físico)",
        items: [
          "Tema: Combate ao racismo no mercado de trabalho: responsabilidade estatal ou das empresas?"
        ],
        deadline: "24/08/2026",
        priority: false,
        expired: true,
        big: false,
      },
  
      {
        summary: "Apostila (* = NOVO)",
        items: [
            "Aula 1",
            "Aula 2",
            "Aula 3",
            "Aula 4",
            "Aula 5",
            "*Aula 6"
        ],
        deadline: "30/09/2026",
        priority: false,
        expired: false,
        big: false,
      },
  
      {
        summary: "Tarefas",
        items: [
          "Tarefa 1: Variação e Norma",
        ],
        deadline: "12/08/2026",
        priority: false,
        expired: true,
        big: false,
      },
  
      {
        summary: "Tarefas",
        items: [
          "Tarefa 2: Texto dissertativo-argumentativo",
        ],
        deadline: "18/08/2026",
        priority: false,
        expired: true,
        big: false,
      },
  
      {
        summary: "Entrega da Redação 02 (Tarefas)",
        items: [
          "Tema: A manutenção de privilégios e seus impactos no desenvolvimento social brasileiro",
        ],
        deadline: "24/09/2026",
        priority: false,
        expired: false,
        big: false,
      },
  
      {
        summary: "Entrega da Redação 02 (Físico)",
        items: [
          "Tema: A manutenção de privilégios e seus impactos no desenvolvimento social brasileiro",
        ],
        deadline: "28/09/2026",
        priority: false,
        expired: false,
        big: false,
      },
      
      {
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
            deadline: "08/09/2026",
            priority: false,
            expired: false,
            big: true,
        },
    
        {
            summary: "Leia SP",
            items: [
                "OLHOS D'ÁGUA de Conceição Evaristo",
            ],
            deadline: "31/09/2026",
            priority: false,
            expired: false,
            big: false,
        },
    ]
    
const __MATEMATICA = [
    {
        summary: "Tarefas",
        items: [
            "Tarefa 1: Trigonometria no triângulo retângulo",
        ],
        deadline: "31/08/2026",
        priority: false,
        expired: false,
        big: false,
    },

    {
        summary: "Tarefas",
        items: [
            "Tarefa 2: Razões trigonométricas",
        ],
        deadline: "11/09/2026",
        priority: false,
        expired: false,
        big: false,
    },
]

const __HISTORIA = [
    {
        summary:
            "Seminário de História: Criar uma linha do tempo em cartaz feito com papel Kraft",
        items: [
            "EM GRUPO: Grupos do TCC",
            "[28/08] Grupo 1: Guerra Cubana",
            "[28/08] Grupo 2: Revolução Chinesa",
            "[04/09] Grupo 3: Crise e Desagregação da URSS",
        ],
        downloads: {
            folder: "/documentos/historia/seminario/",
            files: ["Historia_Seminario_01.jpeg", "Historia_Seminario_02.jpeg"],
        },
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: true,
    },

    {
        summary:
            "Tarefas SP",
        items: [
            "Tarefa 1: Guerra Fria",
            "Tarefa 2: Nacionalismo e independências na África e Ásia",
            "Tarefa 3: Revolução na China e em Cuba",

        ],
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: false,
    },

    {
        summary:
            "Prepara SP - Logue na Sala do Futuro e depois clique no link",
        items: [
            "História -- Unidade 8: Era Vargas e Guerra-Fria"
        ],
        links: [
            ["Cursos: História", "https://preparasp.jovensgenios.com/cursos/019c07ee-5114-720c-aa0a-8816c7c33a20"]

        ],
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: false,
    },
]

////////////////////////////////////////////////////////////////////////////////

// MATERIAS DO TECNICO \\

// KASSIO EUGENIO 
const __MODELAGEM_DE_BANCO_DE_DADOS = [
    {
        summary: "Registros Semana 15 (EM GRUPO). Pelo menos uma aula.",
        items: ["Aula 1 - Roteiro", "Aula 2 - Roteiro", "Aula 3 - Slide (10 e 11)", "Aula 4 - Roteiro"],
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
        expired: true,
        big: true,
    },

    {
        summary: "[PRAZO EXTENDIDO] Registros Semana 16 (Em Grupo). Pelo menos uma aula.",
        items: ["Aula 1 - Roteiro", "Aula 2 - Slide (20 e 21)", "Aula 3 - Roteiro", "Aula 4 - Roteiro"],
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
    },

    {
        summary: "Registros Semana 17. Pelo menos uma aula.",
        items: ["Aula 1 - Slide (20 e 21)", "Aula 2 - Slide (20 e 21)", "Aula 3 - Roteiro", "Aula 4 - Roteiro"],
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
    },

    {
        summary: "Registros Semana 18. Pelo menos uma aula.",
        items: ["Aula 1 - Roteiro", "Aula 2 - Roteiro"],
        downloads: {
            folder: "/documentos/modelagem/sem18/",
            files: [
            "Modelagem_Sem18_Aula1.docx",
            "Modelagem_Sem18_Aula2.docx",
            ],
        },
        deadline: "30/08/2026",
        priority: false,
        expired: false,
        big: true,
    },
]

const __PROGRAMACAO_MOBILE = [
    {
        summary: "Roteiros (Semana 15) [UMA AULA PELO MENOS]",
        items: [
            "Aula 1 - Perguntas",
            "Aula 2 - Perguntas"
        ],
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
        summary: "Roteiros (Semana 16)",
        items: [
            "Aula 3 - Atividade no Teams",
            "Aula 4 - Atividade no Teams"
        ],
        downloads : {
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
    },
]

// ROGÉRIO ROCHA
const __INTELIGENCIA_ARTIFICIAL = [
    {
        summary: "Roteiro (Semana 15)",
        items: ["Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem15/",
            files: ["InteligenciaArtificial_Sem15.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
        summary: "Roteiro (Semana 16)",
        items: ["Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem16/",
            files: ["InteligenciaArtificial_Sem16.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
        summary: 'Relatório "Mulheres Mil"',
        items: ["Relatório em Folha de Almaço"],
        deadline: "18/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
        summary: "Roteiro (Semana 17)",
        items: ["Aula 3 - Roteiro"],
        downloads: {
            folder: "/documentos/ia/sem17/",
            files: ["InteligenciaArtificial_Sem17.docx"],
        },
        deadline: "30/08/2026",
        priority: false,
        expired: false,
        big: false,
    },

]

const __PROJETO_MULTIDISCIPLINAR_TCC = [
    {
        summary: "Semana 15: Leitura dos slides e roteiro",
        items: ["Documentação", "Quadro Kanban", "Aula 1 em slide de PowerPoint", "Aula 2 em documento pdf"],
        downloads: {
            folder: "/documentos/tcc/sem15/",
            files: ["TCC_Slides_Aula1_SEM15.pdf", "TCC_Roteiro_Aula2_SEM15.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: true,
    },

    {
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
        expired: true,
        big: true,
    },

    {
        summary: "Semana 17: Leitura dos slides e roteiro",
        items: ["Documentação", "Quadro Kanban", "Aula 1, 2 e 3: Documento em pdf"],
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
        expired: true,
        big: true,
    },

    {
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
        expired: true,
        big: true,
    },

    {
        summary: "Semana 19: Leitura dos slides e roteiro",
        items: [
            "Documentação",
            "Quadro Kanban",
            "Aula 1, 2 e 3: Documento em pdf",
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
    },
]

// JOÃO YOKADA
const __PROGRAMACAO_FRONTEND = [
    {
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
        expired: true,
        big: true,
    },

    {
        summary: "Registro (Semana 16)",
        items: ["Aula 1: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/frontend/sem16/",
            files: ["Frontend_Sem16.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
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
    },

    {
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
    },
]

const __PROGRAMACAO_BACKEND = [
    {
        summary: "Registro (Semana 15)",
        items: ["Aula 3: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/backend/sem15/",
            files: ["Backend_Sem15.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
        summary: "Registro (Semana 16)",
        items: ["Aula 2: Roteiro Adaptado"],
        downloads: {
            folder: "/documentos/backend/sem16/",
            files: ["Backend_Sem16.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
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
    },

    {
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
    },
]

const __VERSIONAMENTO_DE_CODIGO = [
    {
        summary: "Registro (Semana 15)",
        items: ["Semana 15: Aula 2"],
        downloads: {
            folder: "/documentos/versionamento/sem15/",
            files: ["Versionamento_Sem15.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
        summary: "Registro (Semana 16)",
        items: ["Semana 16: Aula 3"],
        downloads: {
            folder: "/documentos/versionamento/sem16/",
            files: ["Versionamento_Sem16.docx"],
        },
        deadline: "21/08/2026",
        priority: false,
        expired: true,
        big: false,
    },

    {
        summary: "Registro (Semana 17)",
        items: ["Semana 17: Aula 3"],
        downloads: {
            folder: "/documentos/versionamento/sem17/",
            files: ["Versionamento_Sem17.docx"],
        },
        deadline: "28/08/2026",
        priority: false,
        expired: false,
        big: false,
    },

    {
        summary: "Registro (Semana 18)",
        items: ["Semana 18: Aula 3"],
        downloads: {
            folder: "/documentos/versionamento/sem18/",
            files: ["Versionamento_Sem18.docx"],
        },
        deadline: "04/09/2026",
        priority: false,
        expired: false,
        big: false,
    },
]

////////////////////////////////////////////////////////////////////////////////

// ATIVIDADES DA ESCOLA / SEDUC-SP
const __SEDUC_SP = [
    {
        summary: "Prepara SP - Simulados",
        items: [
            "Linguagens",
            "Ciências Humanas",
            "Matemática",
            "Ciências da Natureza"
        ],
        deadline: "24/08/2026",
        priority: false,
        expired: true,
        big: false,
    }
]

////////////////////////////////////////////////////////////////////////////////

function atualizarPrazos(materias) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const regexData = /(\d{2})\/(\d{2})\/(\d{4})/;

    materias.forEach(materia => {
        if (!materia || typeof materia.deadline !== 'string') {
            return; 
        }

        const match = materia.deadline.match(regexData);

        if (match) {
            const dia = parseInt(match[1], 10);
            const mes = parseInt(match[2], 10) - 1;
            const ano = parseInt(match[3], 10);

            const dataPrazo = new Date(ano, mes, dia);
            dataPrazo.setHours(0, 0, 0, 0);

            const diferencaTempo = dataPrazo.getTime() - hoje.getTime();
            const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

            if (diferencaDias < 0) {
                materia.expired = true;
            } else {
                materia.expired = false;
            }

            if (diferencaDias === 0) {
                if (!materia.deadline.includes('(HOJE)')) {
                    materia.deadline = `${match[0]} (HOJE)`;
                }
            }

            if (diferencaDias >= 0 && diferencaDias <= 3) {
                materia.priority = true;
            } else {
                materia.priority = false;
            }
        }
    });
}

const todasAsMaterias = [
    ...(typeof __PORTUGUES !== 'undefined' ? __PORTUGUES : []),
    ...(typeof __MATEMATICA !== 'undefined' ? __MATEMATICA : []),
    ...(typeof __HISTORIA !== 'undefined' ? __HISTORIA : []),
    ...(typeof __MODELAGEM_DE_BANCO_DE_DADOS !== 'undefined' ? __MODELAGEM_DE_BANCO_DE_DADOS : []),
    ...(typeof __PROGRAMACAO_MOBILE !== 'undefined' ? __PROGRAMACAO_MOBILE : []),
    ...(typeof __INTELIGENCIA_ARTIFICIAL !== 'undefined' ? __INTELIGENCIA_ARTIFICIAL : [])
];

atualizarPrazos(todasAsMaterias);


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
}