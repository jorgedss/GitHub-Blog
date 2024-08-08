import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { StyleSheetManager } from 'styled-components'
import emotionIsPropValid from '@emotion/is-prop-valid'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyleSheetManager shouldForwardProp={emotionIsPropValid}>
    <App />
  </StyleSheetManager>,
)
