import { Bola, IndicatorContainer } from './indicatorStyles';
import { motion } from 'motion/react';

const bolaAnimation = {
    inactive: { width: 10, height: 10, backgroundColor: '#808080' },
    active: { width: 20, height: 10, backgroundColor: '#000' }
};

interface IndicatorProps {
    currentStep: (number);
    dataLength: number;
    goToStep: (a: number) => void
};

function Indicator({ currentStep, dataLength, goToStep }: IndicatorProps) {
    return (
        <IndicatorContainer>
            {Array(dataLength).fill(null).map((_, index) => (
                <Bola key={index} $active={index === currentStep} onClick={() => goToStep(index)}
                    as={motion.button}
                    animate={index === currentStep ? "active" : "inactive"}
                    variants={bolaAnimation}
                    transition={{ type: "spring", stiffness: 200 }} />
            )
            )}
        </IndicatorContainer>
    );
};

export default Indicator;

