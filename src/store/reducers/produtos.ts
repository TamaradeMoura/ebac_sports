import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type ProdutoState = {
  item: Produto[]
}

const initialState: ProdutoState = {
  item: []
}

const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    produto: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.item.find((p) => p.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.item.push(item)
      }
    }
  }
})

export const { produto } = produtoSlice.actions
export default produtoSlice.reducer
