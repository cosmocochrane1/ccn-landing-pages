import React from 'react'
import styled from 'styled-components'


const LandingPageLayout = ({ children }) => {

  return (
<React.Fragment>
      <OuterLayout>
      <Header >
      <InnerHeader>
        <div className={'flex flex-row items-baseline'}>
        <img src={'/careconnection-inter-logo.png'} />
        </div>
        <div className={'flex flex-row items-baseline'}>
        <RoundButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: "smooth",block: "center", inline: "nearest"})} className={'mt-6'}>Get Started</RoundButton>
        </div>
        </InnerHeader>
        </Header>
        {children}
        <Footer>
          <div>
          <img src={'/careconnection-white-logo.png'} />
          <p className={'mt-4 font-inter'}>info@careconnectionnetworks.com</p>
          </div>
        </Footer>
      </OuterLayout>
    </React.Fragment>
  )
};

export default LandingPageLayout
const LinksContainer = styled.div`
  a {
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
  &:hover > a {
    opacity: 0.5;
  }

  &:hover > a:hover {
    opacity: 1.0;
  }
`
const Footer = styled.div`
  min-height: 50vh;
  background: #171717;
 

  width: 100%;
  position: relative;
  div {
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
    color: white;

  }

  img {
    margin: auto;
    text-align: center;
    width: 150px;
  }

`
const RoundButton = styled.button`
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    min-width: 160px;
    height: 48px;
    color: white;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-family: 'Inter',sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    background-color: #FE7611;
    border-radius: 30px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    margin-top: 24px;
    margin-bottom: 24px;
    padding-left: 20px;
    padding-right: 20px;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 999999;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  height: 80px;
  @media(max-width: 960px){
    img {
      max-width: 120px !important;
      padding-right: 0px !important;
    }
    a {
      display: none !important;
    }
  }
  
`
const InnerHeader = styled.div`
    max-width: 1280px;
    padding-left: 30px;
    padding-right: 30px;

    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;;
    justify-content: space-between;
    img {
      max-width: 250px;
      padding-right: 56px;
    }
    a {

    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    font-family: 'Inter',sans-serif;
    margin: 0;
    padding: 0;
    color: #171717;
    padding-left: 24px;
    padding-right: 24px;
    }
`

const OuterLayout = styled.div`
    display: flex;
    padding-top: 72px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f9f9f9;

    width: 100%;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;

    h1,h2,h3,p, span {
      -webkit-font-smoothing: antialiased !important; 
    }
    h1,h2,h3,p, span, img {
      &::selection { background: #0069ff !important; color: white}

    }
    h2 {
      font-weight: 700 !important;
    }

`
