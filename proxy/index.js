const corsAnywhere = require('cors-anywhere')
const port = 8080

corsAnywhere
  .createServer({
    originWhitelist: [], // Список допустимых доменов, пустой список означает все домены
  })
  .listen(port, () => {
    console.log(`Прокси-сервер запущен на порту ${port}`)
  })
