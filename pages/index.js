import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Layout from '@/components/layouts/landing-page-layout'
import ButtonLoader from '@/components/button-loader'

import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import {closeLeads} from '@/lib/functions'
import { BsChevronDown} from 'react-icons/bs'

export default class PatientLanding extends React.Component {
  state ={
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isLoading: false,
    successfulSent: false,
    error: false
  }

  componentDidMount() {

    console.log(this.props)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitForm() {
    const {firstName, lastName, email, phone} = this.state
    this.setState({isLoading: true})

    closeLeads({first_name: firstName, last_name: lastName, email, phone}).then((res) => {
      this.setState({error: false, isLoading: false, successfulSent: true, email: '', phone: '', firstName: '', lastName: ''})
    })
    .catch((err) => {
      this.setState({isLoading: false, error: true})
    })
  }

  render() {
    const { isOpen, error, firstName, successfulSent, isLoading, lastName, email, phone } = this.state
    const { landing_page_info = {} } = this.props
    return (
      <>
      <Layout  hideFooter={true} {...this.props}>
        <PageContentContainer>
        <TopSection className={'pb-6'}>

          <SizeWrapper>
          <InnerSectionOne className={'pt-7'}>
          <h1 className={'main-text text-lightBlack  font-inter'}>Free Blood Pressure Monitoring Now Available to <span className={'underline'}>{landing_page_info.city}</span> Seniors</h1>
          <h1 className={'subtext mt-7 text-darkGrey'}>Over 75% of seniors have high blood pressure aka <span className={'underline text-lightBlack'}>The Silent Killer</span> - there are no obvious symptoms to indicate something is wrong.</h1>
          <h1 className={'subtext mt-7 text-darkGrey'}>We've partnered with Laguna Cardiology's <span className={'underline text-lightBlack'}>Dr. Dawn Atwal</span> to offer free wireless blood pressure monitoring to all <span className={'underline text-lightBlack'}>{landing_page_info.city} Medicare members</span></h1>
          <div className={'w-full flex-end justify-between'}><span /><RoundButtonLarge   onClick={() => document.getElementById('contact').scrollIntoView({ behavior: "smooth",block: "center", inline: "nearest"})}   className={'bg-blue mt-7'}>Get Started</RoundButtonLarge></div>
          </InnerSectionOne>
          <InnerSectionRight>
            <SideForm className={'bg-blue'}>
              <img src={`/city/${landing_page_info.city_image}.png`} />
            </SideForm>
          </InnerSectionRight>
        
          </SizeWrapper>
        <ArrowSection className={'downarrow'} >
            <p >How It Works</p>
            <BsChevronDown className={'mt-3'}/>
          </ArrowSection>
        </TopSection>
        <PartnershipSection>
          <p className={'title'}>OUR PARTNERS</p>
          <p className={'subheader text-black'}>{landing_page_info.partner_text}</p>
          <PartnerLogos>
            {landing_page_info.partner_logos.map((i) => <img className={`${i}`} src={`/partner_logos/${i}.png`} />)}
          </PartnerLogos>
        </PartnershipSection>
        
        <div id={'what-is'} className={'mt-0  bg-darkBlue'}>
        <MarketingSection className={'  min-h-1 pb-2'}>
          <HowItWorks className={' '}>
            <p className={'xl-large title text-white pb-7 pt-8'}>How It Works</p>
            <HowToSection>
            <TextMarketingSection className={'steps'}>
            <p className={'font-light medium text-white mb-3'}>Step One</p>
            <p className={'large mt-0 text-white'}>You Receive a Free Wireless Blood Pressure Monitor</p>
          </TextMarketingSection>
          </HowToSection>
          <HowToSection>
          <div />
          <TextMarketingSection className={'text-right steps'}>
            <p className={'font-light medium text-white mb-3'}>Step Two</p>
            <p className={'large mt-0 text-white'}>Take a reading and it will instantly upload directly to your doctor for review</p>
          </TextMarketingSection>
          </HowToSection>
          <HowToSection>
          <TextMarketingSection className={'steps'}>
            <p className={'font-light medium text-white mb-3'}>Step Three</p>
            <p className={'large mt-0 text-white'}>If A Reading Exceeds A Predefined Threshhold Your Doctor is Ready to respond.</p>
          </TextMarketingSection>
          </HowToSection>
            <div className={'w-full button justify-between flex'}><span /><RoundButtonLarge   onClick={() => document.getElementById('contact').scrollIntoView({ behavior: "smooth",block: "center", inline: "nearest"})}   className={'bg-orange mt-7'}>Get Started</RoundButtonLarge></div>
          </HowItWorks>
        </MarketingSection>
        </div>
        <ThreePoints id={'why'} className={'bg-white pb-5'}>
        <MarketingSection id={'platform'}  className={'pt-9 mb-9'}>
        <WritingContainer className={'writing'}>
          <TextMarketingSection>
            <p className={'small'}>Hypertension</p>
            <p className={'large mt-5'}>Hypertension the <span className={'underline'}>silent killer</span></p>
            <p className={'medium mt-5'}>Hypertension, also known as <span className={'underline'}>high blood pressure</span> is associated with a variety of life-threatening conditions.</p>
          </TextMarketingSection>
          </WritingContainer>
          <ImageSection>
            <img src={'/hypertension/conditions-image.png'} />
          </ImageSection>
        </MarketingSection>
        <SeparatorLine className={'bg-landingPageGrey'} />

        <MarketingSection className={'mb-9'}>
        <ImageSection className={'image-section'}>
        <img src={'/hypertension/hypertension-chart.png'} />
          </ImageSection>
          <WritingContainer className={'writing-section'}>
          <TextMarketingSection className={'text-right'}>
            <p className={'small'}>Revised Guidelines </p>
            <p className={'large mt-5'}>New AHA Hypertension Guidelines</p>
            <p className={'medium mt-5'}>AHA Hypertension Guidelines established a new classification of hypertension in adults, <span className={'underline'}>lowering the threshold for hypertension to 130/80 mm Hg.</span></p>
          </TextMarketingSection>
          </WritingContainer>
        </MarketingSection>

        <SeparatorLine className={'bg-landingPageGrey'} />

        <MarketingSection  id={'devices'} className={'pb-9'}>
        <WritingContainer className={'writing'}>
          <TextMarketingSection>
            <p className={'small'}>US HYPERTENSION</p>
            <p className={'large mt-5'}>Nearly <span className={'underline'}>50%</span> of American adults have high blood pressure.</p>
            <p className={'medium mt-5'}>While not an infectious or communicable consideration, hypertension does meet the dynamics of a <span className={'underline'}>‘pandemic’</span> with a major population mortality and morbidity impact.</p>
          </TextMarketingSection>
          </WritingContainer>
          <ImageSection>
          <img src={'/hypertension/us-hypertension-map.png'} />
          </ImageSection>
        </MarketingSection>
        </ThreePoints>


        <div id={'about'} className={' mt-0 pt-6  bg-landingPageGrey '}>
        <MarketingSection className={'pt-2 min-h-1 pb-2'}>
          <JoinNowSection className={' '}>
            <div className={' align-center  flex m-auto items-center flex-between '}>
              <p className={'xl-large w-8/12	 text-lightBlack mt-5'}>Laguna Cardiology's<br /> Dr. Dawn Atwal</p>
              <SurgeonGeneral className={'ml-8 pb-5'} src={'/hypertension/dr-atwal.png'} />
            </div>
            <p className={'large mt-6 text-landingPageTextGrey'}>Dr. Dawn Atwal, MD is a Cardiology Specialist in Laguna Beach, CA.  Dr. Atwal has more experience with Cardiac Electrical System Procedures than other specialists in her area.  She is affiliated with medical facilities such as Mission Hospital - Laguna Beach and Mission Hospital - Mission Viejo.</p>
            <p className={'large mt-6 text-landingPageTextGrey p-5 bg-white'}>We’re bridging clinical services with community programs and empowering patients to use self-measured blood pressure monitoring.</p>
            <div><RoundButtonLarge   onClick={() => document.getElementById('contact').scrollIntoView({ behavior: "smooth",block: "center", inline: "nearest"})}   className={'bg-orange mt-7'}>Get Started</RoundButtonLarge></div>
          </JoinNowSection>
        </MarketingSection>
        </div>
        <div className={'bg-white mt-9 mb-9'}>

        <MarketingSection className={'  pt-2 min-h-1 pb-2'}>
          <JoinNowSection>
            <p className={'large mt-5'}>Got any questions? We'd love to speak.</p>
            <RoundButton  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: "smooth",block: "center", inline: "nearest"})}   className={'bg-blue mt-4'}>Get Started</RoundButton>
            <p className={'small font-inter mt-4'}>Email us if that's easier info@careconnectionnetworks.com</p>
          </JoinNowSection>
        </MarketingSection>
        </div>


