var config = require("./dbconfig");
const sql = require("mssql");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}
 

async function getdata_withQuery() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT *  FROM production.products");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }
  

module.exports = {
  getdata: getdata,
  getdata_withQuery:getdata_withQuery
};
