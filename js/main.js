// Función para mostrar una notificación emergente
function mostrarMundo() {
    const campoNombre =document.getElementById("nombres").value;
    const campoTelefono =document.getElementById("telefono").value;
    const campoEmail =document.getElementById("email").value;
    const campoMontoIn = parseInt(document.getElementById("inversion").value);
    const campoTiempoIn =document.getElementById("tiempo").value;
    const conPre = document.getElementById("pre");
    const conPost = document.getElementById("post");
    const tiempoShow = document.getElementById("tiempo-show");
    const interesShow = document.getElementById("interes-show");
    const nombreShow= document.getElementById('nombres-show')
    const emailShow= document.getElementById('email-show')
    const totalShow= document.getElementById('total-show')
    const ganaciaShow=document.getElementById('ganancia-show')
    let intereses=0
    let total=0

    conPost.classList.remove("disabled");
    conPre.classList.add("disabled");
    nombreShow.innerText=campoNombre;
    emailShow.innerText=campoEmail;



    switch (campoTiempoIn) {
        case "1":
            tiempoShow.innerText ="12 Meses";
            interesShow.innerText ="0.8%";
            intereses = (campoMontoIn * 0.008)*12;
            total = campoMontoIn+intereses;
            ganaciaShow.innerText=intereses;
            totalShow.innerText=total;

            break;
        case "2":
            tiempoShow.innerText="24 Meses";
            interesShow.innerText ="1.3%";
            intereses=(campoMontoIn*0.013)*24;
            total=campoMontoIn+intereses;
            ganaciaShow.innerText=intereses;
            totalShow.innerText=total;

            break;
        case "3":
            tiempoShow.innerText="36 Meses";
            interesShow.innerText ="1.7%";
            intereses=(campoMontoIn*0.017)*36;
            total=campoMontoIn+intereses;
            ganaciaShow.innerText=intereses;
            totalShow.innerText=total;

            break;
    
        default:
            break;
    }
    
}

// Obtenemos el botón por su ID y le asignamos el EventListener
document.getElementById("simulador-btn").addEventListener("click", mostrarMundo);





// // Definimos la función que muestra un alert con "¡Hola Mundo!"
// function input() {
//     const campoNombre = document.getElementById('nombres');
//     const campoTelefono = document.getElementById('telefono');
//     const campoEmail = document.getElementById('email');
//     const campoInversion = document.getElementById('inversion');
//     const campoTiempo = document.getElementById('tiempo');
//     const contenedorPre= document.getElementById('pre');
//     const contenedorPost= document.getElementById('post');
//     const tiempoShow= document.getElementById('tiempo-show');
//     const interesShow= document.getElementById('interes-show');

//     contenedorPost.classList.remove('disabled');
//     contenedorPre.classList.add('disabled');

//     switch (campoTiempo) {
//         case "1": 
//             tiempoShow.innerText="12 Meses";
//             interesShow.innerText="0.8%";
//             break;
//         case "2":
//             tiempoShow.innerText="24 Meses";
//             interesShow.innerText="1.3%";
//             break;
//         case "3":
//             tiempoShow.innerText="36 Meses";
//             interesShow.innerText="1.7%";
//             break;

//         default:
//             break;
//     }
// }

// const boton = document.getElementById('simulador-btn');
// // Añadimos el eventListener al botón para que ejecute la función al hacer clic
// boton.addEventListener('click', input);



