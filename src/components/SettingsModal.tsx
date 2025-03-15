import { useState } from "react";
import "../css/SettingsModal.css"; 
import SelectTables from "./SelectTables";
import { Table } from "../interface/table";
import GenerateTableExample from "./GenerateTableExample";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tables: Table[]
}

export default function SettingsModal({ isOpen, onClose, tables }: SettingsModalProps) {
  const [selected, setSelected] = useState("");
  const [isSelecting, setIsSelecting] = useState(true);

  if (!isOpen) return;

  function closeModal() {
    onClose()
    setSelected("")
  }

  const handleChange = (name: "where"|"from"|"type", value:string) => { 
    if(name === 'from'){
      setSelected(value);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <SelectTables
        name="from"
        value={selected}
        handleChange={handleChange}
        options={tables.map(table => table.name)}
        />
        {selected === "" ? "Selecione uma tabela" : 
        (
        <>
          <GenerateTableExample isSelecting={isSelecting} table={tables.filter(table => table.name == selected)[0]} />
          <button className="close-button" onClick={() => setIsSelecting(!isSelecting)}>
            Gerar
          </button>
        </>
        )}
        
        <button className="close-button" onClick={closeModal}>
          Fechar
        </button>
      </div>
    </div>
  );
}
