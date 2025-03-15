import { useState } from "react";
import { Column } from "../interface/column";
import SelectField from "./SelectField";
import { GenerateExample } from "./GenerateExample";

interface GenerateColumnExampleProps{
    column: Column
    isSelecting: boolean
}

export default function GenerateColumnExample({column, isSelecting}: GenerateColumnExampleProps){
    const [selectedField, setSelectedField] = useState("");

    const handleChange = (value:string) => { 
        setSelectedField(value);
      };

    return(
        <div className="column">
            <div className="name">{column.name}</div>
            {isSelecting ? (
                <SelectField handleChange={handleChange}/>
            ): (
                <GenerateExample name={column.name} selectedField={selectedField} />
            )}
        </div>
    )
}