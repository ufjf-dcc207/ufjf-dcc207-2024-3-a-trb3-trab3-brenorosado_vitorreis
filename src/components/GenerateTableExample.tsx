import { Table } from "../interface/table";
import GenerateColumnExample from "./GenerateColumnExample";

interface GenerateTableExampleProps{
    table: Table
    isSelecting: boolean
}

export default function GenerateTableExample({table, isSelecting}: GenerateTableExampleProps){
    return(
        <div className="generate-table">
            <p className="header">{table.name}</p>
            {table.columns.map((column) => (
                <GenerateColumnExample isSelecting={isSelecting} column={column}/>
            ))}
        </div>
    )
}