// Agregation


use("restau");

 db.restaurant.aggregate({$match: {rating: 5}});
 db.restaurant.aggregate({$match: {rating: 5}},{$count: "comptage"});

 db.restaurant.aggregate({$match: {rating: 5}}, {$project:{URL:1, name:1}});

 db.restaurant.aggregate({ $group: { _id: "$type_of_food", count: { $sum: 1 } } }); 
  // avec dollar type_of_food devient une variable // fais la somme de restaurant par type de food */


 db.restaurant.aggregate([
    { $group: { _id: "$type_of_food", count: { $sum: 1 } } },
    { $match: { count: { $gt: 10 } } },
    { $sort: { count: -1 } }]);
 // Retourne une valeur calculée, regroupe le nombre de restau par type, et je ne veux que les typologies de restau qui ont plus de 10 restau
 // trié de manière décroissante ($sort: tjr à la fin de la requête)*/


 db.restaurant.aggregate({$group: {_id: "$postcode", nombre_restaurant: {$sum: 1}}});

 db.restaurant.aggregate({$match: {type_of_food: "Thai", rating: {$gt: 4}}});

 db.restaurant.aggregate([
  { $match: { type_of_food: "Thai", rating: { $gt: 4 } } },
  { $project: { _id: 0, type_of_food: 1, rating: 1 } },
  { $limit: 3 },
]);


 db.restaurant.aggregate({
   $group: { _id: "$type_of_food", note_moyenne: { $avg: "$rating" } },
 });
// Retourne la moyenne de rating par typologie de restau */

db.restaurant.aggregate([
  {
    $match: {
      rating: { $ne: "Not yet rated" }, // ne = not equal
    },
  },
  {
    $group: {
      _id: "$type_of_food",
      total_rating: { $sum: "$rating" },
      avg_rating: { $avg: "$rating" },
      max_rating: { $max: "$rating" },
      min_rating: { $min: "$rating" },
    },
  },
]); 