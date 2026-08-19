import "./App.css"

import { BookText, ClockAlert, Info, MessageSquareQuote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function Card ({
    content, 
    teacher,
    subject,
    isExpired
  }){

  return(
    <div className={`card ${isExpired ? "expired" : ""}`}>
          
          {isExpired &&  <p className="expired-lesson">EXPIRADO</p> }

          <h2 className="card-title"> 
            <MessageSquareQuote id="title-icon" className="lricon"/> {teacher}
          </h2>

          <small>
            <p className="subject">{subject}</p>
          </small>

          <p className="card-summary">
            <Info id="desc-icon" className="lricon med" /> {content.summary}
          </p>
          
          <ul className="card-list">
              {
                content.items.map((value, index) => (
                  <li className="card-item" key={index}>
                    <BookText className="lricon small" />  {value}
                  </li>
                ))
              }
          </ul>

          <p className="card-footer" style={{color: "#f0a8a8"}}>
            <ClockAlert className="lricon small" style={{color: "#f0a8a8"}} /> Prazo: {content.deadline}
          </p>
      </div>
  )
}

export default function App() {

  const subjectRef = useRef({});

  const [selectedSubject, setSelectedSubject] = useState("")

  const subjects_contents = {

    "portugues" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/01/2026",
        expired: false
      }

    ],

    "matematica" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/02/2026",
        expired: false
      }
    ],

    "historia" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/03/2026",
        expired: false
      }
    ],

    "modelagem" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/04/2026",
        expired: false
      }
    ],

    "mobile" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/05/2026",
        expired: false
      }
    ],

    "ia" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/06/2026",
        expired: false
      }
    ],

    "tcc" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/07/2026",
        expired: false
      }
    ],

    "frontend" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/08/2026",
        expired: false
      }
    ],

    "backend" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/09/2026",
        expired: false
      }
    ],

    "versionamento" : [
      {
        summary: "test",
        items:  [
          "Aula"
        ],
        deadline: "01/10/2026",
        expired: false
      }
    ]

    
  }

  const isAutoScrolling = useRef(false);

  const JumpToSection = (subjectID) => {
    const targetElement = subjectRef.current[subjectID];

    if(targetElement){
      isAutoScrolling.current=true;
      setSelectedSubject(subjectID);
      targetElement.scrollIntoView({behavior:"smooth",block:"start"})
    }
  }
  
  useEffect(()=>{
    if (!selectedSubject) return;
    
    const handleScrollEv = () => {
      if (isAutoScrolling.current) return;

      setSelectedSubject("");
    }

    const handleScrollEndEv = () => {
      isAutoScrolling.current=false;
    }

    window.addEventListener("scroll", handleScrollEv);
    window.addEventListener("scrollend", handleScrollEndEv);

    return () => {
      window.removeEventListener("scroll", handleScrollEv)
      window.removeEventListener("scrollend", handleScrollEndEv)
    }
  }, [selectedSubject])

  return (  
    <>

      {/* INICIO DO SITE */}

      <img className="title-img" src={"/titulo.png"} />
      <p className="description">Atividades recentes serão mostrados aqui com o prazo</p>

      <p style={{textAlign: "center", fontWeight: "bold"}}>TÉCNICO</p>
      <div className="jumpto">
        {

          ["modelagem de banco de dados", "programação mobile", "inteligência artificial",
            "projeto multidisciplinar (tcc)", "programação front-end", "programação back-end",
            "versionamento de código e sistemas de mensageria"
          ].map((item, index) => (
            <button className="jumpto-btn" onClick={()=>JumpToSection(`0${index}`)} key={index}>
              {item}
            </button>
          ))

        }
      </div>

      {/* BOTÕES PARA PULAR NA MATÉRIA */}

      <p style={{textAlign: "center", fontWeight: "bold"}}>BASE</p>
      <div className="jumpto">
        {

          ["português", "matemática", "história"
          ].map((item, index) => (
            <button className="jumpto-btn" onClick={()=>JumpToSection(`1${index}`)} key={index}>
              {item}
            </button>
          ))

        }
      </div>

      {/* ////////////// MATÉRIAS DO TÉCNICO ////////////// */}
      <h1 className="category-title">MATÉRIAS DO TÉCNICO</h1>

      <div className="cards-holder">
          <h1 ref={(el)=>(subjectRef.current["00"]=el)} 
            style={{
              backgroundColor: "rgb(19, 39, 110)"
            }}
            className={`section-title ${selectedSubject == "00" ? "subject-selected" : ""}`}>
          Modelagem de Banco de Dados</h1>
      
          <section className="section-subject">

            {
              subjects_contents["modelagem"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profº Kassio"}
                    subject= {"MODELAGEM DE BANCO DE DADOS"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>

          <h1 ref={(el)=>(subjectRef.current["01"]=el)} 
            style={{
              backgroundColor: "rgb(49, 158, 37)"
            }}
            className={`section-title ${selectedSubject == "01" ? "subject-selected" : ""}`}>
          Programação Mobile</h1>
      
          <section className="section-subject">

            {
              subjects_contents["mobile"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profº Kassio"}
                    subject= {"PROGRAMAÇÃO MOBILE"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>

          <h1 ref={(el)=>(subjectRef.current["02"]=el)} 
            style={{
              backgroundColor: "rgb(46, 142, 183)"
            }}
            className={`section-title ${selectedSubject == "02" ? "subject-selected" : ""}`}>
          Inteligência Artificial</h1>
      
          <section className="section-subject">

            {
              subjects_contents["ia"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profº Rogério"}
                    subject= {"INTELIGÊNCIA ARTIFICIAL"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>

          <h1 ref={(el)=>(subjectRef.current["03"]=el)} 
            style={{
              backgroundColor: "rgb(215, 109, 27)"
            }}
            className={`section-title ${selectedSubject == "03" ? "subject-selected" : ""}`}>
          Projeto Multidisciplinar (TCC)</h1>
      
          <section className="section-subject">

            {
              subjects_contents["tcc"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profº Rogério"}
                    subject= {"PROJETO MULTIDISCIPLINAR (TCC)"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>

          <h1 ref={(el)=>(subjectRef.current["04"]=el)} 
            style={{
              backgroundColor: "rgb(232, 188, 57)"
            }}
            className={`section-title ${selectedSubject == "04" ? "subject-selected" : ""}`}>
          Programação Front-End</h1>
      
          <section className="section-subject">

            {
              subjects_contents["frontend"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profº João"}
                    subject= {"PROGRAMAÇÃO FRONT-END"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>
          
          <h1 ref={(el)=>(subjectRef.current["05"]=el)} 
            style={{
              backgroundColor: "rgb(178, 50, 217)"
            }}
            className={`section-title ${selectedSubject == "05" ? "subject-selected" : ""}`}>
          Programação Back-End</h1>
      
          <section className="section-subject">

            {
              subjects_contents["backend"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profº João"}
                    subject= {"PROGRAMAÇÃO BACK-END"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>

          <h1 ref={(el)=>(subjectRef.current["06"]=el)} 
            style={{
              backgroundColor: "rgb(255, 0, 195)"
            }}
            className={`section-title ${selectedSubject == "06" ? "subject-selected" : ""}`}>
          Versionamento de Código</h1>
      
          <section className="section-subject">

            {
              subjects_contents["versionamento"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profº João"}
                    subject= {"VERSIONAMENTO DE CÓDIGO"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>
      </div>

      <div className="divider"></div>

      {/* ////////////// MATÉRIAS DA BASE ////////////// */}
      <h1 className="category-title">MATÉRIAS DA BASE</h1>

      <div className="cards-holder">

          <h1 ref={(el)=>(subjectRef.current["10"]=el)} 
            style={{
              backgroundColor: "rgb(50, 86, 217)"
            }}
            className={`section-title ${selectedSubject == "10" ? "subject-selected" : ""}`}>
          Português</h1>
      
          <section className="section-subject">

            {
              subjects_contents["portugues"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profª Madalena"}
                    subject= {"PORTUGUÊS"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }

            
          </section>

          <h1 ref={(el)=>(subjectRef.current["11"]=el)} 
          style={{
            backgroundColor: "rgb(190, 31, 31)"
          }}
          className={`section-title ${selectedSubject == "11" ? "subject-selected" : ""}`}>

          Matemática</h1>
          <section className="section-subject">
          {
              subjects_contents["matematica"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profº Jackson"}
                    subject= {"MATEMÁTICA"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>

          <h1 ref={(el)=>(subjectRef.current["12"]=el)} 
          style={{
            backgroundColor: "rgb(103, 57, 21)"
          }}
          className={`section-title ${selectedSubject == "12" ? "subject-selected" : ""}`}>

          História</h1>
          <section className="section-subject">
          {
              subjects_contents["historia"].map((item, index)=>{
                return (
                  <Card 
                    key={index}
                    teacher= {"Profª Cláudia"}
                    subject= {"HISTÓRIA"}
                    content={{
                      summary: item.summary,
                      items: item.items,
                      deadline: item.deadline,
                    }} 
                    isExpired={item.expired} 
                  />
                )
              })
            }
          </section>
      </div>
    
    </>
  )
}