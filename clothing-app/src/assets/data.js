import kidCap from "../assets/images/kid-cap.jpg";
import kidFrock from "../assets/images/kid-frock.png";
import kidHat from "../assets/images/kid-hat.jpg";
import kidSkirt1 from "../assets/images/kid-skirt1.png";
import kidSkirt2 from "../assets/images/kid-skirt.png";
import kidSuite1 from "../assets/images/kid-suite1.png";
import kidSuite2 from "../assets/images/kid-suite2.png";
import kidSuite3 from "../assets/images/kid-suite.png";
import kidTrouser1 from "../assets/images/kid-trouser1.png";

import menCap from "../assets/images/men-cap.jpg";
import mensleveShirt1 from "../assets/images/men-full1.jpg";
import mensleveShirt2 from "../assets/images/men-full2.jpg";
import mensleveShirt3 from "../assets/images/men-full3.jpg";
import mensleveShirt4 from "../assets/images/men-full4.jpg";
import mensleveShirt5 from "../assets/images/men-full5.jpg";
import menHalfSeleve from "../assets/images/men-half.jpg";
import menJacket1 from "../assets/images/men-jacket1.jpg";
import menJacket2 from "../assets/images/men-jacket2.jpg";
import menMultishirt from "../assets/images/men-multi.jpg";
import menPrintedShirt1 from "../assets/images/men-printed.jpg";
import menPrintedShirt2 from "../assets/images/men-printed2.jpg";
import menPrintedShirt3 from "../assets/images/men-printed3.jpg";
import menPrintedShirt4 from "../assets/images/men-printed5.jpg";
import menPrintedShirt5 from "../assets/images/men-printed5.jpg";
import menPrintedShirt6 from "../assets/images/men-printed6.jpg";
import menShirt1 from "../assets/images/men-shirt1.jpg";
import menShirt2 from "../assets/images/men-shirt2.jpg";
import menShirt3 from "../assets/images/men-shirt3.jpg";
import menShirt4 from "../assets/images/men-shirt4.jpg";
import menShirt5 from "../assets/images/men-shirt5.jpg";
import menShirt6 from "../assets/images/men-shirt6.jpg";

import womenShirt1 from "../assets/images/women-shirt1.jpg";
import womenShirt2 from "../assets/images/women-shirt2.jpg";
import womenShirt3 from "../assets/images/women-shirt3.jpg";
import womenShirt4 from "../assets/images/women-shirt4.jpg";
import womenShirt5 from "../assets/images/women-shirt.png";
import womenCoat from "../assets/images/women-coat1.jpg";
import womenJacket1 from "../assets/images/women-jacket1.jpg";
import womenJacket2 from "../assets/images/women-jacket2.jpg";
import womenTop from "../assets/images/women-top.jpg";
import womenTrouser from "../assets/images/women-trouser.jpg";

