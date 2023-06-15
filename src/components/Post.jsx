import styles from './Post.module.css'

const Post = () => {
  return (
    <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/65734814?v=4" />
        <div className={styles.authorInfo}>
          <strong>Adriano Misina</strong>
          <span>Web Developer</span>
        </div>
      </div>

      <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉<a href="">adriano.misina@gmail.com</a></p>
      <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea placeholder='Deixe um comentário'/>
      <button type="submit">Comentar</button>
    </form>
  </article>
  )
}

export default Post