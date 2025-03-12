import { Table } from "../interface/table";
import ColumnArea from "./ColumnArea";

interface TableProps{
    table: Table
    onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void
    ref: React.RefObject<HTMLDivElement | null>
    index: number
}
export default function TableArea({table, onDragStart, ref, index}: TableProps){
    return(
        <div className="table"
        onDragStart={e => onDragStart(e, index)}
        ref={ref}
        draggable
        >
            <p className="header">{table.name}</p>
            {table.columns.map((column) => (
                <ColumnArea key={column.id} column={column} isPK={column.id === table.primaryKey}></ColumnArea>
            ))}
        </div>
    )
}