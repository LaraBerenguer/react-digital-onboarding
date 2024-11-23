import { CardContainer, CardWrapper, ImgSection, CardImage, Content, TitleSection, Title, TextSection, ButtonSection, ButtonLeft, ButtonRigth, NextButton, PrevButton } from './cardStyles.jsx';
import Indicator from './Indicator.jsx';
import { motion, AnimatePresence } from "motion/react";

const animationVariants = {
    enter: (direction) => ({
        x: direction > 0 ? '50%' : '-150%',
        opacity: 1,
        position: 'absolute'
    }),
    center: {
        x: '-50%',
        opacity: 1,
        position: 'absolute'
    },
    exit: (direction) => ({
        x: direction < 0 ? '50%' : '-150%',
        opacity: 1,
        position: 'absolute'
    }),
};

function Card({ title, description, image, bgColor, nextStep, prevStep, currentStep, dataLength, goToStep, direction }) {
    
    return (
        <CardContainer>
            <CardWrapper $bgColor={bgColor}>
                <ImgSection>

                    <AnimatePresence initial={false} custom={direction}>

                        <CardImage 
                            src={image} 
                            alt={title} 
                            as={motion.img}
                            key={currentStep}
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={animationVariants}
                            transition={{ duration: 0.5 }}>

                        </CardImage>
                    </AnimatePresence>

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
                            {currentStep > 0 && (<PrevButton onClick={prevStep} as={motion.button} whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>←</PrevButton>)}
                            {currentStep < dataLength - 1 && (<NextButton onClick={nextStep} as={motion.button} whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>→</NextButton>)}
                        </ButtonRigth>
                    </ButtonSection>

                </Content>

            </CardWrapper>
        </CardContainer>
    );
}

export default Card;