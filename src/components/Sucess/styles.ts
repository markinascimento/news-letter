import styled from 'styled-components';

export const SucessContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 2rem;
  border-radius: 16px;
  background: #FFFFFF;

  > img {
    width: 4rem;
  }

  .title {
    margin-top: 2rem;
    font-size: 2rem;
  }

  .description {
    font-weight: 500;
    margin-top: 2rem;
  }

  > button {
    margin-top: 2rem;
  }
`;
