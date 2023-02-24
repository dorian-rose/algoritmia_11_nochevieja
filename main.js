//Cree una función que acepte un Dateobjet y regrese tru esi es Nochebuena (24 de diciembre) y false en caso contrario
const fecha = "1221-12-12";
const validarFecha = async (fecha) => {
  const regEx = /[\d]{4}\-[\d]{2}\-[\d]{2}/;

  if (regEx.test(fecha) == true) {
    esNochebuena(fecha);
  } else {
    return "date format invalid";
  }
};

const esNochebuena = async (fecha) => {
  const fechaRecibida = new Date(fecha);
  const dia = fechaRecibida.getDate();
  const mes = fechaRecibida.getMonth();
  if (dia == 24 && mes == 11) {
    return true;
  } else {
    return false;
  }
};

const init = async (fecha) => {
  let message;
  try {
    const fechaValid = await validarFecha(fecha);
    const fechaEsNochebuena = await esNochebuena(fecha);
    c;
    if (fechaEsNochebuena == true) {
      message = `${fecha} es Nochebuena`;
    } else {
      message = `${fecha} no es Nochebuena`;
    }
  } catch (error) {
    message = error;
  }
  return message;
};

const print = async (id) => {
  message = await getDatos(id);
  document.write(message);
};

console.log(validarFecha("1221-12-12"));
console.log(esNochebuena());
