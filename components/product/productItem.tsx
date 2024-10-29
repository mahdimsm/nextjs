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
        <div>
          <div className="shadow border p-8 flex flex-col justify-between min-h-60">
            <div>
            <Image className="mx-auto" src={image} alt="site-logo"  width={70} height={70}/> 
            </div>
            
            <div className="flex justify-between p-2">
              <p className="font-bold line-clamp-1 pl-5">{title} </p>
              <p className="font-bold">{price}$</p>
            </div>
          </div>
        </div>
      );
}
 
export default ProductItem;