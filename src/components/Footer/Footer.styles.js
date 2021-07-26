import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: deepskyblue;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 6vh;

  @media screen and (max-width: 768px) {
    min-height: 9vh;
  }
`;

export const FooterText = styled.h3`
  font-size: 24px;
`;
