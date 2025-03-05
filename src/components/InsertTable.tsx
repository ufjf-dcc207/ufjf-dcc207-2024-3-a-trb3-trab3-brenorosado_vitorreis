import { useState } from "react";
import "./InsertTable.css";
import InsertColumn from "./InsertColumn";
import { Table } from "../interface/table";
import { Column } from "../interface/column";

interface InsertionTableProps{
  addTable: (table: Table) => void
}

export default function InsertTable({addTable}: InsertionTableProps) {
  const [tableName, setTableName] = useState("");
  const [fields, setFields] = useState([{name: "", type: "int"}]);

  const addField = () => setFields([...fields, {name: "", type: "int"}]);

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
    const newColumns:Column[] = []
    fields.forEach((field) => {
      newColumns.push({
        id: Date.now(),
        name: field.name,
        type: field.type,
        foreingnKey: null
      })
    })
    const newTable: Table = {
      id: Date.now(),
      name: tableName,
      columns: newColumns,
      primaryKey: newColumns[0].id
    }

    addTable(newTable)
    setTableName("")
    setFields([{name: "", type: "int"}])
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