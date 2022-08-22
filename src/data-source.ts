import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "KANBAN",
    synchronize: true,
    logging: false,
    entities: ["./src/database/models/**/*.ts"],
    migrations: ["./src/database/migration/*.ts"],
    subscribers: [],
})
