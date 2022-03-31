import { useDispatch, useSelector } from 'react-redux';
import { prevPage, nextPage } from '../../features/pagination';

import { Container } from './styles';

export function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const favoriteMode = useSelector((state) => state.pokemons.favoriteMode);

  return (
    <Container>
      <button
        onClick={() => dispatch(prevPage())}
        disabled={currentPage < 1 || favoriteMode}
        aria-label="previous page"
      >
        &lt;
      </button>
      <strong>
        {currentPage + 1}
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
        disabled={currentPage + 1 === totalPages || favoriteMode}
        aria-label="next page"
      >
        &gt;

      </button>
    </Container>
  );
}
