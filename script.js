function escucharMuscia() {
    let solicitarOpcion = prompt(`Por favor seleccione la acción que desee realizar indicando con el Nº correspondiente:
    1: Escuchar Radio
    2: Pedir una cancion  
    3: Salir 
    `);
    
    switch(solicitarOpcion) {
        case "1":
            let solicitarRadio = prompt(`Por favor seleccione a la radio que desee escuchar indicando con el Nº correspondiente:\n1. R&B \n2. Pop \n3. Rock \n4. Hip-Hop \n5. Electronica`);
            let cantidadHoras = Number(prompt("Por cuantas horas quiere escuchar?"));
            while (cantidadHoras === 0){ alert("Por favor indique una opcion diferente de 0")
            cantidadHoras = Number(prompt("Por cuantas horas quiere escuchar?"));
            }
        
            switch(solicitarRadio){
                case "1":
                    alert("Escuchando la radio R&B por " + cantidadHoras + " horas");
                    console.log("Reproduciendo playlist 1");
                    console.log("en lista playlist" + cantidadHoras);
                    break;
                case "2":
                    alert("Escuchando la radio Pop por " + cantidadHoras + " horas");
                    console.log("Reproduciendo playlist 2");
                    console.log("en lista playlist" + cantidadHoras);
                    break;
                case "3":
                    alert("Escuchando la radio Hip-Hop por " + cantidadHoras + " horas");
                    console.log("Reproduciendo playlist 3 ");
                    console.log("en lista playlist" + cantidadHoras);
                    break;
                case "4":
                    alert("Escuchando la radio Electrónica por " + cantidadHoras + " horas");
                    console.log("Reproduciendo playlist 4 ");
                    console.log("en lista playlist " + cantidadHoras);
                    break;
                case "5":
                    alert("Escuchando la radio Rock por" + cantidadHoras + " horas");
                    console.log("Reproduciendo playlist 5");
                    console.log("en lista playlist " + cantidadHoras);
                    break;
                default:
                    console.log("Ninguna opción seleccionada");
                    break;
            }
            break;
            
        case "2":
            let solicitarCancion = prompt("Por favor escriba una canción que quiera escuchar");
            let solicitarArtista = prompt("Escriba el nombre del artista o grupo");
            alert("Reproduciendo " + solicitarCancion + " de " + solicitarArtista);
            console.log("Reproduciendo " + solicitarCancion + " de " + solicitarArtista);
            break;
        case "3":
            alert("Hasta luego");
            break;
        default:
            alert("Hasta luego")
            break;
    }
}
escucharMuscia();
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {location.reload();
})
