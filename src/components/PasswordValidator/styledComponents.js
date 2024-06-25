// Style your elements here
import styled from 'styled-components'

export const PasswordValidatorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  padding: 20px;
`

export const PasswordValidatorCardContainer = styled.div`
  padding: 25px;
  padding-bottom: 35px;
  background-color: #475569;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
`

export const Heading = styled.h1`
  font-size: 30px;
  color: white;
  font-weight: 600;
  text-align: center;
  font-family: 'Roboto';
`

export const PasswordNote = styled.p`
  font-size: 15px;
  color: white;
  text-align: center;
  margin: 30px 0px;
`

export const PasswordInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  border: none;
  outline: none;
`

export const ErrorMsg = styled.p`
  font-size: 15px;
  color: #db2a2a;
  text-align: center;
`
