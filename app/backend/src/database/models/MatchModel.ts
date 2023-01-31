import { Model, BOOLEAN, INTEGER } from 'sequelize';
import db from '.';
import Team from './TeamsModel';

class Match extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team',
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team',
  },
  awayTeamGoals: {
    field: 'away_team_goals',
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    field: 'in_progress',
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Match.hasMany(Team, { foreignKey: 'id', as: 'homeTeam' });
Match.hasMany(Team, { foreignKey: 'id', as: 'awayTeam' });

Team.belongsTo(Match, { foreignKey: 'id', as: 'homeTeamMatch' });
Team.belongsTo(Match, { foreignKey: 'id', as: 'awayTeamMatch' });

export default Match;
