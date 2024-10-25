import styles from "./form.module.css"

export default function Form() {
    return (
        <form className={styles.form} action="lokasjon" method="post">
            <div className={styles.container}>
                <p>
                    <label className={styles.label} htmlFor="name">Name</label> 
                    <input type="text" id="name" name="user_name" className={styles.input}/>
                </p>

                <p>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input type="email" id="email" name="user_email" className={styles.input}/>
                </p>

                <p>
                    <label className={styles.label} htmlFor="msg">Message</label>
                    <textarea className={styles.message} id="msg" name="user_message"> </textarea>
                </p>
            </div>
            <button className={styles.button}>Send Message</button>
        </form>
      );
  }