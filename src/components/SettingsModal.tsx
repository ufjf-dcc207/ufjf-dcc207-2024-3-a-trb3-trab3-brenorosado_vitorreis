import { useState } from "react";
import "../css/SettingsModal.css"; 
import SelectTables from "./SelectTables";
import { Table } from "../interface/table";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tables: Table[]
}

export default function SettingsModal({ isOpen, onClose, tables }: SettingsModalProps) {
  const [selected, setSelected] = useState("");
  if (!isOpen) return;

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
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}
