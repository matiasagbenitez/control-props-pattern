import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />

            <div style={{padding: "10px", paddingTop: "0px"}}>
              <p>Count: {count}</p>
              <p>Max Count: {maxCount}</p>
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached() && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
            </div>
          </>
        )}
      </ProductCard>
    </div>
  );
};
