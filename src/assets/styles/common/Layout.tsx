import styled from "styled-components";

export const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionWrapper = styled.section`
  margin: auto;
  max-width: 1224px;
  padding: 0;

  @media only screen and (max-width: 768px) {
    padding: 24px 0;
  }
`;
