const arvish = require('arvish')

const teams = arvish.config.get('figma.teams') ? JSON.parse(arvish.config.get('figma.teams')) : []

const newTeam = JSON.parse(arvish.input)
if (!teams.find(e => e.id == newTeam.id)) {
  teams.push(newTeam)
}
arvish.config.set('figma.teams', JSON.stringify(teams))
