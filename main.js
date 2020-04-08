//  FORMS THE DATABASE THAT STORES ALL INFO FOR THE APPLICATION TO FUNCTION. FROM RESTAURANTS DOWN TO THEIR MENUS AND PRICING.
//  IT FEELS LIKE THIS SHOULD BE STORED ELSEWHERE, BUT I DON'T KNOW HOW TO DO THAT AND CALL IT INTO THIS FILE. SOMETHING TO LEARN LATER.

cl = console.log

let giomenu = [
  giomenu_early_mornin_fixins = [ 
  {name: 'Sharon Sunrise', description: 'Sharon Sunrise', price: 6.95},
  {name: 'JR Jumbo', description: 'JR Jumbo', price: 8.95},
  {name: 'Jackie Stack', description: 'Jackie Stack', price: 5.95},
  {name: 'French Toast', description: 'French Toast', price: 5.95},
  {name: 'Harold Special', description: 'Harold Special', price: 2.95},
  {name: 'Cheese Omelet', description: 'Cheese Omelet', price: 3.95},
  {name: 'Supreme Omelet', description: 'Supreme Omelet', price: 7.95},
  {name: 'Biscuit & Sausage Gravy', description: 'Biscuit & Sausage Gravy', price: 2.95}
  ],

  giomenu_shared_plates = [
      {name: 'Onion Petals', description: '', price: 3.95},
      {name: 'Mozz Stix',description: '', price: 4.95},
      {name: 'Jalepeno Stix', description: '', price: 4.95},
      {name: 'Breaded Mushrooms', description: '', price: 4.95},
      {name: 'Fried Green Tomatoes', description: '', price: 5.95},
      {name: 'Fried Pickle Chips', description: '', price: 5.95},
      {name: 'Battered Zuchini Strips', description: '', price: 6.95},
      {name: 'Breaded or Naked Chicken Wings', description: '', price: 3.95},
      {name: 'Chicken Wings', description: 'Chicken Wings Tossed in buffalo, honey hot, bbq, or general tso', price: 4.95},
      {name: 'Chicken Tenders', description: '', price: 5.95},
      {name: 'Chicken Parm', description: '', price: 7.95},
      {name: 'Pizza Burger', description: '', price: 4.95},
      {name: 'Bacon OR Chili Cheese Fries (small)', description: '', price: 6.95},
      {name: 'Bacon OR Chili Cheese Fries (large)', description: '', price: 8.95}
  ]
];

const eats = [
    {
    name: 'Giovannis',
    city: 'Weston',
    category: 'Home-cooking'
  },
  
  {
    name: 'Ginos',
    city: 'Weston',
    category: 'Italian Cousine'
  },
  {
    name: 'Dominos',
    city: 'Weston',
    category: 'Pizza, Pasta and Sandwiches'
  },
  {
    name: 'T&L Hotdogs',
    city: 'Weston',
    category: 'Hot dogs'
  },
  {
    name: 'Flying Dogs',
    city: 'Weston',
    category: 'Hot dogs'
  },
  {
    name: 'Patron',
    city: 'Weston',
    category: "Mexican-American Cousine"
  },
  {
    name: 'Hickory House',
    city: 'Weston',
    category: "The best BBQ"
  },
  {
    name: 'Main Street Cafe',
    city: 'Jane Lew',
    category: 'Home-cooking'
  },
  {
    name: 'Robin\'s Nest',
    city: 'Jane Lew',
    category: '' 
  },
  {
    name: 'The Service Station',
    city: 'Jane Lew',
    category: ''
  },
  {
    name: 'Lightburn\'s',
    city: 'Jane Lew',
    category: '',
  },
  {
    name: 'Flying Dogs',
    city: 'Jane Lew',
    category: '',
  },
]

// SET UP VARIABLES TO RECOGNIZE 
// RESTAURANTS AS THEIR NAMES
// FROM const eats above ^^^
    let giovannis = eats[0]
    let ginos = eats[1]
    let dominos = eats[2]
    let tlhotdogs = eats[3]
    let flyingdogs = eats[4]
    let patron = eats[5]
    let hickoryhouse = eats[6]
    let mainstcafe = eats[7]
    let robinsnest = eats[8]
    let servicestation = eats[9]
    let lightburns = eats[10]
    let flyingdogsjl = eats[11]

const WestonEats = eats.filter((eats) => {
  return eats.city == 'Weston'
})

const JaneLewEats = eats.filter((eats) => {
  return eats.city == 'Jane Lew'
})

const JLEatsNames = JaneLewEats.map((eats) => {
  return eats.name
})

const WestonEatsNames = WestonEats.map((eats) => {
  return eats.name
})
const eats2 = eats.filter((eats) => {
  return eats.m
})
const keys = Object.values(JLEatsNames)
const giovannismenu = Object.keys(giomenu)
const gioearlyfixins = Object.values(giovannis)

function generate_homepage() {
//  CODING BELOW BEGINS CREATING 
//      THE PAGE LAYOUT!!!

    document.open();
    document.write("<h1>ConnectLC Home</h1>");
    document.write(
        "<strong>Weston has the following restaurant options.</strong>"
      );
    document.write("<br /> Please choose the one you'd like to see a menu for");
    document.write("<br />");
    document.write("<select id=\"WestonSelect\" size=\"7\" onchange=\"WestonSelectMenu();\"></select>");
    function listallWestonrestaurants() {
      cl('listallWestonRestaurants Triggered! You should have a nice selectable list!');
      for (const key of WestonEats) {
            let restName = key.name
          var select = document.getElementById("WestonSelect"); 
      var select_option = document.createElement("option"); 
          select_option.text = restName;
          select.add(select_option);
          };
      };

    listallWestonrestaurants();

    document.write("<br /><br />");

    document.write(
    "<strong>Jane Lew has the following restaurant options.</strong>"
    );
    document.write("<br /> Please choose the one you'd like to see a menu for");
    document.write("<br />");
    document.write("<select id=\"JLSelect\" size=\"5\" onchange=\"JLSelectMenu();\"></select>");
    document.write("<select id=\"JLMenuSelect\" size=\"5\"></select>");
    
    function listallJLrestaurants() {
      cl('listallJLRestaurants Triggered! You should have a nice selectable list!');
      for (const key of JaneLewEats) {
        let restName = key.name 
        var select = document.getElementById("JLSelect"); 
    var select_option = document.createElement("option"); 
        select_option.text = restName;
        select.add(select_option); 
      }
    }

    listallJLrestaurants()

// VARIABLE DECLARATIONS FOLLOW:
var select = document.getElementById("JLSelect");  
var select_option = document.createElement("option"); 
}

generate_homepage();

  function WestonSelectMenu() {
    var selectBox = document.getElementById("WestonSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    alert(selectedValue);
  }

  function JLSelectMenu() {
    var selectBox = document.getElementById("JLSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    alert(selectedValue);
  }
  
  function MenuCreation() {
    cl('MenuCreation Triggered!'); 
    for (let prop in giovannismenu) {
      cl(prop)      
    }
   cl('MenuCreation() Ended!')
  }

//document.write(giovannismenu)

MenuCreation();

cl(typeof giomenu);
cl(giomenu_early_mornin_fixins)
cl(giomenu_shared_plates)