import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemRating from "./ProductItemRating";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-2 w-full max-w-[250px] h-[400px] p-4 bg-white rounded-md shadow-md">
      {/* Image */}
      <Link href={`/product/${product.slug}`} className="h-[220px] flex items-center justify-center">
        <Image
          src={
            product.mainImage
              ? `/${product.mainImage}`
              : "/product_placeholder.jpg"
          }
          width={180}
          height={180}
          alt={product?.title}
          className="object-contain"
        />
      </Link>

      {/* Title */}
      <Link
        href={`/product/${product.slug}`}
        className={`text-center text-base font-semibold uppercase truncate w-full ${
          color === "black" ? "text-black" : "text-gray-800"
        }`}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          height: "1.5rem",
        }}
        title={product.title}
      >
        {product.title}
      </Link>

      {/* Price */}
      <p
        className={`text-sm font-bold ${
          color === "black" ? "text-black" : "text-gray-900"
        }`}
      >
        ${product.price}
      </p>

      {/* Rating */}
      <div className="h-[20px]">
        <ProductItemRating productRating={product?.rating} />
      </div>

      {/* Button */}
      <Link
        href={`/product/${product?.slug}`}
        className="mt-auto w-full text-center uppercase bg-green-500 text-white py-2 text-sm font-semibold rounded hover:bg-green-600 transition"
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductItem;
