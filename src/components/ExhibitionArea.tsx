import { useRef } from "react";
import { Table } from "../interface/table";
import TableArea from "./TableArea";

interface ExhibitionAreaProps {
  tables: Table[];
}

export default function ExhibitionArea({ tables }: ExhibitionAreaProps) {
  const tableRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    e.dataTransfer.setData("text/plain", `${e.clientX - rect.left},${e.clientY - rect.top},${index}`);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain").split(",");
    const offsetX = parseInt(data[0], 10);
    const offsetY = parseInt(data[1], 10);
    const index = parseInt(data[2], 10);
    const table = tableRefs.current[index];
    if (table) {
      table.style.left = `${e.clientX - offsetX}px`;
      table.style.top = `${e.clientY - offsetY}px`;
    }
  };

  return (
    <div className="exhibition-area" onDragOver={onDragOver} onDrop={onDrop}>
      {tables.map((table, index) => (
        <TableArea
          key={`${table.name}-${table.id}`}
          ref={(el) => (tableRefs.current[index] = el)}
          onDragStart={onDragStart}
          index={index}
          table={table}
        />
      ))}
    </div>
  );
}