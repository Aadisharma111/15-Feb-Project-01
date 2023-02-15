import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <main className={styles.image1Parent}>
      <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
      <h1 className={styles.inThisProjectContainer}>
        <p className={styles.inThisProject}>
          IN this project we have to create component from A to Z in the
          alternate and sending data started
        </p>
        <p className={styles.fromAAnd}>from A and receive in Z</p>
      </h1>
      <h2 className={styles.parentData1Container}>
        <p className={styles.inThisProject}>
          Parent data 1 Data2 Aditya Sharma
        </p>
        <p className={styles.inThisProject}>Child</p>
        <p className={styles.inThisProject}>THOUGHT-WIN Aditya</p>
        <p className={styles.inThisProject}>C Aditya</p>
        <p className={styles.inThisProject}>D- Parent data3</p>
        <p className={styles.inThisProject}>E- Jaipur</p>
        <p className={styles.inThisProject}>F- THOUGHT-WIN Jaipur</p>
        <p className={styles.inThisProject}>G- Aditya Sharma Parent data3</p>
        <p className={styles.inThisProject}>H- Jaipur Aditya Sharma</p>
        <p className={styles.inThisProject}>I- Child Parent data3</p>
        <p className={styles.inThisProject}>J- Data2 Aditya Sharma</p>
        <p className={styles.inThisProject}>{`K- parent data2 data2 `}</p>
        <p className={styles.inThisProject}>L- Jaipur Thought win</p>
        <p className={styles.fromAAnd}>{` `}</p>
      </h2>
    </main>
  );
};

export default FrameComponent;
