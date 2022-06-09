const fs = require('fs')
const express = require('express')
const app = express()
const puerto = 8080


class Contenedor {
    constructor (archivo){
        this.archivo = archivo;
    }
    
//    Entrega un producto random

    async getById() {
        try{
            let data = await fs.promises.readFile(`./${this.archivo}.txt`, 'utf-8')
            let allData = JSON.parse(data)

            app.get('/productoRandom', (req, res) =>{
                let maxRandom = allData.length
                let numRandom = Math.floor(Math.random() * maxRandom) 
                let productoRandom = allData[numRandom]
                res.send(`<h3 style="color: red">Producto: ${productoRandom.title} precio: ${productoRandom.price} </h3>`)
            })

            
        } catch (error) {
            console.log (`Verificar hubo un error ${error}`)
        }
    }

    //    Devuelve un array con los objetos presentes en el archivo

    async getAll() {
        try{
            let data = await fs.promises.readFile(`./${this.archivo}.txt`, 'utf-8')
            let allData = JSON.parse(data)

            app.get('/productos', (req, res) =>{
                res.json(allData.map(product =>
                    `${product.title}`
                  ).join(','))
            })

        } catch (error) {
            console.log (`Verificar hubo un error ${error}`)
        }

    }

}


const compra = new Contenedor('productos')
compra.getAll()
compra.getById()



app.get('/', (req, res) =>{
    res.send('<h1 style="color: blue">Bienvenido al servidor</h1>')
})


app.listen(puerto, (error) =>{

    if (!error) {
    console.log(`el servidor se inicio en el puerto ${puerto}`)
    } else {
        console.log('hubo un error: ', error)
    }
})
