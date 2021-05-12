var dia = document.getElementById("dia");

function getHours() {

var fecha = new Date();

// console.log(fecha);

var hora = {

hora: fecha.getHours(),

minutos: fecha.getMinutes(),

segundos: fecha.getSeconds(),

dia: fecha.getDay(),

mes: fecha.getMonth(),

year: fecha.getFullYear()

}

var meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

var dias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

// console.log(hora.year);

dia.innerHTML = `${dias[hora.dia]} - ${meses[hora.mes]} - ${hora.year} \n ${hora.hora} : ${hora.minutos} : ${hora.segundos}`

}

setInterval(() => {

getHours()

}, 1200);

