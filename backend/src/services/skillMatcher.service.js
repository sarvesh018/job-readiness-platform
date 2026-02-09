function matchSkills(userSkills, requiredSkills) {
  const matchedSkills = userSkills.filter(skill =>
    requiredSkills.includes(skill)
  );

  const missingSkills = requiredSkills.filter(skill =>
    !matchedSkills.includes(skill)
  );

  const matchScore = requiredSkills.length === 0
    ? 0
    : Math.round((matchedSkills.length / requiredSkills.length) * 100);

  return {
    matchScore,
    matchedSkills,
    missingSkills
  };
}

module.exports = matchSkills;
