import styled, { css } from 'styled-components'

export const PostCardContainer = styled.div`
  height: 16.25rem;
  min-width: 21.25rem;
  max-width: 26rem;

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
  position: relative;
  justify-content: space-between;
  gap: 2rem;

  span {
    right: 0;
    color: ${({ theme }) => theme.colors['base-span']};
    font-size: ${({ theme }) => theme.fontSize['text-s']};
    width: 4rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`

interface LabelVariant {
  variant: 'open' | 'closed'
}

export const Label = styled.div<LabelVariant>`
  width: 4rem;
  height: 1rem;
  border-top-right-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors['ishue-closed']};
  color: white;
  font-size: 0.5rem;
  font-weight: bold;
  font-family: 'Nunito' monospace;

  position: absolute;
  top: -2rem;
  right: -2rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);

  ${(props) =>
    props.variant === 'open'
      ? css`
          background: ${props.theme.colors.blue};
        `
      : css`
          background: ${props.theme.colors['ishue-closed']};
        `}
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
export const ButtonContainer = styled.div`
  max-width: 12rem;
  max-height: 6rem;
  width: 100%;

  white-space: wrap;
  overflow: hidden;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.fontSize['title-s']};
    font-weight: bold;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;

    &:hover {
      text-decoration: underline;
    }
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
