import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import styles from './App.module.css'

import '../src/global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/PPedrosouza.png',
      name: 'Pedro Olegário',
      role: 'Student @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia rede 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz na pós da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: 'https://github.com/PPedrosouza/IgniteFeed' },
    ],
    publishedAt: new Date('2025-03-12 06:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Mais um projeto do nosso módulo construído com sucesso! Construímos um feed de notícias, onde podemos comentar, deletar e aplaudir nossas conexões!' },
      { type: 'link', content: 'https://app.rocketseat.com.br/journey/mba-rocketseat-fullstack/overview' },
    ],
    publishedAt: new Date('2025-03-03 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>
          aside
        </Sidebar>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

