import React from "react";
import styled from "styled-components";
import google from "../img/google.png";
import { AiOutlineSearch } from "react-icons/ai";
import { GrKeyboard } from "react-icons/gr";
import { BsFillMicFill } from "react-icons/bs";

const SectionWrap = styled.section`
  width: 100%;
  height: auto;
  padding-top: 140px;
`;
const SectionLogo = styled.div`
  width: 275px;
  height: 94px;
  background: url(${google}) no-repeat;
  background-size: cover;
  margin: 0 auto;
`;
const SectionInputWrap = styled.div`
  position: relative;
`;
const SectionInput = styled.input`
  width: 530px;
  height: 45px;
  border-radius: 30px;
  display: block;
  margin: 35px auto 0;
  border: 2px solid #dee1e5;
  padding-left: 50px;
  &:focus {
    outline: none;
  }
`;
const SectionSearch = styled.div`
  position: absolute;
  top: 16px;
  left: 565px;
`;
const MyKeyboard = styled(GrKeyboard)`
  position: absolute;
  top: 0;
  left: 500px;
  cursor: pointer;
`;
const MyMic = styled(BsFillMicFill)`
  position: absolute;
  top: 0;
  left: 532px;
  cursor: pointer;
  color: blue;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;
const BtnItem = styled.button`
  color: #5f6367;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  background: #f2f2f2;
  &:focus {
    outline: none;
  }

  &:last-child {
    margin: 0;
  }
`;
const GoogleService = styled.p`
  font-size: 16px;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 280px;

  & > a {
    color: blue;
  }
`;

class Section extends React.Component {
  render() {
    return (
      <>
        <SectionWrap>
          <SectionLogo />
          <SectionInputWrap>
            <SectionInput autoFocus />
            <SectionSearch>
              <AiOutlineSearch size="20px" />
              <MyKeyboard />
              <MyMic />
            </SectionSearch>
          </SectionInputWrap>

          <BtnWrap>
            <BtnItem>Google 검색</BtnItem>
            <BtnItem>I'm Feeling Lucky</BtnItem>
          </BtnWrap>
          <GoogleService>
            Google 제공 서비스: <a href="#">English</a>
          </GoogleService>
        </SectionWrap>
      </>
    );
  }
}

export default Section;
