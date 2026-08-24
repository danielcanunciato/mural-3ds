import "./App.css";

import {
  ArrowBigUpDash,
  BookText,
  ClockAlert,
  Download,
  Info,
  MessageSquareQuote,
  OctagonAlert,
} from "lucide-react";
import { useEffect, useRef, useState, memo, useCallback, useMemo } from "react";

const DownloadButton = memo(function DownloadButton({ item_name, item_path }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${item_path}${item_name}`;
    link.download = item_name;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button type="button" className="download-btn" onClick={handleDownload}>
      {item_name}
    </button>
  );
});

const Card = memo(function Card({
  content,
  teacher,
  subject,
  downloads,
  isExpired,
  delay = 0,
}) {
  return (
    <div
      className={`card ${isExpired ? "expired" : ""} card--enter`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isExpired && <p className="expired-lesson">EXPIRADO</p>}

      <h2 className="card-title">
        <MessageSquareQuote id="title-icon" className="lricon" /> {teacher}
      </h2>

      <small>
        <p className="subject">{subject}</p>
      </small>

      <p className="card-summary">
        <Info id="desc-icon" className="lricon med" /> {content.summary}
      </p>

      <ul className="card-list">
        {content.items.map((value, index) => (
          <li className="card-item" key={index}>
            <BookText className="lricon small" /> {value}
          </li>
        ))}
      </ul>

      {downloads && Object.keys(downloads)?.length > 0 && (
        <ul className="card-list" style={{ marginTop: "10px" }}>
          <p className="downloads-title">Downloads</p>
          {downloads.files.map((item, i) => (
            <li className="card-item" key={i}>
              <div className="download-div">
                <Download className="lricon-d" />
                <DownloadButton item_name={item} item_path={downloads.folder} />
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className="card-footer" style={{ color: "#f0a8a8" }}>
        <ClockAlert className="lricon small" style={{ color: "#f0a8a8" }} />{" "}
        Prazo: {content.deadline}
      </p>
    </div>
  );
});

const subjects_contents = {
  portugues: [
    {
      summary: "Entrega da Redação (Tarefas)",
      items: [],
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Entrega da Redação (Físico)",
      items: [],
      deadline: "18/08/2026",
      expired: true,
    },
    {
      summary: "Apostila",
      items: ["Até a Página 31"],
      deadline: "30/09/2026",
      expired: false,
    },
    {
      summary: "Tarefas",
      items: [
        "Tarefa 1: Variação e Norma",
        "Tarefa 2: Texto dissertativo-argumentativo",
      ],
      deadline: "T1: 12/08/2026 // T2: 18/08/2026",
      expired: true,
    },
  ],
  matematica: [
    {
      summary: "Tarefas",
      items: [
        "Tarefa 1: Trigonometria no triângulo retângulo",
      ],
      deadline: "31/08/2026",
      expired: false,
    },
  ],
  historia: [
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
      deadline: "28/08/2026 - 04/09/2026",
      expired: false,
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
      expired: false,
    },
  ],
  modelagem: [
    {
      summary: "Registros Semana 15 (Em Grupo)",
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
      expired: true,
    },
    {
      summary: "Registros Semana 16 (Em Grupo)",
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
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Registros Semana 17",
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
      deadline: "23/08/2026 (Domingo)",
      expired: true,
    },
  ],
  mobile: [
    {
      summary: "Roteiros (Semana 15) [UMA AULA PELO MENOS]",
      items: [
        "Aula 1 - Perguntas",
        "Aula 2 - Perguntas"
      ],
      deadline: "21/08/2026",
      expired: false
    },

    {
      summary: "Roteiros (Semana 16) [UMA AULA PELO MENOS]",
      items: [
        "Aula 1 - Perguntas",
        "Aula 2 - Perguntas"
      ],
      deadline: "21/08/2026",
      expired: false
    },
  ],

  ia: [
    {
      summary: "Roteiro (Semana 15)",
      items: ["Aula 3 - Roteiro"],
      downloads: {
        folder: "/documentos/ia/sem15/",
        files: ["InteligenciaArtificial_Sem15.docx"],
      },
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Roteiro (Semana 16)",
      items: ["Aula 3 - Roteiro"],
      downloads: {
        folder: "/documentos/ia/sem16/",
        files: ["InteligenciaArtificial_Sem16.docx"],
      },
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Roteiro (Semana 17)",
      items: ["Aula 3 - Roteiro"],
      downloads: {
        folder: "/documentos/ia/sem17/",
        files: ["InteligenciaArtificial_Sem17.docx"],
      },
      deadline: "23/08/2026",
      expired: false,
    },
    {
      summary: 'Relatório "Mulheres Mil"',
      items: ["Relatório em Folha de Almaço"],
      deadline: "18/08/2026",
      expired: true,
    },
  ],
  tcc: [
    {
      summary: "Semana 15: Leitura dos slides e roteiro",
      items: ["Documentação", "Quadro Kanban", "Aula 1 em slide de PowerPoint", "Aula 2 em documento pdf"],
      downloads: {
        folder: "/documentos/tcc/sem15/",
        files: ["TCC_Slides_Aula1_SEM15.pdf", "TCC_Roteiro_Aula2_SEM15.docx"],
      },
      deadline: "21/08/2026",
      expired: true,
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
      expired: true,
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
      expired: true,
    },
    {
      summary: "Semana 18: Leitura dos slides e roteiro",
      items: [
        "Documentação",
        "Quadro Kanban",
        "Aula 1, 2 e 3: Documento em pdf",
        "Resto a ser instruído",
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
      deadline: "23/08/2026 (Domingo)",
      expired: true,
    },
  ],
  frontend: [
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
      expired: true,
    },
    {
      summary: "Registro (Semana 16)",
      items: ["Aula 1: Roteiro Adaptado"],
      downloads: {
        folder: "/documentos/frontend/sem16/",
        files: ["Frontend_Sem16.docx"],
      },
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Registro (Semana 17)",
      items: ["Aula 2: Roteiro Adaptado"],
      downloads: {
        folder: "/documentos/frontend/sem17/",
        files: ["Frontend_Sem17.docx"],
      },
      deadline: "28/08/2026",
      expired: false,
    },
  ],
  backend: [
    {
      summary: "Registro (Semana 15)",
      items: ["Aula 2: Roteiro Adaptado"],
      downloads: {
        folder: "/documentos/backend/sem15/",
        files: ["Backend_Sem15.docx"],
      },
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Registro (Semana 16)",
      items: ["Aula 2: Roteiro Adaptado"],
      downloads: {
        folder: "/documentos/backend/sem16/",
        files: ["Backend_Sem16.docx"],
      },
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Registro (Semana 17)",
      items: ["Aula 2: Roteiro Adaptado"],
      downloads: {
        folder: "/documentos/backend/sem17/",
        files: ["Backend_Sem17.docx"],
      },
      deadline: "28/08/2026",
      expired: false,
    },
  ],
  versionamento: [
    {
      summary: "Registro (Semana 15)",
      items: ["Semana 15: Aula 2"],
      downloads: {
        folder: "/documentos/versionamento/sem15/",
        files: ["Versionamento_Sem15.docx"],
      },
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Registro (Semana 16)",
      items: ["Semana 16: Aula 3"],
      downloads: {
        folder: "/documentos/versionamento/sem16/",
        files: ["Versionamento_Sem16.docx"],
      },
      deadline: "21/08/2026",
      expired: true,
    },
    {
      summary: "Registro (Semana 17)",
      items: ["Semana 17: Aula 3"],
      downloads: {
        folder: "/documentos/versionamento/sem17/",
        files: ["Versionamento_Sem17.docx"],
      },
      deadline: "28/08/2026",
      expired: false,
    },
  ],

  seducsp: [
    {
      summary: "Prepara SP - Simulados",
      items: [
        "Linguagens",
        "Ciências Humanas",
        "Matemática",
        "Ciências da Natureza"
      ],
      deadline: "24/08/2026",
      expired: false
    }
  ]
};

export default function App() {
  const subjectRef = useRef({});

  const [selectedSubject, setSelectedSubject] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isAutoScrolling = useRef(false);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const JumpToSection = useCallback(
    (subjectID) => {
      const targetElement = subjectRef.current[subjectID];
      if (targetElement) {
        isAutoScrolling.current = true;
        isUserScrolling.current = false;
        setSelectedSubject(subjectID);
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!selectedSubject) return;

    const handleScrollEv = () => {
      if (isAutoScrolling.current) return;
      isUserScrolling.current = true;
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        isUserScrolling.current = false;
      }, 150);
    };

    const handleScrollEndEv = () => {
      isAutoScrolling.current = false;
      setTimeout(() => {
        if (!isUserScrolling.current && !isAutoScrolling.current) {
          setSelectedSubject("");
        }
      }, 750);
    };

    window.addEventListener("scroll", handleScrollEv);
    window.addEventListener("scrollend", handleScrollEndEv);

    return () => {
      window.removeEventListener("scroll", handleScrollEv);
      window.removeEventListener("scrollend", handleScrollEndEv);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [selectedSubject]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSortedItems=(subjectKey)=>{
    const items = subjects_contents[subjectKey] || [];

    return [...items].sort((a,b)=>(a.expired?1:0)-(b.expired?1:0));
  }

  const prioridades = [
    ["PREPARA SP - SIMULAODS", "HOJE (24/08/2026)"]
  ]

  return (
    <>
      <img className="title-img" src={"/titulo.png"} />
      <p className="description">
        Atividades recentes serão mostrados aqui com o prazo
      </p>

      <p style={{ textAlign: "center", fontWeight: "bold" }}>TÉCNICO</p>
      <div className="jumpto" style={{marginBottom: "30px"}}>
        {[
          "modelagem de banco de dados",
          "programação mobile",
          "inteligência artificial",
          "projeto multidisciplinar (tcc)",
          "programação front-end",
          "programação back-end",
          "versionamento de código",
        ].map((item, index) => (
          <button
            className="jumpto-btn"
            onClick={() => JumpToSection(`0${index}`)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>

      <p style={{ textAlign: "center", fontWeight: "bold" }}>BASE</p>
      <div className="jumpto">
        {["português", "matemática", "história"].map((item, index) => (
          <button
            className="jumpto-btn"
            onClick={() => JumpToSection(`1${index}`)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      
      { prioridades.length > 0 &&
        <>
        
          <div className="divider"></div>

          <div className="priority-holder">
            <h1 className="priority-title">ATIVIDADES EM PRIORIDADES</h1>
            <ul className="priority-list">
              {
                prioridades.map((prioridade, k) => (
                  <li>
                    <p><b>{prioridade[0]}</b></p>
                    <small><p><OctagonAlert className="lricon small" />ATÉ: {prioridade[1]}</p></small>
                  </li>
                ))
              }
            </ul>
          </div>
        </>
      }

      <div className="divider"></div>

      <h1 className="category-title">MATÉRIAS DO TÉCNICO</h1>

      <div className="cards-holder">
        <h1
          ref={(el) => (subjectRef.current["00"] = el)}
          style={{ backgroundColor: "rgb(19, 39, 110)" }}
          className={`section-title ${
            selectedSubject == "00" ? "subject-selected" : ""
          }`}
        >
          Modelagem de Banco de Dados
        </h1>

        <section className="section-subject">
          {getSortedItems("modelagem").map((item, index) => (
            <Card
              key={index}
              teacher={"Profº Kassio Eugenio"}
              subject={"MODELAGEM DE BANCO DE DADOS"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              downloads={item.downloads}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>

        <h1
          ref={(el) => (subjectRef.current["01"] = el)}
          style={{ backgroundColor: "rgb(49, 158, 37)" }}
          className={`section-title ${
            selectedSubject == "01" ? "subject-selected" : ""
          }`}
        >
          Programação Mobile
        </h1>

        <section className="section-subject">
          {getSortedItems("mobile").map((item, index) => (
            <Card
              key={index}
              teacher={"Profº Kassio Eugenio"}
              subject={"PROGRAMAÇÃO MOBILE"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>

        <h1
          ref={(el) => (subjectRef.current["02"] = el)}
          style={{ backgroundColor: "rgb(46, 142, 183)" }}
          className={`section-title ${
            selectedSubject == "02" ? "subject-selected" : ""
          }`}
        >
          Inteligência Artificial
        </h1>

        <section className="section-subject">
          {getSortedItems("ia").map((item, index) => (
            <Card
              key={index}
              teacher={"Profº Rogério Rocha"}
              subject={"INTELIGÊNCIA ARTIFICIAL"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              downloads={item.downloads}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>

        <h1
          ref={(el) => (subjectRef.current["03"] = el)}
          style={{ backgroundColor: "rgb(215, 109, 27)" }}
          className={`section-title ${
            selectedSubject == "03" ? "subject-selected" : ""
          }`}
        >
          Projeto Multidisciplinar (TCC)
        </h1>

        <section className="section-subject">
          {getSortedItems("tcc").map((item, index) => (
            <Card
              key={index}
              teacher={"Profº Rogério Rocha"}
              subject={"PROJETO MULTIDISCIPLINAR (TCC)"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              downloads={item.downloads}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>

        <h1
          ref={(el) => (subjectRef.current["04"] = el)}
          style={{ backgroundColor: "rgb(232, 188, 57)" }}
          className={`section-title ${
            selectedSubject == "04" ? "subject-selected" : ""
          }`}
        >
          Programação Front-End
        </h1>

        <section className="section-subject">
          {getSortedItems("frontend").map((item, index) => (
            <Card
              key={index}
              teacher={"Profº João Yokada"}
              subject={"PROGRAMAÇÃO FRONT-END"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              downloads={item.downloads}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>

        <h1
          ref={(el) => (subjectRef.current["05"] = el)}
          style={{ backgroundColor: "rgb(178, 50, 217)" }}
          className={`section-title ${
            selectedSubject == "05" ? "subject-selected" : ""
          }`}
        >
          Programação Back-End
        </h1>

        <section className="section-subject">
          {getSortedItems("backend").map((item, index) => (
            <Card
              key={index}
              teacher={"Profº João Yokada"}
              subject={"PROGRAMAÇÃO BACK-END"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              downloads={item.downloads}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>

        <h1
          ref={(el) => (subjectRef.current["06"] = el)}
          style={{ backgroundColor: "rgb(255, 0, 195)" }}
          className={`section-title ${
            selectedSubject == "06" ? "subject-selected" : ""
          }`}
        >
          Versionamento de Código
        </h1>

        <section className="section-subject">
          {getSortedItems("versionamento").map((item, index) => (
            <Card
              key={index}
              teacher={"Profº João Yokada"}
              subject={"VERSIONAMENTO DE CÓDIGO"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              downloads={item.downloads}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>
      </div>

      <div className="divider"></div>

      <h1 className="category-title">MATÉRIAS DA BASE</h1>

      <div className="cards-holder">
        <h1
          ref={(el) => (subjectRef.current["10"] = el)}
          style={{ backgroundColor: "rgb(50, 86, 217)" }}
          className={`section-title ${
            selectedSubject == "10" ? "subject-selected" : ""
          }`}
        >
          Português
        </h1>

        <section className="section-subject">
          {getSortedItems("portugues").map((item, index) => (
            <Card
              key={index}
              teacher={"Profª Maria Madalena"}
              subject={"PORTUGUÊS"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>

        <h1
          ref={(el) => (subjectRef.current["11"] = el)}
          style={{ backgroundColor: "rgb(190, 31, 31)" }}
          className={`section-title ${
            selectedSubject == "11" ? "subject-selected" : ""
          }`}
        >
          Matemática
        </h1>

        <section className="section-subject">
          {getSortedItems("matematica").map((item, index) => (
            <Card
              key={index}
              teacher={"Profº Jakson Aparecido"}
              subject={"MATEMÁTICA"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>

        <h1
          ref={(el) => (subjectRef.current["12"] = el)}
          style={{ backgroundColor: "rgb(103, 57, 21)" }}
          className={`section-title ${
            selectedSubject == "12" ? "subject-selected" : ""
          }`}
        >
          História
        </h1>

        <section className="section-subject">
          {getSortedItems("historia").map((item, index) => (
            <Card
              key={index}
              teacher={"Profª Cláudia Lopes"}
              subject={"HISTÓRIA"}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              downloads={item.downloads}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>
      </div>

      <div className="divider"></div>

      <h1 className="category-title">OUTRAS ATIVIDADS</h1>

      <div className="cards-holder">
          
        <h1
          ref={(el) => (subjectRef.current["10"] = el)}
          style={{ backgroundColor: "rgb(65, 215, 157)" }}
          className={`section-title ${
            selectedSubject == "10" ? "subject-selected" : ""
          }`}
        >
          SEDUC-SP
        </h1>

        <section className="section-subject">
          {getSortedItems("seducsp").map((item, index) => (
            <Card
              key={index}
              teacher={"SEDUC-SP"}
              subject={""}
              content={{
                summary: item.summary,
                items: item.items,
                deadline: item.deadline,
              }}
              downloads={item.downloads}
              isExpired={item.expired}
              delay={index * 60}
            />
          ))}
        </section>
      </div>


      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-btn"
        >
          <ArrowBigUpDash />
        </button>
      )}
    </>
  );
}