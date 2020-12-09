import styled from 'styled-components';

export const StyledDataTable = styled.div`
  width : 90%;
  margin : 50px auto;
  position:relative;
  
`
export const StyledDatePicker = styled.div`
  position:absolute;
  z-index:1000;
  right:260px;
  display:flex;
  div{
    position:relative;
    span{
      position: absolute;
      top: -15px;
      left:10px;
    }
    .datePicker{
      height: 32px;
      margin:10px;
      width: 200px;
      border: 1px solid #e5e5e5;
      padding: 0 32px 0 16px;
      z-index:1000;
      &:hover {
        cursor: pointer;
    }
  }
`

export const TextField = styled.input`
  height: 32px;
  width: 200px;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  position:absolute;
  right:0;
  top:10px;
  z-index:1000;
  &:hover {
    cursor: pointer;
  }
`;