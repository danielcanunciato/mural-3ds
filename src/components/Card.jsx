// Packages
import React, { memo } from "react";

import { 
  MessageSquareQuote, 
  Info, 
  BookText, 
  Download, 
  ExternalLink, 
  ClockAlert 
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


const Card = memo(function Card({
  content,
  teacher,
  subject,
  downloads,
  links,
  isPriority,
  isExpired,
  delay = 0,
}) {
  return (
    <div
      className={`card ${isExpired ? "expired" : ""} ${isPriority ? "priority" : ""} card--enter`}
      style={{ animationDelay: `${delay}ms` }}
    >
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
        {content.items.map((value, index) => (
          <li className="card-item" key={index}>
            {value === "" ? (
              <p style={{ marginBottom: '0' }}>{"<=============>"}</p>
            ) : (
              <><BookText className="lricon small" /> {value}</>
            )}
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

      {links && Object.keys(links)?.length > 0 && (
        <ul className="card-list" style={{ marginTop: "10px" }}>
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

      <p className="card-footer" style={{ color: "#f0a8a8" }}>
        <ClockAlert className="lricon small" style={{ color: "#f0a8a8" }} />{" "}
        Prazo: {content.deadline}
      </p>
    </div>
  );
});

export default Card;