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
  farm_to_table_burgers = [
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

  sides = [
    {name: 'French Fries', description: '', Price: 2.95},
    {name: 'Cottage Cheese', description: '', Price: 2.95},
    {name: 'Slaw', description: '', Price: 2.95},
    {name: 'Peaches', description: '', Price: 2.95},
    {name: 'Pineapple', description: '', Price: 2.95},
    {name: 'Veggies', description: '', Price: 2.95},
    {name: 'Onion Rings', description: '', Price: 3.95},
    {name: 'Sweet Potato Fries', description: '', Price: 3.95},
    {name: 'Sidewinder Fries', description: '', Price: 3.95},
    {name: 'Tossed Salad', description: '', Price: 3.95},
    {name: 'Mac n Cheese', description: '', Price: 4.95},
  ],

  salads = [
    {name: 'Antipasta', description: 'olives, banana peppers, American & mozzarella cheese, tomatoes, green peppers, onions, ham, pepperoni, egg & topped with homemade croutons', Price: 9.95},
    {name: 'Salmon', description: '8oz atlantic salmon, tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', Price: 16.95},
    {name: 'Grilled Chicken', description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', Price: 9.95},
    {name: 'Crispy Chicken', description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', Price: 9.95},
    {name: 'Shaved Ribeye', description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', Price: 9.95}
],

  dinn_dinn = [
  
    {name: 'Spaghetti, side salad & garlic toast', description: 'Spaghetti with a side salad & garlic toast and two sides.', Price: 10.95},
    {name: 'Country Fried Steak', description: 'Country fried steak and two sides', Price: 12.95},
    {name: 'Hamburger Steak', description: 'Hamburger steak smothered with grilled onions, mushrooms and brown gravy and two sides', Price:  12.95},
    {name: 'Liver and Onions', description: 'Liver and onions and two sides', Price: 12.95},
    {name: 'Shrimp', description: 'Shrimp - breaded or grilled w/fries & slaw and two sides', Price: 12.95},
    {name: 'Chicken Tenders', description: 'Chicken Tenders and two sides', Price: 12.95},
],

  farm_and_sea = [
  
{name: '12 oz Center Cut Ribeye', description: '12 oz center cut ribeye and two sides', Price: 22.95},
{name: '18 oz Center Cut NY Strip', description: '18 oz center cut NY strip and two sides', Price: 19.95},
{name: '8 oz Atlantic Salmon', description: 'Atlantic salmon cajun dry rub or sesame ginger glaze and two sides', Price: 18.95},
]

/* sammiches:
  {
{name: 'Giovanni Special', description: '', Price: 12.95},
{name: 'Grilled Chicken', description: '', Price: 12.95},
{name: 'Fried Fish', description: '', Price: 12.95},
{name: 'Chicken Salad', description: '', Price: 12.95},
{name: 'BLT', description: '', Price: 12.95},
{name: 'Ham & Cheese', description: '', Price: 12.95},
{name: 'Ribeye Steak', description: '', Price: 12.95},
{name: 'Grilled Cheese', description: '', Price: 12.95},
{name: 'Club', description: '', Price: 12.95},
{name: 'Hot Roast Beef & Country Fried Steak', description: '', Price: 12.95},
{name: 'Hot Dog', description: '', Price: 2.25},
{name: 'Slaw Dog', description: '', Price: 2.95},
  },
pizza_and_calzones:
  {
{name: '5 Toppings Full Zone', description: '', Price: 10.95},
{name: '1 Topping Full Zone', description: '', Price: 7.95},
{name: '5 Toppings Half Zone', description: '', Price: 7.95},
{name: '1 Topping Half Zone', description: '', Price: 5.95},
{name: '5 Toppings 12x16in Rectangle Pizza', description: '', Price: 19.95},
{name: '1 Topping 12x16in Rectangle Pizza', description: '', Price: 13.95},
{name: '5 Toppings 12in Round Pizza', description: '', Price: 13.95},
{name: '1 Topping 12in Round Pizza', description: '', Price: 9.95},
{name: '5 Toppings 4-slice Half Pizza', description: '', Price: 7.95},
{name: '1 Topping 4-slice Half Pizza', description: '', Price: 5.95},
{name: '5 Toppings Cauliflower GF/Low Carb', description: '', Price: 13.95},
{name: '1 Topping Cauliflower GF/Low Carb', description: '', Price: 9.95}
  }  */
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
    name: 'Thyme Bistro',
    city: 'Weston',
    category: 'Fine Dining & Cousine all the thyme'
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
    cl('')
    cl('------------------------------------------------------') 
    const EarlyMorninFixins = giomenu_early_mornin_fixins.map((giomenu_early_mornin_fixins) => {
      return giomenu_early_mornin_fixins.name })
    cl(giomenu_early_mornin_fixins[0].title)
    for (let prop in giomenu_early_mornin_fixins) {
      cl(EarlyMorninFixins[prop])
      //cl('---------------------------------------------------------------------------------')
      //cl(giomenu_early_mornin_fixins[prop])      
    }
   cl('------------------------------------------------------')
   cl('MenuCreation() Ended!')
  }

//document.write(giovannismenu)

MenuCreation();

//cl(typeof giomenu);
//cl(giomenu_early_mornin_fixins)
//cl(giomenu_shared_plates)