import { useEffect } from 'react';
import Header from '../components/Header';
import DetailsCard from '../components/DetailsCard';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchComments } from '../store/actions/commentsActions';
import CommentsList from '../components/CommentsList';
import Loader from '../components/UI/Loader';
import Footer from '../components/Footer';

const Details = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { comments, post, loading } = useAppSelector((state) => state.comments);

  useEffect(() => {
    if (id != null) {
      dispatch(fetchComments(id));
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className="wrapper">
        {loading ? (
          <Loader />
        ) : (
          <>
            <DetailsCard post={post} />
            <CommentsList comments={comments} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Details;
