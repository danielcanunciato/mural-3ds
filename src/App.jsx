import "./App.css";

import {
  ArrowBigUpDash,
  BookOpenText,
  BrainCog,
  Database,
  FolderGit2,
  HardDrive,
  LayoutTemplate,
  OctagonAlert,
  Presentation,
  Pyramid,
  Smartphone,
  SquareRadical,
  Map,
  School,
  Eye,
} from "lucide-react";

import { useEffect, useRef, useState, useCallback } from "react";

import Card from "./components/Card";
import { subjects_contents } from "./utils/subjects"

export default function App() {
  const subjectRef = useRef({});

  const [selectedSubject, setSelectedSubject] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isAutoScrolling = useRef(false);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const [targetDisabled, setTargetDisabled] = useState("0");

  const JumpToSection = useCallback(
    (subjectID) => {
      const targetElement = subjectRef.current[subjectID];
      setTargetDisabled(subjectID);

      if (targetElement) {
        isAutoScrolling.current = true;
        isUserScrolling.current = false;

        setTimeout(
          ()=>{    
            setSelectedSubject(subjectID);
            setTargetDisabled("0");
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
          },
          
          150
        )
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
      }, 150);
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

  const getSortedItems = (subjectKey) => {
    const items = subjects_contents[subjectKey] ? [...subjects_contents[subjectKey]].reverse() : [];
  
    return [...items].sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority ? -1 : 1;
      }
      
      if (b.expired !== a.expired) {
        return a.expired ? 1 : -1;
      }
  
      return 0;
    });
  }

  const getSortedPriority = () => {
    const priorityItems = [];
  
    Object.keys(subjects_contents).forEach((subjectKey) => {
      const items = subjects_contents[subjectKey] || [];

      const filtered = items.filter(item => item.priority === true);
  
      filtered.forEach(item => {
        priorityItems.push([subjectKey, item.summary, item.deadline]);
      });
    });
  
    return priorityItems;
  };  

  const prioridades = getSortedPriority();

  return (
    <main>
      <img className="title-img" src={"/titulo.png"} />
      <h2 className="description">
        Atividades recentes serão mostrados aqui com o prazo.
      </h2>

      <p className="description" style={{marginTop: "-20px"}}>
        Atividades que estão de <span style={{fontWeight: "bold", textDecoration: "underline"}}>2 à 4 dias</span> para o prazo, serão marcados como <span style={{color: "gold", fontWeight: "bold"}}>PRIORIDADE</span> (card amarelo)
      </p>

      <p className="description" style={{marginTop: "-20px"}}>
        Atividades que estão fora do prazo, serão marcados como <span style={{color: "red", fontWeight: "bold"}}>EXPIRADO</span> (card vermelho)
      </p>

      <p className="description" style={{marginTop: "-30px"}}>
        Cards de atividades com muita informação tem um botão de <span style={{color: "cyan"}}><b>Olho <Eye className="lricon" style={{color: "cyan", transform: "translateY(6px)"}} /></b></span> para expandir e mostrar mais informações
      </p>

      <h2 style={{ textAlign: "center", fontWeight: "bold", color: "#b9f7fa" }}>MATÉRIAS DO TÉCNICO</h2>
      <div className="jumpto" style={{marginBottom: "40px"}}>
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
            disabled={targetDisabled == `0${index}` ? true : false}
          >
            {item}
          </button>
        ))}
      </div>

      <h2 style={{ textAlign: "center", fontWeight: "bold", color: "#f79494" }}>MATÉRIAS DA BASE</h2>
      <div className="jumpto">
        {["língua portuguesa", "matemática", "história"].map((item, index) => (
          <button
            className="jumpto-btn"
            onClick={() => JumpToSection(`1${index}`)}
            key={index}
            disabled={targetDisabled == `1${index}` ? true : false}
          >
            {item}
          </button>
        ))}
      </div>

      <h2 style={{ textAlign: "center", fontWeight: "bold", marginTop: "50px", color: "#99f794" }}>ATIVIDADES DA ESCOLA / SEDUC-SP</h2>
      <div className="jumpto">
        {["seducsp"].map((item, index) => (
          <button
            className="jumpto-btn"
            onClick={() => JumpToSection(`2${index}`)}
            key={index}
            disabled={targetDisabled == `2${index}` ? true : false}
          >
            {item}
          </button>
        ))}
      </div>
      
      { prioridades.length > 0 &&
        <>
        
          <div className="divider"></div>

          <div className="priority-holder item-stroke">
            <h1 className="priority-title">ATIVIDADES EM PRIORIDADES</h1>
            <ul className="priority-list">
              {
                prioridades.map((prioridade, k) => (
                  <li key={k}>
                    <p>

                      <span style={{textTransform: "uppercase", fontWeight: "bold"}}>{prioridade[0]}</span>: {prioridade[1]}

                    </p>

                    <small><p style={{textDecoration: "underline"}}>
                        <OctagonAlert className="lricon small" style={{color: "red"}} />ATÉ: {prioridade[2]}
                    </p></small>
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
          <Database /> Modelagem de Banco de Dados <Database />
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
              isPriority={item.priority}
              big={item.big}
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
          <Smartphone /> Programação Mobile <Smartphone />
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
              downloads={item.downloads}
              isPriority={item.priority}
              isExpired={item.expired}
              big={item.big}
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
          <BrainCog /> Inteligência Artificial <BrainCog />
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
              isPriority={item.priority}
              downloads={item.downloads}
              isExpired={item.expired}
              big={item.big}
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
          <Presentation /> Projeto Multidisciplinar (TCC) <Presentation />
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
              isPriority={item.priority}
              downloads={item.downloads}
              isExpired={item.expired}
              big={item.big}
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
          <LayoutTemplate /> Programação Front-End <LayoutTemplate />
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
              isPriority={item.priority}
              downloads={item.downloads}
              isExpired={item.expired}
              big={item.big}
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
          <HardDrive /> Programação Back-End <HardDrive />
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
              isPriority={item.priority}
              downloads={item.downloads}
              isExpired={item.expired}
              big={item.big}
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
          <FolderGit2 /> Versionamento de Código <FolderGit2 />
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
              isPriority={item.priority}
              isExpired={item.expired}
              big={item.big}
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
          <BookOpenText /> Língua Portuguesa <BookOpenText />
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
              isPriority={item.priority}
              isExpired={item.expired}
              big={item.big}
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
          <Pyramid /> Matemática <SquareRadical />
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
              isPriority={item.priority}
              isExpired={item.expired}
              big={item.big}
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
          <Map /> História <Map />
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
              isPriority={item.priority}
              links={item.links}
              downloads={item.downloads}
              isExpired={item.expired}
              big={item.big}
              delay={index * 60}
            />
          ))}
        </section>
      </div>

      <div className="divider"></div>

      <h1 className="category-title">OUTRAS ATIVIDADES</h1>

      <div className="cards-holder">
          
        <h1
          ref={(el) => (subjectRef.current["20"] = el)}
          style={{ backgroundColor: "rgb(65, 215, 157)" }}
          className={`section-title ${
            selectedSubject == "20" ? "subject-selected" : ""
          }`}
        >
          <School /> SEDUC-SP <School />
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
              isPriority={item.priority}
              downloads={item.downloads}
              isExpired={item.expired}
              big={item.big}
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
    </ main>
  );
}