import { arrGames } from "./imagesImportadas";
import { StyledSection } from "./styles";

export const Games = () => {
  const Games = [
    "League of Legends",
    "Dota 2",
    "Counter Strike",
    "Apex Legends",
    "Fortinite",
    "World of Warcraft",
  ];
  return (
    <StyledSection>
      {arrGames?.map((games, index) => {
        return (
          <a href="google.com" key={index}>
            <img src={games} alt="Foto de game" />
            <div>
              <strong>{Games[index]}</strong>
              <span>4 anúncios</span>
            </div>
          </a>
        );
      })}
    </StyledSection>
  );
};
