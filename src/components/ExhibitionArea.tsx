import { useRef } from "react";
import "./ExhibitionArea.css";
import { Table } from "../interface/table";
import TableArea from "./TableArea";

interface ExhibitionAreaProps{
  tables: Table[]
}

export default function ExhibitionArea({tables}: ExhibitionAreaProps) {
  const tableRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    e.dataTransfer.setData("text/plain", `${e.clientX - rect.left},${e.clientY - rect.top}`);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const offset = e.dataTransfer.getData("text/plain").split(",");
    const table = tableRef.current;
    if (table) {
      table.style.left = `${e.clientX - parseInt(offset[0], 10)}px`;
      table.style.top = `${e.clientY - parseInt(offset[1], 10)}px`;
    }
  };

  return (
    <div className="exhibition-area" onDragOver={onDragOver} onDrop={onDrop}>
      {tables.map((table) => (
        <TableArea ref={tableRef} onDragStart={onDragStart} key={table.id} table={table}/>
      ))}
    </div>
  );
}