        <MarketingSection id={'contact'}  className={'mt-4 bg-blue mb-9'}>
        <WritingContainer className={'writing '}>
          <TextMarketingSection>
            <p className={'small text-lightGrey'}>Get in Touch</p>
            <p className={'large mt-5 text-white'}>We'll help get you and your doctor up and running with Remote Monitoring</p>
            <p className={'medium mt-5 text-white' }>Free to you as a Medicare Member. <span className={'text-lightGrey'}>Get started immediately</span>.</p>
          </TextMarketingSection>
        </WritingContainer>
        <InputContainer className={'form-container flex w-1/2	p-9 pr-9  flex-col'}>
          <div>
            <StyledInput   label={"First Name"} handleChange={this.handleChange} value={firstName} type="text" name="firstName" />
          </div>
          <div className={'mt-5'}><StyledInput className={'mt-3'} label={"Last Name"} handleChange={this.handleChange} value={lastName} type="text" name="lastName" /></div>
          <div className={'mt-5'}><StyledInput className={'mt-3'} label={"Phone"} handleChange={this.handleChange} value={phone} type="text" name="phone" /></div>
          <div className={'mt-5'}><StyledInput  label={"Email"} handleChange={this.handleChange} value={email} type="text" name="email" /></div>
          <RoundButton onClick={() => this.submitForm()} className={'submit-button bg-white text-blue mt-9'}>{isLoading ? <ButtonLoader type={'dark'}/> : `Submit`}</RoundButton>
          {successfulSent ? <SuccessMessage>Thank you! We'll reach out shortly.</SuccessMessage> : null}
          {error ? <SuccessMessage>Oops! Something went wrong. Try emailing us at info@careconnectionnetworks.com</SuccessMessage> : null}
        </InputContainer>
        </MarketingSection>

        {/* <Schema /> */}
        </PageContentContainer>
      </Layout>
      </>
    )
  }
}
const ThreePoints = styled.div``
const PartnershipSection = styled.div`
    width: 100%;
    /* height: 350px; */
    border-top: 2px solid rgb(239,240,244);
    padding-top: 40px;
    background: white;
    padding-bottom: 40px;
  .title {
    text-align: center;
    color: #031C45;
    font-weight: 600;
    padding-bottom: 30px;
    letter-spacing: 1px;
  }
  .subheader {
    text-align: center;
    padding-bottom: 40px;
    max-width: 700px;
    margin: auto;
    font-size: 24px;
    color: #5C5C5C !important;
    font-style: italic;
  }
`
const PartnerLogos = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  img{
    height: 100px;
  }
  .laguna-cardiology {
    height: 70px;
    max-width: 200px;
  }
  @media(max-width: 800px){
    display: flex;
    flex-direction: column;
    margin: auto;
    img:last-of-type {
      margin-top: 50px;
    }
  }
