// Write your code here
import {useState} from 'react'

import {
  PasswordValidatorContainer,
  PasswordValidatorCardContainer,
  Heading,
  PasswordNote,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const isValidPassword = password.length >= 8 === false

  return (
    <PasswordValidatorContainer>
      <PasswordValidatorCardContainer>
        <Heading>Password Validator</Heading>
        <PasswordNote>
          Check how strong and secure is your password
        </PasswordNote>
        <PasswordInput type="password" onChange={onChangePassword} />
        {isValidPassword && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordValidatorCardContainer>
    </PasswordValidatorContainer>
  )
}

export default PasswordValidator
