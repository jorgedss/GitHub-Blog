import { useContext, useEffect, useState } from 'react'
import { Comment } from './Comment'
import { CommentsContainer, PostCommentsContainer } from './styles'
import { UserContext } from '../../../../contexts/UserContext'
import { api } from '../../../../lib/axios'
import { UserDataTypes } from '../../../../@types/GithubDataTypes'

interface CommentType {
  user: UserDataTypes
  body: string
  id: number
}

export function PostComments() {
  const { ishueToShow } = useContext(UserContext)

  const [comments, setComments] = useState<CommentType[]>(() => {
    const savedValue = localStorage.getItem('comments')
    return savedValue != null ? JSON.parse(savedValue) : []
  })

  async function loadComments(repo: string, ishueNumber: number) {
    const response = await api.get(
      `/repos/jorgedss/${repo}/issues/${ishueNumber}/comments`,
    )
    setComments(response.data)
  }

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
    loadComments('github-blog', ishueToShow.number)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(comments)

  return (
    <PostCommentsContainer>
      <header>Comentários</header>
      <CommentsContainer>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              author={comment.user.login}
              avatarUrl={comment.user.avatar_url}
              content={comment.body}
            />
          )
        })}
      </CommentsContainer>
    </PostCommentsContainer>
  )
}