`
const SeparatorLine = styled.div`
  height: 4px;
  width: 550px;
  margin: auto;
  margin-bottom: 80px;
`

const HowToSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const TitleSection = styled.div`
   .xl-large {
    margin: 0px;
    font-size: 64px;
    letter-spacing: -0.04em;
    font-weight: 600;
    font-family: 'inter' !important
  }
  margin: auto;
  max-width: 800px;
  text-align: left;
  padding-top: 70px;
  p{
    border-bottom: solid 5px;
    padding-bottom: 5px;
    margin-bottom: -20px;
    @media(max-width: 850px){
    border: none !important;
    text-align: center;
  }
  }

  
`
const SurgeonGeneral = styled.img`
  width: 300px;
`

const SideFormHeader = styled.div`
    width: 300px;
    padding-top: 35px;
    padding-left: 25px;
    padding-right: 25px;


    .small {
    color: #5C5C5C;
    margin: 0;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.12em;
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'inter' !important
  }
  
  .large {
    margin: 0px;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.04em;
    font-weight: 600;
    font-family: 'inter' !important

  }
  .xl-large {
    margin: 0px;
    font-size: 64px;
    letter-spacing: -0.04em;
    font-weight: 600;
    font-family: 'inter' !important
  }

 
`

const bounce = keyframes`
   0%   { transform: translateY(0); }
        50%  { transform: translateY(-5px); }
        100% { transform: translateY(0); }
`

const fadeIn = keyframes`
     from {
        opacity:0;
      }

      to {
        opacity: 1;
      }
