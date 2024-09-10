// app.js
const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");


/////////////////////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: true })); //middleware [urlencoded] para recibir datos de formularios enviados con [POST]
/////////////////////////////////////////////////////////////////////

// Sample data
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

// Route for the home page
app.get("/", (req, res) => {
  res.render("index", { books: books });
});

/////////////////////////////////////////////////////////////////////
//ruta para nuevos libros a la lista
app.post("/add-book", (req, res) => {
  
  console.log(req.body);//verificar en consola que los datos estan llegando desde el formulario

  //extraer datos de formulario [req.body]
  const title = req.body.title;//libro en formulario
  const author = req.body.author;//autor en formulario

  //verificar que título y autor existan en formulario
  if (title && author) {
    books.push({ title: title, author: author });//si existen anadirlos a la lista
  }

  res.redirect("/");//redirigir a pagina principal
  //pagina principal se renderizara automaticamente y mostrara la lista actualizada
});
/////////////////////////////////////////////////////////////////////

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
