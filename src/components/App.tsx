import ExhibitionArea from "./ExhibitionArea";
import InsertionArea from "./InsertionArea";
import "./App.css";
import { useState } from "react";
import { Table } from "../interface/table";

function App() {
  const [tables, setTables] = useState<Table[]>([])

  function addTable(table: Table){
    setTables([...tables, table])
  }

  return (
    <div className="app-container">
      <ExhibitionArea tables={tables} />
      <InsertionArea addTable={addTable} />
    </div>
  );
}

export default App;
