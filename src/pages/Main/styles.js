import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #212121;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 20px;
    text-align: center;
  }

  div {
    display: flex;  
    justify-content: center;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;

      > span {
        padding: 5px 10px;
      }
    }
  }

  color: #fff;
`;