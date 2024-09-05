import { FC, memo } from 'react';
import styles from './style.module.css';
export interface PaginationProps {
  numbers: number[];
  prevPage: () => void;
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  goToPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  numbers,
  prevPage,
  currentPage,
  goToPage,
  totalPages,
  nextPage,
}) => {
  return (
    <div className={styles.pagesBox}>
      <button onClick={prevPage} disabled={currentPage === 1} className={styles.paginationArrow}>
        &#8249;
      </button>
      {numbers.map((number) => (
        <button
          key={number}
          className={
            number !== currentPage ? styles.paginationButton : styles.paginationButtonActive
          }
          onClick={() => goToPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={styles.paginationArrow}
      >
        &#8250;
      </button>
    </div>
  );
};

export default memo(Pagination);
