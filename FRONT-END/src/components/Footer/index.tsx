import { DivStyled, SectionStyled } from "./style";
import { MagnifyingGlassPlus } from "phosphor-react";

export const Footer = () => {
  return (
    <SectionStyled>
      <DivStyled>
        <div>
          <strong>Não encontrou seu duo?</strong>
          <span>Publique um anúncio para encontrar novos players!</span>
        </div>
        <button>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </DivStyled>
    </SectionStyled>
  );
};
