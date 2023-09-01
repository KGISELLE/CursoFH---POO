export let weekDay: number = 5; //1 = Lunes 2 = Martes, 3 = Miercoles, 4 = Jueves, 5 = Viernes, 6 = Sabado, 7 = Domingo

if (weekDay <= 0) {
  //   console.log("Dia de la semana no permitido");
  throw new Error("Dia de la semana no permitido");
}

switch (weekDay) {
  case 1:
    console.log("Es lunes");
    //weekDay === 1;
    break;
  case 2:
    console.log("Es martes");
    //weekDay === 2;
    break;
  case 3:
    console.log("Es miercoles");
    //weekDay === 3;
    break;
  default:
    console.log("No es ni lunes ni martes ni miercoles");
}
