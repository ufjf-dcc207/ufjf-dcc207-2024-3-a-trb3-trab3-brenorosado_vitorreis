export type Column = {
    id: number
    name: string,
    type: string,
    foreingnKey: FKConfig | null
}

export type FKConfig = {
    tableId: number
    columnId: number
}