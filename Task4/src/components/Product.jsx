import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function Product({ product }) {
  const { id, title, price, description, image } = product;

  return (
    <div className="m-4 w-full" key={id}>
      <Card className="shadow-2xl h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xl mb-2 font-bold">{title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <img src={image} alt="product_img" className="h-30 w-30" />
        </CardContent>
        <CardFooter className="flex justify-between items-center p-3 m-2">
          <p>{price}</p>
          <Button>Buy Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
