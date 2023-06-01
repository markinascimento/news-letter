import styled from 'styled-components';

export default styled.button`
  display: flex;
  width: 100%;
  max-width: 376px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #232742;
  border-radius: 8px;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 1rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
