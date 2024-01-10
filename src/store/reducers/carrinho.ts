import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoAtual = action.payload

      if (state.itens.find((item) => item.id === produtoAtual.id)) {
        state.itens = state.itens.filter((item) => item.id !== produtoAtual.id)
        alert('O item foi removido')
      } else {
        state.itens = [...state.itens, produtoAtual]
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
