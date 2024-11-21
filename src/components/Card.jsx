import { CardContainer, CardWrapper, ImgSection, CardImage, Content, TitleSection, Title, TextSection, ButtonSection, ButtonLeft, ButtonRigth, NextButton, PrevButton } from './cardStyles.jsx';
import Indicator from './Indicator.jsx';

function Card({ title, description, image, bgColor, nextStep, prevStep, currentStep, dataLength, goToStep }) {

    console.log("step: ", currentStep);

    //step > 1 ? PrevButton.display = none : step < 1 ? NextButton.display = none : PrevButton && NextButton;

    return (
        <CardContainer>
            <CardWrapper bgColor={bgColor}>
                <ImgSection>
                    <CardImage src={image} alt={title}></CardImage>
                </ImgSection>
                <Content>
                    <TitleSection>
                        <Title>{title}</Title>
                    </TitleSection>
                    <TextSection>
                        {description}
                    </TextSection>
                    <ButtonSection>
                        <ButtonLeft>
                            <Indicator currentStep={currentStep} dataLength={dataLength} goToStep={goToStep} />
                        </ButtonLeft>
                        <ButtonRigth>                                                       
                            {currentStep > 0 && (<PrevButton onClick={prevStep}>←</PrevButton>)}
                            {currentStep < dataLength - 1 && (<NextButton onClick={nextStep}>→</NextButton>)}
                        </ButtonRigth>
                    </ButtonSection>

                </Content>

            </CardWrapper>
        </CardContainer>
    );
}

export default Card;