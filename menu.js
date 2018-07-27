var fruits = [{
        name: "Banana",
        MRP: "Rs 72",
        Category: "Fruits"
    },
    {
        name: "Pomegranate",
        MRP: "Rs 49",
        Category: "Fruits"
    },
    {
        name: "Apple",
        MRP: "Rs 150",
        Category: "Fruits"
    },
    {
        name: "Papaya",
        MRP: "Rs 50",
        Category: "Fruits"
    },
    {
        name: "Coconut",
        MRP: "Rs 50",
        Category: "Fruits"
    },
    {
        name: "Kiwi",
        MRP: "Rs 60",
        Category: "Fruits"
    },
    {
        name: "Mango",
        MRP: "Rs 55",
        Category: "Fruits"
    },
    {
        name: "Watermelon",
        MRP: "Rs 25",
        Category: "Fruits"
    },
    {
        name: "Guava",
        MRP: "Rs 90",
        Category: "Fruits"
    },
    {
        name: "Mosambi",
        MRP: "Rs 80",
        Category: "Fruits"
    }
];
var vegetable = [{
        name: "Potato",
        MRP: "Rs 70",
        Category: "Vegetables"
    },
    {
        name: "Tomato",
        MRP: "Rs 50",
        Category: "Vegetables"
    },
    {
        name: "Onion",
        MRP: "Rs 40",
        Category: "Vegetables"
    },
    {
        name: "Cauliflower",
        MRP: "Rs 30",
        Category: "Vegetables"
    },
    {
        name: "Ladies Finger",
        MRP: "Rs 30",
        Category: "Vegetables"
    },
    {
        name: "Palak",
        MRP: "Rs 20",
        Category: "Vegetables"
    },
    {
        name: "Bootle Gourd",
        MRP: "Rs 25",
        Category: "Vegetables"
    },
    {
        name: "Ridge Gourd",
        MRP: "Rs 40",
        Category: "Vegetables"
    },
    {
        name: "Radish-White",
        MRP: "Rs 25",
        Category: "Vegetables"
    },
    {
        name: "Spring Onion",
        MRP: "Rs 15",
        Category: "Vegetables"
    }
];
var pulses = [{
        name: "Split green gram",
        MRP: "Rs 300",
        Category: "Pulses"
    },
    {
        name: "Black eyed beans",
        MRP: "Rs 250",
        Category: "Pulses"
    },
    {
        name: "Yellow Pigeon Peas",
        MRP: "Rs 260",
        Category: "Pulses"
    },
    {
        name: "Kidney Beans",
        MRP: "Rs 280",
        Category: "Pulses"
    },
    {
        name: "Split Black Gram",
        MRP: "Rs 300",
        Category: "Pulses"
    },
    {
        name: "Red Lentils",
        MRP: "Rs 350",
        Category: "Pulses"
    },
    {
        name: "Burkish Gram",
        MRP: "Rs 300",
        Category: "Pulses"
    },
    {
        name: "Split Bengal Gram",
        MRP: "Rs 310",
        Category: "Pulses"
    },
    {
        name: "Black Gram bean",
        MRP: "Rs 300",
        Category: "Pulses"
    },
    {
        name: "White Peas",
        MRP: "Rs 260",
        Category: "Pulses"
    }
];
var biscuits = [{
        name: "20-20",
        MRP: "Rs 20",
        Category: "Biscuits"
    },
    {
        name: "ParleG",
        MRP: "Rs 5",
        Category: "Biscuits"
    },
    {
        name: "Hide n Seek",
        MRP: "Rs 10",
        Category: "Biscuits"
    },
    {
        name: "Good Day",
        MRP: "Rs 10",
        Category: "Biscuits"
    },
    {
        name: "Dark fanatasy",
        MRP: "Rs 20",
        Category: "Biscuits"
    },
    {
        name: "Happy Happy",
        MRP: "Rs 10",
        Category: "Biscuits"
    },
    {
        name: "Monaco",
        MRP: "Rs 10",
        Category: "Biscuits"
    },
    {
        name: "Kreams",
        MRP: "Rs 20",
        Category: "Biscuits"
    },
    {
        name: "Golden Arcs",
        MRP: "Rs 30",
        Category: "Biscuits"
    },
    {
        name: "Nimkin",
        MRP: "Rs 10",
        Category: "Biscuits"
    }
];
var allData = [fruits, vegetable, pulses, biscuits];

function searchdata() {
    var fulldata = [];
    var inputdata = document.getElementById("search").value;
    var inputlength = inputdata.length;
    if (inputlength > 0) {
        var regex = new RegExp(inputdata, "i")
        allData.forEach(array => {
            array.forEach(attribute => {
                if (regex.test(attribute.name)) {
                    console.log(attribute.name);
                    fulldata.push(attribute);
                }
            });
        });
    }
    if (fulldata.length > 0) {
        var table = "<table><tr><th>Name</th><th>MRP</th><th>Category</th><th>Quantity</th></tr>"
        fulldata.forEach((pro) => {
            table = table + "<tr><td>" + pro.name + "</td><td>" + pro.MRP + "</td><td>" + pro.Category + "</td><td>" + "<input type=number min=0 max=5 value=0 id=" + pro.name + "</td></tr>";
        });
        table = table + "</table>";
        document.getElementById("demo").innerHTML = table;
    }
}

function myFunction() {
    display.none();
}