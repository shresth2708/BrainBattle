import React from 'react';
import { Link } from 'react-router-dom';
import PlayerRow from '../ui/PlayerRow';
import { topPlayers } from '../../data/leaderboard';

const TopLeaderboard = () => {
  return (
    <div className="leaderboard-section">
      <div className="leaderboard-header">
        <h2>Top Players</h2>
        <Link to="/leaderboard" className="view-all-btn">Full Leaderboard</Link>
      </div>
      
      <div className="leaderboard-table">
        <div className="leaderboard-head">
          <div className="rank-col">Rank</div>
          <div className="player-col">Player</div>
          <div className="quizzes-col">Quizzes</div>
          <div className="score-col">Score</div>
        </div>
        
        {topPlayers.map(player => (
          <PlayerRow key={player.id} player={player} />
        ))}
      </div>
      
      <div className="view-more-container">
        <Link to="/leaderboard" className="view-more-link">View Complete Leaderboard</Link>
      </div>
    </div>
  );
};

export default TopLeaderboard;