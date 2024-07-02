import React  from "react";
import Link from "next/link";


export default function Home() {
  const linkStyles="  text-white  hover:underline hover:text-green-500 text-"

  return(
    <main className="h-screen bg-black flex flex-col justify-center  ">
      <h1 className=" font-bold text-4xl text-white mb-6     ">CPRG 306: Web Development- 2- Assignments </h1>
      
      <div className="space-y-2  ">
      <div>

      <Link className={linkStyles} href="./week-2 " > Week 2 Assignment  </Link>

      </div>


      <div>

      <Link className={linkStyles} href="./week-3"> Week 3 Assignment </Link>

      </div>


      <div>

      <Link className={linkStyles} href="./week-4"> Week 4 Assignment </Link>

      </div>




      <div>

      <Link className={linkStyles} href="./week-5"> Week 5 Assignment </Link>

      </div>


      <div>

      <Link className={linkStyles} href="./week-6"> Week 6 Assignment </Link>

      </div>

      </div>




    </main>
  );
};
