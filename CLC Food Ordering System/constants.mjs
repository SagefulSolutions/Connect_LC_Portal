export const MY_CONST = 5;



const eats = [
    {
    name: 'Giovannis',
    city: 'Weston',
    category: 'Home-cooking',
    menu: {
      EarlyMorninFixins: 
        {
            'Sharon Sunrise': {Description: '', Price: 6.95},
            'JR Jumbo': {Description: '', Price: 8.95},
            'Jackie Stack': {Description: '', Price: 5.95},
            'French Toast': {Description: '', Price: 5.95},
            'Harold Special': {Description: '', Price: 2.95},
            'Cheese Omelet': {Description: '', Price: 3.95},
            'Supreme Omelet': {Description: '', Price: 7.95},
            'Biscuit & Sausage Gravy': {Description: '', Price: 2.95}
        },
      SharedPlates:
        {
            'Onion Petals': {Description: '', Price: 3.95},
            'Mozz Stix': {Description: '', Price: 4.95},
            'Jalepeno Stix': {Description: '', Price: 4.95},
            'Breaded Mushrooms': {Description: '', Price: 4.95},
            'Fried Green Tomatoes': {Description: '', Price: 5.95},
            'Fried Pickle Chips': {Description: '', Price: 5.95},
            'Battered Zuchini Strips': {Description: '', Price: 6.95},
            'Breaded or Naked Chicken Wings': {Description: '', Price: 3.95},
            'Chicken Wings Tossed in buffalo, honey hot, bbq, or general tso': {Description: '', Price: 4.95},
            'Chicken Tenders': {Description: '', Price: 5.95},
            'Chicken Parm': {Description: '', Price: 7.95},
            'Pizza Burger': {Description: '', Price: 4.95},
            'Bacon OR Chili Cheese Fries (small)': {Description: '', Price: 6.95},
            'Bacon OR Chili Cheese Fries (large)': {Description: '', Price: 8.95}
        },
      FarmToTableBurgers:
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
      Sides:
        { 

        },
      Salads:
        {

        },
      DinnDinn:
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

export {eats, WestonEats, JaneLewEats, JLEatsNames, WestonEatsNames, eats2}