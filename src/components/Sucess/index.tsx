// -> Import dos Components
import Button from '../Button';

// -> Import do CSS
import { SucessContainer, Content } from './styles';

// -> Import dos Icons
import iconCheck from '../../assets/icon-success.svg';

// -> Tipando os dados recebidos pelo component
interface SucessProps {
  setSubscriberSucess: (subscriberSucess: boolean) => void;
}

export function Sucess({ setSubscriberSucess }: SucessProps) {
  return (
    <SucessContainer>
      <Content>
        <img src={iconCheck} alt="" />

        <h1 className='title'> Thanks for subscribing! </h1>

        <span className='sssss'>
          A confirmation email has been sen to Please open it and click the button inside to confirm your subscription
        </span>

        <Button
          type='button'
          onClick={() => setSubscriberSucess(false)}
        >
          Dismiss message
        </Button>
      </Content>
    </SucessContainer>
  );
}
