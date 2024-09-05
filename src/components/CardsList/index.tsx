import { memo, useCallback, useEffect } from 'react';
import Card from '../Card';
import styles from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts } from '../../store/actions/postsActions';
import Pagination from '../Pagination';
import usePagination from '../../hooks/usePagination';
import Loader from '../UI/Loader';
import { IPost } from '../../types/name';
import { useNavigate } from 'react-router-dom';

const CardsList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { posts, loading } = useAppSelector((state) => state.posts);
  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getPageItems,
    pageLoading,
    numbers,
  } = usePagination(posts.length);

  const paginatedItems = getPageItems(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleClick = useCallback(
    (id: string) => {
      navigate(`/details/${id}`);
    },
    [posts],
  );

  return (
    <div className="wrapper">
      {loading ? (
        <Loader />
      ) : (
        <>
          {pageLoading ? (
            <Loader />
          ) : (
            <div className={styles.cardsList}>
              {paginatedItems.map((post: IPost) => (
                <Card post={post} key={post.id} handleClick={() => handleClick(post.id)} />
              ))}
            </div>
          )}
          <Pagination
            numbers={numbers}
            prevPage={prevPage}
            currentPage={currentPage}
            totalPages={totalPages}
            nextPage={nextPage}
            goToPage={goToPage}
          />
        </>
      )}
    </div>
  );
};

export default memo(CardsList);
