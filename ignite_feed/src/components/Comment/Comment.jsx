import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/69259960?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Olegário</strong>
                            <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}></Trash>

                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp></ThumbsUp>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>   
    )
}

