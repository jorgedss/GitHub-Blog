import { PostComments } from './components/PostComments'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  // const ishueToShow = ishuesData.find((ishue) => ishue.id === idPostToShow)!
  // console.log(ishueToShow)

  return (
    <PostContainer>
      <PostInfo />
      <PostContent />
      <PostComments />
    </PostContainer>
  )
}
