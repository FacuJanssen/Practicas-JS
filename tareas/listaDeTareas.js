let tareas = [
  { tarea: "tarea 1", estado: "pendiente" },
  { tarea: "tarea 2", estado: "pendiente" },
];

const mostrarTareas = () => {
  for (let i = 0; i < tareas.length; i++) {
    console.log(`${i + 1}. ${tareas[i].tarea} - ${tareas[i].estado}`);
  }
};

const agregarTarea = (nueva_tarea) => {
  tareas.push({ tarea: nueva_tarea, estado: "pendiente" });
  console.log(`tarea agregada: ${nueva_tarea}`);
};

const eliminarTarea = (index) => {
  const tarea_eliminada = tareas.splice(index, 1);
  console.log(`tarea "${tarea_eliminada[0].tarea}" eliminada`);
};

const completarTarea = (index) => {
  tareas[index].estado = "completada";
  console.log(`tarea "${tareas[index].tarea}" completada`);
};

//mostrarTareas();
//agregarTarea("tarea 3");
//mostrarTareas();
//eliminarTarea(2);
//mostrarTareas();
//completarTarea(1);