const productsData = [

  // -------------------------------------
  //  KIDS SECTION
  // -------------------------------------
  {
    id: 1,
    title: "Kid Cap",
    category: "kids",
    imageUrl: kidCap,
    price: 12.99,
    desc: "Soft and stylish kid’s cap perfect for sunny days and outdoor fun."
  },
  {
    id: 2,
    title: "Kid Frock",
    category: "kids",
    imageUrl: kidFrock,
    price: 24.99,
    desc: "A cute and comfortable frock ideal for parties and everyday wear."
  },
  {
    id: 3,
    title: "Kid Trouser",
    category: "kids",
    imageUrl: kidTrouser1,
    price: 18.99,
    desc: "Trendy and stretchable trousers designed for active kids."
  },
  {
    id: 4,
    title: "Kid Hat",
    category: "kids",
    imageUrl: kidHat,
    price: 10.50,
    desc: "Warm and cozy hat to keep your child comfy during winter days."
  },
  {
    id: 5,
    title: "Kid Skirt",
    category: "kids",
    imageUrl: kidSkirt1,
    price: 22.49,
    desc: "Lightweight and stylish skirt suitable for casual and festive looks."
  },
  {
    id: 6,
    title: "Kid Skirt",
    category: "kids",
    imageUrl: kidSkirt2,
    price: 19.99,
    desc: "A beautiful printed skirt that adds charm to any outfit."
  },
  {
    id: 7,
    title: "Kid Suit",
    category: "kids",
    imageUrl: kidSuite1,
    price: 34.99,
    desc: "Elegant kids’ suit perfect for weddings, parties, and formal occasions."
  },
  {
    id: 8,
    title: "Kid Suit",
    category: "kids",
    imageUrl: kidSuite2,
    price: 38.50,
    desc: "Stylish 2-piece suit that gives your child a classy and modern look."
  },
  {
    id: 9,
    title: "Kid Suit",
    category: "kids",
    imageUrl: kidSuite3,
    price: 42.00,
    desc: "Premium-quality boy's suit designed with comfort and elegance."
  },

  // -------------------------------------
  //  MEN SECTION
  // -------------------------------------
  {
    id: 10,
    title: "Men Cap",
    category: "men",
    imageUrl: menCap,
    price: 14.99,
    desc: "A modern men's cap that adds style to your casual outfit."
  },
  {
    id: 11,
    title: "Men Full Sleeve Shirt",
    category: "men",
    imageUrl: mensleveShirt1,
    price: 29.99,
    desc: "Classic full-sleeve shirt perfect for office and casual wear."
  },
  {
    id: 12,
    title: "Men Full Sleeve Shirt",
    category: "men",
    imageUrl: mensleveShirt2,
    price: 32.99,
    desc: "Soft fabric full-sleeve shirt for a stylish look."
  },
  {
    id: 13,
    title: "Men Full Sleeve Shirt",
    category: "men",
    imageUrl: mensleveShirt3,
    price: 31.50,
    desc: "Comfortable shirt suitable for all-day wear."
  },
  {
    id: 14,
    title: "Men Full Sleeve Shirt",
    category: "men",
    imageUrl: mensleveShirt4,
    price: 36.00,
    desc: "Fashionable shirt that fits perfectly with jeans or trousers."
  },
  {
    id: 15,
    title: "Men Full Sleeve Shirt",
    category: "men",
    imageUrl: mensleveShirt5,
    price: 28.50,
    desc: "Lightweight shirt designed for everyday comfort."
  },
  {
    id: 16,
    title: "Men Half Sleeve Shirt",
    category: "men",
    imageUrl: menHalfSeleve,
    price: 21.99,
    desc: "Cool and casual half-sleeve shirt made for summer."
  },
  {
    id: 17,
    title: "Men Jacket",
    category: "men",
    imageUrl: menJacket1,
    price: 49.99,
    desc: "Warm and durable jacket ideal for winter outings."
  },
  {
    id: 18,
    title: "Men Jacket",
    category: "men",
    imageUrl: menJacket2,
    price: 54.99,
    desc: "Trendy jacket designed for comfort and style."
  },
  {
    id: 19,
    title: "Men Multi-Color Shirt",
    category: "men",
    imageUrl: menMultishirt,
    price: 27.99,
    desc: "Vibrant multi-color shirt to brighten your wardrobe."
  },
  {
    id: 20,
    title: "Men Printed Shirt",
    category: "men",
    imageUrl: menPrintedShirt1,
    price: 26.50,
    desc: "Stylish printed shirt perfect for casual outings."
  },
  {
    id: 21,
    title: "Men Printed Shirt",
    category: "men",
    imageUrl: menPrintedShirt2,
    price: 24.99,
    desc: "Trendy printed shirt with premium fabric."
  },
  {
    id: 22,
    title: "Men Printed Shirt",
    category: "men",
    imageUrl: menPrintedShirt3,
    price: 23.49,
    desc: "Soft cotton shirt with a unique printed pattern."
  },
  {
    id: 23,
    title: "Men Printed Shirt",
    category: "men",
    imageUrl: menPrintedShirt4,
    price: 25.00,
    desc: "Comfortable and stylish printed shirt."
  },
  {
    id: 24,
    title: "Men Printed Shirt",
    category: "men",
    imageUrl: menPrintedShirt5,
    price: 28.00,
    desc: "Versatile printed shirt for everyday fashion."
  },
  {
    id: 25,
    title: "Men Printed Shirt",
    category: "men",
    imageUrl: menPrintedShirt6,
    price: 29.50,
    desc: "Premium printed shirt offering both style and comfort."
  },
  {
    id: 26,
    title: "Men Shirt",
    category: "men",
    imageUrl: menShirt1,
    price: 30.00,
    desc: "Elegant men's shirt suitable for office wear."
  },
  {
    id: 27,
    title: "Men Shirt",
    category: "men",
    imageUrl: menShirt2,
    price: 22.99,
    desc: "Comfortable cotton shirt perfect for daily use."
  },
  {
    id: 28,
    title: "Men Shirt",
    category: "men",
    imageUrl: menShirt3,
    price: 26.00,
    desc: "Stylish shirt ideal for casual gatherings."
  },
  {
    id: 29,
    title: "Men Shirt",
    category: "men",
    imageUrl: menShirt4,
    price: 33.50,
    desc: "Smart-fit shirt that enhances your look."
  },
  {
    id: 30,
    title: "Men Shirt",
    category: "men",
    imageUrl: menShirt5,
    price: 29.99,
    desc: "Soft and breathable shirt made for comfort."
  },
  {
    id: 31,
    title: "Men Shirt",
    category: "men",
    imageUrl: menShirt6,
    price: 34.99,
    desc: "High-quality shirt designed for all occasions."
  },

  // -------------------------------------
  //  WOMEN SECTION
  // -------------------------------------
  {
    id: 32,
    title: "Women Shirt",
    category: "women",
    imageUrl: womenShirt1,
    price: 28.99,
    desc: "Elegant women's shirt for casual and formal wear."
  },
  {
    id: 33,
    title: "Women Shirt",
    category: "women",
    imageUrl: womenShirt2,
    price: 27.50,
    desc: "Comfortable and stylish shirt perfect for everyday use."
  },
  {
    id: 34,
    title: "Women Shirt",
    category: "women",
    imageUrl: womenShirt3,
    price: 29.99,
    desc: "Soft fabric women’s shirt with a chic look."
  },
  {
    id: 35,
    title: "Women Shirt",
    category: "women",
    imageUrl: womenShirt4,
    price: 26.49,
    desc: "Trendy women's shirt ideal for modern fashion."
  },
  {
    id: 36,
    title: "Women Shirt",
    category: "women",
    imageUrl: womenShirt5,
    price: 24.99,
    desc: "Beautifully designed shirt made for comfort and style."
  },
  {
    id: 37,
    title: "Women Coat",
    category: "women",
    imageUrl: womenCoat,
    price: 59.99,
    desc: "Warm women's coat perfect for winter seasons."
  },
  {
    id: 38,
    title: "Women Jacket",
    category: "women",
    imageUrl: womenJacket1,
    price: 49.99,
    desc: "Trendy women's jacket ideal for cold weather."
  },
  {
    id: 39,
    title: "Women Jacket",
    category: "women",
    imageUrl: womenJacket2,
    price: 45.00,
    desc: "Comfortable jacket suitable for daily wear."
  },
  {
    id: 40,
    title: "Women Top",
    category: "women",
    imageUrl: womenTop,
    price: 22.50,
    desc: "Beautiful women's top perfect for casual outings."
  },
  {
    id: 41,
    title: "Women Trouser",
    category: "women",
    imageUrl: womenTrouser,
    price: 27.99,
    desc: "Comfortable and elegant trousers for women."
  }
];

export default productsData;
