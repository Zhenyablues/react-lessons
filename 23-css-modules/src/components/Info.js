import './Info.css';
import styles from './Info.module.css';

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from Info component</h1>
      <button className="my-button">Click me</button>
      <button className={styles.myOtherButton}>
        Button with local CSS styles
      </button>
    </div>
  );
}

export default Info;
