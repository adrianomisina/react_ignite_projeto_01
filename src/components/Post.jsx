/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {useState} from 'react'
import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import Comment from './Comment'
import Avatar from './Avatar';
import styles from './Post.module.css'

const Post = ({author, publishedAt, content}) => {
  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handleCreateNewComment = (event) => {
    event.preventDefault()
    const newCommentText = event.target.comment.value
    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  const handleNewCommentChange = (event) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }
  
  const handleNewCommentInvalid = () => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0


  return (
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl} />
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>
    </header>

    <div className={styles.content}>
      {content.map((line, index) => {
        if (line.type === 'paragraph') {
          return <p key={`${line.type}-${index}`}>{line.content}</p>;
        } else if (line.type === 'link') {
          return <p key={`${line.type}-${index}`}><a href="#">{line.content}</a></p>;
        }
        return null; // Adicione um retorno padrão para evitar um aviso no eslint
      })}
    </div>

    <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea 
        placeholder='Deixe um comentário' 
        name='comment'
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />

      <footer>
        <button type="submit" disabled={isNewCommentEmpty}>
          Publicar
        </button>
      </footer>
    </form>

    <div className={styles.commentList}>
      {comments.map(comment => {
        return (
          <Comment 
            key={comment} 
            comment={comment}
            onDeleteComment={deleteComment}
          />
        )
      })}
    </div>
  </article>
  )
}

export default Post