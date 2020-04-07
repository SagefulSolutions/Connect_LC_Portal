//  FORMS THE DATABASE THAT STORES ALL INFO FOR THE APPLICATION TO FUNCTION. FROM RESTAURANTS DOWN TO THEIR MENUS AND PRICING.
//  IT FEELS LIKE THIS SHOULD BE STORED ELSEWHERE, BUT I DON'T KNOW HOW TO DO THAT AND CALL IT INTO THIS FILE. SOMETHING TO LEARN LATER.
const eats = [
    {
    name: 'Giovannis',
    city: 'Weston',
    category: 'Home-cooking',
    menu: {
      early_mornin_fixins: 
        {
            'Sharon Sunrise': {description: '', Price: 6.95},
            'JR Jumbo': {description: '', Price: 8.95},
            'Jackie Stack': {description: '', Price: 5.95},
            'French Toast': {description: '', Price: 5.95},
            'Harold Special': {description: '', Price: 2.95},
            'Cheese Omelet': {description: '', Price: 3.95},
            'Supreme Omelet': {description: '', Price: 7.95},
            'Biscuit & Sausage Gravy': {description: '', Price: 2.95}
        },
      shared_plates:
        {
            'Onion Petals': {description: '', Price: 3.95},
            'Mozz Stix': {description: '', Price: 4.95},
            'Jalepeno Stix': {description: '', Price: 4.95},
            'Breaded Mushrooms': {description: '', Price: 4.95},
            'Fried Green Tomatoes': {description: '', Price: 5.95},
            'Fried Pickle Chips': {description: '', Price: 5.95},
            'Battered Zuchini Strips': {description: '', Price: 6.95},
            'Breaded or Naked Chicken Wings': {description: '', Price: 3.95},
            'Chicken Wings Tossed in buffalo, honey hot, bbq, or general tso': {description: '', Price: 4.95},
            'Chicken Tenders': {description: '', Price: 5.95},
            'Chicken Parm': {description: '', Price: 7.95},
            'Pizza Burger': {description: '', Price: 4.95},
            'Bacon OR Chili Cheese Fries (small)': {description: '', Price: 6.95},
            'Bacon OR Chili Cheese Fries (large)': {description: '', Price: 8.95}
        },
      farm_to_table_burgers:
        {
            'Hamburger': {description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 4.50},
            'Double Hamburger': {description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 7.50},
            'Cheeseburger': {description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 4.95},
            'Double Cheeseburger': {description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 7.95},
            'Bacon Cheeseburger': {description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 5.95},
            'Double Bacon Cheeseburger': {description: 'Fresh angus beef, topped with ketchup, mustard, onion, pickle, lettuce, tomato & mayo', price: 8.95},
            'Mountaineer Hero': {description: 'Mozzarella cheese, grilled onions, mushrooms & brown gravy', price: 6.95},
            'Wimpy': {description: 'Cheddar jack cheese, bacon, grilled onions, mushrooms & garlic aioli', price: 6.95}
        },
      sides:
        { 
          'French Fries': {description: '', Price: 2.95},
          'Cottage Cheese': {description: '', Price: 2.95},
          'Slaw': {description: '', Price: 2.95},
          'Peaches': {description: '', Price: 2.95},
          'Pineapple': {description: '', Price: 2.95},
          'Veggies': {description: '', Price: 2.95},
          'Onion Rings': {description: '', Price: 3.95},
          'Sweet Potato Fries': {description: '', Price: 3.95},
          'Sidewinder Fries': {description: '', Price: 3.95},
          'Tossed Salad': {description: '', Price: 3.95},
          'Mac n Cheese': {description: '', Price: 4.95},
        },
      salads:
        {
          'Antipasta': {description: 'olives, banana peppers, American & mozzarella cheese, tomatoes, green peppers, onions, ham, pepperoni, egg & topped with homemade croutons', Price: 9.95},
          'Salmon': {description: '8oz atlantic salmon, tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', Price: 16.95},
          'Grilled Chicken': {description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', Price: 9.95},
          'Crispy Chicken': {description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', Price: 9.95},
          'Shaved Ribeye': {description: 'tomatoes, onions, green peppers & topped with homemade croutons, mozzarella cheese & french fries', Price: 9.95}
        },
      dinn_dinn:
        {

        } 
    }
  },
  {
    name: 'Ginos',
    category: 'Italian Cousine',
    city: 'Weston'
  },
  {
    name: 'Dominos',
    category: 'Pizza, Pasta and Sandwiches',
    city: 'Weston'
  },
  {
    name: 'T&L Hotdogs',
    category: 'Hot dogs',
    city: 'Weston'
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
    city: 'Jane Lew'
  },
  {
    name: 'The Service Station',
    city: 'Jane Lew'
  },
  {
    name: 'Lightburn\'s',
    city: 'Jane Lew'
  },
  {
    name: 'Flying Dogs',
    city: 'Jane Lew'
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
  return eats
})
const keys = Object.values(JLEatsNames)

function printallrestaurants() {
    document.open();
    console.log("clear should have happened");
    for (const key of eats) {
      document.write("<br />")
      document.write(key.name)
    }
  }

function printallJLrestaurants() {
  for (const key of JaneLewEats) {
    let URL = JSON.stringify(key.name).replace(/['"]+/g, '')
    document.write("<br />")
    document.write('<a href="' + URL + '.html">' + key.name + '</a>')
    
  }

}

function printallWestonrestaurants() {
//  THIS FUNCTION CAN PRINT A LIST OF 
//  ALL LC RESTAURANTS, IF CALLED. 
//  (NOT IN USE CURRENTLY)

for (const key of WestonEats) {

    let URL = JSON.stringify(key.name).replace(/[&'"]+/g, '') //REMOVES & , ', and " from any entries for URL-generation compatibility 

    document.write("<br />")

    document.write('<a href="' + URL + '.html">' + key.name + '</a>')
    }
}


function generate_homepage() {
//  CODING BELOW BEGINS CREATING 
//      THE PAGE LAYOUT!!!

    document.open();
document.write("<h1>ConnectLC Home</h1>")

document.write(
    "<strong>Weston has the following restaurant options.</strong>"
    )
document.write("<br />")

document.write("<select id=\"mySelect\" size=\"8\"><option>Apple</option><option>Pear</option><option>Banana</option><option>Orange</option></select>")

printallWestonrestaurants()


document.write("<br /><br />")
document.write(
    "<strong>Jane Lew has the following restaurant options.</strong>"
    )
document.write("<br /> Please choose the one you'd like to see a menu for")
document.write("<br />")

printallJLrestaurants()

function fillSelectElement() {
    var x = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = "Kiwi";
    x.add(option);
    console.log('fillSelectElement Triggered!');
  }


fillSelectElement();

}

generate_homepage();