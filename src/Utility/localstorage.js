const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLocalStorage(cart);
}

export { addToLocalStorage, getStoredCart };