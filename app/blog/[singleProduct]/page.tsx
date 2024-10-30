"use client";
import { IProduct } from "@/components/product/productItem";
import Container from "@/components/ui/container";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
const  SingleProduct  = ({
  params,
}: {
  params: {
    singleProduct: number;
  };
}) => {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.singleProduct}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, [params.singleProduct]);

  return (
    <div>
    <Container className="mt-5">
    {product &&(<div className='flex flex-col gap-y-10'>
          <div className=' relative h-60 w-full overflow-hidden rounded-b-md shadow-lg md:h-96'>
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes='100vw'
              className='object-contain'
              quality={100}
              priority
            />
          </div>
          <div dir="ltr" className='space-y-4'>
            <h1 className='text-3xl font-bold'>{product.title}</h1>
            <p className='text-justify text-lg'>{product.description}</p>
          </div>
        </div>)}
    </Container>
    </div>

  );
};

export default SingleProduct;
