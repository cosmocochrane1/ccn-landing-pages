import styled, { keyframes } from 'styled-components'

const RoundLoader = ({ type }) => {
    const color = type === 'dark' ? '#EBEEF1' : null
    return (
        <LoadingRing className={'button-loader'} color={color}><div></div><div></div><div></div><div></div></LoadingRing>
    )
}

export default RoundLoader
const loadingAnimation = keyframes` 
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const LoadingRing = styled.div`
    display: inline-block;
    position: relative;
    width: 24px;
    height: 25px;
    top: -3px;
    left: -7px;

    div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    margin: 8px;
    border: 2px solid ${props => props.color ? props.color : '#fff'};
    border-radius: 50%;
    animation: ${loadingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.color ? props.color : '#fff'} transparent transparent transparent;
  }
   div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
 `


