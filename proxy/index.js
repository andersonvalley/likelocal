import { createServer } from 'cors-anywhere'
const port = 8080

createServer({
  originWhitelist: [], // Список допустимых доменов, пустой список означает все домены
}).listen(port, () => {
  console.log(`Прокси-сервер запущен на порту ${port}`)
})
