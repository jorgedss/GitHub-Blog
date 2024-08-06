import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`
export const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
  button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38.25rem;
  width: 100%;
`

export const ProfileInfosContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ProfileName = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.fontSize['title-l']};
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const Link = styled.span`
  display: flex;
  height: 19px;
  align-items: center;

  gap: 0.5rem;

  a {
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.link};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline ${({ theme }) => theme.colors.blue};

      transition: 0.2s;
    }
  }

  svg {
    display: flex;
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSize.link};
  }
`

export const ProfileBio = styled.div`
  font-size: ${({ theme }) => theme.fontSize['text-m']};
  color: ${({ theme }) => theme.colors['base-text']};
  line-height: 1.6;
  max-height: 54px;
  margin-bottom: 1.5rem;
  overflow: auto;
  text-overflow: ellipsis;
`
