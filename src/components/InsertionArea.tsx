import { Table } from "../interface/table";
import AddRelation from "./AddRelation";
import InsertTable from "./InsertTable";

interface InsertionAreaProps{
  addTable: (table: Table) => void
  createRelation: (where: Table, from: Table, type: string) => void
  tables: Table[]
}

function InsertionArea({addTable, createRelation, tables}: InsertionAreaProps) {
  return (
    <div className="insertion-area">
      <InsertTable addTable={addTable} />
      <AddRelation tables={tables} createRelation={createRelation} />
      
    </div>
  );
}

export default InsertionArea;
