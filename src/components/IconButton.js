import React from "react";

const IconButton = props => {
  return (
    <React.Fragment>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className={props.classNameAtag}
      >
        <i className={props.classNameItag} />
      </a>
      <p className={props.classNamePtag}>{props.text}</p>
    </React.Fragment>
  );
};

export default IconButton;
