require('dotenv').config()

module.exports = {
  url: `http://localhost:${process.env.PORT}/admin/api`,
  outputDir: 'next/gqless'
}
