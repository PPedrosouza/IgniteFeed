import { Post } from './Post'

import { Header } from './components/Header/Header'

import '../src/global.css'

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Pedro Souza"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit recusandae ipsa necessitatibus ex, quos optio dolore at officiis labore, eum libero blanditiis cum asperiores, repudiandae laudantium exercitationem quo voluptatem."
      />
      <Post
        author="Diego Fernandes"
        content="Um post mt legal"
      />
    </>
  )
}

