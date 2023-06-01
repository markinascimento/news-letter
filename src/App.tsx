// -> Import do ReactJS
import { useState } from 'react';

// -> Import dos Components
import { Main } from './components/Main';
import { Sucess } from './components/Sucess';

// -> CSS Global
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  const [subscriberSucess, setSubscriberSucess] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      {subscriberSucess
        ? <Sucess setSubscriberSucess={setSubscriberSucess} />
        : <Main setSubscriberSucess={setSubscriberSucess} />
      }

    </>
  );
}
