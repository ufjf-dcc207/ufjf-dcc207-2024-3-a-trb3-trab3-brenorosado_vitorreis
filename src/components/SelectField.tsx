import JSON from "../fakerApiTypes.json"

export default function SelectField(){
    const types = JSON.types;
    return (
        <select className="input">
          <option value="">Selecione uma opção</option>
          {types.map(type => (
            <option key={type.value} value={type.value}>{type.children}</option>
          ))}
      </select>
    )
}