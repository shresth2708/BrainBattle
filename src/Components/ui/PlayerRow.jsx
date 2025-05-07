import React from 'react';

const PlayerRow = ({ player }) => {
  return (
    <div className="leaderboard-row">
      <div className="rank-col">
        {player.rank === 1 && <span className="trophy">🏆</span>} {player.rank}
      </div>
      <div className="player-col">
        <div className="player-avatar"></div>
        <div className="player-name">{player.name}</div>
      </div>
      <div className="quizzes-col">{player.quizzes}</div>
      <div className="score-col">{player.score}</div>
    </div>
  );
};

export default PlayerRow;