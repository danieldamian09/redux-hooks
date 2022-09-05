import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajes } from "../acciones/personaje.acciones";
import { useSelector } from "../store/store";

const Buscador: FC = () => {
  // const {busqueda} = useSelector(estado => estado.personajes)
  const busqueda = useSelector((estado) => estado.personajes.busqueda);
  const dispatch = useDispatch();

  return (
    <div className="App-table">
      <div>
        <label>Buscar por Nombre: </label>
        <input
          type="text"
          value={busqueda}
          onChange={(e) => dispatch(buscarPersonajes(e.target.value))}
          placeholder="Rick, Morty, etc"
          autoFocus={true}
        />
      </div>
    </div>
  );
};

export default Buscador;
