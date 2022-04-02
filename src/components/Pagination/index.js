import { useDispatch, useSelector } from 'react-redux';
import { prevPage, nextPage } from '../../features/pagination';

import { Container } from './styles';

export function Pagination() {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.pagination);
  const favoriteMode = useSelector((state) => state.pokemons.favoriteMode);

  return (
    <Container>
      <button
        onClick={() => dispatch(prevPage())}
        disabled={currentPage < 1 || favoriteMode || totalPages <= 1}
        aria-label="previous page"
      >
        &lt;
      </button>
      <strong>
        {favoriteMode ? (
          1
        ) : (
          currentPage + 1
        )}
        {' '}
        de
        {' '}
        {favoriteMode ? (
          1
        ) : (
          totalPages + 1
        )}

      </strong>
      <button
        onClick={() => dispatch(nextPage())}
        disabled={currentPage + 1 === totalPages || favoriteMode || totalPages <= 1}
        aria-label="next page"
      >
        &gt;

      </button>
    </Container>
  );
}
