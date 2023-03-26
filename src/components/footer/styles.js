import styled from "styled-components";
import { Container } from "../../styles/global";

export const StyleFooter = styled.footer`
  padding: 4rem 0;

  ${Container} {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 4rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: flex-start;

      strong {
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 21px;
      }

      p {
        max-width: 593px;
        margin-left: 18.6rem;
        flex: 1;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 21px;
        color: $grey500;
      }
    }
  }
`;
