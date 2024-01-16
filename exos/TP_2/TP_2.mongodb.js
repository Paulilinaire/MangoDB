use("person");

// -- 1 Créer un élément:
// db.persons.insertOne({
//     name: "Chuck Norris",
//     age: 77,
//     hobbies: ["karaté", "kung-fu", "rulling the world"]
// });

//////////////////////////////////////////////////////////////


// 2 - Lecture d'un élément:

// -- Afficher Chuck Norris (si il le permet)
//db.persons.find({name: "Chuck Norris"});

// -- Afficher Chuck sans le champs _id
//db.persons.find({name: "Chuck Norris"}, {_id: 0});

// -- Afficher les utilisateurs qui ont entre 20 et 25 ans.
// db.persons.find({$and: [{age: {$gte: 20}},{age: {$lte: 25}}]});

// -- Afficher uniquement les hommes entre 30 et 40 ans
//db.persons.find({gender: "male", age: { $gte: 30, $lte: 40 }});

// -- Afficher les utilisateurs habitant l'état de Louisianne (Louisiana)
// db.persons.find({"address.state" : "Louisiana" });

// -- Afficher les 20 premiers utilisateurs triés par ordre décroissant d'age
// db.persons.find().sort({_id: -1}).limit(20);

// -- Combien y'a-t-il de femmes agées de 30 ans?
// db.persons.find({ $and: [{ gender: "female" }, { age: 30 }] }).count();


///////////////////////////////////////////////////////////////


// 3 - Modifier/Supprimer un élément

// -- Nos juristes nous ont dit que nous ne pouvions plus garder les numéros de
// téléphones de nos utilisateurs : supprimer le champ phone de tous les
// enregistrements.
// db.persons.updateMany({}, { $unset: { phone: 1 } });


// -- Chuck Norris est venu nous dire que le temps ne marquait pas Chuck Norris,
// mais que Chuck Norris marquait le temps : changer l'age de Chuck Norris à
// infinity
// db.persons.updateOne({ name: "Chuck Norris" }, { $set: {"age": "Infinity" }});
// db.persons.find({ name: "Chuck Norris" });

// -- Ajoutons un hobby à tous nos utilisateurs de plus de 50 ans : jardinage
// db.persons.updateMany({ age: { $gte: 50 } },{ $push: { hobbies: "jardinage" } });
  
  