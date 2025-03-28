"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
 
export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
 
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [700, 500]),
    springConfig
  );
  return (
    <>
      {" "}

      <div
        ref={ref}
        className="h-[300vh]   overflow-hidden   "
      >  
      
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
           <Header />
          <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.link}
              />
            ))}
          </motion.div>
          <motion.div className="mb-20 flex  flex-row space-x-20 ">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.link}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.link}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export const Header = () => {
  return (
    <>
      <div className="font-[raleway] max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Future of Managemnt 
      </h1>
      <p className=" font-[raleway] max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We're transforming the way people interact with real estate. With our
        innovative platform,
      </p>
    </div>
    </>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.link}
      className="group/product relative h-96 w-[30rem] shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 size-full rounded-xl object-cover object-left-top"
          alt={product.link}
        />
      </Link>
      <div className="group-hover/product: pointer-events-none absolute inset-0 size-full bg-black opacity-0"></div>
      {/* <h2 className="absolute bottom-4 left-4 text-black opacity-0 group-hover/product:opacity-100">
     a
      </h2> */}
    </motion.div>
  );
};
