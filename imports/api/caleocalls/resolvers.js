const sql = require('mssql')
const DbConnectionString = 'mssql://sa:caleo@localhost/Caleo_Calls';

export default {
  Query: {
    table_callsview() {
      return sql.connect(DbConnectionString).then(() => {
            return sql.query`select CompleteName, CallID, LocalStartTime,LocalStopTime,Duration, ChannelName, ChannelNumber, FileName, AgentIdentificationID,AgentIdentificationValue, Extension from vw_CallDetails`
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

