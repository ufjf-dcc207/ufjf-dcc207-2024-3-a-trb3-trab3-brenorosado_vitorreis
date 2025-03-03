import { Column } from "./column"

export type Table = {
    id: number
    name: string,
    columns: Column[],
    configs: TableConfig
}

export type TableConfig = {
    primaryKey: number,
    referenceIn: number[]
}