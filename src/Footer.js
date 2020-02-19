import React from "react";

const Footer = props => {
  return (
    <React.Fragment>
      {[1, 2, 3, 4, 5].map(note => (
        <button
          key={note}
          onClick={() => {
            props.addNote(note);
          }}
        >
          {note}
        </button>
      ))}
    </React.Fragment>
  );
};

export default Footer;
