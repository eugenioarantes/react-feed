import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/eugenioarantes.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eugênio Júnior</strong>
              <time title='11 de maio às 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}