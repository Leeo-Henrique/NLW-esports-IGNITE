import { DialogClose } from "@radix-ui/react-dialog";
import "./style.css";
import { GameController } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Input } from "./input";
// interface Data = {

// }
export const Form = () => {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const dataForm = async (data: any) => {};

  return (
    <form className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="font-[inter]" htmlFor="game">
          Qual o game
        </label>
        <Input
          className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
          type="text"
          id="game"
          placeholder="Selecione o game que deseja jogar"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-[inter]">
          Seu nome (ou nickname)
        </label>
        <Input
          type="text"
          id="name"
          placeholder="Como te chamam dentro do game?"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="yearsPlaying" className="font-[inter] letter">
            Joga há quantos anos?
          </label>
          <Input
            type="text"
            id="yearsPlaying"
            placeholder="Tudo bem ser ZERO"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="discord" className="font-[inter]">
            Qual seu discord
          </label>
          <Input type="text" id="discord" placeholder="Usuario#1234" />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="weekDays" className="font-[inter]">
            Quando costuma jogar?
          </label>

          <div className="grid grid-cols-4 gap-2">
            <button title="Domingo" className="w-8 h-8 rounded bg-zinc-900 ">
              D
            </button>
            <button title="Segunda" className="w-8 h-8 rounded bg-zinc-900 ">
              S
            </button>
            <button title="Terça" className="w-8 h-8 rounded bg-zinc-900 ">
              T
            </button>
            <button title="Quarta" className="w-8 h-8 rounded bg-zinc-900 ">
              Q
            </button>
            <button title="Quinta" className="w-8 h-8 rounded bg-zinc-900 ">
              Q
            </button>
            <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900 ">
              S
            </button>
            <button title="Sábado" className="w-8 h-8 rounded bg-zinc-900 ">
              S
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="hourStart" className="font-[inter]">
            Qual horário do dia?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Input type="time" id="hourStart" placeholder="De" />
            <Input type="time" id="hourEnd" placeholder="Ate" />
          </div>
        </div>
      </div>

      <div>
        <Input type="checkbox" id="" />
        Costumo me conectar ao chat de voz
      </div>

      <footer className="mt-4 flex justify-end gap-4">
        <DialogClose
          type="button"
          className="bg-zinc-500 px-5 h-12 rounded-md font-semibold"
        >
          Cancelar
        </DialogClose>
        <button
          type="submit"
          className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3"
        >
          <GameController size={24} />
          Encontrar duo
        </button>
      </footer>
    </form>
  );
};
