import { StyledSection } from "./styles";
import { Link } from "react-router-dom";
import { Game } from "../../App";

interface Props {
  myGames: Array<Game>;
}

export const Games = ({ myGames }: Props) => {
  return (
    <StyledSection className="animate__animated animate__bounceInDown">
      {myGames?.map((games, index) => {
        return (
          <Link to={`/game/${games.title}`} key={index}>
            <img src={games.bannerUrl} alt="Foto de game" />
            <div>
              <strong>{games.title}</strong>
              <span>{games._count.ads} Anúncios</span>
            </div>
          </Link>
        );
      })}
    </StyledSection>
  );
};
