type Field = {
    name: string,
    type: string,
}

interface InsertColumnProps{
    index: number
    field: Field
    handleFieldChange: (index:number, value:string) => void
    handleTypeChange: (index:number, value:string) => void
}

export default function InsertColumn({index, field, handleFieldChange, handleTypeChange}: InsertColumnProps) {
    return(
        <>
            <input
              type="text"
              placeholder={`Campo ${index + 1}`}
              className="input"
              value={field.name}
              onChange={(e) => handleFieldChange(index, e.target.value)}
            />
            <select
             className="input"
             onChange={(e) => handleTypeChange(index, e.target.value)}
            >
                <option value="varchar">varchar</option>
                <option value="int">int</option>
                <option value="boolean">boolean</option>
                <option value="date">date</option>
            </select>
        </>
    )
}