// 根据传入的sqlname，返回sqlCommand
export default function(sqlName) {
  return require('../db/sql/' + sqlName);
}