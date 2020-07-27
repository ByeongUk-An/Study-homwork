import React from "react";
import styled from "styled-components";
import { MdApps } from "react-icons/md";

const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
`;
const HeaderUlLi = styled.li`
  color: #828282;
  margin-right: 15px;
  font-size: 13px;
  &:last-child {
    margin-right: 30px;
  }
  &:nth-child(1):hover {
    text-decoration: underline;
  }
  &:nth-child(2):hover {
    text-decoration: underline;
  }
`;
const HeaderLi_A = styled.a`
  color: #212121;
  &:nth-child(1):hover {
    /*이렇게 해준이유는 각 li에 a는 첫번째이기떄문에 색깔이 다바뀜  */
    color: #737373;
  }
`;
const Header_img = styled.img`
  border-radius: 50%;
  display: block;
  width: 32px;
  height: 32px;
`;

class Header extends React.Component {
  render() {
    return (
      <>
        <HeaderWrap>
          <HeaderUl>
            <HeaderUlLi>
              <HeaderLi_A href="#">Gmail</HeaderLi_A>
            </HeaderUlLi>
            <HeaderUlLi>
              <HeaderLi_A href="#">이미지</HeaderLi_A>
            </HeaderUlLi>
            <HeaderUlLi>
              <HeaderLi_A href="#">
                <MdApps size="26px" color="#737373" />
              </HeaderLi_A>
            </HeaderUlLi>
            <HeaderUlLi>
              <HeaderLi_A href="#">
                <Header_img
                  src="https://lh3.googleusercontent.com/ogw/ADGmqu863FuShUmG9KPZvPpgooBfETX8vGTQKeBeN_vH=s64-c-mo"
                  alt="사진"
                />
              </HeaderLi_A>
            </HeaderUlLi>
          </HeaderUl>
        </HeaderWrap>
      </>
    );
  }
}

export default Header;
