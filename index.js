class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `${this.nombre}  ${this.apellido}`
    }

    addMascota (mascotaNueva){
        this.mascotas.push(mascotaNueva)
        
    }

    countMascotas(){
        return this.mascotas.length 
    }

    addBook (libro, autor){
        this.libros.push ({nombre:libro, autor:autor})
        
    }

    geetBookName (){
 const soloNombres = this.libros.map((libros) => 
    libros.nombre);
        return soloNombres
    }
    
}

const usuario1 = new Usuario('Silvio', 'Paredes', [{nombre:'Harry Potter', autor: 'Rowling'}, {nombre:'La chica del tren', autor:'Paula Hawkins'}], ['perro', 'loro']);

usuario1.addMascota('Gallina');
usuario1.addBook('Ruta L', 'Paula R');

console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
console.log(usuario1.geetBookName());