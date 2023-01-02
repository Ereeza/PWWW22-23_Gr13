const packageIndex = parseInt(prompt("Enter package index (1-4)"));
const numOfPersons = parseInt(prompt("Enter number of persons"));
const withFood = parseInt(prompt("With or without food (1 or 0)"));

for (let item of packages) {
    outputPackagesRow(item);
}

const total = calculateTotal(packageIndex, numOfPersons, withFood);