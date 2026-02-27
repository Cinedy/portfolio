import CvBox from "@/components/cv/CvBox";
import TimelineEntry from "@/components/cv/TimelineEntry";
import styles from "./page.module.css"

export default function Cv() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CvBox title="Experience">
          <TimelineEntry year="2025–present" role="Advisor in Innovation, Technology and Development" company="Haraldsplass Diakonale Sykehus" />
          <TimelineEntry year="2022–2024" role="Key Account Manager" company="World Kinect" />
          <TimelineEntry year="2020–2022" role="Purchaser" company="Pipelife" />
          <TimelineEntry year="2019" role="Internship" company="Norsk Hydro" />
          <TimelineEntry year="2017–2019" role="German and Social Science Teacher" company="Sunndal High School" isLast />
        </CvBox>
        <CvBox title="Education">
          <TimelineEntry year="2024–2025" role="Bachelor of IT and Digitalization" company="" />
          <TimelineEntry year="2018–2020" role="Master of Science in Logistics" company="" />
          <TimelineEntry year="2017–2018" role="Subjects in Logistics" company="" />
          <TimelineEntry year="2016–2017" role="German Language Course" company="" />
          <TimelineEntry year="2013–2016" role="Bachelor of Arts in European Studies" company="" isLast />
        </CvBox>
        <CvBox title="Introduction">
          <p className={styles.intro}>
            I am passionate about using AI and technology to address real challenges and create meaningful impact.
            With a background spanning logistics, sales, and education, I bring a broad perspective to digitalization
            and innovation initiatives.
          </p>
          <p className={styles.introSub}>Open to a chat over coffee and a cinnamon bun.</p>
        </CvBox>
        <CvBox title="Skills">
          <div className={styles.pills}>
            <span className={styles.pill}>AI strategy</span>
            <span className={styles.pill}>Digitalization</span>
            <span className={styles.pill}>Purchasing &amp; sales</span>
            <span className={styles.pill}>Relationship building</span>
            <span className={styles.pill}>Negotiations</span>
            <span className={styles.pill}>Norwegian</span>
            <span className={styles.pill}>English</span>
            <span className={styles.pill}>German</span>
          </div>
        </CvBox>
        <CvBox title="Tools">
          <div className={styles.pills}>
            <span className={styles.pillTool}>Python</span>
            <span className={styles.pillTool}>JavaScript</span>
            <span className={styles.pillTool}>Next.js</span>
            <span className={styles.pillTool}>HTML &amp; CSS</span>
            <span className={styles.pillTool}>Microsoft M365</span>
            <span className={styles.pillTool}>Microsoft Copilot</span>
          </div>
        </CvBox>
      </div>
    </div>
  );
}