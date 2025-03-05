import ExhibitionArea from "./ExhibitionArea";
import InsertionArea from "./InsertionArea";
import "./App.css";
import { useState } from "react";
import { Table } from "../interface/table";
import { Column } from "../interface/column";

function App() {
  const [tables, setTables] = useState<Table[]>([])

  function addTable(table: Table){
    setTables([...tables, table])
  }

  function createRelation(where: Table, from: Table, type: string){
    const fromPK = from.columns.filter(column => column.id === from.primaryKey)[0]
    const wherePK = where.columns.filter(column => column.id === where.primaryKey)[0]
    if(type === "n:n"){
      const whereRelation: Column = {
        id: Date.now(),
        name: `${where.name}_${wherePK.name}`,
        type: wherePK.type,
        foreingnKey: {
          tableId: where.id,
          columnId: wherePK.id
        }
      }
      const fromRelation: Column = {
        id: Date.now(),
        name: `${from.name}_${fromPK.name}`,
        type: fromPK.type,
        foreingnKey: {
          tableId: from.id,
          columnId: fromPK.id
        }
      }
      const pivot:Table = {
        id: Date.now(),
        name: `${from.name}_${where.name}`,
        columns: [whereRelation, fromRelation],
        primaryKey: 0
      }

      setTables(tables => [...tables, pivot])
    }else{
    const newRelationColumn: Column = {
      id: Date.now(),
      name: `${from.name}_${fromPK.name}`,
      type: fromPK.type,
      foreingnKey: {
        tableId: from.id,
        columnId: fromPK.id
      }
    }

    const tablesCopy = [...tables]
    tablesCopy.filter(table => table.id === where.id)[0].columns = [...where.columns, newRelationColumn]
    console.log(tablesCopy)
    setTables(() => [...tablesCopy])}
  }

  return (
    <div className="app-container">
      <ExhibitionArea tables={tables} />
      <InsertionArea tables={tables} addTable={addTable} createRelation={createRelation} />
    </div>
  );
}

export default App;
