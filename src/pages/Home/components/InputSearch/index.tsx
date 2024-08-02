import { useContext } from 'react'
import { InputContainer, InputLabels } from './styles'
import { UserContext } from '../../../../contexts/UserContext'

export function InputSearch() {
  const { ishuesData, query, filterIshues } = useContext(UserContext)

  return (
    <InputContainer>
      <InputLabels>
        <p>Publicações</p>
        <span>
          {ishuesData?.length}
          {ishuesData?.length === 1 ? ' publicação' : ' publicações'}
        </span>
      </InputLabels>
      <input
        type="text"
        placeholder="Buscar Conteúdo"
        value={query}
        onChange={(e) => filterIshues(e.target.value)}
      />
    </InputContainer>
  )
}
