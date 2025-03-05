import "./App.css";
import ExhibitionArea from "./ExhibitionArea";
import InsertionArea from "./InsertionArea";
import { useReducer } from "react";
import { Table } from "../interface/table";
import { tablesReducer } from "../function/tableReducer";

export default function App() {
  const [tables, dispatch] = useReducer(tablesReducer, []);

  function addTable(table: Table) {
    dispatch({ type: "ADD_TABLE", payload: table });
  }

  function createRelation(where: Table, from: Table, type: string) {
    dispatch({ type: "CREATE_RELATION", payload: { where, from, type } });
  }

  return (
    <div className="app-container">
      <ExhibitionArea tables={tables} />
      <InsertionArea tables={tables} addTable={addTable} createRelation={createRelation} />
    </div>
  );
}