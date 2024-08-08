import { IshuesCardList } from './components/IshuesCardList'
import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <IshuesCardList />
    </HomeContainer>
  )
}
