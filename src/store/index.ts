import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favoritos'
import produtoReducer from './reducers/produtos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    produto: produtoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
