import { useSelector } from 'react-redux'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../store'

const Header = () => {
  const items = useSelector((state: RootReducer) => state.carrinho.items)
  const itens = useSelector((state: RootReducer) => state.favorito.itens)

  const valorTotal = items.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itens.length} favoritos</span>
        <img src={cesta} />
        <span>
          {items.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
