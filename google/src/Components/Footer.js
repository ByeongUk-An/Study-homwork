import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  width: 100%;
  height: 85px;
  background: #f2f2f2;
`;
const Footeritem = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  &:first-child {
    color: #878787;
    display: flex;
    align-items: center;
    margin-left: 30px;
  }
  &:last-child {
    border-top: 1px solid #e4e4e4;
  }
`;
const Footer_ul = styled.ul`
  display: flex;
  align-items: center;
  &:first-child > li:first-child {
    margin-left: 30px;
  }
`;
const Footer_li = styled.li`
  display: flex;
  color: #5f6368;
  font-size: 14px;
  margin-right: 28px;
`;
const Footer_li_a = styled.a`
  color: #5f6368;
  &:hover {
    text-decoration: underline;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <>
        <FooterWrap>
          <Footeritem>대한민국</Footeritem>
          <Footeritem>
            <Footer_ul>
              <Footer_li>
                <Footer_li_a href="#">광고</Footer_li_a>
              </Footer_li>
              <Footer_li>
                <Footer_li_a href="#">비즈니스</Footer_li_a>
              </Footer_li>
              <Footer_li>
                <Footer_li_a href="#">Google 정보</Footer_li_a>
              </Footer_li>
              <Footer_li>
                <Footer_li_a href="#">검색의 원리</Footer_li_a>
              </Footer_li>
            </Footer_ul>
            <Footer_ul>
              <Footer_li>
                <Footer_li_a href="#">개인정보관리방침</Footer_li_a>
              </Footer_li>
              <Footer_li>
                <Footer_li_a href="#">약관</Footer_li_a>
              </Footer_li>
              <Footer_li>
                <Footer_li_a href="#">설정</Footer_li_a>
              </Footer_li>
            </Footer_ul>
          </Footeritem>
        </FooterWrap>
      </>
    );
  }
}

export default Footer;
