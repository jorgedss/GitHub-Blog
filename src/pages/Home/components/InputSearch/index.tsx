import { useContext } from 'react'
import { InputContainer, InputLabels } from './styles'
import { UserContext } from '../../../../contexts/UserContext'

interface InputSearchProps {
  query: string
  handleSetQuery: (event: string) => void
}

export function InputSearch({ query, handleSetQuery }: InputSearchProps) {
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
      <input
        type="text"
        placeholder="Buscar Conteúdo"
        value={query}
        onChange={(e) => handleSetQuery(e.target.value)}
      />
    </InputContainer>
  )
}
