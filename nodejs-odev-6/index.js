const koa = require('koa')
const app = new koa()

const PORT = 3000

app.use((ctx) => {
  if (ctx.path === '/') ctx.body = '<h1>Ana sayfaya hoş geldiniz</h1>'
  else if (ctx.path === '/about')
    ctx.body = '<h1>Hakkımızda sayfasına hoş geldiniz</h1>'
  else if (ctx.path === '/contact')
    ctx.body = '<h1>İletişim sayfasına hoş geldiniz</h1>'
  else ctx.body = '<h1>404 SAYFA BULUNAMADI</h1>'
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
