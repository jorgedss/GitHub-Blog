import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`

export const Content = styled(Dialog.Content)`
  display: flex;
  gap: 1rem;
  min-width: 46rem;
  border-radius: 6px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors['base-post']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Title = styled(Dialog.Title)`
  color: ${({ theme }) => theme.colors['base-title']};
`
export const ProfileImage = styled.div`
  img {
    width: 15rem;
    height: 15rem;
    border-radius: 6px;
  }
`
export const ProfileBio = styled.div`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.fontSize['text-m']};
  height: 100%;
`

export const CloseButton = styled(Dialog.Close)`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.blue};
    padding: 0.2rem;
  }

  &:hover {
    background: rgba(176, 187, 222, 0.2);
    transition: 0.2s;
  }
`
