import CvBox from "@/components/cv/CvBox";
import styles from "./page.module.css"
import Image from 'next/image'

export default function Cv() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/silje.png"
            width={400}
            height={400}
            alt="picture of Silje"
          />
        </div>
        <CvBox title="Education">
          <ul>
            <li className={styles.marginBottom}><b>2024-2025</b><br/>Bachelor of IT and Digitalization</li>
            <li className={styles.marginBottom}><b>2018-2020</b><br/>Master of Science in Logistics</li>
            <li className={styles.marginBottom}><b>2017-2018</b><br/>Subjects in logistics</li>
            <li className={styles.marginBottom}><b>2016-2017</b><br/>German language course</li>
            <li><b>2013-2016</b><br/>Bachelor of Arts in European Studies</li>
          </ul>
        </CvBox>
        <CvBox title="Experience">
          <ul>
            <li className={styles.marginBottom}><b>2022-present</b><br/>Key Account Manager - World Kinect</li>
            <li className={styles.marginBottom}><b>2020-2022</b><br/>Purchaser - Pipelife</li>
            <li className={styles.marginBottom}><b>2019</b><br/>Internship - Norsk Hydro</li>
            <li><b>2017-2019</b><br/>German and social science teacher - Sunndal High School</li>
          </ul>
        </CvBox>
        <CvBox title="Introduction"><p className={styles.text}>Hi, my name is Silje. I am a logistics expert with 5 years of experience in purchasing and sales. 
        I am passionate about learning new things and being active outdoors. Contact me for a chat over a caffee.</p></CvBox>
        <CvBox title="Skills">
          <ul>
            <li className={styles.text}>Building relationships</li>
            <li className={styles.text}>Negotiations</li>
            <li className={styles.text}>English and german</li>
            <li className={styles.text}>Contribute to a good atmosphere in the office</li>
          </ul>
        </CvBox>
        <CvBox title="Tools">
          <ul>
            <li className={styles.text}>Microsoft Office</li>
            <li className={styles.text}>Phyton</li>
            <li className={styles.text}>HTML</li>
            <li className={styles.text}>CSS</li>
            <li className={styles.text}>JavaScript</li>
          </ul>
        </CvBox>
      </div>
    </div>
  );
}