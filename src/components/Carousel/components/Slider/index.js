import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
    padding: 0;
    margin: 0;
    .slick-perspective,
    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 60px;
        height: 60px;
        transform: initial;
        vertical-align: center;
        &:before{
            font-size: 60px;
        }
      
        
    }

    .slick-prev{
        left: 0;
    }
    .slick-next{
        right: 16px;
    }
`;

export const SliderItem = styled.li`
    margin-right: 16px;
    img {
        width: 298px;
        height: 197px;
        object-fit: cover;
        
    }
`;

function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}


const Slider = ({ children }) => (
    <Container>
        <SlickSlider {...{
            dots: false,
            infinite: false,
            speed: 300,
            centerMode: false,
            variableWidth: true,
            adaptiveHeight: true,
            nextArrow: <SampleArrow />,
            prevArrow: <SampleArrow />
        }}
        >{children}
        </SlickSlider>
    </Container>
);
export default Slider;