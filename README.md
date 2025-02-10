# Servidor de Secuencia de Collatz en Node.js

Este proyecto implementa un servidor HTTP básico en Node.js que calcula la secuencia de Collatz para un número dado.

## Requisitos
- Node.js instalado en el sistema

## Instalación y Ejecución
1. Clona este repositorio:
   git clone https://github.com/Pablotechedu/servidorcollatz
o descargar el archivo server.js
2. EjecutaR el servidor:
   node server.js
   ```
3. El servidor estará disponible en:
   ```
   http://localhost:3000
   ```

## Uso
Realiza una solicitud GET con un número entero positivo:
```
http://localhost:3000/collatz?numero=5
```
### Respuestas
#### Éxito (200 OK):
```json
{
  "numero": 5,
  "secuencia": [5, 16, 8, 4, 2, 1]
}
```
#### Error (400 Bad Request):
```json
{
  "error": "El número debe ser un entero positivo"
}
```
#### Ruta no encontrada (404 Not Found):
```json
{
  "error": "Ruta no encontrada"
}
```

## Autor
- [Tu Nombre]

