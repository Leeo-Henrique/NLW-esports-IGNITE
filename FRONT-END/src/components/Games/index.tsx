import { Game } from "../../App";
import { StyledSection } from "./styles";

interface Props {
  myGames: Array<Game>;
}

export const Games = ({ myGames }: Props) => {
  return (
    <StyledSection>
      {myGames?.map((games, index) => {
        return (
          <a href="google.com" key={index}>
            <img src={games.bannerUrl} alt="Foto de game" />
            <div>
              <strong>{games.title}</strong>
              <span>{games._count.ads} Anúncios</span>
            </div>
          </a>
        );
      })}
    </StyledSection>
  );
};
