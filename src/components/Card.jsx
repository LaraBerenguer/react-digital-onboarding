import { CardContainer, CardWrapper, ImgSection, Content, CardImage, TitleSection, TextSection, NextButton, PrevButton, ButtonSection, Title, ButtonLeft, ButtonRigth } from './cardStyles.jsx';


function Card({ title, description, image, bgColor, nextStep, prevStep, currentStep }) {

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
                        </ButtonLeft>
                        <ButtonRigth>
                            {currentStep > 0 && (<PrevButton onClick={prevStep}>←</PrevButton>)}
                            {currentStep < 2 && (<NextButton onClick={nextStep}>→</NextButton>)}
                        </ButtonRigth>
                    </ButtonSection>

                </Content>

            </CardWrapper>
        </CardContainer>        
    );
}

export default Card;