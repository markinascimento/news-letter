import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media(max-width: 720px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 920px;
  justify-content: center;
  background: #FFFFFF;
  border-radius: 1rem;
  gap: 2rem;
  padding: 1rem;

  @media(max-width: 720px) {
    flex-direction: column-reverse;
    height: 100vh;
    gap: 0;
    padding: 0;
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 0;

  .descriptions {
    min-width: 376px;
    max-width: 376px;

    .title {
      margin-bottom: 2rem;
    }

    .description {
      font-weight: 500;
    }
  }
`;

export const ContainerTags = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;

  .tag {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;

    span {
      font-weight: 500;
    }

    & + .tag {
      margin-top: 1rem
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;

    span {
      color: #E28F89;
      font-weight: 500;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    width: 100%;
    height: 500px;

    @media(max-width: 720px) {
      display: none;
    }
  }

  > div {
    display: none;

    @media(max-width: 720px) {
      display: flex;
      background-size: 100%;
      height: 385px;
      padding-right: 100vw;
      background-repeat: no-repeat;
      background-image: url('illustration-sign-up-mobile.svg');
    }
  }
`;


