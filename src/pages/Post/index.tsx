import { useContext } from 'react'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'
import { UserContext } from '../../contexts/UserContext'

export function Post() {
  const { ishuesData, idPostToShow } = useContext(UserContext)

  const ishueToShow = ishuesData.find((ishue) => ishue.id === idPostToShow)!

  return (
    <PostContainer>
      <PostInfo
        title={ishueToShow.title}
        comments={ishueToShow.comments}
        createdAt={ishueToShow.created_at}
      />
      <PostContent content={ishueToShow?.body} />
    </PostContainer>
  )
}
