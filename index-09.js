import users from "./users.js";
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort(
      (prevName, nextName) => prevName.friends.length - nextName.friends.length
    )
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
