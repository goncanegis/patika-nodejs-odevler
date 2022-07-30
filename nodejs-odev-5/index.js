const http = require('http')

const PORT = 5000

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h2>Welcome to the Index Page</h2>')
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h2>Welcome to the About Page</h2>')
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h2>Welcome to the Contact Page</h2>')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('Page Not Found')
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
