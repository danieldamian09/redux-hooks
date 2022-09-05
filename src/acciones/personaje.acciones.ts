import { Action, ActionCreator } from "@reduxjs/toolkit";

interface BuscarPersonajesAccion extends Action {
  type: "BUSCAR_PERSONAJES";
  nombre: string;
}

export const buscarPersonajes: ActionCreator<BuscarPersonajesAccion> = (
  nombre: string
) => {
  return {
    type: "BUSCAR_PERSONAJES",
    nombre: nombre
  };
};

export type PersonajeAcciones =
  // ReturnType<typeof eliminarPersonajes>
  ReturnType<typeof buscarPersonajes>;
