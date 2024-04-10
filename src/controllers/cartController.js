export async function getAllCart (req, res){
    const cart = []
    console.log(cart);
    res.render('cart', {cart});
}

export function getCart(req, res){
    // findById(req.params.id, function(err, cart){
    //   res.render('details', {
    //     cart: cart
    //   });
    // });
  }