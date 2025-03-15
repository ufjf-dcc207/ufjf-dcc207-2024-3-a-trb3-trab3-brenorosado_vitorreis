interface SelectTablesProps{
    options: string[]
    name: "where"|"from"|"type"
    handleChange: (name: "where"|"from"|"type", value: string) => void
    value: string
}

export default function SelectTables({options, name,handleChange, value}: SelectTablesProps){
    return(
        <select
        name={name}
        onChange={e => handleChange(e.target.name as "where"|"from"|"type", e.target.value)}
        className="input"
      >
        <option value="" selected={value === ""}>Selecione uma opção</option>
        {options.map(option => (
            <option value={option}>{option}</option>
        ))}
      </select>
    )
}