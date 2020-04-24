//  FORMS THE DATABASE THAT STORES ALL INFO FOR THE APPLICATION TO FUNCTION. FROM RESTAURANTS DOWN TO THEIR MENUS AND PRICING.
//  IT FEELS LIKE THIS SHOULD BE STORED ELSEWHERE, BUT I DON'T KNOW HOW TO DO THAT AND CALL IT INTO THIS FILE. SOMETHING TO LEARN LATER.

cl = console.log

let giomenu = [
  giomenu_early_mornin_fixins = [ 
      {title: 'Early Mornin Fixins'},
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
      {title: 'Shared Plates'},
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
  ],
  giomenu_farm_to_table_burgers = [
      {title: 'Farm to Table Burgers'},
      {name: 'Hamburger', description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 4.50},
      {name: 'Double Hamburger', description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 7.50},
      {name: 'Cheeseburger', description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 4.95},
      {name: 'Double Cheeseburger', description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 7.95},
      {name: 'Bacon Cheeseburger', description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 5.95},
      {name: 'Double Bacon Cheeseburger', description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 8.95},
      {name: 'Mountaineer Hero', description: 'Mozzarella cheese, grilled onions, mushrooms & brown gravy', price: 6.95},
      {name: 'Wimpy', description: 'Cheddar jack cheese, bacon, grilled onions, mushrooms & garlic aioli', price: 6.95}
],

  giomenu_sides = [
    {name: 'French Fries', description: '', price: 2.95},
    {name: 'Cottage Cheese', description: '', price: 2.95},
    {name: 'Slaw', description: '', price: 2.95},
    {name: 'Peaches', description: '', price: 2.95},
    {name: 'Pineapple', description: '', price: 2.95},
    {name: 'Veggies', description: '', price: 2.95},
    {name: 'Onion Rings', description: '', price: 3.95},
    {name: 'Sweet Potato Fries', description: '', price: 3.95},
    {name: 'Sidewinder Fries', description: '', price: 3.95},
    {name: 'Tossed Salad', description: '', price: 3.95},
    {name: 'Mac n Cheese', description: '', price: 4.95},
  ],

  giomenu_salads = [
    {name: 'Antipasta', description: 'olives, banana peppers, American & mozzarella cheese, tomatoes, green peppers, onions, ham, pepperoni, egg & topped with homemade croutons', price: 9.95},
    {name: 'Salmon', description: '8oz atlantic salmon, tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', price: 16.95},
    {name: 'Grilled Chicken', description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', price: 9.95},
    {name: 'Crispy Chicken', description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', price: 9.95},
    {name: 'Shaved Ribeye', description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', price: 9.95}
],

  giomenu_dinn_dinn = [  
    {name: 'Spaghetti, side salad & garlic toast', description: 'Spaghetti with a side salad & garlic toast and two sides.', price: 10.95},
    {name: 'Country Fried Steak', description: 'Country fried steak and two sides', price: 12.95},
    {name: 'Hamburger Steak', description: 'Hamburger steak smothered with grilled onions, mushrooms and brown gravy and two sides', price:  12.95},
    {name: 'Liver and Onions', description: 'Liver and onions and two sides', price: 12.95},
    {name: 'Shrimp', description: 'Shrimp - breaded or grilled w/fries & slaw and two sides', price: 12.95},
    {name: 'Chicken Tenders', description: 'Chicken Tenders and two sides', price: 12.95},
],

  giomenu_farm_and_sea = [  
{name: '12 oz Center Cut Ribeye', description: '12 oz center cut ribeye and two sides', price: 22.95},
{name: '18 oz Center Cut NY Strip', description: '18 oz center cut NY strip and two sides', price: 19.95},
{name: '8 oz Atlantic Salmon', description: 'Atlantic salmon cajun dry rub or sesame ginger glaze and two sides', price: 18.95}
],
  
  giomenu_sammiches = [
{name: 'Giovanni Special', description: '', price: 12.95},
{name: 'Grilled Chicken', description: '', price: 12.95},
{name: 'Fried Fish', description: '', price: 12.95},
{name: 'Chicken Salad', description: '', price: 12.95},
{name: 'BLT', description: '', price: 12.95},
{name: 'Ham & Cheese', description: '', price: 12.95},
{name: 'Ribeye Steak', description: '', price: 12.95},
{name: 'Grilled Cheese', description: '', price: 12.95},
{name: 'Club', description: '', price: 12.95},
{name: 'Hot Roast Beef & Country Fried Steak', description: '', price: 12.95},
{name: 'Hot Dog', description: '', price: 2.25},
{name: 'Slaw Dog', description: '', price: 2.95},
],

  giomenu_pizza_and_calzones = [
{name: '5 Toppings Full Zone', description: '', price: 10.95},
{name: '1 Topping Full Zone', description: '', price: 7.95},
{name: '5 Toppings Half Zone', description: '', price: 7.95},
{name: '1 Topping Half Zone', description: '', price: 5.95},
{name: '5 Toppings 12x16in Rectangle Pizza', description: '', price: 19.95},
{name: '1 Topping 12x16in Rectangle Pizza', description: '', price: 13.95},
{name: '5 Toppings 12in Round Pizza', description: '', price: 13.95},
{name: '1 Topping 12in Round Pizza', description: '', price: 9.95},
{name: '5 Toppings 4-slice Half Pizza', description: '', price: 7.95},
{name: '1 Topping 4-slice Half Pizza', description: '', price: 5.95},
{name: '5 Toppings Cauliflower GF/Low Carb', description: '', price: 13.95},
{name: '1 Topping Cauliflower GF/Low Carb', description: '', price: 9.95}
]
];

let eats = [
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
    name: 'Thyme Bistro',
    city: 'Weston',
    category: 'Fine Dining & Cousine all the thyme'
  },
  {
    name: 'West Fork Eatery',
    city: 'Weston',
    category: 'Home Cooking'
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
    name: 'Don Patron',
    city: 'Weston',
    category: "Mexican-American Cousine"
  },
  {
    name: 'Kathy\'s Ice Cream Barn',
    city: 'Weston',
    category: ""
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

// SETTING UP VARIABLES TO RECOGNIZE RESTAURANTS AS THEIR NAMES FROM "eats" above ^^^
function restaurantVariables() {
  let giovannis = eats[0];
  let ginos = eats[1];
  let thymebistro = eats[2];
  let westforkeatery = eats[3];
  let tlhotdogs = eats[4];
  let flyingdogs = eats[5];
  let donpatron = eats[6];
  let icecreambarn = eats[7];
  let mainstcafe = eats[8];
  let robinsnest = eats[9];
  let servicestation = eats[10];
  let lightburns = eats[11];
  let flyingdogsjl = eats[12];
}
restaurantVariables();

// SETTING UP CONSTANTS TO BE USED IN APPLICATION BELOW    
const { WestonEats, JaneLewEats } = Constants();
function Constants() {
  const WestonEats = eats.filter((eats) => {
    return eats.city == 'Weston';
  });
  const JaneLewEats = eats.filter((eats) => {
    return eats.city == 'Jane Lew';
  });
  const JLEatsNames = JaneLewEats.map((eats) => {
    return eats.name;
  });
  const WestonEatsNames = WestonEats.map((eats) => {
    return eats.name;
  });
  const eats2 = eats.filter((eats) => {
    return eats.m;
  });
  const keys = Object.values(JLEatsNames);
  return { WestonEats, JaneLewEats };
}

//THIS FUNCTION CREATES THE HEADER "CONNECT LC ONLINE ORDERING SYSTEM COPYRIGHT APRIL 2020 JUSTIN WAUGH"
function gen_HomeHeader() {
  document.write("<div id=\"HOMEheader\">")
  document.write("<center><h1>ConnectLC </h1>");
  document.write("<h2>ONLINE ORDERING SYSTEM</h2>");
  document.write("</div>");
}

function gen_Footer() {
  document.write("<center><h5>&copy;April 2020 Justin Waugh</h5></center>");
};

// THIS FUNCTION WILL CHOOSE ONLY WESTON RESTAURANTS FROM THE CONSTANT 'eats' ON LINE #115
function listallWestonrestaurants() {
  document.write("<strong>Weston has the following restaurant options.</strong>");
  document.write("<br /> Please choose the one you'd like to see a menu for");
  document.write("<br />");
  document.write("<select id=\"WestonSelect\" size=\"8\" onchange=\"WestonSelectMenu();\"></select>");
  document.write("==>")
  document.write("<select id=\"WestonMenuSelect\" size=\"8\" onchange=\"CALL_A_FUNCTION_HERE();\"></select>");
  cl('listallWestonRestaurants Triggered! You should have a nice selectable list!');
  for (key of WestonEats) {
    let restName = key.name
    let select = document.getElementById("WestonSelect"); 
    let select_option = document.createElement("option"); 
    select_option.text = restName;
    select.add(select_option);
  };
};

// THIS FUNCTION WILL CHOOSE ONLY JANE LEW RESTAURANTS FROM THE CONSTANT 'eats' ON LINE #115
function listallJLrestaurants() {
  cl('listallJLRestaurants Triggered! You should have a nice selectable list!');
  document.write("<br /><br />");
  document.write("<strong>Jane Lew has the following restaurant options.</strong>");
  document.write("<br /> Please choose the one you'd like to see a menu for");
  document.write("<br />");
  document.write("<select id=\"JLSelect\" size=\"5\" onchange=\"JLSelectMenu();\"></select>");
  document.write("==>");
  document.write("<select id=\"JLMenuSelect\" size=\"5\"></select>");
    for (const key of JaneLewEats) {
      let restName = key.name 
      var select = document.getElementById("JLSelect"); 
      var select_option = document.createElement("option"); 
      select_option.text = restName;
      select.add(select_option);
   
    }
}

/////   THIS FUNCTION CREATES THE HTML FOR THE HOMEPAGE LAYOUT!!!   /////
function generate_homepage() {

    document.open();
    gen_HomeHeader();
    document.write("<div id=\"HOMEeats\"><center>");
    document.write("<HR>");
    document.write("<h2>Eats</h2>");
    listallWestonrestaurants();
    listallJLrestaurants();
    document.write("</center>")    
    document.write("</center></div>")
    gen_Footer();
}

//////////////////////////////      ANYTHING HAPPENING BELOW HERE IS AFTER THE HOMEPAGE HAS BEEN GENERATED ABOVE    ////////////////////////

//  THIS FUNCTION WILL CREATE A PAGE THAT SHOWS A GIOVANNIS MENU AND CONTACT INFORMATION
function gen_GioPage() {
 
  function giohead() {
    document.write("<div id=\"DIVGiovannis\">")
    document.write("<center><h2>Welcome to Giovannis Online!</h2></center>");
    


  }
  gen_HomeHeader();
  giohead();
  document.write("</div>")
  document.write("<h3><center><strong>DELIVERY / TAKEOUT MENU</strong></center></h3>")
  document.write("<hr>")
  MenuCreation();
  gen_Footer();
  
}


generate_homepage();

//  THIS FUNCTION WILL RETURN AN ALERT AND CONSOLE LOG OF THE ITEM CHOSEN FROM THE WESTON SELECT LIST
function WestonSelectMenu() {
   var selectBox = document.getElementById("WestonSelect");
   var selectedValue = selectBox.options[selectBox.selectedIndex].value;
   //alert(selectedValue);
   selectedValueURLified = selectedValue.replace(/['&"]+/g, '')
   cl(selectedValueURLified,'_self');
   var Weston2 = document.getElementById("WestonMenuSelect")
    if (selectedValueURLified == "Giovannis") {
       // document.close();
        gen_GioPage();
    }  
}

function JLSelectMenu() {
  var selectBox = document.getElementById("JLSelect");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  alert(selectedValue);
}

function JLMenuCreation() {
  cl('MenuCreation Triggered!'); 
  cl('')
  cl('------------------------------------------------------') 
  const EarlyMorninFixins = giomenu_early_mornin_fixins.map((giomenu_early_mornin_fixins) => {
    return giomenu_early_mornin_fixins.name });
    //document.write(giomenu_early_mornin_fixins[0].title);
  
    cl(giomenu_early_mornin_fixins[0].title);
  
    for (let prop in giomenu_early_mornin_fixins) {
    //cl(EarlyMorninFixins[prop])
    //cl('---------------------------------------------------------------------------------')
    //cl(giomenu_early_mornin_fixins[prop])      
  }
 //cl('------------------------------------------------------')
 cl('MenuCreation() Ended!')
}

//gen_GioPage();

function MenuCreation() {
  const EarlyMorninFixins = giomenu_early_mornin_fixins.map((giomenu_early_mornin_fixins) => {
    return giomenu_early_mornin_fixins.name
  })   
    document.write("<u><h3>"+giomenu_early_mornin_fixins[0].title+"</h3></u>")  
  for (let item in giomenu_early_mornin_fixins) {
    if (EarlyMorninFixins[item] != undefined) {
      prices = giomenu_early_mornin_fixins[item].price
      document.write(EarlyMorninFixins[item]+" ... "+prices)
      document.write("<br />")
    }
  }
  
  const SharedPlates = giomenu_shared_plates.map((giomenu_shared_plates) => {
    return giomenu_shared_plates.name
  })
  document.write("<u><h3>"+giomenu_shared_plates[0].title+"</h3></u>")
  for (let item in giomenu_early_mornin_fixins) {
    if (SharedPlates[item] != undefined) {
      prices = giomenu_shared_plates[item].price
      document.write(SharedPlates[item]+" ... "+prices)
      document.write("<br />")
    }
  }

  const FarmToTableBurges = giomenu_farm_to_table_burgers.map((giomenu_farm_to_table_burgers) => {
    return giomenu_farm_to_table_burgers.name
  })
  document.write("<u><h3>"+giomenu_farm_to_table_burgers[0].title+"</h3></u>")
  for (let item in giomenu_early_mornin_fixins) {
    if (SharedPlates[item] != undefined) {
      prices = giomenu_farm_to_table_burgers[item].price
      document.write(FarmToTableBurges[item]+" ... "+prices)
      document.write("<br />")
    }
  }  


}