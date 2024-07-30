import bg from '../../assets/bg-header.svg'
import { HeaderContainer } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <img src={bg} alt="" />
    </HeaderContainer>
  )
}
