
// -> Tipando os dados recebidos pelo component
interface SucessProps {
  setSubscriberSucess: (subscriberSucess: boolean) => void;
}

export function Sucess({ setSubscriberSucess }: SucessProps) {
  return (
    <div>
      página de sucesso
      <button onClick={() => setSubscriberSucess(false)}> resetar </button>
    </div>
  );
}
