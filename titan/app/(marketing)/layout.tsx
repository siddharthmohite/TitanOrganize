import { Navbar } from "./_components/Navbar";

export default function MarketingLayout ({children}:{children:React.ReactNode}) {
return ( 
  <div className="bg-gradient-to-r min-h-screen from-white via-orange-500 to-blue-900">
    <Navbar/>
    <main className="h-full pt-40">
      {children}
    </main>
  </div>
    
)
}