import JSON from "../fakerApiTypes.json"

interface SelectFieldProps{
  handleChange: (value:string) => void
}

export default function SelectField({handleChange}: SelectFieldProps){
    const types = JSON.types;
    return (
        <select className="input" onChange={e => handleChange(e.target.value)}>
          <option value="">Selecione uma opção</option>
          {types.map(type => (
            <option key={type.value} value={type.value}>{type.children}</option>
          ))}
      </select>
    )
}