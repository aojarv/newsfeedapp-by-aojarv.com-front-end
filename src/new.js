import React from "react";

const New = props => {
  return (
    <div className="new">
      <div className="content">
        <h1>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </h1>
        <p>{props.abstract}</p>
      </div>
      <div className="pic">
        <img src={props.pic} alt={props.alt}></img>
      </div>
    </div>
  );
};

export default New;
