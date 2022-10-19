import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Games } from "./components/Games";
import { Header } from "./components/Header";
import * as Dialog from "@radix-ui/react-dialog";
import api from "./api";
import { Form } from "./components/Formulario";

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [myGames, setMyGames] = useState<Game[]>([]);

  useEffect(() => {
    api
      .get("/games")
      .then((res) => setMyGames(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Games myGames={myGames} />
      <Dialog.Root>
        <Footer />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/70 inset-0 fixed" />

          <Dialog.Content
            className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[450px] shadow-lg shadow-black/25
          animate__animated animate__fadeIn
          "
          >
            <Dialog.Title className="text-3xl text-white font-black font-[inter]">
              Publique um anúncio
            </Dialog.Title>
            <Form />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default App;
