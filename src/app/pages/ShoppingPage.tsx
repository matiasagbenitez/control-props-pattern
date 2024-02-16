import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug X",
  img: "/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            title="Coffee Mug XXX"
            className="text-bold"
            activeClass="active"
            style={{ fontStyle: "italic" }}
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" activeClass="active" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle style={{ textTransform: "uppercase" }} />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
