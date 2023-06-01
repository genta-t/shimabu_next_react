import Head from 'next/head'
import { useState } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, deletePost } from '../components/features/post'

const ReduxBoard = () => {
  const postList = useSelector((state) => state.posts.value);
  console.log(postList);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [idNumber, setIdNumber] = useState(5);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    
    dispatch(
      addPost({
        id: idNumber,
        name: name,
        content: content,
      })
    );

    setIdNumber(idNumber+1);
    setName("");
    setContent("");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>board</title>
      </Head>
      <Header />
      <div>
        <div>
          <h1>React-Redux掲示板</h1>
        </div>
        <div className="addPost">
          <input type="text" placeholder="お名前" onChange={(e) => setName(e.target.value)} value={name} />
          <input type="text" placeholder="投稿内容" onChange={(e) => setContent(e.target.value)} value={content} />
          <button onClick={() => handleClick()}>投稿</button>
          <hr />
        </div>
        <div>
          {postList.map((post, i) => (
            <div key={i}>
              <h1>{post.name}</h1>
              <h3>{post.content}</h3>
              <button onClick={() => dispatch(deletePost({id: post.id}))}>削除</button>
            </div>
          )
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ReduxBoard
