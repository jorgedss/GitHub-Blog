import styled from 'styled-components'

export const IshuesCardListContainer = styled.div`
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
