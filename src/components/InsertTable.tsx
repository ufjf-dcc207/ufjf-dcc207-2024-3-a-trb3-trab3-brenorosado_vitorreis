import { useState } from "react";
import "./InsertTable.css";

function InsertTable() {
  const [fields, setFields] = useState([""]);

  const addField = () => setFields([...fields, ""]);

  const finalizeTable = () => {
    console.log("Tabela finalizada:", fields);


    
  };

  return (
    <div className="insert-table">
      <h4>Inserir Tabela</h4>
      <input type="text" placeholder="Nome da tabela" className="input" />
      {fields.map((_, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Campo ${index + 1}`}
          className="input"
        />
      ))}
      <button onClick={addField} className="button">
        Adicionar Campo
      </button>
      <button onClick={finalizeTable} className="button">
        Finalizar
      </button>
    </div>
  );
}

export default InsertTable;
