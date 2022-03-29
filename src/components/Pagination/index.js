import { useDispatch, useSelector } from 'react-redux';
import { prevPage, nextPage } from '../../features/pagination';

import { Container } from './styles';

export function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);

  return (
    <Container>
      <button
        onClick={() => dispatch(prevPage())}
        disabled={currentPage < 1}
      >
        &lt;
      </button>
      <strong>
        {currentPage + 1}
        {' '}
        de
        {' '}
        {totalPages + 1}
      </strong>
      <button
        onClick={() => dispatch(nextPage())}
        disabled={currentPage + 1 === totalPages}
      >
        &gt;

      </button>
    </Container>
  );
}
