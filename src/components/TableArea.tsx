import { Table } from "../interface/table";
import ColumnArea from "./ColumnArea";
import "./TableArea.css";

interface TableProps{
    table: Table
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void
    ref: React.RefObject<HTMLDivElement | null>
}
export default function TableArea({table, onDragStart, ref}: TableProps){
    return(
        <div className="table"
        onDragStart={onDragStart}
        ref={ref}
        draggable
        >
            <p className="header">{table.name}</p>
            {table.columns.map((column, index) => (
                <ColumnArea key={index} column={column}></ColumnArea>
            ))}
        </div>
    )
}