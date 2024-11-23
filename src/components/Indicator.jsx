import { Bola, IndicatorContainer } from './indicatorStyles';

function Indicator({ currentStep, dataLength, goToStep }) { 
    return (
        <IndicatorContainer>
            {Array(dataLength).fill().map((_, index) => (
                <Bola key={index} $active={index === currentStep} onClick={() => goToStep(index)} />
            )
        )}                        
        </IndicatorContainer>
    );
};

export default Indicator;

