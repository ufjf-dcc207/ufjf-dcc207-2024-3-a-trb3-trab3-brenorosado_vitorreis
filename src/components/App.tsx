import ExhibitionArea from "./ExhibitionArea";
import { useState } from "react";
import InsertionArea from "./InsertionArea";
import { useEffect, useReducer } from "react";
import { Table } from "../interface/table";
import { tablesReducer } from "../function/tableReducer";
import { fetchFakeData } from "../api/fakeData";
import SettingsModal from "./SettingsModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        
      <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
      <FontAwesomeIcon icon={faGear} />
            </button>

      <ExhibitionArea tables={tables} />
      <InsertionArea tables={tables} addTable={addTable} createRelation={createRelation} />

      <SettingsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}