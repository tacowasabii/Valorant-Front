type playerRank = {
  id: number;
  rank: number;
  player: string;
  rating: number;
  win_rate: string;
};

type playerProps = {
  players: playerRank[];
};
