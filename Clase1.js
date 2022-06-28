class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName() {
        console.log(`Hola ${this.nombre} ${this.apellido}`)        
    }
    addMascota(mascotas){
        this.mascotas.push(mascotas)
    }
    countMascotas(){
        console.log(`${this.nombre} tiene ${this.mascotas.length} mascotas`)
    }
    addBook(libro, autor){
        const letter = {
            libro:libro, 
            autor:autor
        }
        this.libros.push(letter)
    }
    getBookNames(){
        console.log(`El Usuario ${this.nombre} tiene los siguientes libros`)
        console.log(this.libros)
    }
}
let Usuario1 = new Usuario('Josefina', 'Weiss')
let Usuario2 = new Usuario('Florencia', 'Oviedo')
Usuario1.addMascota('Saul')
Usuario1.addMascota('Poncho')
Usuario1.addMascota('Timi')
Usuario2.addMascota('Bicha')
Usuario1.addBook('Puro Futbol','Roberto Fontanarosa')
Usuario1.addBook('Harry Potter','J.K. Rowling')
Usuario2.addBook('Venas Abiertas de LatinoAmerica','Eduardo Galeano')
Usuario1.getFullName()
Usuario2.getFullName()
Usuario1.countMascotas()
Usuario2.countMascotas()
Usuario1.getBookNames()
Usuario2.getBookNames()
