use("book");
// db.books.find();


// Read :

// db.books.find({_id: 45});

// -- affiche les 5 premiers livres
// db.books.find().limit(5); 

// -- afffiche les livres qui ont 2 auteurs
// db.books.find({authors: {$size:2}}) 

// -- affiche les livres avec 400 pages ou plus (gte = "greater than or equal to")
// db.books.find({pageCount: {$gte: 400}}); 

// -- affiche livres dont l'id est égale à 15 et 20
// db.books.find({_id: {$in: [15,20]}}); 

// -- affiche livres avec 2 auteurs, tri par titre et puis id (acendant => 1, descendant => -1)
// db.books.find({authors: {$size: 2}}).sort({title:1, _id: -1}).count();

// -- affiche livres avec 2 auteurs en sautant les 10 premiers livres
// db.books.find({authors: {$size: 2}}).skip(10);

// -- les 2 conditions doivent être respectées pour afficher les livres avec un id entre 26 et 49 inclus
// db.books.find({$and: [{_id: {$gt: 25}},{_id: {$lt: 50}}]}); 

// -- affiche l'id et le tableau d'auteur des livres avec id supérieur à 45
// db.books.find({_id: {$gt: 45}},{_id: 1, authors:1});

// -- affiche tout sauf le tableau d'auteur des livres avec id supérieur à 45
// db.books.find({_id: {$gt: 45}},{_id: 1, authors:0});

// -- affiche les livres dont la catégories et soit Java soit Web Development
// db.books.find({categories: {$in: ['Java', 'Web Development']}});

// -- affiche les livres dont la catégories et à la fois Java, à la fois Web Development
// db.books.find({categories: {$in: ['Java', 'Web Development']}});

// db.books.find({$or: [{_id: 19}, {_id: 20}]});

// regex: commence par ext et $options: "i" = ignore case
// db.books.find({longDescription: {$regex: "^ext", $options: "i" }});

// db.books.find({longDescription: {$regex: "Distributed", $options: "i" }});

// affiche titre de livre qui se termine par "perl" peu importe majuscule, minuscule
// db.books.find({title: {$regex: "Perl$", $options: "i" }});

