use("demoRelation");

// db.utilisateur.insertOne({
//     name : "Jean",
//     age : 40
//   })



//   db.adresse.insertOne({
//     street : "rue des fleurs",
//     number : 46,
//     city : "Lille",
//     utilisateur_id : ObjectId("65a7ee48b8720033537bf64d")
//   }) 


//One To One

//   db.utilisateur.find()
//   db.adresse.find(); 

//   db.utilisateur.aggregate([
//     {$lookup: {
//       from: "adresse",
//       localField: "_id",
//       foreignField: "utilisateur_id",
//       as: "adresse"
//     }},
//     {
//       $project: {
//         "adresse._id" : 0,
//         "adresse.utilisateur_id" :0
//       }
//     }
  
//   ])


//One to Many

// 65a7eed6d0367cc19cdc5066
// 65a7eed6d0367cc19cdc5067
// 65a7efe2eb8dddcc06602c55
// db.books.insertMany([{name: "J'aime bien le distanciel"},{name:"Mais je prefere le presentiel"}])
// db.authors.insertOne({name:"Maximus", books: [ObjectId("65a7f04fd21895ff03b5aeca"), ObjectId("65a7f04fd21895ff03b5aecb")]})
// db.authors.aggregate([
//         {$lookup: {
//           from: "books",
//           localField: "books",
//           foreignField: "_id",
//           as: "books"
//         }},
//         {
//           $project: {
//             "books._id" : 0
//           }
//         }
      
//       ]);
