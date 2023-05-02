import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
`
export const LockImage = styled.img`
  width: 100px;
  height: 100px;
`
export const LockPara = styled.p`
  font-family: 'Roboto';
  color: #e2e8f0;
  font-size: 26px;
`
export const LockButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 30px;
  background-color: #06b6d4;
  color: #ffffff;
  border-style: none;
  border-radius: 6px;
`
