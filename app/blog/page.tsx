"use client";
import ProductItem from "@/components/product/productItem";
import Container from "@/components/ui/container";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IProduct } from "@/components/product/productItem";
const Blog = () => {
  const [products, setProducts] = useState<IProduct[] | []>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data.slice(0, 10));
    });
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {products?.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductItem {...product} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
