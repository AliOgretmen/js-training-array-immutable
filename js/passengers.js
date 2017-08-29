/**
 * Here is the train and the passengers in this terrible murder scene!
 *
 * INFO:
 * Here are some datastructures which provide the database for the tests.
 * "const" is another and new form of "var" which prevents that program flow changes its reference.
 *
 * Types:
 * GENDER -> M(male) or F(female)
 */
const Passengers = [
    {
        id: 45,
        firstname: "Mehmet",
        lastname: "B.",
        gender: "M",
        birth: new Date(1978, 7, 5),
        origin: "Giresun",
        entryDateInSwiss: new Date(2005, 7, 1),
        children: [],
        addres: {
            street: "Matternhornstr. 123",
            zip: "8604",
            city: "Volketswil",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR"],
        salary: 83000.00,
        friends: [451, 101, 402]
    },
    
    {
        id: 101,
        firstname: "Ferdi",
        lastname: "T.",
        gender: "M",
        birth: new Date(1980, 2, 5),
        origin: "Giresun",
        entryDateInSwiss: new Date(2005, 7, 1),
        children: [
            {name:"Meryem", gender:"F", age: 3}, 
            {name:"Sara", gender:"F", age: 1}
        ],
        addres: {
            street: "Schulstrasse 23",
            zip: "8604",
            city: "Volketswil",
            country: "Swiss"
        },
        languages: ["DE", "TR", "JP"],
        salary: 75000.00,
        friends: [451, 452, 609]
    },
    
    {
        id: 402,
        firstname: "Sevda",
        lastname: "F.",
        gender: "F",
        birth: new Date(1985, 1, 24),
        origin: "Istanbul",
        entryDateInSwiss: new Date(2017, 8, 16),
        children: [
            {name:"Leyla", gender:"F", age: 12}
        ],
        addres: {
            street: "Canikli Caddesi 101",
            zip: "55010",
            city: "Samsun",
            country: "Turkey"
        },
        languages: ["TR"],
        salary: 15000.00,
        friends: []
    },
    
    {
        id: 367,
        firstname: "Halime",
        lastname: "L.",
        gender: "F",
        birth: new Date(1979, 4, 4),
        origin: "Adana",
        entryDateInSwiss: new Date(2005, 2, 14),
        children: [
            {name:"Cemil", gender:"M", age: 6}
        ],
        addres: {
            street: "Sarganserstr. 3",
            zip: "8301",
            city: "Effretikon",
            country: "Swiss"
        },
        languages: ["DE", "TR"],
        salary: 55000.00,
        friends: [205, 123, 611]
    },    
        
    {
        id: 205,
        firstname: "Mesut",
        lastname: "C.",
        gender: "M",
        birth: new Date(2002, 9, 9),
        origin: "Adana",
        entryDateInSwiss: new Date(2017, 8, 11),
        children: [],
        addres: {
            street: "Kozans Caddesi",
            zip: "01005",
            city: "Adana",
            country: "Turkey"
        },
        languages: ["EN", "TR"],
        salary: 45000.00,
        friends: [191, 311, 561, 603, 299]
    },
    
    {
        id: 123,
        firstname: "Mustafa",
        lastname: "E.",
        gender: "M",
        birth: new Date(1981, 3, 15),
        origin: "Antalya",
        entryDateInSwiss: new Date(2004, 8, 1),
        children: [
            {name:"Mehmet Sami", gender:"M", age: 1}, 
            {name:"Nihal", gender:"F", age: 4}
        ],
        addres: {
            street: "Ziegelwiessstr. 45",
            zip: "8798",
            city: "Olten",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR"],
        salary: 85000.00,
        friends: [45, 101, 402, 367, 205]
    },   
    
    {
        id: 191,
        firstname: "Jenifer",
        lastname: "K.",
        gender: "F",
        birth: new Date(1976, 8, 21),
        origin: "Antalya",
        entryDateInSwiss: new Date(2017, 8, 13),
        children: [
            {name:"John", gender:"M", age: 19}, 
            {name:"Kelly", gender:"F", age: 19},
            {name:"Henry", gender:"M", age: 17}
        ],
        addres: {
            street: "Kentucky Road 120",
            zip: "12998",
            city: "Washington",
            country: "US"
        },
        languages: ["EN"],
        salary: 63000.00,
        friends: [452, 609, 610, 611]
    }, 
    
    {
        id: 311,
        firstname: "Ali",
        lastname: "O.",
        gender: "M",
        birth: new Date(1981, 9, 15),
        origin: "Urfa",
        entryDateInSwiss: new Date(2016, 8, 1),
        children: [
            {name:"Vildan", gender:"F", age: 3}
        ],
        addres: {
            street: "Ogretmenstr. 3a",
            zip: "8798",
            city: "Olten",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR", "KU"],
        salary: 80000.00,
        friends: [191, 561, 603, 299, 965]
    },
    
    {
        id: 561,
        firstname: "Cihat",
        lastname: "S.",
        gender: "M",
        birth: new Date(1986, 10, 10),
        origin: "Samsun",
        entryDateInSwiss: new Date(2014, 1, 13),
        children: [],
        addres: {
            street: "Mühlemanweg 10",
            zip: "8301",
            city: "Effretikon",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR", "RU"],
        salary: 82000.00,
        friends: [402, 367, 205, 123, 191]
    },  
    
    {
        id: 603,
        firstname: "Katherina",
        lastname: "P.",
        gender: "F",
        birth: new Date(1989, 5, 21),
        origin: "Moskow",
        entryDateInSwiss: new Date(2017, 8, 15),
        children: [
            {name:"Dymitro", gender:"F", age: 1},
        ],
        addres: {
            street: "Moswkostr. 101",
            zip: "98734",
            city: "Moskow",
            country: "Russia"
        },
        languages: ["EN", "RU"],
        salary: 22000.00,
        friends: [45, 610, 978, 451, 101]
    }, 
    
    {
        id: 299,
        firstname: "Latif",
        lastname: "H.",
        gender: "M",
        birth: new Date(1980, 8, 21),
        origin: "Istanbul",
        entryDateInSwiss: new Date(2013, 3, 9),
        children: [
            {name:"Ayse", gender:"F", age: 10}, 
            {name:"Hakan", gender:"M", age: 7}
        ],
        addres: {
            street: "Lichtstr. 99",
            zip: "8000",
            city: "Zürich",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR", "KU"],
        salary: 102000.00,
        friends: [609, 611, 205, 311]
    },   
    
    {
        id: 965,
        firstname: "Kumar",
        lastname: "P.",
        gender: "M",
        birth: new Date(1974, 3, 21),
        origin: "New Delhi",
        entryDateInSwiss: new Date(1999, 5, 24),
        children: [
            {name:"Adhira", gender:"F", age: 15}, 
            {name:"Abha", gender:"F", age: 13},
            {name:"Alpana", gender:"F", age: 11}, 
            {name:"Alka", gender:"F", age: 9},
            {name:"Kuschi", gender:"F", age: 17}
        ],
        addres: {
            street: "Samstagerstr. 102",
            zip: "8000",
            city: "Zürich",
            country: "Swiss"
        },
        languages: ["EN", "DE", "IN"],
        salary: 64000.00,
        friends: [299, 123, 45, 609]
    },  
    
    {
        id: 978,
        firstname: "Hannes",
        lastname: "K.",
        gender: "M",
        birth: new Date(2004, 8, 13),
        origin: "Schmerikon",
        entryDateInSwiss: new Date(2004, 8, 13),
        children: [],
        addres: {
            street: "Milchburgstr. 65",
            zip: "8000",
            city: "Zürich",
            country: "Swiss"
        },
        languages: ["EN", "DE"],
        salary: 84500.00,
        friends: [965, 101, 205, 451, 299]
    }, 
    
    {
        id: 621,
        firstname: "Zafer",
        lastname: "D.",
        gender: "M",
        birth: new Date(1987, 7, 21),
        origin: "Schmerikon",
        entryDateInSwiss: new Date(1987, 7, 21),
        children: [
            {name:"Zeynep", gender:"F", age: 1}
        ],
        addres: {
            street: "Keegarmenstr. 13",
            zip: "8716",
            city: "Schmerikon",
            country: "Swiss"
        },
        languages: ["EN", "DE", "TR", "JP", "FR"],
        salary: 95000.00,
        friends: [609, 610, 611, 402]
    },     
    
    {
        id: 363,
        firstname: "Michel",
        lastname: "R.",
        gender: "F",
        birth: new Date(2005, 7, 1),
        origin: "Schmerikon",
        entryDateInSwiss: new Date(2005, 7, 1),
        children: [],
        addres: {
            street: "Obergasse 5",
            zip: "8716",
            city: "Schmerikon",
            country: "Swiss"
        },
        languages: ["DE"],
        salary: 84500.00,
        friends: [191, 621, 311, 367]
    },  
    
    {
        id: 451,
        firstname: "Sandy",
        lastname: "O.",
        gender: "F",
        birth: new Date(1980, 9, 12),
        origin: "Olten",
        entryDateInSwiss: new Date(1980, 9, 12),
        children: [
            {name:"Noah", gender:"M", age: 12},
            {name:"Jürg", gender:"M", age: 9},
            {name:"Selin", gender:"F", age: 3}
        ],
        addres: {
            street: "Sandstr. 31",
            zip: "8798",
            city: "Olten",
            country: "Swiss"
        },
        languages: ["EN", "DE", "FR"],
        salary: 61000.00,
        friends: [45, 452, 45, 367, 611]
    },
    
    {
        id: 400,
        firstname: "Giovanni",
        lastname: "O.",
        gender: "M",
        birth: new Date(2002, 9, 12),
        origin: "Olten",
        entryDateInSwiss: new Date(2002, 9, 12),
        children: [],
        addres: {
            street: "Pokemonstr. 51",
            zip: "8798",
            city: "Olten",
            country: "Swiss"
        },
        languages: ["IT"],
        salary: 1000.00,
        friends: []
    },
    
    {
        id: 452,
        firstname: "Roger",
        lastname: "C.",
        gender: "M",
        birth: new Date(1966, 5, 10),
        origin: "Dübendorf",
        entryDateInSwiss: new Date(1966, 5, 10),
        children: [],
        addres: {
            street: "Kaninchenstr. 10",
            zip: "8608",
            city: "Dübendorf",
            country: "Swiss"
        },
        languages: ["EN", "DE", "IT"],
        salary: 92000.00,
        friends: [101, 451, 363, 965, 978]
    },  
    
    {
        id: 609,
        firstname: "Katherina",
        lastname: "S.",
        gender: "F",
        birth: new Date(1983, 4, 21),
        origin: "Tomsk",
        entryDateInSwiss: new Date(2001, 4, 21),
        children: [
            {name:"Irina", gender:"F", age: 5},
            {name:"Olexander", gender:"M", age: 3}
        ],
        addres: {
            street: "Trinnistr. 10",
            zip: "8608",
            city: "Dübendorf",
            country: "Swiss"
        },
        languages: ["DE", "RU"],
        salary: 52000.00,
        friends: [561, 191, 978, 611, 101]
    }, 
    
    {
        id: 610,
        firstname: "Mara",
        lastname: "Z.",
        gender: "F",
        birth: new Date(1978, 3, 11),
        origin: "Dübendorf",
        entryDateInSwiss: new Date(1978, 3, 11),
        children: [
            {name:"Selina", gender:"F", age: 9}, 
            {name:"Melina", gender:"F", age: 9}, 
            {name:"Michael", gender:"M", age: 1}
        ],
        addres: {
            street: "Kontostr. 99",
            zip: "8608",
            city: "Dübendorf",
            country: "Swiss"
        },
        languages: ["EN", "DE"],
        salary: 51000.00,
        friends: [45, 609, 363, 299]
    },   
    
    {
        id: 611,
        firstname: "Patrick",
        lastname: "D.",
        gender: "M",
        birth: new Date(1976, 3, 21),
        origin: "Schmerikon",
        entryDateInSwiss: new Date(1976, 3, 21),
        children: [
            {name:"Marc", gender:"M", age: 15}, 
            {name:"Roger", gender:"M", age: 13},
            {name:"Matilda", gender:"F", age: 11}, 
            {name:"Robin", gender:"M", age: 9}
        ],
        addres: {
            street: "Chimligass 22",
            zip: "8716",
            city: "Schmerikon",
            country: "Swiss"
        },
        languages: ["EN", "DE", "FR", "IT"],
        salary: 104000.00,
        friends: [191, 311, 561, 603, 299, 965, 978, 621]
    },  
];














































































