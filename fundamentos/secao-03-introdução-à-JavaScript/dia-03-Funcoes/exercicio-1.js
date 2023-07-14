const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

function addCustomers(customers, newCustomers) {
  const isStringsArray = (newCustomers) =>
    newCustomers.every((i) => typeof i === "string");

  if (isStringsArray(newCustomers) === false) {
    return "Todos os valores precisam ser strings.";
  } else {
    for (let index = 0; index < newCustomers.length; index += 1) {
      customers.push(newCustomers[index]);
    }
  }
  return customers;
}

console.log(addCustomers(trybeBankCustomers, ["Carolina", "Adamastor"]));
console.log(addCustomers(trybeBankCustomers, ["Miranda", 78]));
console.log(trybeBankCustomers);
