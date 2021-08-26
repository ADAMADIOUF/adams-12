const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: 'keyQiQNBtPkBLVyY6' })
  .base('appHp9pcl4IOwa6Cp')
  .table('products')

exports.handler = async (event, context) => {

 try {
  
    const data = await airtable.list()
    
  
 } catch (error) {
  return {
    statusCode: 200,
    body: 'error esk',
  }
 }
  
}

