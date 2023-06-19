import { sqlite3 } from "sqlite3";
import { open } from "sqlite3";     


export async function openDb () {

return open ({
filename: './database.db',
driver: sqlite3.Database

})


}