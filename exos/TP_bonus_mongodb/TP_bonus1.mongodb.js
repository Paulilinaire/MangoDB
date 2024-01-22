use("gymnase");


// 1. Quels sont les sportifs (identifiant, nom et prénom) qui ont un âge entre 20 et 30 ans 
// db.sportifs.find(
//   { Age: { $gt: 20, $lt: 31 } }, 
//   { _id: 1, Nom: 1, Prenom: 1 }
//   );
  

// 2. Quels sont les gymnases de ville “Villetaneuse” ou de “Sarcelles” qui ont une surface de plus de 400 m2 ?
// db.gyms.find({
//   Surface: { $gt: 400 },
//   Ville: { $in: ["VILLETANEUSE", "SARCELLES"] },
// });


// 3. Quels sont les sportifs (identifiant et nom) qui pratiquent du handball ?
// db.sportifs.find(
//   { "Sports.Jouer": "Hand ball" },
//   { _id: 1, Nom: 1 }
// );


// 4. Quels sportifs (identifiant et nom) ne pratiquent aucun sport ?
db.sportifs.find(
  { "Sports.Jouer": { $exists: false } },
  { _id: 1, Nom: 1 }
);


// 5. Quels gymnases n’ont pas de séances le dimanche ?
// db.gyms.aggregate([
//   {$match: {"Seances.Jour": {$nin: ["dimanche"]}}},
// ]);

// 6. Quels gymnases ne proposent que des séances de basket ball ou de volley ball ?
// db.gyms.aggregate([
//   {$match: {"Seances.Libelle": {$in: ["Volley ball", "Basket ball"]}}},
// ]);


// 7. Quels sont les entraîneurs qui sont aussi joueurs ?
// db.sportifs.aggregate([{
//   $match: {
//     $and: [
//       { "Sports.Entrainer": { $exists: true } },
//       { "Sports.Jouer": { $exists: true } }
//     ]
//   }
// }]);



// 8. Pour le sportif “Kervadec” quel est le nom de son conseiller ?

// db.sportifs.aggregate([
//   {
//     $match: { Nom: "KERVADEC" }
//   },
//   {
//     $lookup: {
//       from: "sportifs",
//       localField: "IdSportifConseiller",
//       foreignField: "IdSportif",
//       as: "conseillerInfo"
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       NomConseiller: { $arrayElemAt: ["$conseillerInfo.Nom", 0] }
//     }
//   }
// ]);



// 9. Quelle est la moyenne d’âge des sportives qui pratiquent du basket ball ?
// db.sportifs.aggregate([
//   {
//     $match: { "Sports.Jouer": "Basket ball", Sexe: "F" }
//   },
//   {
//     $group: {
//       moyenne_age: { $avg: "$Age" }
//     }
//   }
// ]);



// 10.Quels entraîneurs n’entraînent que du hand ball ou du basket ball ?
    // db.sportifs.aggregate([
    //   {
    //     $match: {
    //       "Sports.Entrainer": {
    //         $all: ["Hand ball", "Basket ball"],
    //         $nin: ["Volley ball", "Hockey", "Badmington", "Ping pong", "Boxe"],
    //       },
    //     },
    //   },
    // ]);
    


// 11. Pour chaque sportif donner le nombre de sports qu’il arbitre ?
// db.sportifs.aggregate([
//   {
//     $unwind: "$Sports.Arbitrer"
//   },
//   {
//     $group: {
//       _id: {
//         IdSportif: "$IdSportif",
//         Nom: "$Nom",
//         Prenom: "$Prenom"
//       },
//       nombre_sports_arbitrer: { $sum: 1 }
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       IdSportif: "$_id.IdSportif",
//       Nom: "$_id.Nom",
//       Prenom: "$_id.Prenom",
//       nombre_sports_arbitrer: 1
//     }
//   }
// ]);



 
