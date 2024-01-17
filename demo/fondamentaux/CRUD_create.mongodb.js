use("demo");
// db.products.insertOne({name: "Samsung", price: 950});
// db.products.find();
// db.createCollection("notes");
// db.notes.insertOne({matiere: "Java", date: new Date(2015/5/21), note: 15});
// db.notes.find();


// Crud
// Insertion ou création :

// db.products.insertOne({name: "Robe", size: 38, composition: "soie", price: 150})
// db.products.insertMany([{name: "T-shirt", size: 40, composition: "coton", price: 50},{name: "jupe", size: 42, composition: "denim", price: 40, couleurs:["bleu", "rouge"] }])
// db.products.find();

// db.products.insertOne({name: "boucles d'oreilles", composition: "or",
// marque: [
//     {name: "Nuit d'Opale", location: "France"}
//     ],
// price: [
//     {unité: 10},
//     {double: 19}
//     ]
// });

// db.products.insertOne({_id: 2500, name: "CD des L5", année: "2001"});
db.products.find();