import Comment from '../Comment';
import styles from './style.module.css';
import { IComment } from '../../types/name';
const CommentsList = ({ comments }: { comments: IComment[] }) => {
  return (
    <div className={styles.commentsListWrapper}>
      {comments.map((comment: IComment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentsList;
