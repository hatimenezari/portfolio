import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url(https://raw.githubusercontent.com/hatimenezari/portfolio/f2acb947496d7aabf45fc77e98b6f8fcae6b96ec/public/wave1.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container"/>
    </FooterSection>
  );
}

export default Footer;
