import { useState } from "react";
import "./InsertTable.css";
import InsertColumn from "./InsertColumn";

export default function InsertTable() {
  const [tableName, setTableName] = useState("");
  const [fields, setFields] = useState([{name: "", type: ""}]);

  const addField = () => setFields([...fields, {name: "", type: "varchar"}]);

  const handleFieldChange = (index: number, value: string) => {
    const newFields = [...fields];
    newFields[index].name = value;
    setFields(newFields);
  };

  const handleTypeChange = (index: number, value: string) => {
    const newFields = [...fields];
    newFields[index].type = value;
    setFields(newFields);
  };

  const finalizeTable = () => {
    console.log("Tabela finalizada:", { tableName, fields });
  };

  return (
    <div className="insert-table">
      <h4>Inserir Tabela</h4>
      <input
        type="text"
        placeholder="Nome da tabela"
        className="input"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
      />
      {fields.map((field, index) => (
        <InsertColumn field={field} index={index} handleFieldChange={handleFieldChange} handleTypeChange={handleTypeChange}/>
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