import styles from './style.module.css';
import { getShorterDescription, getShorterTitle } from '../../helpers/getShorterString';
import no_avatar_image from '../../assets/images/no_avatar_image.jpg';
import { IPost } from '../../types/name';
import { memo } from 'react';

const Card = ({ post, handleClick }: { post: IPost; handleClick: () => void }) => {
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.cardContent}>
        <div className={styles.cardBox}>
          <img src={no_avatar_image} alt="user" />
        </div>
        <div>
          <h3 className={styles.cardTitle}>{getShorterTitle(post.title)}</h3>
          <p className={styles.cardDescription}>{getShorterDescription(post.body)}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
