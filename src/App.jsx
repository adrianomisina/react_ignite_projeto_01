import Post from "./components/Post"
import Header from "./components/header"
import Sidebar from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'

const App = () => {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>    
        </main>
      </div>
    </div>
  )
}

export default App