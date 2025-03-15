import { Column } from "../interface/column";
import GenerateExample from "./GenerateExample";
import SelectField from "./SelectField";

interface GenerateColumnExampleProps{
    column: Column
    isSelecting: boolean
}

export default function GenerateColumnExample({column, isSelecting}: GenerateColumnExampleProps){
    return(
        <div className="column">
            <div className="name">{column.name}</div>
            {isSelecting ? (
                <SelectField/>
            ): (
                <GenerateExample/>
            )}
        </div>
    )
}