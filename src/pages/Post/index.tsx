import { useNavigate, useParams } from 'react-router-dom'
import { PostComments } from './components/PostComments'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Post() {
  const { ishuesData } = useContext(UserContext)
  const { ishueId } = useParams()
  const navigate = useNavigate()

  const index = ishuesData.findIndex((ishue) => ishue.id.toString() === ishueId)

  useEffect(() => {
    if (index < 0) {
      navigate('/notFound')
    }
  }, [index, navigate])

  return (
    <PostContainer>
      <PostInfo />
      <PostContent />
      <PostComments />
    </PostContainer>
  )
}
