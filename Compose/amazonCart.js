const user = {
    name: 'Dave',
    active: true,
    cart: [],
    purchases: []
  }
  let amazonHistory = [];
  const compose = (f, g) => (...args) => f(g(...args));
  
  purchaseItem(
    emptyCart,
    buyItem,
    applyTax,
    addItemToCart
  )(user, {name: 'Apple Watch', price: 400})
  
  function purchaseItem(...fns){
    return fns.reduce(compose);
  }
  
  function addItemToCart(user, item) {
    amazonHistory.push(user);
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart });
  } 
  function applyTax(user) {
    amazonHistory.push(user);
    const {cart} = user;
    const taxRate = 1.13;
    const updatedCart = cart.map(item => {
      return {
        name: item.name,
        price: (item.price*taxRate).toFixed(2)
      }
    })
    return Object.assign({}, user, {cart: updatedCart})
  } 
  function buyItem(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, {purchases: user.cart})
  } 
  function emptyCart(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, {cart: []})
  }
  
  amazonHistory;