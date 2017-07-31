const User = require('./user');
const Animal = require('./animal');
const CartItem = require('./cartItem');
const Enhancement = require('./enhancement');
const Cart = require('./cart');
const PastOrder = require('./pastOrder');
const PastOrderItem = require('./pastOrderItem');
const Address = require('./address');
const AnimalTag = require('./animalTag');
const EnhancementTag = require('./enhancementTag');


Animal.belongsToMany(AnimalTag, { as: 'tags', through: 'animalTagJoin' });
AnimalTag.belongsToMany(Animal, { as: 'tags', through: 'animalTagJoin' });
Enhancement.belongsToMany(EnhancementTag, { through: 'enhancementTagJoin' });
EnhancementTag.belongsToMany(Enhancement, { through: 'enhancementTagJoin' });


CartItem.belongsTo(Animal);
CartItem.belongsTo(Enhancement);
CartItem.belongsTo(Cart);
Cart.hasMany(CartItem, { onDelete: 'cascade', hooks: true });
User.hasOne(Cart, { onDelete: 'cascade', hooks: true });

PastOrderItem.belongsTo(Animal);
PastOrderItem.belongsTo(Enhancement);
PastOrderItem.belongsTo(PastOrder);
PastOrder.hasMany(PastOrderItem, { onDelete: 'cascade', hooks: true });
PastOrder.belongsTo(User);

Address.belongsTo(User);
PastOrder.belongsTo(Address, { as: 'shippingAddress' });
PastOrder.belongsTo(Address, { as: 'billingAddress' });


module.exports = { User, Animal, CartItem, Enhancement, Cart, PastOrder, PastOrderItem, Address, AnimalTag, EnhancementTag };

