import { useState } from "react";
import { ProductInCar, Product } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCar }>({});

    const onProductCountChange = ({ product, count }: { product: Product; count: number }) => {

        setShoppingCart(oldShoppingCart => {
            const productInCart: ProductInCar = oldShoppingCart[product.id] || { ...product, count: 0 };
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                };
            }

            const { [product.id]: toDelete, ...newShoppingCart } = oldShoppingCart;
            return newShoppingCart;
        });
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}