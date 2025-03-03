import { Column } from "./column"

export type Table = {
    id: number
    name: string,
    columns: Column[],
}