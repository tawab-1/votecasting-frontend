import React from 'react';
import styled from 'styled-components';

export const Label = ({id, children, ...props}) => {
  return (
    <StyledLabel id={id} {...props}>
      {children}
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.04em;
  line-height: normal;
  margin-bottom: 5px;
`;
