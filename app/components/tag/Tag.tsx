import styles from './Tag.module.scss';

type TagProps = {
 value: string;
}

const Tag: React.FC<TagProps> = ({ value }) => {
 return (
  <div className={styles.tag}>
   {value}
  </div>
 );
}

export default Tag;