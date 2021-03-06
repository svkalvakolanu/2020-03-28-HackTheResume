import React from "react";

const Skills = props => {
  let keywords = props.data.keywords.map((keyword, i) => {
    return <li key={i}>{keyword} </li>;
  });
  return (
    <div>
      <h3>
        {props.data.name} - {props.data.level}
      </h3>
      <p>Expertise:</p>
      {keywords}
      <style jsx>{`
        div {
          background: #70e4ef;
          padding: 20px;
          border: 3px solid black;
          margin: 20px auto;
        }
      `}</style>
    </div>
  );
};

export default Skills;
