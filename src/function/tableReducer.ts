import { Column } from "../interface/column";
import { Table } from "../interface/table";

type Action =
  | { type: "ADD_TABLE"; payload: Table }
  | { type: "CREATE_RELATION"; payload: { where: Table; from: Table; type: string } };

export function tablesReducer(state: Table[], action: Action): Table[] {
  switch (action.type) {
    case "ADD_TABLE":
      return [...state, action.payload];
    case "CREATE_RELATION": {
      const { where, from, type } = action.payload;
      const fromPK = from.columns.filter(column => column.id === from.primaryKey)[0];
      const wherePK = where.columns.filter(column => column.id === where.primaryKey)[0];
      if (type === "n:n") {
        const whereRelation: Column = {
          id: Date.now(),
          name: `${where.name}_${wherePK.name}`,
          type: wherePK.type,
          foreingnKey: {
            tableId: where.id,
            columnId: wherePK.id
          }
        };
        const fromRelation: Column = {
          id: Date.now(),
          name: `${from.name}_${fromPK.name}`,
          type: fromPK.type,
          foreingnKey: {
            tableId: from.id,
            columnId: fromPK.id
          }
        };
        const pivot: Table = {
          id: Date.now(),
          name: `${from.name}_${where.name}`,
          columns: [whereRelation, fromRelation],
          primaryKey: 0
        };
        return [...state, pivot];
      } else {
        const newRelationColumn: Column = {
          id: Date.now(),
          name: `${from.name}_${fromPK.name}`,
          type: fromPK.type,
          foreingnKey: {
            tableId: from.id,
            columnId: fromPK.id
          }
        };
        return state.map(table =>
          table.id === where.id
            ? { ...table, columns: [...table.columns, newRelationColumn] }
            : table
        );
      }
    }
    default:
      return state;
  }
}