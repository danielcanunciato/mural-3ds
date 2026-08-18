import "./App.css"

import { BookText, ClockAlert, Info, MessageSquareQuote } from "lucide-react"

function Card ({
    content, 
    isExpired
  }){

  return(
    <div className={`card ${isExpired ? "expired" : ""}`}>
          
          {isExpired &&  <p className="expired-lesson">EXPIRADO</p> }

          <h2 className="card-title"> 
            <MessageSquareQuote id="title-icon" className="lricon"/> {content.teacher}
          </h2>

          <small>
            <p className="subject">{content.subject}</p>
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
  return (
    <>

      <img className="title-img" src={"/titulo.png"} />
      <p className="description">Atividades recentes serão mostrados aqui com o prazo</p>

      <div className="cards-holder">
          <section className="section-subject">
            <Card 
              content={{
                teacher: "Professor Fulano A",
                subject: "TÉCNICO",
                summary: "Resumo A",
                items: [
                  "Aula 2",
                  "Aula 6",
                  "Aula 7",
                  "Aula 8"
                ],
                deadline: "01/01/1999",
              }} 
              isExpired={true} 
            />

            <Card 
              content={{
                teacher: "Professor Fulano B",
                subject: "TÉCNICO",
                summary: "Resumo B",
                items: [
                  "Aula 1",
                  "Aula 2",
                  "Aula 3",
                ],
                deadline: "02/02/2021",
              }}
              isExpired={false} 
            />
          </section>
      </div>
    
    </>
  )
}