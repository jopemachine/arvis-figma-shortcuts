const arvish = require('arvish')

const teams = arvish.config.get('figma.teams') ? JSON.parse(arvish.config.get('figma.teams')) : []

const removeTeam = JSON.parse(arvish.input)

arvish.config.set('figma.teams', JSON.stringify(teams.filter((t) => t.id != removeTeam.id)))
