import { combineReducers, compose, createStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector
} from "react-redux";
import personajesReductora from "../reductoras/personajes.reductora";

const raizReductora = combineReducers({
  // funcionas reductoras -> reducers
  personajes: personajesReductora
});

// IRootState
export type EstadoGlobal = ReturnType<typeof raizReductora>;
export const useSelector: TypedUseSelectorHook<EstadoGlobal> = useReduxSelector;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(raizReductora, composeEnhancers());
