const {sql} = require('../dbConnection');

exports.createTicket = async (data) => { 
    const [ticket] = await sql`
    INSERT INTO tickets ${sql(data,'fullname', 'email', 'github')}
    RETURNING *`
    return ticket
}
exports.getTicket = async () => { 
    const [ticket] = await sql`
    SELECT * FROM tickets ORDER BY id DESC LIMIT 1
    `
    return ticket
  }