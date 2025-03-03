import { Table } from "../interface/table";
import AddRelation from "./AddRelation";
import InsertTable from "./InsertTable";
import "./InsertionArea.css";

interface InsertionAreaProps{
  addTable: (table: Table) => void
}

function InsertionArea({addTable}: InsertionAreaProps) {
  return (
    <div className="insertion-area">
      <InsertTable addTable={addTable} />
      <AddRelation />
      
    </div>
  );
}

export default InsertionArea;
