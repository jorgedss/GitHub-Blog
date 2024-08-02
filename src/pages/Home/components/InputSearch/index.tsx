import { useContext } from 'react'
import { InputContainer, InputLabels } from './styles'
import { UserContext } from '../../../../contexts/UserContext'

export function InputSearch() {
  const { ishuesData } = useContext(UserContext)
  return (
    <InputContainer>
      <InputLabels>
        <p>Publicações</p>
        <span>
          {ishuesData?.length}
          {ishuesData?.length === 1 ? ' publicação' : ' publicações'}
        </span>
      </InputLabels>
      <input type="text" placeholder="Buscar Conteúdo" />
    </InputContainer>
  )
}
