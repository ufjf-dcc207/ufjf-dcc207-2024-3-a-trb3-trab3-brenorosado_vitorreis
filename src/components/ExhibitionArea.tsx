import { useRef } from "react";
import "./ExhibitionArea.css";

export default function ExhibitionArea() {
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
      <div
        ref={tableRef}
        className="table"
        draggable
        onDragStart={onDragStart}
      ></div>
    </div>
  );
}