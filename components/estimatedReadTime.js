import Image from "next/image";
import styles from "../styles/estimatedReadTime.module.css";

const EstimatedReadTime = ({ readingTime, date }) => {
  return (
    <>
      <div className={"row " + styles.wrapper}>
        <div className={styles.container}>
          <Image
            className={styles.text}
            src="/assets/images/icons/calendar.svg"
            height={24}
            width={24}
            alt="calender"
          />
          <span className={styles.text}>{new Date(date).toDateString()}</span>
        </div>
        <div className={styles.container}>
          <Image
            src="/assets/images/icons/clock.svg"
            height={24}
            width={24}
            alt="clock"
          />
          <span className={styles.text}>{readingTime} min</span>
        </div>
      </div>
    </>
  );
};

export default EstimatedReadTime;
