
use("hospital");

// db.patient.insertMany([
//     {
//         firstName: "Mohamed",
//         lastName: "Deloin",
//         age: 30,
//         history: [
//             {desease: "rhume",
//             treatment: "sirop"},
//             {desease: "grippe",
//             treatment: "antibotiques"}
//             ]
//     },
//     {
//         firstName: "Olivia",
//         lastName: "Pigani",
//         age: 28,
//         history: [
//             {desease: "bronchite",
//             treatment: "vodka"},
//             {desease: "covid",
//             treatment: "confinement"}
//         ]
//     },
//     {
//         firstName: "Tam",
//         lastName: "Lam",
//         age: 38,
//         history: [
//             {desease: "rhume",
//             treatment: "sirop"},
//         ]
//     }
// ]);

// Mettre à jour les données d’un patient avec nouvel un âge, un
// nouveau nom et un nouvel historique medical.
// db.patient.updateOne({firstName: "Tam"}, {$set: {lastName: "Laout", age: 99, history: [{desease: "somnambulisme", treatment: "pas de sommeil"}]}});


// Trouver tous les patients qui ont un âge supérieur à 29 ans.
// db.patient.find({age:{$gt: 29}});


// Supprimer tous les patients qui ont attrapé un rhume comme une maladie.
db.patient.deleteMany({"history.desease": "rhume"});

