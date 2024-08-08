import { useContext, useState } from 'react'
import { PostCard } from '../PostCard'
import { IshuesCardListContainer } from './styles'
import { UserContext } from '../../../../contexts/UserContext'
import { InputSearch } from '../InputSearch'
import RepositorySelection from '../RepositorySelector'

export function IshuesCardList() {
  const { ishuesData } = useContext(UserContext)

  const [query, setQuery] = useState('')

  const filteredIshuesData =
    query.length > 0
      ? ishuesData?.filter((ishue) =>
          ishue.title.toLowerCase().includes(query.toLowerCase()),
        )
      : []

  function handleSetQuery(event: string) {
    setQuery(event)
  }

  const ishuesDataToUse = query ? filteredIshuesData : ishuesData
  return (
    <IshuesCardListContainer>
      <InputSearch query={query} handleSetQuery={handleSetQuery} />
      <RepositorySelection />
      <main>
        {ishuesDataToUse?.map((data) => {
          return <PostCard key={data.id} ishue={data} />
        })}
      </main>
    </IshuesCardListContainer>
  )
}
