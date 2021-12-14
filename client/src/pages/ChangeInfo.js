import React from "react";
import styled from "styled-components";
import ModifyInfo from "../components/ChangeInfo/ModifyInfo";
import ModifyPwd from "../components/ChangeInfo/ModifyPwd";

const StyledBody = styled.div``;

const ChangeInfo = () => {
  return (
    <StyledBody>
      <ModifyInfo />
      <ModifyPwd />
    </StyledBody>
  );
};

export default ChangeInfo;
