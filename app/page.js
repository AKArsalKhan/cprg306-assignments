import React  from "react";
import Link from "next/link";


export default function Home() {
  const linkStyles="underline text-blue-600 hover:text grey-800 "

  return(
    <main className="h-screen ">
      <h1 className="text-x1 font-bold ">CPRG 306: Web Development-2 - Assignment </h1>

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






    </main>
  );
};
