import AddRelation from "./AddRelation";
import InsertTable from "./InsertTable";
import "./InsertionArea.css";

function InsertionArea() {
  return (
    <div className="insertion-area">
      <InsertTable />
      <AddRelation />
      
    </div>
  );
}

export default InsertionArea;
