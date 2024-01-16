// Agregation


use("restaurant");

db.restaurants.aggregate({$match: {rating: 5}});

