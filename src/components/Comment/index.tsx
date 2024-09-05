import { memo } from 'react';
import styles from './style.module.css';
import no_avatar_image from '../../assets/images/no_avatar_image.jpg';
import { IComment } from '../../types/name';
const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <div className={styles.commentCard}>
      <div className={styles.commentContent}>
        <div className={styles.avatarImage}>
          <img src={no_avatar_image} className={styles.avatarImage} alt="No Avatar" />
        </div>
        <div className={styles.commentTitle}>
          <h4> {comment.name}</h4>
          <p> {comment.email}</p>
        </div>
      </div>
      <p className={styles.textWhite}>{comment.body}</p>
    </div>
  );
};

export default memo(Comment);
