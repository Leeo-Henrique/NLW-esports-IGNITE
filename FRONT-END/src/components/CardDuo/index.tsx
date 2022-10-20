import { GameController } from "phosphor-react";
import { Ads } from "../ConnectDuo";
import { toast } from "react-toastify";

interface PropsItens {
  Ads: Ads[] | undefined;
}

const CardDuo = ({ Ads }: PropsItens) => {
  return (
    <>
      {Ads !== undefined &&
        (Ads.length > 0 ? (
          <ul
            style={{
              justifyContent:
                Ads !== undefined && Ads.length > 1 ? "flex-start" : "center",
            }}
            className="flex items-start gap-4 w-[90%] my-7  OverFlow animate__animated animate__bounceInLeft"
          >
            {Ads?.map((adsInfo, index) => {
              return (
                <li
                  key={index}
                  className="text-xl text-white font-black font-[inter] min-w-[180px] max-w-[180px] h-[200px] flex 
    items-center justify-around flex-col bg-slate-700 rounded-2xl text-center"
                >
                  <h1>{adsInfo.name}</h1>
                  <p className="text-sm">
                    {adsInfo.weekDay.length} dias • {adsInfo.hourStart} -{" "}
                    {adsInfo.hourEnd}
                  </p>
                  <div className="flex justify-around text-base w-[100%] items-center">
                    Audio chamada
                    <p
                      className="text-sm"
                      style={{
                        color: adsInfo.useVoiceChannel ? "green" : "red",
                      }}
                    >
                      {adsInfo.useVoiceChannel ? "Sim" : "Não"}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      toast.success("Usuario do discord copiado com sucesso");
                      navigator.clipboard.writeText(adsInfo.discord);
                    }}
                    className="text-sm flex items-center justify-around w-[80%] h-[30px] bg-violet-500 rounded-lg"
                  >
                    <GameController size={25} />
                    Conectar-se!
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="my-7 animate__animated animate__slideInLeft">
            <h1 className="text-3xl text-white">
              Ainda não existe nenhum duo para esse jogo!
            </h1>
          </div>
        ))}
    </>
  );
};
export default CardDuo;
