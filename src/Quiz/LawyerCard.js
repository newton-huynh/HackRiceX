import styled from "styled-components";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdLanguage } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import "./LawyerCard.css";

const LawyerCardWrapper = styled.div`
  display: grid;
  background-color: #293241;
  padding: 0px;
  width: 350px;
  height: 485px;
  margin: 20px;
  border-radius: 25px;
  border-width: 3px;
  border-style: solid;
  border-color: black;
  margin: 40px;
  grid-template-columns: 1fr;
  overflow: hidden;
  grid-template-rows: 80px 60px 60px 60px 60px 60px 135px;
  grid-template-areas:
    "NameSpace"
    "PhoneSpace"
    "EmailSpace"
    "LocationSpace"
    "LanguageSpace"
    "RaceSpace"
    "ExpertiseSpace";
  text-align: center;
`;

const NameSpaceWrapper = styled.div`
  grid-area: NameSpace;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
`;

const PhoneSpaceWrapper = styled.div`
  grid-area: PhoneSpace;
  background-color: #e0fbfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EmailSpaceWrapper = styled.div`
  grid-area: EmailSpace;
  background-color: #98c1d9;
`;
const LocationSpaceWrapper = styled.div`
  grid-area: LocationSpace;
  background-color: #e0fbfc;
`;
const LanguageSpaceWrapper = styled.div`
  grid-area: LanguageSpace;
  background-color: #98c1d9;
`;
const RaceSpaceWrapper = styled.div`
  grid-area: RaceSpace;
  background-color: #e0fbfc;
`;
const ExpertiseSpaceWrapper = styled.div`
  grid-area: ExpertiseSpace;
  background-color: #3d5a80;
  color: white;
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 30px auto;
  grid-template-areas:
    "TitleSpace"
    "SubTitleSpace";
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const TitleSpaceWrapper = styled.div`
  grid-area: TitleSpace;
  font-size: 18px;
  margin-top: 7px;
`;
// const IconSpaceWrapper = styled.div`
//   grid-area: IconSpace;
//   margin-top: 4px;
// `;

const SubTitleSpaceWrapper = styled.div`
  grid-area: SubTitleSpace;
`;

function MakeText(props) {
  return (
    <TextWrapper>
      <TitleSpaceWrapper> {props.title}</TitleSpaceWrapper>

      <SubTitleSpaceWrapper>
        {props.icon} {props.subtitle}
      </SubTitleSpaceWrapper>
    </TextWrapper>
  );
}

function MakeSubText(props) {
  return (
    <SubTitleSpaceWrapper>
      {props.icon} {props.subtitle}
    </SubTitleSpaceWrapper>
  );
}

function LawyerCard( props ) {
  return (
    <LawyerCardWrapper>
      <NameSpaceWrapper>{props.name}</NameSpaceWrapper>
      <PhoneSpaceWrapper>
        {" "}
        <MakeText title="Phone" icon={<AiFillPhone />} subtitle={props.phone} />
      </PhoneSpaceWrapper>
      <EmailSpaceWrapper>
        <MakeText title="Email" icon={<AiTwotoneMail />} subtitle={props.email} />
      </EmailSpaceWrapper>
      <LocationSpaceWrapper>
        <MakeText title="Location" icon={<ImLocation2 />} subtitle={props.location} />
      </LocationSpaceWrapper>
      <LanguageSpaceWrapper>
        <MakeText title="Language" icon={<MdLanguage />} subtitle={props.location} />
      </LanguageSpaceWrapper>
      <RaceSpaceWrapper>
        <MakeText title="Race" icon={<FaUserAlt />} subtitle={props.race}/>
      </RaceSpaceWrapper>
      <ExpertiseSpaceWrapper>
        <MakeText title="Expertise" icon={<BsBriefcaseFill />} subtitle={props.expertise1} />
        <MakeSubText icon={<BsBriefcaseFill />} subtitle={props.expertise2} />
        <MakeSubText icon={<BsBriefcaseFill />} subtitle={props.expertise3} />
      </ExpertiseSpaceWrapper>
    </LawyerCardWrapper>
  );
}

export default LawyerCard;
