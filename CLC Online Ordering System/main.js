//  FORMS THE DATABASE THAT STORES ALL INFO FOR THE APPLICATION TO FUNCTION. FROM RESTAURANTS DOWN TO THEIR MENUS AND PRICING.
//  IT FEELS LIKE THIS SHOULD BE STORED ELSEWHERE, BUT I DON'T KNOW HOW TO DO THAT AND CALL IT INTO THIS FILE. SOMETHING TO LEARN LATER.

checkedBoxes = document.querySelectorAll('input:checked')[0];

cl = console.log

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
    category: "Ice Cream & Home Cooking"
  },
  {
    name: 'Cookie\'s Corner',
    city: 'Weston',
    category: "Ice-Cream"
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
  document.write("<center><h5>&copy;July 2020 Justin Waugh</h5></center>");
};

// THIS FUNCTION WILL CHOOSE ONLY WESTON RESTAURANTS FROM THE CONSTANT 'eats' ON LINE #115
function listallWestonrestaurants() {
  document.write("<strong>Weston has the following restaurant options.</strong>");
  document.write("<br /> Please choose the one you'd like to see a menu for");
  document.write("<br />");
  document.write("<select id=\"WestonSelect\" size=\"9\" onchange=\"WestonSelectMenu();\"></select>");
  document.write("==>")
  document.write("<select id=\"WestonMenuSelect\" size=\"9\" onchange=\"CALL_A_FUNCTION_HERE();\"></select>");
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

//generate_homepage();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////      ANYTHING HAPPENING BELOW HERE IS AFTER THE HOMEPAGE HAS BEEN GENERATED ABOVE     ///////////////////////
//////////////////////////////      ----------------------------------------------------------------------------     ///////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//OrderingSystem.ConfirmOrder();


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
       window.open("restaurants/gio.html");
       //gen_GioPage();
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


function MenuCreation() {
  
  const EarlyMorninFixins = giomenu_early_mornin_fixins.map((giomenu_early_mornin_fixins) => {
    return giomenu_early_mornin_fixins.name
  })   
   
  document.write("<u><h3>"+giomenu_early_mornin_fixins[0].title+"</h3></u>")  
  
  for (let item in giomenu_early_mornin_fixins) {
    if (EarlyMorninFixins[item] != undefined) {
      prices = giomenu_early_mornin_fixins[item].price
      document.write("<input type=\"checkbox\" name=\"\""+EarlyMorninFixins[item]+\"\" onclick=\"updateCheckBoxes()\" class=\"menuitemcheckbox\" id=\"emfixins_"+item+"\"></input>"+EarlyMorninFixins[item]+" ... "+prices)
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
      document.write("<input type=\"checkbox\" class=\"menuitemcheckbox\" id=\"sharedplates_"+item+"\"></input>"+SharedPlates[item]+" ... "+prices)
      document.write("<br />")
    }
  }

  const FarmToTableBurgers = giomenu_farm_to_table_burgers.map((giomenu_farm_to_table_burgers) => {
    return giomenu_farm_to_table_burgers.name
  })
  
  document.write("<u><h3>"+giomenu_farm_to_table_burgers[0].title+"</h3></u>")
  
  for (let item in giomenu_early_mornin_fixins) {
    if (FarmToTableBurgers[item] != undefined) {
      prices = giomenu_farm_to_table_burgers[item].price
      document.write("<input type=\"checkbox\" class=\"menuitemcheckbox\" id=\"f2tburgers_"+item+"\"></input>"+FarmToTableBurgers[item]+" ... "+prices)
      document.write("<br />")
    }
  }  

  const Sides = giomenu_sides.map((giomenu_sides) => {
    return giomenu_sides.name
  })
  
  document.write("<u><h3>"+giomenu_sides[0].title+"</h3></u>")
  
  for (let item in giomenu_sides) {
    if (SharedPlates[item] != undefined) {
      prices = giomenu_sides[item].price
      document.write("<input type=\"checkbox\" class=\"menuitemcheckbox\" id=\"sides_"+item+"\"></input>"+Sides[item]+" ... "+prices)
      document.write("<br />")
    }
  }  

  const Salads = giomenu_salads.map((giomenu_salads) => {
    return giomenu_salads.name
  })
  
  document.write("<u><h3>"+giomenu_salads[0].title+"</h3></u>")
  
  for (let item in giomenu_salads) {
    if (Salads[item] != undefined) {
      prices = giomenu_salads[item].price
      document.write("<input type=\"checkbox\" class=\"menuitemcheckbox\" id=\"salads_"+item+"\"></input>"+Salads[item]+" ... "+prices)
      document.write("<br />")
    }
  }  

  const DinnDinn = giomenu_dinn_dinn.map((giomenu_dinn_dinn) => {
    return giomenu_dinn_dinn.name
  })
  
  document.write("<u><h3>"+giomenu_dinn_dinn[0].title+"</h3></u>")
  
  for (let item in giomenu_dinn_dinn) {
    if (DinnDinn[item] != undefined) {
      prices = giomenu_dinn_dinn[item].price
      document.write("<input type=\"checkbox\" class=\"menuitemcheckbox\" id=\"dinndinn_"+item+"\"></input>"+DinnDinn[item]+" ... "+prices)
      document.write("<br />")
    }
  }

  const FarmandSea = giomenu_farm_and_sea.map((giomenu_farm_and_sea) => {
    return giomenu_farm_and_sea.name
  })
  
  document.write("<u><h3>"+giomenu_farm_and_sea[0].title+"</h3></u>")
  
  for (let item in giomenu_farm_and_sea) {
    if (FarmandSea[item] != undefined) {
      prices = giomenu_farm_and_sea[item].price
      document.write("<input type=\"checkbox\" class=\"menuitemcheckbox\" id=\"farmsea_"+item+"\"></input>"+FarmandSea[item]+" ... "+prices)
      document.write("<br />")
    }
  }

  const Sammiches = giomenu_sammiches.map((giomenu_sammiches) => {
    return giomenu_sammiches.name
  })
  
  document.write("<u><h3>"+giomenu_sammiches[0].title+"</h3></u>")
  
  for (let item in giomenu_sammiches) {
    num = 0
    if (Sammiches[item] != undefined) {
      prices = giomenu_sammiches[item].price
      document.write("<input type=\"checkbox\" class=\"menuitemcheckbox\" id=\"sammiches_"+item+"\"></input>"+Sammiches[item]+" ... "+prices)
      document.write("<br />")  
    }
    num = num+1
  }
 
  const PizzaCalzones = giomenu_pizza_and_calzones.map((giomenu_pizza_and_calzones) => {
    return giomenu_pizza_and_calzones.name
  })
  
  document.write("<u><h3>"+giomenu_pizza_and_calzones[0].title+"</h3></u>")
  
  for (let item in giomenu_pizza_and_calzones) {
    if (PizzaCalzones[item] != undefined) {
      prices = giomenu_pizza_and_calzones[item].price
      document.write("<input type=\"checkbox\" class=\"menuitemcheckbox\" id=\"pizzacalzones_"+item+"\"></input>"+PizzaCalzones[item]+" ... "+prices)
      document.write("<br />")
    }
  }
}