`

const LargeButton = styled.button`
  padding: 20px;
  
`
const ArrowSection = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    font-size: 26px;
    font-weight: 400;
    color: #A6B3BF !important;
    p{
      font-weight: 400;
    }
    animation: ${bounce} 3s infinite ease-in-out
`

const SuccessMessage = styled.p`
  transition: all .2s ease-in-out;
  animation: ${fadeIn} .2s ease-in-out;

  
`

const InfoSection = styled.div`
    width: 100%;
    max-width: 1230px;
    margin: auto;
    h1 {
      
      margin: 0;
      font-size: 52px;
    line-height: 60px;
      font-weight: 600;
      letter-spacing: -0.04em;
    }
`
const InputContainer = styled.div`
  p {
    z-index: 2;
    pointer-events: none !important;
    color: white;
    font-weight: 400;
  };
  input {
    color: white;
    font-family: "Inter"
  }
  @media(max-width: 800px){
    .submit-button {
      width: 100%;
    }
  }
`
const StyledGrClose = styled(GrClose)`
position: absolute;
    top: 30px;
    cursor: pointer;
    right: 30px;
    font-size: 25px;
`
const SlideInForm = styled.div`
  height: 100%;
  z-index: 99999;
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  background-color: white;
  transition: all .2s ease-in-out;
  transform: ${({isOpen}) => isOpen ? `translateX(calc(0vw))` : `translateX(calc(-50vw))`}
`

const Review = styled.div`
  width: 100%;
    padding: 50px;
    max-width: 1230px;
    margin: auto;
  min-height: 30vh;  
  display: flex;
  align-items: center;
  justify-content: center;
  
  div {
    padding-top: 50px;
    padding-bottom: 100px;
    text-align: center;
    flex-direction: column !important;
    margin: auto;
  }
  img {
    margin: auto;

    width: 130px;
    height: 50px;
  }
`
const WritingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media(max-width: 810px){
    width: 100%;
  }
`


const JoinNowSection = styled.div`
  display: flex;
  margin: auto;
  max-width: 1230px;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px !important;
    padding-bottom: 50px !important;
    max-width: 1230px;
    @media(max-width: 1250px){
    padding-left: 25px;
    padding-right: 25px;
  }
`


const HowItWorks = styled(JoinNowSection)`
  max-width: 930px !important;
  .button {
    @media(max-width: 800px){
      span {
        display: none;
      }
      button {
        margin:auto;
      }
      
    }
  }
  .steps {
    @media(max-width: 800px){
      margin: auto;
      margin-top: 65px !important;
    }
  }
  .title {
    width: 50%; 
    
    @media(max-width:800px){
      width: 100% !important;
      text-align: center;
      padding-bottom: 0px !important;
    }

  }
`

const ImageSection = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  img {
    max-width: 400px;
    width: 100%;
  }
  @media(max-width: 810px){
    width: 100%;
  }
`
const TextMarketingSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 488px;
  width: 100%;
  font-family: 'inter' !important;
  @media(max-width: 810px){
    margin-top: 75px;
    margin-bottom: 75px;
    order: -1;
    text-align: center !important;
  }

  .side-form-header {
    font-weight: 800;
    padding-top: 20px;
    font-size: 30px;
    padding-left: 15px;
    margin-bottom: -20px;
  }

`
const MarketingSection = styled.div`
    max-width: 1230px;
    margin: auto;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    background-color: ${({color}) => color};
   
  @media(max-width: 810px){
      flex-direction: column !important;
      .image-section {
        order: 2;
      }
      .writing-section {
        text-align: center !important;
      }
      .form-container {
        width: 100% !important;
          margin: auto;
          padding-right: 0px !important;
          padding-left: 0px !important;
      }

    }
    


  @media(max-width: 1000px){
    padding-left: 25px;
    padding-right: 25px;
  }
`

const SizeWrapper = styled.div`
    max-width: 1230px;
    margin: auto;
    display: flex;
    justify-content: space-between;

`
const SideForm = styled.div`
position: absolute;
    top: 0px;
    right: -350px;
    width: 650px;
    top: 125px;
   
`
const InnerSectionRight = styled.div`
  width: 30%;
  position: relative;
  .form-container {
    width: 400px;
  }
  @media(max-width: 1100px){
    display: none;
  }
