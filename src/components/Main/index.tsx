// -> Import do ReactJS
import { ChangeEvent, useState } from 'react';

// -> Import da Lib externa de Loading
import { InfinitySpin } from 'react-loader-spinner';

// -> Verificar se o e-mail é válido
import { isEmailValid } from '../../utis/isEmailValid';

// -> Import dos Components
import Button from '../Button';
import Input from '../Input';

// -> Import do CSS
import {
  MainContainer,
  Content,
  InformationsContainer,
  ContainerTags,
  ContainerInput,
  ImageContainer
} from './styles';

// -> Import das Images / Icons
import logoDesktop from '../../assets/illustration-sign-up-desktop.svg';
import listIcon from '../../assets/icon-list.svg';

// -> Tipando os dados recebidos pelo component
interface MainProps {
  setSubscriberSucess: (subscriberSucess: boolean) => void;
}

export function Main({ setSubscriberSucess }: MainProps) {
  const texts = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are sucess',
    'And much more'
  ];

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // -> Função para alterar o valor do Input
  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if(event.target.value && !isEmailValid(event.target.value)) {
      return setEmailError(true);
    }

    return setEmailError(false);
  }

  // -> Função para enviar o e-mail
  async function handleSubscriberNewsletter() {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setSubscriberSucess(true);
  }

  return (
    <MainContainer>
      <Content>
        <InformationsContainer>
          <div className='descriptions'>
            <h1 className='title'> Stay updated </h1>

            <strong className='description'> Join 60,000+ product managers receiving monthly updates on </strong>

            <ContainerTags>
              {texts.map((text) => (
                <div key={text} className="tag">
                  <img src={listIcon} alt="" />
                  <span> {text} </span>
                </div>
              ))}
            </ContainerTags>

            <ContainerInput>
              <div className="labels">
                <strong> Email address </strong>
                {emailError && <span> Valid email required </span>}
              </div>
              <Input
                error={emailError}
                value={email}
                onChange={handleChangeEmail}
                placeholder='email@company.com'
              />
            </ContainerInput>

            <Button
              type='button'
              disabled={emailError || !email}
              onClick={handleSubscriberNewsletter}
            >
              {isLoading
                ? <InfinitySpin width='150' color="#FFFFFF" />
                : 'Subscriber to monthly newsletter'
              }
            </Button>
          </div>
        </InformationsContainer>

        <ImageContainer>
          <img src={logoDesktop} alt="" />
          <div />
        </ImageContainer>
      </Content>
    </MainContainer>
  );
}
