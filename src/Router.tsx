import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { Error } from './pages/Error'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:ishueId" element={<Post />} />
        <Route path="/notFound" element={<Error />} />
      </Route>
    </Routes>
  )
}
