import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

export const LeftContainer = styled.div`
  width: 40%;
  min-height: 80vh;
  background-color: #ffc533;
  padding: 12px;
  border: 0 solid;
  border-radius: 10px 0 0 10px;
`

export const RightContainer = styled.div`
  width: 40%;
  min-height: 80vh;
  background-color: #0f172a;
  border: 0 solid;
  border-radius: 0 10px 10px 0;
`

export const LeftContainerChildOne = styled.div`
  width: 100%;
  padding: 20px;
  height: 25vh;
  background-color: #ffbf1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LeftContainerHeading = styled.h1`
  font-family: Roboto;
  font-size: 42px;
  color: #272c47;
  font-weight: bold;
`

export const LeftContainerChildTwo = styled.div`
  padding: 10px;
`

export const RightContainerHeading = styled.h1`
  font-family: Roboto;
  font-size: 38px;
  color: #ffbf1f;
  text-align: center;
  margin-top: 30px;
`

export const InputContainerElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const InputElement = styled.input`
  width: 80%;
  height: 38px;
  background-color: #ffffff;
  padding: 10px;
  border: 0 solid;
  border-radius: 5px;
  font-family: Roboto;
  outline: none;
`

export const ButtonElement = styled.button`
  height: 38px;
  width: 16%;
  background-color: #ffc533;
  font-family: Roboto;
  color: #272c47;
  border: 0 solid;
  border-radius: 10px;
`
