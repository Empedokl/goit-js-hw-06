import users from "./users.js";
// const getSortedUniqueSkills = (users) => {
//   return users
//     .reduce(function (skills, user) {
//       skills.push(...user.skills);
//       return skills;
//     }, [])
//     .reduce(function (acc, skill) {
//       if (!acc.includes(skill)) {
//         acc.push(skill);
//         return acc;
//       }
//       return acc;
//     }, [])
//     .sort();
// };

// console.log(getSortedUniqueSkills(users));

const getSortedUniqueSkills = (users) => {
  const allSkills = users.reduce((skills, user) => {
    skills.push(...user.skills);
    return skills;
  }, []);
  const result = allSkills
    .filter((skill, index) => {
      return allSkills.indexOf(skill) === index;
    })
    .sort();
  return result;
};

console.log(getSortedUniqueSkills(users));
