import { InputSearch } from './components/InputSearch'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <InputSearch />
      <main>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    </HomeContainer>
  )
}
