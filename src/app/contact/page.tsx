import Form from "@/components/contactinfo/form";
import Box from "@/components/contactinfo/Box";
import styles from "./page.module.css";


export default function Contact() {
    return (
      <div className={styles.container}>
        <Box title="Contact me">
          <ul>
            <li className={styles.marginBottom}><b>Email: </b>silje.melling94@gmail.com</li>
            <br></br>
            <li className={styles.marginBottom}><b>Phone: </b>959 767 46</li>
            <br></br>
            <li className={styles.marginBottom}>You could also use the form below.</li>
          </ul>
        </Box>
        <Form/>
      </div>
    );
  }