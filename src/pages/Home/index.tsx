import { useContext } from 'react'
import { InputSearch } from './components/InputSearch'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { HomeContainer } from './styles'
import { UserContext } from '../../contexts/UserContext'

export function Home() {
  const { ishuesData } = useContext(UserContext)
  return (
    <HomeContainer>
      <Profile />
      <InputSearch />
      <main>
        {ishuesData?.map((data) => {
          return (
            <PostCard
              key={data.id}
              body={data.body}
              title={data.title}
              createdAt={data.created_at}
            />
          )
        })}
      </main>
    </HomeContainer>
  )
}
