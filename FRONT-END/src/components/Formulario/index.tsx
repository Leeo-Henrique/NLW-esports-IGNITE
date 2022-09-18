import { DialogClose } from "@radix-ui/react-dialog";
import "./style.css";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import { Input } from "./input";
import { Game } from "../../App";
import { FormEvent, useEffect, useState } from "react";
import api from "../../api";
import { toast } from "react-toastify";

export const Form = () => {
  const [myGames, setMyGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [voiceChanel, setVoiceChanel] = useState<boolean>(false);

  useEffect(() => {
    api
      .get("/games")
      .then((res) => setMyGames(res.data))
      .catch((err) => console.log(err));
  }, []);

  const dataForm = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    if (
      !data.name ||
      !data.hourStart ||
      !data.hourEnd ||
      !data.yearsPlaying ||
      !data.discord
    ) {
      return window.alert("Preencha todos os campos");
    }
    const yearsPlayingNumber = Number(data.yearsPlaying);
    if (isNaN(yearsPlayingNumber)) {
      return window.alert("Apenas numeros em anos jogados");
    }
    try {
      await api
        .post(`/games/${data.game}/ads`, {
          name: data.name,
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
          useVoiceChannel: voiceChanel,
          weekDays: weekDays.map(Number),
          yearsPlaying: Number(data.yearsPlaying),
          discord: data.discord,
        })
        .then(() => {
          toast.success("Anuncio criado com sucesso");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
    } catch (error) {
      toast.error("Erro ao criar o anuncio");
      console.log(error);
    }
  };

  return (
    <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => dataForm(e)}>
      <div className="flex flex-col gap-2">
        <label className="font-[inter]" htmlFor="game">
          Qual o game
        </label>
        <select
          className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
          id="game"
          name="game"
          placeholder="Selecione o game que deseja jogar"
          defaultValue=""
        >
          <option disabled value="">
            Selecione o game que deseja jogar
          </option>
          {myGames?.map((game) => (
            <option key={game.id} value={game.id}>
              {game.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-[inter]">
          Seu nome (ou nickname)
        </label>
        <Input
          type="text"
          id="name"
          name="name"
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
            name="yearsPlaying"
            placeholder="Tudo bem ser ZERO"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="discord" className="font-[inter]">
            Qual seu discord
          </label>
          <Input
            type="text"
            id="discord"
            name="discord"
            placeholder="Usuario#1234"
          />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="weekDays" className="font-[inter]">
            Quando costuma jogar?
          </label>

          <ToggleGroup.Root
            type="multiple"
            className="grid grid-cols-4 gap-2"
            onValueChange={setWeekDays}
          >
            <ToggleGroup.Item
              value="0"
              title="Domingo"
              className={`w-8 h-8 rounded  ${
                weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
              }`}
            >
              D
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="1"
              title="Segunda"
              className={`w-8 h-8 rounded  ${
                weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
              }`}
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="2"
              title="Terça"
              className={`w-8 h-8 rounded  ${
                weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
              }`}
            >
              T
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="3"
              title="Quarta"
              className={`w-8 h-8 rounded  ${
                weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
              }`}
            >
              Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="4"
              title="Quinta"
              className={`w-8 h-8 rounded  ${
                weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
              }`}
            >
              Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="5"
              title="Sexta"
              className={`w-8 h-8 rounded  ${
                weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
              }`}
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="6"
              title="Sábado"
              className={`w-8 h-8 rounded  ${
                weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
              }`}
            >
              S
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="hourStart" className="font-[inter]">
            Qual horário do dia?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="time"
              id="hourStart"
              name="hourStart"
              placeholder="De"
            />
            <Input type="time" id="hourEnd" name="hourEnd" placeholder="Ate" />
          </div>
        </div>
      </div>

      <label className="mt-2 flex gap-2 text-sm itens-center">
        <Checkbox.Root
          className="w-6 h-6 rounded p-1 bg-zinc-900"
          checked={voiceChanel}
          onCheckedChange={(checked) => {
            if (checked === true) {
              setVoiceChanel(true);
            } else {
              setVoiceChanel(false);
            }
          }}
        >
          <Checkbox.Indicator>
            <Check className="w-4 h-4 text-emerald-400" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        Costumo me conectar ao chat de voz
      </label>

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
