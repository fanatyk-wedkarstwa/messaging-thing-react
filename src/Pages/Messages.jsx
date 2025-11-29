import React, { useState } from 'react'
import styles from '../Styles/Messages.module.css'

function Messages() {
  const [username, setUsername] = useState("Username")
  const [content, setContent] = useState("Content")
  return (
    <>
      <header className={styles.header}>Messages</header>
      <div className={styles.messages_container}>
        <div className={styles.messages}>

          {/* MESSAGE STRUCTURE BELOW*/}

          <div className={styles.message} id='message-1'>
            <div className={styles.message_left}>
              <div className={styles.message_pfp}></div>
            </div>
            <div className={styles.message_right}>
              <div className={styles.message_username}>{username}</div>
              <div className={styles.message_content}>{content}</div>
            </div>
          </div>


        </div>

        <div className={styles.user_message}>
          <form>
            <input type='text' placeholder='Write a message!'></input>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Messages
