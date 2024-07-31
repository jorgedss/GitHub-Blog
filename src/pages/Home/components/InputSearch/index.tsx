import { InputContainer, InputLabels } from './styles'

export function InputSearch() {
  return (
    <InputContainer>
      <InputLabels>
        <p>Publicações</p>
        <span>0 publicações</span>
      </InputLabels>
      <input type="text" placeholder="Buscar Conteúdo" />
    </InputContainer>
  )
}
