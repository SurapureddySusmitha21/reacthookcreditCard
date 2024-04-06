// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
color:blue;
display:flex;
flex-direction:row;

`
export const CreditCardContainer = styled.div`
background-image:Linear-gradient(to bottom,#3b4b69,#344e7a);
height:100vh;
width:50%;
`
export const CreditCardHeading = styled.h1`
text-align:center;
color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-top: 96px;
    margin-bottom: 12px;
    line-height:1.3;
  }
   
`
export const HorizonatalLine = styled.hr`
width: 118px;
  border: 2px solid #ffd773;
  margin-left: 100px;
  
  @media screen and (min-width: 768px) {
    width: 173px;
    text-align:center;
    margin-left:170px;
  }
`
export const CardImageContainer = styled.div`
background-image:url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png");
height:30vh;
background-size:cover;
border-radius:40px;
margin-top:300px;
`

export const PaymentMethodContainer = styled.div`
background-color:#ffffff;
height:100vh;
width:50%;
display:flex;
flex-direction:column;
justify-content:center;

`
export const FormContainer = styled.form`
background-color:#ffffff;
height:30vh;
box-shadow:0px 0px 16px 2px  #d3d9e0;
margin-left:20px;
margin-right:20px;
`
export const PayMethodHeading = styled.h1`
font-size:30px;
color: #475569;
font-family:"Roboto";
text-align:center;
`
export const UserCardNumber = styled.input`
width:80%;
margin-left:40px;
padding:10px;
`
export const Username = styled.input`
width:80%;
margin-left:40px;
padding:10px;
margin-top:20px;
border-color:#c3cad9;
border-width:1px;
border-style:solid;
`
export const InputHolderName = styled.p`
color:#ffffff;
margin-left:40px;`

export const CardHolderName = styled.p`
color:#ffffff;
font-size:25px;
margin-left:40px;`

export const InputNumberText = styled.p`
color:#ffffff;
font-size:31px;
font-family:"Roboto";
font-weight:bold;
padding-top:90px;
margin-left:40px;
`
