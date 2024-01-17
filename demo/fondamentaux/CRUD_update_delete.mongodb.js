use("book");

// Update

// -- on modifie le statut et le nombre de page
// db.books.updateOne({_id: 45}, {$set: {status: "CANCELED", pageCount: 6000}});

// db.books.updateMany({_id: {$in: [55,75]}}, {$set: {status: "CANCELED"}});

// db.books.find({status: "CANCELED"});

// -- ajoute 150000 pages au livre avec l'id 45
// db.books.updateOne({_id: 45}, {$inc: {pageCount: 150000}});

// db.books.find({_id: 45});

// -- supprime le tableau auteur du livre id 45
// db.books.updateOne({_id: 45}, {$unset: {thumbnailUrl: 1}});

// -- supprime le tableau auteur du livre id 45
// db.books.updateOne({_id: 45}, {$unset: {thumbnailUrl: 1}});

// -- renommer la colonne
// db.books.updateOne({_id: 45}, {$rename: {status: "position"}});

// -- si livre id 45 à plus de 5000 page, set le nombre de page à 5000
// db.books.updateOne({_id: 45}, {$min: {pageCount: 5000}});

//////////////////////////////////////////////////////////////////////

// Delete 

// -- supprime le livre id 45
// db.books.findOneAndDelete({_id: 45});

// -- supprime tout
// db.books.deleteMany({});
