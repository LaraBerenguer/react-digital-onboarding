import { CardContainer, CardWrapper, ImgSection, Content, CardImage, TitleSection, TextSection, NextButton, ButtonSection, Title, ButtonLeft, ButtonRigth } from './cardStyles.jsx';


function Card({ title, description, image, bgColor, nextStep }) {


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
                        <ButtonLeft></ButtonLeft>
                        <ButtonRigth>
                            <NextButton onClick={nextStep}>→</NextButton>
                        </ButtonRigth>
                    </ButtonSection>

                </Content>

            </CardWrapper>
        </CardContainer>

        //nombrar contenedores
        //estilar contenedores con styled.div (ejemplo)
        //cuanto más divida más fácil es para estilar
    );
}

export default Card;