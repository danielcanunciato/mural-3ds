///////////////////////////// TEMPLATE
/*

    {
        id: 0,
        subject: "materia",
        summary: "Resumo",
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

    MATERIAS/"SUBJECT"
    portugues
    matematica
    historia
    modelagem
    mobile
    tcc
    ia
    frontend
    backend
    versionamento
    seducsp

*/
/////////////////////////////////////

// MATERIAS DA BASE \\

// ULTIMO ID: 110
let __PORTUGUES = [];

// ULTIMO ID: 202
let __MATEMATICA = [];

// ULTIMO ID: 304
let __HISTORIA = [];

// MATERIAS DO TECNICO \\

// KASSIO EUGENIO
// ULTIMO ID: 405
let __MODELAGEM_DE_BANCO_DE_DADOS = [];

// ULTIMO ID: 504
let __PROGRAMACAO_MOBILE = [];

// ROGÉRIO ROCHA
// ULTIMO ID: 607
let __INTELIGENCIA_ARTIFICIAL = [];

// ULTIMO ID; 706
let __PROJETO_MULTIDISCIPLINAR_TCC = [];

// JOÃO YOKADA
// ULTIMO ID: 807
let __PROGRAMACAO_FRONTEND = [];

// ULTIMO ID: 907
let __PROGRAMACAO_BACKEND = [];

// ULTIMO ID: 1006
let __VERSIONAMENTO_DE_CODIGO = [];

// ATIVIDADES DA ESCOLA / SEDUC-SP
// ULTIMO ID: 1102
let __SEDUC_SP = [];

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
export const __VERSION__ = "V1.6.57"