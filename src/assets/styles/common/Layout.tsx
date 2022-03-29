import styled from "styled-components";
import { OrganismWrapperType } from "../../../components/atoms/common/types";
import CircularProgress from "@mui/material/CircularProgress";

export const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const OrganismWrapper = styled.div<OrganismWrapperType>`
  background-color: ${(props) =>
    props.bgColor === "gray" ? "#F0F1F5" : "#FFFFFF"};

  @media only screen and (max-width: 1272px) {
    padding: 0 24px;
  }
`;

export const SectionWrapper = styled.section`
  margin: auto;
  max-width: 1224px;
  padding: 0;
  width: 100%;
`;

export const LoadingSpinner = styled(CircularProgress)`
  width: 56px;
  height: 56px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;
