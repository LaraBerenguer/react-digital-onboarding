import { CardContainer, CardWrapper, ImgSection, CardImage, Content, TitleSection, Title, TextSection, ButtonSection, ButtonLeft, ButtonRigth, NextButton, PrevButton } from './cardStyles';
import Indicator from './Indicator';
import { motion, AnimatePresence, Variants, HTMLMotionProps } from "motion/react";

const animationVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        position: 'absolute'
    }),
    center: {
        x: '-50%',
        opacity: 1,
        position: 'absolute'
    },
    exit: (direction: number) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        position: 'absolute'
    }),
};

interface CardProps {
    title: string;
    description: string;
    image: string;
    bgColor: string;
    nextStep: (a: null) => void;
    prevStep: (a: null) => void;
    currentStep: number;
    goToStep: (a: number) => void;
    dataLength: number;
    direction: number;
};

function Card({ title, description, image, bgColor, nextStep, prevStep, currentStep, dataLength, goToStep, direction }: CardProps) {
    console.log("currentStep: ", currentStep);

    return (
        <CardContainer>
            <CardWrapper $bgColor={bgColor}>
                <ImgSection>

                    <AnimatePresence initial={false} custom={direction}>
                        <CardImage src={image} alt={title}
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
                            {currentStep > 0 && (<PrevButton onClick={() => prevStep(null)} as={motion.button} whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg></PrevButton>)}
                            {currentStep < dataLength - 1 && (<NextButton onClick={() => nextStep(null)} as={motion.button} whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg></NextButton>)}
                        </ButtonRigth>
                    </ButtonSection>

                </Content>

            </CardWrapper>
        </CardContainer>
    );
};

export default Card;