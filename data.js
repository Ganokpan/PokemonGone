const db = firebase.firestore();

//Dark Type
var dark = db.collection("dark").doc("absol");
dark.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('absol').innerHTML = doc.data().name;
    } else {
// doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var darkPoo = db.collection("dark").doc("poochyena");
darkPoo.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('poochyena').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var darkPur = db.collection("dark").doc("purrloin");
darkPur.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('purrloin').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var darkUm = db.collection("dark").doc("umbreon");
darkUm.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('umbreon').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


//Fire Type
var fireCamerupt = db.collection("fire").doc("camerupt");
fireCamerupt.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('camerupt').innerHTML = doc.data().name;
        document.getElementById('camerupt2').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
var firecombusken = db.collection("fire").doc("combusken");
firecombusken.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('combusken').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
var firenumel = db.collection("fire").doc("numel");
firenumel.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('numel').innerHTML = doc.data().name;
        document.getElementById('numel2').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
var firetorchic = db.collection("fire").doc("torchic");
firetorchic.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('torchic').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

//Ground Type
var ground = db.collection("ground").doc("baytoy");
ground.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('bay').innerHTML = doc.data().name;
        document.getElementById('bay2').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var groundflygon = db.collection("ground").doc("flygon");
groundflygon.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('flygon').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var groundmudbray = db.collection("ground").doc("mudbray");
groundmudbray.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('mudbray').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var groundvibrava = db.collection("ground").doc("vibrava");
groundvibrava.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('vibrava').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var groundwhiscash = db.collection("ground").doc("whiscash");
groundwhiscash.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('whiscash').innerHTML = doc.data().name;
        document.getElementById('whiscash2').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var groundzygarde = db.collection("ground").doc("zygarde");
groundzygarde.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('zygarde').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

//Psychic Type
var psychic = db.collection("psychic").doc("claydol");
psychic.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('claydol').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var psychicdeoxys = db.collection("psychic").doc("deoxys");
psychicdeoxys.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('deoxys').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var psychicjirachi = db.collection("psychic").doc("jirachi");
psychicjirachi.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('jirachi').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var psychickirlia = db.collection("psychic").doc("kirlia");
psychickirlia.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('kirlia').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var psychiclatios = db.collection("psychic").doc("latios");
psychiclatios.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('latios').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var psychicralts = db.collection("psychic").doc("ralts");
psychicralts.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('ralts').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var psychicuxie = db.collection("psychic").doc("uxie");
psychicuxie.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('uxie').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

//Water Type
var watercorphish = db.collection("water").doc("corphish");
watercorphish.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('corphish').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var waterfeebas = db.collection("water").doc("feebas");
waterfeebas.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('feebas').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var watergorebyss = db.collection("water").doc("gorebyss");
watergorebyss.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('gorebyss').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var waterhuntail = db.collection("water").doc("huntail");
waterhuntail.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('huntail').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var waterkyogre = db.collection("water").doc("kyogre");
waterkyogre.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('kyogre').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var waterluvdisc = db.collection("water").doc("luvdisc");
waterluvdisc.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('luvdisc').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var watermilotic = db.collection("water").doc("milotic");
watermilotic.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('milotic').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var waterrelicanth = db.collection("water").doc("relicanth");
waterrelicanth.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('relicanth').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var watersealeo = db.collection("water").doc("sealeo");
watersealeo.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('sealeo').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var waterspheal = db.collection("water").doc("spheal");
waterspheal.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('spheal').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var waterwailmer = db.collection("water").doc("wailmer");
waterwailmer.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('wailmer').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

//Other Type pokemon
var pokemonaggron = db.collection("pokemon").doc("aggron");
pokemonaggron.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('aggron').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonbanette = db.collection("pokemon").doc("banette");
pokemonbanette.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('banette').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonbreloom = db.collection("pokemon").doc("breloom");
pokemonbreloom.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('breloom').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemondelcatty = db.collection("pokemon").doc("delcatty");
pokemondelcatty.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('delcatty').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemondustox = db.collection("pokemon").doc("dustox");
pokemondustox.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('dustox').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonelectrike = db.collection("pokemon").doc("electrike");
pokemonelectrike.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('electrike').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonglalie = db.collection("pokemon").doc("glalie");
pokemonglalie.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('glalie').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemongulpin = db.collection("pokemon").doc("gulpin");
pokemongulpin.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('gulpin').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonhariyama = db.collection("pokemon").doc("hariyama");
pokemonhariyama.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('hariyama').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonillumise = db.collection("pokemon").doc("illumise");
pokemonillumise.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('illumise').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonkecleon = db.collection("pokemon").doc("kecleon");
pokemonkecleon.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('kecleon').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonkiruria = db.collection("pokemon").doc("kiruria");
pokemonkiruria.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('kiruria').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonlinoone = db.collection("pokemon").doc("linoone");
pokemonlinoone.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('linoone').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonminun = db.collection("pokemon").doc("minun");
pokemonminun.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('minun').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonnosepass = db.collection("pokemon").doc("nosepass");
pokemonnosepass.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('nosepass').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


var pokemonexploud = db.collection("pokemon").doc("exploud");
pokemonexploud.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('exploud').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonexploud = db.collection("pokemon").doc("exploud");
pokemonexploud.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('exploud').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonexploud = db.collection("pokemon").doc("exploud");
pokemonexploud.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('exploud').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonexploud = db.collection("pokemon").doc("exploud");
pokemonexploud.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('exploud').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonplusle = db.collection("pokemon").doc("plusle");
pokemonplusle.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('plusle').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonroselia = db.collection("pokemon").doc("roselia");
pokemonroselia.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('roselia').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonspinda = db.collection("pokemon").doc("spinda");
pokemonspinda.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('spinda').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemontreecko = db.collection("pokemon").doc("treecko");
pokemontreecko.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('treecko').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonvigoroth = db.collection("pokemon").doc("vigoroth");
pokemonvigoroth.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('vigoroth').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonvolbeat = db.collection("pokemon").doc("volbeat");
pokemonvolbeat.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('volbeat').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonwhismur = db.collection("pokemon").doc("whismur");
pokemonwhismur.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('whismur').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

var pokemonzangoose = db.collection("pokemon").doc("zangoose");
pokemonzangoose.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('zangoose').innerHTML = doc.data().name;
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});