const user = {
  id: 1,
  name: "John",
  age: 34,
  address: { street: "123 Main St", city: "PP" },
};
const {address:{street, city}}= user
console.log(street, city)
