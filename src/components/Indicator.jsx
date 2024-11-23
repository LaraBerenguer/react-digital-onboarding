import { Bola, IndicatorContainer } from './indicatorStyles';
import { motion } from "motion/react";

const bolaAnimation = {
    inactive: { width: 10, height: 10, backgroundColor: '#808080' },
    active: { width: 20, height: 10, backgroundColor: '#000' }
};

function Indicator({ currentStep, dataLength, goToStep }) {
    return (
        <IndicatorContainer>
            {Array(dataLength).fill().map((_, index) => (
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

