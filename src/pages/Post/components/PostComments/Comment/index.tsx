import { useContext } from 'react'
import { CommentContainer, CommentContet, ProfileThumb } from './styles'
import { UserContext } from '../../../../../contexts/UserContext'

export function Comment() {
  const { githubData } = useContext(UserContext)

  return (
    <CommentContainer>
      <ProfileThumb>
        <img src={githubData.avatar_url} alt="" />
      </ProfileThumb>
      <CommentContet>
        <span>@{githubData.login}</span>
        <div>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          perferendis eligendi eveniet nemo assumenda officiis soluta excepturi
          animi debitis repellat magni blanditiis, fugiat ea odio enim dolorem,
          dolore adipisci voluptatibus!
        </div>
      </CommentContet>
    </CommentContainer>
  )
}
