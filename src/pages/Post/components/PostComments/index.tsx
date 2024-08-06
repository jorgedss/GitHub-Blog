import { Comment } from './Comment'
import { CommentsContainer, PostCommentsContainer } from './styles'

export function PostComments() {
  return (
    <PostCommentsContainer>
      <header>Comentários</header>
      <CommentsContainer>
        <Comment />
        <Comment />
      </CommentsContainer>
    </PostCommentsContainer>
  )
}
