const getCartFormLocalStg = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return cart = JSON.parse(storedCart);
    }
    return [];
}