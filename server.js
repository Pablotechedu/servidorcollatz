const http = require("http");
const url = require("url");

// Función para calcular la secuencia de Collatz
function collatzSequence(n) {
  let sequence = [n];
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push(n);
  }
  return sequence;
}

// Servidor HTTP
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/collatz" && req.method === "GET") {
    const numero = parsedUrl.query.numero;
    const num = parseInt(numero, 10);

    if (isNaN(num) || num <= 0) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ error: "El número debe ser un entero positivo" })
      );
    } else {
      const sequence = collatzSequence(num);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ numero: num, secuencia: sequence }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Ruta no encontrada" }));
  }
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
