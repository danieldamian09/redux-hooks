import { Reducer } from "@reduxjs/toolkit";
import { PersonajeAcciones } from "../acciones/personaje.acciones";
import Personaje from "../types/personaje.types";

interface EstadoPersonajes {
  busqueda: string;
  personajes: Personaje[];
}

const estadoInicial = {
  busqueda: "rick",
  personajes: []
};

const personajesReductora: Reducer<EstadoPersonajes, PersonajeAcciones> = (
  estado = estadoInicial,
  action
) => {
  switch (action.type) {
    case "BUSCAR_PERSONAJES":
      return { ...estado, busqueda: action.nombre };
    default:
      return { ...estado };
  }
};

export default personajesReductora;
