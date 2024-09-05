import { memo } from 'react';
import styles from './style.module.css';
import { IPost } from '../../types/name';
import no_avatar_image from '../../assets/images/no_avatar_image.jpg';

const DetailsCard = ({ post }: { post: IPost }) => {
  return (
    <div className={styles.detailsContent}>
      <img src={no_avatar_image} alt="no_avatar" />
      <div className={styles.detailsDescription}>
        <p>
          <span className={styles.detailsHeading}>Title:</span> {post.title}
        </p>
        <p>
          <span className={styles.detailsHeading}>Description:</span> {post.body}
        </p>
      </div>
    </div>
  );
};

export default memo(DetailsCard);
