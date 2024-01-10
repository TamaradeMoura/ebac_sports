import { useDispatch } from 'react-redux'
import { FaHeart } from 'react-icons/fa'
import { FaHeartBroken } from 'react-icons/fa'

import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favoritos'
import { useState } from 'react'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const [adicionadosAoCarrinho, setAdicionadosAoCarrinho] = useState(false)
  const [adicionadosAosFavoritos, setAdicionadosAosFavoritos] = useState(false)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <small>{paraReal(produto.preco)}</small>
        <strong>{paraReal(produto.preco)}</strong>
        <S.Tag>Sair</S.Tag>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          dispatch(adicionar(produto))
          setAdicionadosAoCarrinho(!adicionadosAoCarrinho)
        }}
        type="button"
      >
        {adicionadosAoCarrinho
          ? '- Remover do carrinho'
          : '+ Adicionar ao carrinho'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => {
          dispatch(favoritar(produto))
          setAdicionadosAosFavoritos(!adicionadosAosFavoritos)
        }}
        type="button"
      >
        {adicionadosAosFavoritos ? <FaHeart /> : <FaHeartBroken />}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
