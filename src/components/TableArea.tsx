import { Table } from "../interface/table";
import ColumnArea from "./ColumnArea";
import "./TableArea.css";

interface TableProps{
    table: Table
}
export default function TableArea({table}: TableProps){
    return(
        <div className="table">
            <p className="header">{table.name}</p>
            {table.columns.map((column) => (
                <ColumnArea key={column.id} column={column}></ColumnArea>
            ))}
        </div>
    )
}