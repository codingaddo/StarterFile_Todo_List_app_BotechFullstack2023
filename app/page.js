import Form from './components/Form'
import List from './components/List'
import Todo from './components/Todo'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <Form/>
      <Todo>
        <List/>
      </Todo>
       <button
         style={
            {
              backgroundColor:'red',
              width:'100px',
              color:'white',
              fontSize:'20px',
              padding:'10px',
              border:'none',
              borderRadius:'10px',
              cursor:'pointer'
            }
        }>Clear all</button>
    </main>
  )
}
