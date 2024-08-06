import styled from 'styled-components'

export const PostCardContainer = styled.div`
  height: 16.25rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;
  gap: 1.25rem;
  border-radius: 6px;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`

export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.colors['base-span']};
    font-size: ${({ theme }) => theme.fontSize['text-s']};
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  button {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.fontSize['title-m']};
    font-weight: bold;

    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const AuthorProfileImage = styled.div`
  display: flex;
  width: auto;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 6px;
  }
`

export const PostCardContent = styled.div`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.fontSize['text-m']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
`