`
const InnerSectionOne = styled.div`
    width: 70%;
    max-width: 1230px;
    margin: auto;
    h1 {
      color: #171717;
      margin: 0;
      font-size: 55px;
      line-height: 60px;
      font-weight: 600;
      letter-spacing: -0.04em;
    }
    .subtext {
      line-height: 48px;
      font-family: "inter" !important;
      line-height: initial;
      font-size: 36px !important;
    font-weight: 600;
        letter-spacing: -0.04em;
    }
 
    @media(max-width: 800px){
      width: 100%;
      .main-text {
        font-size: 44px;
        line-height: 50px;
        padding-top: 50px !important;
      }
      .subtext {
        font-size: 24px !important;
      }
      .downarrow {
        margin-top: 80px !important;
        font-size: 16px !important;
      }
    }
`
const InsideSection = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  padding-top: 100px;
  height: 100%;

`
const TopSection = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f9f9f9;
  position: relative;
  @media(max-width: 800px){
    padding-bottom: 40px !important;
  }
  @media(max-width: 1200px){
    padding-left: 25px;
    padding-right: 25px;
  }
`
const SecondSection = styled.div`
      background-image: url("/landing-page/senior-image.jpg");
      background-size: cover;
      background-position: center;
      min-height: 50vh;
`
const ThirdSection = styled.div`
      background-image: url("/senior-asset-1.jpg");
      background-size: cover;
      background-position: center;
      min-height: 50vh;
`
const GraphicSection = styled.div`
      background-image: url("/senior-asset-1.jpg");
      background-size: cover;
      background-position: center;
      min-height: 50vh;
`


const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`

const RoundButton = styled.button`
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    min-width: 160px;
    height: 48px;
    color: #FFFFFF;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-family: 'Inter',sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    background-color: #F46A35;
    border-radius: 30px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    margin-top: 24px;
    margin-bottom: 24px;
    padding-left: 20px;
    padding-right: 20px;
`

const RoundButtonLarge = styled(RoundButton)`
    padding-left: 50px;
    padding-right: 50px;
    height: 60px;
    border-radius: 200px;
    font-size: 20px;
    @media(max-width: 800px){
      font-size: 14px;
      min-width: 160px;
    height: 48px;
    }
`

const PageContentContainer = styled.div`
    overflow: hidden;
    width: 100%;
    width: 100%;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    font-family: 'inter' !important;
    p,h1 {
      font-family: 'inter' !important;

    }

    .small {
    color: #5C5C5C;
    margin: 0;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.12em;
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'inter' !important
  }
  .medium {
    color: rgb(23, 23, 23);
    margin: 0px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    letter-spacing: -0.02em;
    font-family: 'inter' !important;

    span {
      color: #5C5C5C
    }
  }
  .large {
    margin: 0px;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.04em;
    font-weight: 600;
    font-family: 'inter' !important

  }
  .xl-large {
    margin: 0px;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.04em;
    font-weight: 600;
    font-family: 'inter' !important
  }

  @media(max-width: 850px){
    .large {
    font-size: 24px !important;
    line-height: initial !important;
  }
    .xl-large {
      font-size: 34px !important;
      line-height: initial !important;
    }
  }


    
  `



export const StyledInput = ({ value, handleChange, type, placeholder, label, name }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container>
      <Label className={'label'} isFocused={isFocused || value}>{label}</Label>
      <InputField autocomplete="false"   onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} value={value} onChange={handleChange} type={type} name={name} placeholder={''} />
    </Container>
  )
}



const Container = styled.div`
    position: relative;
    input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active
{
 box-shadow: 0 0 0 30px #00317F inset !important;

}
input:-webkit-autofill
{
 -webkit-text-fill-color: white !important;
}


    width: 100%;
   
`

const ShrinkAndMove = css`
    top: -10px;
    font-size: 16px;
    opacity: 1;
    color: rgb(91, 105, 124);
`

const Label = styled.p`
    color: rgb(181, 181, 181);
    font-size: 24px;
    left: 16px;
    top: 20px;
    opacity: 0.5;
    position: absolute;
    z-index: -1;
    ${props => props.isFocused ? `${ShrinkAndMove}` : ``};
    transition: all 150ms ease-in-out 0s;
`


const InputField = styled.input`
    width: 100%;
    border-radius:0 !important;
    border: none;
    background: transparent;
    border-bottom: solid 1px #cccccc;
    height: 58px;
    font-size: 22px;
    padding: 20px 15px 12px;
    &:focus, &:active {
        outline: none;
    }
    
`
