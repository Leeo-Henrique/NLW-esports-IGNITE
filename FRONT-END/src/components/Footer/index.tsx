import { DivStyled, FooterStyled } from "./style";
import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export const Footer = () => {
  return (
    <FooterStyled>
      <DivStyled>
        <div>
          <strong>Não encontrou seu duo?</strong>
          <span>Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </DivStyled>
    </FooterStyled>
  );
};
