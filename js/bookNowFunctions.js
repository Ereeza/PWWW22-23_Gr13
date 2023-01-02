const packages = [
    {
        index: "1",
        location: "Thailand City Tour",
        filename: "package1.png",
        price: 120.0

    },
    {

        index: "2",
        location: "Laos City Tour",
        filename: "package2.png",
        price: 120.0

    },
    {

        index: "3",
        location: "Singapore City Tour",
        filename: "package3.png",
        price: 120.0

    },
    {

        index: "4",
        location: "Thailad Special Offer",
        filename: "package4.jpg",
        price: 900.0

    }

];

function outputPackagesRow(item) {
    document.write('<tr>');
    document.write('<td>' + item.index + '</td>');
    document.write('<td><img src="assets/images/' + item.filename + ' "></td>');
    document.write('<td>' + item.location + '</td>');
    document.write('<td>' + item.price.toFixed(2) + '</td>');
}

function calculateTotal(packageIndex, numOfPersons, withFood) {
    var total = 0;

    if (withFood < 0 || withFood > 1 || packageIndex < 1 || packageIndex > 4) {
        alert("Please recheck if you have written the number of packages or food beyond the given range!");
    }

    if (withFood == 0) {
        if (packageIndex == 1) {
            total = parseInt(packages[0].price * numOfPersons);
        }
        else if (packageIndex == 2) {
            total = parseInt(packages[1].price * numOfPersons);
        }
        else if (packageIndex == 3) {
            total = parseInt(packages[2].price * numOfPersons);
        }
        else if (packageIndex == 4) {
            total = parseInt(packages[3].price * numOfPersons);
        }
    }
    else if (withFood == 1) {
        if (packageIndex == 1) {
            total = packages[0].price * numOfPersons + 20 * numOfPersons;
        }
        else if (packageIndex == 2) {
            total = packages[1].price * numOfPersons + 20 * numOfPersons;
        }
        else if (packageIndex == 3) {
            total = packages[2].price * numOfPersons + 20 * numOfPersons;
        }
        else if (packageIndex == 4) {
            total = packages[3].price * numOfPersons + 20 * numOfPersons;
        }
    }
    return total;
}

function outputWithFood(num) {
    if (num == 0) {
        document.write("Without");
    }
    else if (num == 1) {
        document.write("With");
    }
}

function outputCurrency(num) {
    document.write("$" + num.toFixed(2));
}