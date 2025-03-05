import { Column } from "../interface/column";
import "./ColumnArea.css"

interface ColumnProps{
    column: Column
    isPK: boolean
}

export default function ColumnArea({column, isPK}: ColumnProps){
    let symbol = "🔹"
    if(isPK)
        symbol = "🗝️"
    if(column.foreingnKey !== null)
        symbol = "🔸"

    return(
        <div className="column">
            <div className="name">{symbol}{column.name}</div>
            <div className="type">{column.type}</div>
        </div>
    )
}