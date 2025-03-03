export type Column = {
    id: number
    name: string,
    type: string,
    configs: ColumnConfig
}

export type ColumnConfig = {
    primaryKey: boolean,
    notNull: boolean,
    foreignerKey: number|null,
}