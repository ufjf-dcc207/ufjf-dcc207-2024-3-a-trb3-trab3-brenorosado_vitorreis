import ExhibitionArea from "./ExhibitionArea";
import InsertionArea from "./InsertionArea";
import { useEffect, useReducer } from "react";
import { Table } from "../interface/table";
import { tablesReducer } from "../function/tableReducer";
import { fetchFakeData } from "../api/fakeData";

export default function App() {
  const [tables, dispatch] = useReducer(tablesReducer, []);

  useEffect(() => {
    async function getFakeData() {
      return await fetchFakeData("persons?_quantity=5");
    }

    console.log(getFakeData());
  }, []);

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