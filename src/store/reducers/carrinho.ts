import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  items: Produto[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.items.find((p) => p.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(item)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
