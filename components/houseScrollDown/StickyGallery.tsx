"use client";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
export default function StickyGallery(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="my-16 p-8 ">
        <section className="w-full   text-white  ">
          <div className="grid grid-cols-12 gap-2">
            {/* left part */}
            <div className="col-span-4 grid gap-2">
              <figure className=" w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
                
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className=" w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
              
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className=" w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
                
                  src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className="w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
               
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className="w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
               
                  src="https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
            </div>
            {/* sticky part */}
            <div className="sticky top-0 col-span-4 grid h-screen w-full  grid-rows-3 gap-2">
              <figure className="size-full ">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
                
                  src="https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop"
                  alt=""
                  className="size-full rounded-md object-cover align-bottom  transition-all duration-300 "
                />
              </figure>
              <figure className="size-full ">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
               
                  src="https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&auto=format&fit=crop"
                  alt=""
                  className="size-full rounded-md object-cover align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className="size-full ">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
                
                  src="https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&auto=format&fit=crop"
                  alt=""
                  className="size-full rounded-md object-cover align-bottom  transition-all duration-300 "
                />
              </figure>
            </div>
            {/* right part */}
            <div className="col-span-4 grid gap-2">
              <figure className="w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
                
                  src="https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className="w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
                
                  src="https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className="w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
             
                  src="https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className="w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
                
                  src="https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
              <figure className="w-full">
                <Image
quality={70}                   width={500}
                   height={100}
                  loading="lazy"
                
                  src="https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&auto=format&fit=crop"
                  alt=""
                  className="h-96 w-full rounded-md object-cover  align-bottom transition-all duration-300 "
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
