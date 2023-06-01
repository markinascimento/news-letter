import styled from 'styled-components';

interface InputProps {
  error: boolean;
}

export default styled.input<InputProps>`
  display: flex;
  width: 100%;
  max-width: 376px;
  height: 50px;
  border: 2px solid  ${({ error }) => error ? '#E28F89' : 'rgba(204, 204, 204, 0.4)'};
  background: ${({ error }) => error ? 'rgba(226, 143, 137, 0.2)' : 'transparent'};
  border-radius: 8px;
  padding: 0 1rem;
  font-size: 1rem;
  color: ${({ error }) => error ? '#E28F89' : '#232742'};
  outline: 0;

  &::placeholder {
    font-weight: 500;
    color: #232742;
    opacity: 0.5;
  }
`;
