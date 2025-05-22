// Hola, profe!!! Espero que le guste mi código
// Creé una variable con el nombre porque siempre olvido cómo escribir el (tm)
const nombreEstudio = "eccco™ studio";
const servicios = ["Branding", "UX/UI", "Desarrollo Front-End", "Motion Graphics"];
let nombreUsuario = "";


function darBienvenida() {
  alert(`Bienvenido a ${nombreEstudio}👋!`);
  let nombre = prompt("¿Cómo te llamas?");
  return nombre;
}


function mostrarMenu(nombre) {
  let opcion = prompt(`Hola, ${nombre} \n¿Qué deseas hacer?\n\n1. Ver servicios ofrecidos\n2. Calcular presupuesto\n3. Salir`);
  return opcion;
}


function mostrarServicios() {
  let lista = "Servicios ofrecidos por eccco.studio:\n";
  for (let i = 0; i < servicios.length; i++) {
    lista += "- " + servicios[i] + "\n";
  }
  alert(lista);
}


function calcularPresupuesto(nombre) {
  let paquete = prompt(
    "Selecciona el paquete que deseas cotizar:\n1. Identidad Gráfica\n2. Desarrollo Web\n3. Pack Completo"
  );

  let descripcion = "Texto base";

  switch (paquete) {
    case "1":
      descripcion = "Identidad Gráfica - Desde $250.000 CLP";
      break;
    case "2":
      descripcion = "Desarrollo Web - Desde $500.000 CLP";
      break;
    case "3":
      descripcion = "Pack Completo - Desde $1.000.000 CLP";
      break;
    default:
      alert("Opción inválida.");
      return;
  }

  let confirmacion = confirm(`Escogiste el paquete:\n"${descripcion}".\n¿Es correcto?`);

  if (confirmacion) {
    alert(
      `Gracias, ${nombre}. Hemos recibido tu solicitud de presupuesto para "${descripcion}".\nTe enviaremos un correo pronto!`
    );
  } else {
    alert("Volviendo al menú.");
  }
}


function iniciarSimulador() {
  nombreUsuario = darBienvenida();
  let salir = false;

  while (salir === false) {
    const opcion = mostrarMenu(nombreUsuario);

    switch (opcion) {
      case "1":
        mostrarServicios();
        break;
      case "2":
        calcularPresupuesto(nombreUsuario);
        break;
      case "3":
        alert(`Gracias por visitar ${nombreEstudio}!`)
        salir = true;
        break;
      default:
        alert("Opción inválida. Intenta otra vez.");
    }
  }
}

iniciarSimulador();

// Gracias! Espero que el código no le haga sangrar los ojos

// PD: Intenté hacer que se pudieran seleccionar múltiples servicios y se sumaran en un total
// Pero la infinidad de ifs y elses que había creado era horrible, espero que esto funcione por ahora jaja 