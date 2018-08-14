const sql = require('mssql')
const DbConnectionString = 'mssql://sa:caleo@localhost/Caleo_Admin';


export default {
  Query: {
    table_userskill() {
      return sql.connect(DbConnectionString).then(() => {
            return sql.query`select * from UserSkill`
      }).then(result => {
            sql.close()
            return result.recordset
      }).catch(err => {
            console.log("Error")
            console.log(err)// ... error checks
        });
    }
  }
};

