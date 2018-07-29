var fruits = [{
        name: "Banana",
        MRP: 72,
        Category: "Fruits"
    },
    {
        name: "Pomegranate",
        MRP: 49,
        Category: "Fruits"
    },
    {
        name: "Apple",
        MRP: 150,
        Category: "Fruits"
    },
    {
        name: "Papaya",
        MRP: 50,
        Category: "Fruits"
    },
    {
        name: "Coconut",
        MRP: 50,
        Category: "Fruits"
    },
    {
        name: "Kiwi",
        MRP: 60,
        Category: "Fruits"
    },
    {
        name: "Mango",
        MRP: 55,
        Category: "Fruits"
    },
    {
        name: "Watermelon",
        MRP: 25,
        Category: "Fruits"
    },
    {
        name: "Guava",
        MRP: 90,
        Category: "Fruits"
    },
    {
        name: "Mosambi",
        MRP: 80,
        Category: "Fruits"
    }
];
var vegetable = [{
        name: "Potato",
        MRP: 70,
        Category: "Vegetables"
    },
    {
        name: "Tomato",
        MRP: 50,
        Category: "Vegetables"
    },
    {
        name: "Onion",
        MRP: 40,
        Category: "Vegetables"
    },
    {
        name: "Cauliflower",
        MRP: 30,
        Category: "Vegetables"
    },
    {
        name: "Ladies Finger",
        MRP: 30,
        Category: "Vegetables"
    },
    {
        name: "Palak",
        MRP: 20,
        Category: "Vegetables"
    },
    {
        name: "Bootle Gourd",
        MRP: 25,
        Category: "Vegetables"
    },
    {
        name: "Ridge Gourd",
        MRP: 40,
        Category: "Vegetables"
    },
    {
        name: "Radish-White",
        MRP: 25,
        Category: "Vegetables"
    },
    {
        name: "Spring Onion",
        MRP: 15,
        Category: "Vegetables"
    }
];
var pulses = [{
        name: "Split green gram",
        MRP: 300,
        Category: "Pulses"
    },
    {
        name: "Black eyed beans",
        MRP: 250,
        Category: "Pulses"
    },
    {
        name: "Yellow Pigeon Peas",
        MRP: 260,
        Category: "Pulses"
    },
    {
        name: "Kidney Beans",
        MRP: 280,
        Category: "Pulses"
    },
    {
        name: "Split Black Gram",
        MRP: 300,
        Category: "Pulses"
    },
    {
        name: "Red Lentils",
        MRP: 350,
        Category: "Pulses"
    },
    {
        name: "Burkish Gram",
        MRP: 300,
        Category: "Pulses"
    },
    {
        name: "Split Bengal Gram",
        MRP: 310,
        Category: "Pulses"
    },
    {
        name: "Black Gram bean",
        MRP: 300,
        Category: "Pulses"
    },
    {
        name: "White Peas",
        MRP: 260,
        Category: "Pulses"
    }
];
var biscuits = [{
        name: "20-20",
        MRP: 20,
        Category: "Biscuits"
    },
    {
        name: "ParleG",
        MRP: 5,
        Category: "Biscuits"
    },
    {
        name: "Hide n Seek",
        MRP: 10,
        Category: "Biscuits"
    },
    {
        name: "Good Day",
        MRP: 10,
        Category: "Biscuits"
    },
    {
        name: "Dark fanatasy",
        MRP: 20,
        Category: "Biscuits"
    },
    {
        name: "Happy Happy",
        MRP: 10,
        Category: "Biscuits"
    },
    {
        name: "Monaco",
        MRP: 10,
        Category: "Biscuits"
    },
    {
        name: "Kreams",
        MRP: 20,
        Category: "Biscuits"
    },
    {
        name: "Golden Arcs",
        MRP: 30,
        Category: "Biscuits"
    },
    {
        name: "Nimkin",
        MRP: 10,
        Category: "Biscuits"
    }
];
allData = [fruits, vegetable, pulses, biscuits];

function searchdata() {
    fulldata = [];
    var inputdata = document.getElementById("search").value;
    var inputlength = inputdata.length;
    if (inputlength > 0) {
        regex = new RegExp(inputdata, "i")
        allData.forEach(array => {
            array.forEach(attribute => {
                if (regex.test(attribute.name)) {
                    // console.log(attribute.name);
                    fulldata.push(attribute);
                }
            });
        });
        if (fulldata.length > 0) {
            var table = "<table><tr><th>Name</th><th>MRP</th><th>Category</th><th>Quantity</th></tr>";
            fulldata.forEach((attribute) => {
                table = table + "<tr><td>" + attribute.name + "</td><td>" + attribute.MRP + "</td><td>" + attribute.Category +
                    "</td><td>" + '<input type="number" min="0" width="100" max="5" id="' + attribute.name + '"/></td></tr>';
            });
            table = table + "</table>";
            document.getElementById("demo").innerHTML = table;
        }
    }
}

function resetdata() {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("search").value = "";
}

var totaldata = '<tr><th> Name</th><th>Quantity</th><th>Price</th></tr>';
var total=0;
var Add_To = () => {

    allData.forEach(array => {
        array.forEach(attribute => {
            if (document.getElementById(attribute.name) != null) {
                var number = document.getElementById(attribute.name).value;
                if (number > 0) {
                    totaldata = totaldata + '<tr><td>' + attribute.name + '</td><td>' + number +'</td><td>'+attribute.MRP+ '</td></tr>';
                    console.log(attribute.MRP);
                    total += attribute.MRP*number;
                }
            }
        });
    });
    document.getElementById("data").innerHTML = totaldata;
}

var Total_price = () => {
    localStorage.setItem("data",totaldata);
    localStorage.setItem("total",total);
}