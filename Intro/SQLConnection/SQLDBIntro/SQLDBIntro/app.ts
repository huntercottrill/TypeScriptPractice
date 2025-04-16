

const sql = require('mssql')

async () => {
    try {
        await sql.connect('Server=localhost,1433;Database=DESKTOP-0PQ0C4H;User Id=Admin;Encrypt=true')
        const result = await sql.query`select * from employee`
        console.dir(result)
    } catch (err) {

    }
}