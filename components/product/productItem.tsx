import Image from "next/image";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  interface Rating {
    rate: number;
    count: number;
  }
const ProductItem = ({ image, title, price }: IProduct) => {
    return (
        
          <div className="sm:relative sm:h-72 sm:w-64 overflow-hidden w-full flex justify-between sm:flex-col ">
            <div>
            <Image className="mx-auto" src={image} alt="product"  width={70} height={70}/> 
            </div>
            
            <div dir="ltr" className=" sm:absolute sm:bottom-0  sm:left-0 flex flex-col justify-between p-5  sm:h-1/2">
              <p  dir="ltr" className="font-bold">{title} </p>
              <p  dir="ltr" className=" mt-2">{price}$</p>
            </div>
          </div>
        
      );
}
 
export default ProductItem;