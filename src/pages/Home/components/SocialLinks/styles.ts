import styled from 'styled-components'

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`
export const SocialLinksContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['base-text']};

    &:hover {
      text-decoration: underline;
    }
  }
  svg {
    size: 18px;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
