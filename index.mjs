import { clear } from 'console'
import { input } from './utils.mjs'


while (true){
    console.log(`
        Juego de Adivina adivinador de letras full picado

        1- Empezar el juegardo

        espacio publicitario: ¡Nuevo video!: https://www.youtube.com/watch?v=1IWvyq89G5E
        un meme: https://miro.medium.com/v2/resize:fit:1400/1*7BTTDiiBTr7ZpkCwaMu4-A.png

        3- salir del juegardo
        4- generador de masivos

        `)
    const opcion = await input("Seleccioná una opcion: ")

    if (opcion === "1"){

    }
    else if (opcion === "3"){
        console.log(clear)
        console.log("Chau loco cuidate")
        process.exit()
    }
    else if (opcion === "4"){
        let salida = "";
        for (let i = 0; i < 500; i++) {
        salida += "masivo ";
        }
    await input('Presione cualquier tecla para continuar...')
    }
}