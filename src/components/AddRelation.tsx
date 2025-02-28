import React, { useState } from "react";
import "./AddRelation.css";

function AddRelation() {
  const [relation, setRelation] = useState({
    from: "",
    to: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRelation({ ...relation, [name]: value });
  };

  const finalizeRelation = () => {
    console.log("Relação criada:", relation);
    // Aqui você pode enviar os dados para um backend ou atualizar o estado global.
  };

  return (
    <div className="add-relation">
      <h4>Adicionar Ligação</h4>
      <input
        type="text"
        name="from"
        placeholder="De"
        value={relation.from}
        onChange={handleChange}
        className="input"
      />
      <input
        type="text"
        name="to"
        placeholder="Para"
        value={relation.to}
        onChange={handleChange}
        className="input"
      />
      <select
        name="type"
        value={relation.type}
        onChange={handleChange}
        className="input"
      >
        <option value="">Selecione o tipo</option>
        <option value="one-to-one">Um para Um</option>
        <option value="one-to-many">Um para Muitos</option>
        <option value="many-to-many">Muitos para Muitos</option>
      </select>
      <button onClick={finalizeRelation} className="button">
        Finalizar Ligação
      </button>
    </div>
  );
}

export default AddRelation;
