const SKILLS = require('../constants/skills');

function extractSkills(text = ""){
    const normalizedText = text.toLowerCase();

    return SKILLS.filter(skill => normalizedText.includes(skill));
}

module.exports = extractSkills;
// added comment