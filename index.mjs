import { clear } from 'console'
import { input } from './utils.mjs'


while (true){
    console.log(`
        Juego de Adivina adivinador de letras full picado

        1- Empezar el juegardo
        2- Hacks gratis puntos infinitos
        3- Jugar mario bros online
        4- salir del juegardo
        5- generador de masivos (ahora si anda)

        `)
    const opcion = await input("Seleccioná una opcion: ")

    if (opcion === "1"){
        console.clear()
        console.log("SUPER EPIC MASIVO JUEGO DE ADIVINAR LA LETRA")
        console.log("Maximo 30 intentos, ojo al tejo")
        
        const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const letraoculta = letras[Math.floor(Math.random() * letras.length)]
        
        if (letraoculta >= 'A' && letraoculta <= 'Z') {
            console.log("Pistarda: La letra es MAYUSCULA")
        } else {
            console.log("Pistarda: La letra es MINUSCULA")
        }
        
        let intentos = 0
        const maxIntentos = 30
        let adivinado = false
        
        while (intentos < maxIntentos && !adivinado) {
            intentos++
            console.log(`Intento: ${intentos}/${maxIntentos}`)
            
            const respuesta = await input("Ingresa una letra(que sea una letra): ")
            
            if (respuesta.length !== 1) {
                console.log("Debes ingresar solo UNA letra man, hace caso")
                intentos--
                continue
            }
            
            if (respuesta === letraoculta) {
                adivinado = true;
                console.log("Muy bien amigo estas picado!! felicidades");
                console.log("Adivinaste la letra '" + letraoculta + "' en el intento " + intentos + "!");
                const {exec} = await import('child_process')
                exec("start https://www.youtube.com/watch?v=k8sTHtoYWL4&list=PLxqfTLq22IyboJ_4HqZVqa9egz0g-OSxA&index=16")

                let puntaje = 100 - (intentos - 1) * 3;
                if (puntaje < 0) {
                    puntaje = 0;
                }
                console.log("Tu puntaje: " + puntaje + "/100");

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
        exec("start https://www.youtube.com/watch?v=70fP1M8hZVA")
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
        console.log(salida)
        await input('Presione cualquier tecla para continuar...')
    }
}