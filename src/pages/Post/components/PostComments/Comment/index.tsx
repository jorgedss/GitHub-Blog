import { CommentContainer, CommentContet, ProfileThumb } from './styles'

interface CommentProps {
  author: string
  content: string
  avatarUrl: string
}

export function Comment({ author, avatarUrl, content }: CommentProps) {
  return (
    <CommentContainer>
      <ProfileThumb>
        <img src={avatarUrl} alt="" />
      </ProfileThumb>
      <CommentContet>
        <span>@{author}</span>
        <div>{content}</div>
      </CommentContet>
    </CommentContainer>
  )
}
