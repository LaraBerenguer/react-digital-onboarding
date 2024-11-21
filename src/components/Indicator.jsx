import { Bola, IndicatorContainer } from './indicatorStyles';

function Indicator({ currentStep, dataLength }) {

    //usar map para añadir propiedad o bolita o ???
    //dentro del map (se puede) hacer ternario para ver si es primero o no???
    return (
        <IndicatorContainer>
            {Array(dataLength).fill().map((_, index) => (
                <Bola key={index} $active={index === currentStep} />
            )
        )}                        
        </IndicatorContainer>
    );
};

export default Indicator;

