  // Packages
  import React, { useState, memo } from "react";

  import { 
    MessageSquareQuote, 
    Info, 
    BookText, 
    Download, 
    ExternalLink, 
    ClockAlert, 
    Eye,
    EyeOff
  } from "lucide-react"; 


  // Buttons
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

  const LinkButton = memo(function LinkButton({item_title, item_link}) {
    const handleOpenLink = () => {
      window.open(item_link, "_blank");
    }

    return (
      <button type="button" className="download-btn" onClick={handleOpenLink}>
        {item_title}
      </button>
    )
  })

  // Items
  const SubjectItems = memo(function SubjectItems({ downloads, links }) {
    return (
      <>     
        {downloads && Object.keys(downloads)?.length > 0 && (
          <ul className="card-list" style={{ marginTop: "-30px" }}>
            <p className="downloads-title">Downloads</p>
            {downloads.files.map((item, i) => (
              <li className="card-item" key={i}>
                <div className="download-div">
                  <Download className="lricon-d" />
                  <DownloadButton item_name={item} item_path  ={downloads.folder} />
                </div>
              </li>
            ))}
          </ul>
        )}

        {links && Object.keys(links)?.length > 0 && (
          <ul className="card-list" style={{ marginTop: "-30px" }}>
            <p className="downloads-title">Links</p>
            {links.map((item, i) => (
              <li className="card-item" key={i}>
                <div className="download-div">
                  <ExternalLink className="lricon-d" />
                  <LinkButton item_title={links[i][0]} item_link={links[i][1]} />
                </div>
              </li>
            ))}
          </ul>
        )}
        
      </>
    )
  })


  const Card = memo(function Card({
      content,
      teacher,
      subject,
      downloads,
      links,
      isPriority,
      isExpired,
      big,
      delay = 0,
    }) {

    const [shown, setShown] = useState(false)

    const handleShowItems = () => {
      return setShown(!shown)
    }

    return (
      <div
        className={`card item-stroke ${isExpired ? "expired" : ""} ${isPriority ? "priority" : ""} ${big ? (shown ? "card--show" : "") : ""} card--enter`}
        style={{ animationDelay: `${delay}ms` }}
      >

        { big &&
          <button className="show-btn no-stroke" onClick={handleShowItems}>
            {
              shown ? (<Eye className="lricon" />) : (<EyeOff className="lricon" />)
            }
          </button>
        }

        {isExpired && <p className="expired-lesson">EXPIRADO</p>}
        {isPriority && <p className="priority-lesson">PRIORIDADE</p>}
        
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
          {content.items.map((value, index) => {
            if (big && !shown && index >= 3) return null;

            return (
              <li className="card-item" key={index}>
                {value === "" ? (
                  <p style={{ marginBottom: "0" }}>
                    {`<${"=".repeat(30)}>`}
                  </p>
                ) : (
                  <>
                    <BookText className="lricon small" /> {value}
                  </>
                )}
              </li>
            );
          })}
        </ul>

        { 
          big ? (
            (shown) ?
            (
                <SubjectItems downloads={downloads} links={links} />
              ) :
              (
                <p style={{textAlign: "center", transform: "translateY(-10px)"}}>...</p>
              )
          ) : (
            <SubjectItems downloads={downloads} links={links} />
          )
        }

        <p className={`card-footer ${!shown ? "footer-shown" : ""}`} style={{ color: "#f0a8a8" }}>
          <ClockAlert className="lricon small" style={{ color: "#f0a8a8" }} />{" "}
          Prazo: {content.deadline}
        </p>
      </div>
    );
  });

  export default Card;