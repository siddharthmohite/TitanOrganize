import { Button } from "@/components/ui/button";
import Link from 'next/link';



import Image from "next/image";

export default function Home() {
 return(

  <div className="bg-gradient-to-r min-h-screen from-white via-orange-500 to-blue-900">

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

      <h1 className="font-semibold text-7xl text-center">
        Titan Organize
      </h1>
      <div className="mt-8"></div>
<div className="flex justify-center">

      
      <Link href='/dashboard'>
        <Button className="bg-blue-900">
          Get Started
        </Button>
      </Link>
</div>
     
       
   
    </div>
  </div>
 );
  
   
}
