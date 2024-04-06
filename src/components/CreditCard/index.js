import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  CreditCardHeading,
  HorizonatalLine,
  CardImageContainer,
  PaymentMethodContainer,
  FormContainer,
  PayMethodHeading,
  UserCardNumber,
  Username,
  CardHolderName,
  InputHolderName,
  InputNumberText,
} from './styledComponents'

const CreditCard = () => {
  const [namber, setNamber] = useState('')
  const [usetName, setUserName] = useState('')

  const getUserNumber = event => setNamber(event.target.value)

  const getUserText = event => setUserName(event.target.value)

  return (
    <MainContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <HorizonatalLine />
        <CardImageContainer data-testid="creditCard">
          <InputNumberText>{namber}</InputNumberText>
          <CardHolderName>CARDHOLDER NAME </CardHolderName>
          <InputHolderName>{usetName}</InputHolderName>
        </CardImageContainer>
      </CreditCardContainer>
      <PaymentMethodContainer>
        <FormContainer>
          <PayMethodHeading>Payment Method</PayMethodHeading>
          <UserCardNumber
            type="text"
            placeholder="Card Number"
            onChange={getUserNumber}
            value={namber}
          />
          <Username
            type="text"
            placeholder="Cardholder Name"
            onChange={getUserText}
            value={usetName}
          />
        </FormContainer>
      </PaymentMethodContainer>
    </MainContainer>
  )
}

export default CreditCard
