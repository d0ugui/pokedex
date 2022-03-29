import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  button {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    color: #737380;
    cursor: pointer;
    transition: 0.4s ease;
    border: none;

    &:hover {
      background: #F5F5FA;
      border: 1px solid #3F68C0;
    }
  }
`;
