import { clear } from 'console'
import { input } from './utils.mjs'


while (true){
    console.log(`
        Juego de Adivina adivinador de letras full picado

        1- Empezar el juegardo
        2- Hacks gratis puntos infinitos
        3- Jugar mario bros online
        4- salir del juegardo
        5- generador de masivos (no anda kjesak)

        `)
    const opcion = await input("Seleccioná una opcion: ")

    if (opcion === "1"){
        console.clear()
        console.log("SUPER EPIC MASIVO JUEGO DE ADIVINAR LA LETRA")
        console.log("Maximo 15 intentos")
        
        const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const letraoculta = letras[Math.floor(Math.random() * letras.length)]
        
        let intentos = 0
        const maxIntentos = 15
        let adivinado = false
        
        while (intentos < maxIntentos && !adivinado) {
            intentos++
            console.log(`Intento: ${intentos}/${maxIntentos}`)
            
            const respuesta = await input("Ingresa una letra(que sea una letra): ")
            
            if (respuesta.length !== 1) {
                console.log("Debes ingresar solo UNA letra man")
                intentos--
                continue
            }
            
            if (respuesta === letraoculta) {
                adivinado = true
                console.log(`Muy bien amigo estas picado, la adivinaste al toque`)
                console.log(`Adivinaste la letra '${letraoculta}' en el intento ${intentos}!`)
                
                let puntaje = Math.max(0, Math.round(100 - ((intentos - 1) * (100 / 14))))
                console.log(`Tu puntaje: ${puntaje}/100`)
                
                if (puntaje >= 80) {
                    console.log("ADIVINADOR NATO")
                } else if (puntaje >= 60) {
                    console.log("ADIVINADOR EXPERTO")
                } else if (puntaje >= 40) {
                    console.log("ADIVINADOR NOVATO")
                } else if (puntaje >= 1) {
                    console.log("ADIVINADOR AMATEUR")
                } else {
                    console.log("CAVANI")
                }
            } else {
                console.log(`Incorrecto la letra '${respuesta}' no es la correcta.`)
                console.log(`Te quedan ${maxIntentos - intentos} intentos`)
            }
        }
        
        if (!adivinado) {
            console.log(`PERDISTE AJSJASJSA`)
            console.log(`La letra era: '${letraoculta}'`)
            console.log("¡CAVANI AL ARCOOOOO NOOOOOO")
            console.log("Puntaje: 0/100")
        }
        
        await input("Presiona cualquier tecla contninuar...")
    }
    else if(opcion === "2"){
        console.log("Abriendo el video de hacks gratis...")
        const { exec } = await import('child_process')
        exec("start https://www.youtube.com/watch?v=1IWvyq89G5E")
    }
    else if(opcion ==="3"){
        console.log("Abriendo mario bros online...")
        const {exec} = await import('child_process')
        exec("start https://miro.medium.com/v2/resize:fit:1400/1*7BTTDiiBTr7ZpkCwaMu4-A.png")
    }
    else if (opcion === "4"){
        console.log(clear)
        console.log("Chau loco cuidate")
        process.exit()
    }
    else if (opcion === "5"){
        let salida = "";
        for (let i = 0; i < 500; i++) {
        salida += "masivo ";
        }
        await input('Presione cualquier tecla para continuar...')
    }
}