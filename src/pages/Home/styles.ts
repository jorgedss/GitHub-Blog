import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 56rem;
  width: 100%;

  margin: -6.625rem auto 2rem;
  padding: 0 2rem;

  main {
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media only screen and (max-width: 699px) {
    main {
      grid-template-columns: 1fr;
    }
  }
`
