import { useContext } from 'react'
import { InputSearch } from './components/InputSearch'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { HomeContainer } from './styles'
import { UserContext } from '../../contexts/UserContext'

export function Home() {
  const { ishuesData, filteredIshuesData, query } = useContext(UserContext)

  // query começa como false, tem valor inicial ''

  const ishuesDataToUse = !query ? ishuesData : filteredIshuesData

  return (
    <HomeContainer>
      <Profile />
      <InputSearch />
      <main>
        {ishuesDataToUse?.map((data) => {
          return (
            <PostCard
              key={data.id}
              id={data.id}
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
