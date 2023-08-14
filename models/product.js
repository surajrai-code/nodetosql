const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('insert into products (title, price, imageUrl, description) values (?,?,?,?)', [this.title, this.price, this.imageUrl, this.description]); //vahan ? lagake bahar array bnakr bhi daal skte hain...
    // ab admin.js of controller mai jake postaddproduct mai isko call kiya hai vahan
    // exports.postAddProduct = (req, res, next) => {
    //   const title = req.body.title;
    //   const imageUrl = req.body.imageUrl;
    //   const price = req.body.price;
    //   const description = req.body.description;
    //   const product = new Product(null, title, imageUrl, description, price);
    //   product.save()
    //     .then(() => {
    //       res.redirect('/');
    //     })
    //     .catch(err => { console.log(err) });

    // };
  }

  static deleteById(id) {

  }


  static fetchAll() { //jos is function ko call krega use ye return karega,ab controller folder mai shop folder pe jake vahan isko call kr rhe hoge 
    // aur vahn aisa banao
    // exports.getIndex = (req, res, next) => {
    //   Product.fetchAll()
    //   .then(([rows, fieldData]) => {
    //     res.render('shop/index', {
    //       prods: rows, //ye products honge
    //       pageTitle: 'Shop',
    //       path: '/'
    //     });
    //   })
    //   .catch(err => console.log(err))
    // };
    // aur isko aise bnao=>
    // exports.getProducts = (req, res, next) => { //ye product vale icon mai ye produc dikhayega.
    //   Product.fetchAll() .then(([rows, fieldData]) => {
    //     res.render('shop/product-list', {
    //       prods: rows, //ye products honge
    //       pageTitle: 'All Products',
    //       path: '/products'
    //     });
    //   })
    //   .catch(err => console.log(err))
    // };

    return db.execute('select * from products')
  }

  static findById(id) { //ye kisi ek particular ki deatil pta karne ke liye hai
    return db.execute('select * from products where products.id = ?', [id]);//single id vale ko lena hai to ye karna padhega... 
  }

  static deleteProduct(id) {
    return db.execute('delete from products where products.id=?', [id]);
  }
};