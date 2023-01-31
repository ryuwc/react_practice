import React from "react";
import styled from "styled-components";

export const FormLayout = styled.div`
  background: #ffffff;
  margin-left: 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  width: 232px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  background: #FFEAF5;
  border-radius: 10px 10px 0 0;
`;

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px 16px 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 16px;
  border: none;
  padding-bottom: 8px;
  border-bottom: ${props => props.HasError ? '1px solid red' : '1px solid #ADB5BD'};
  &::placeholder {
    color: #ADB5BD;
  }
  &:focus {
    outline: none;
    border-bottom: ${props => props.HasError ? '1px solid red' : '1px solid black'};
    
  }
`;

export const InputLength = styled.p`
  font-size: 11px;
  color: #ADB5BD;
  margin: 0 0 8px auto;
`;

export const InputBottom16 = styled(Input)`
  margin-bottom: 16px;
`;

export const InputBottom8 = styled(Input)`
  margin-bottom: 8px;
`;

export const GiftTextInput = styled.textarea`
  font-size: 16px;
  border: 1px solid #ADB5BD;
  border-radius: 5px;
  resize: none;
  padding: 12px;
  width: 200px;
  height: 144px;
  &::placeholder {
    color: #ADB5BD;
  }
  &:focus {
    outline: none;
  }
`;

export const PaymentButton = styled.button`
  width: 168px;
  height: 30px;
  background: #FF349C;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto 0 auto;
  color: white;
`;

export const ValidateInputLengthContainer = styled.div`
  display: flex;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 11px;
  margin: 0 0 8px 0;
`;