import { Column } from "../interface/column";
import "./ColumnArea.css"

interface ColumnProps{
    column: Column
}

export default function ColumnArea({column}: ColumnProps){
    return(
        <div className="column">
            <div className="name">{column.name}</div>
            <div className="type">{column.type}</div>
        </div>
    )
}