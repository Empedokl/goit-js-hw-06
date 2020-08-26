import users from "./users.js";
const getUsersWithGender = (users, gender) => {
  return users
    .filter(function (user) {
      return user.gender === gender;
    })
    .map(function (user) {
      return user.name;
    });
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
