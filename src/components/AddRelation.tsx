import { useState } from "react";
import "./AddRelation.css";
import { Table } from "../interface/table";
import SelectTables from "./SelectTables";

interface AddRelationProps {
  createRelation: (where: Table, from: Table) => void
  tables: Table[]
}

function AddRelation({createRelation, tables}: AddRelationProps) {
  const [relation, setRelation] = useState({
    where: "",
    from: "",
    type: "",
  });

  const handleChange = (name: "where"|"from"|"type", value:string) => { 
    const relationCopy = {...relation}
    relationCopy[name] = value   
    setRelation({...relationCopy});
  };

  const finalizeRelation = () => {
    const where = tables.filter(table => table.name === relation.where)[0]
    const from = tables.filter(table => table.name === relation.from)[0]
    createRelation(where, from)
  };

  return (
    <div className="add-relation">
      <h4>Adicionar Ligação</h4>
      <SelectTables name="where" handleChange={handleChange} options={tables.map(table => table.name)} />
      <SelectTables name="from" handleChange={handleChange} options={tables.map(table => table.name)} />
      <SelectTables name="type" handleChange={handleChange} options={["um para um", "um para muitos"]} />
      <button onClick={finalizeRelation} className="button">
        Finalizar Ligação
      </button>
    </div>
  );
}

export default AddRelation;
