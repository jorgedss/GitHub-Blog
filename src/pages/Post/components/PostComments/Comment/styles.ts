import styled from 'styled-components'

export const CommentContainer = styled.div`
  display: flex;
  gap: 1rem;
  min-height: 4rem;
  padding: 0.5rem;
`
export const ProfileThumb = styled.div`
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`

export const CommentContet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0 8px 8px 8px;
  background: ${({ theme }) => theme.colors['base-label']};
  font-size: ${({ theme }) => theme.fontSize['text-m']};

  span {
    font-weight: bold;
  }
  div {
    margin-left: 0.5rem;
  }
`
