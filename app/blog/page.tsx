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
    // <Container>
    //   <div className="grid grid-cols-4 gap-4 mt-4">
    //
    //   </div>
    // </Container>
    <Container className="sm:pt-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => (
          <Link 
          className="flex sm:flex-col pb-8 sm:pb-0  pt-8 sm:rounded-md border-b-2 sm:border  sm:shadow-lg sm:transition sm:duration-500 sm:ease-out sm:hover:scale-105 sm:hover:shadow-2xl"
          href={`/blog/${product.id}`} key={product.id}>
            <ProductItem {...product} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
