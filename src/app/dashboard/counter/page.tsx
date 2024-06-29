
import { CartCouter } from "@/shopping-card";


export const metadata = {
  title: "Shopping Cart",
  description: "Counter Page description...",
}

// prc + tab
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Products in the car</h1>

     
    <CartCouter value={20} />

    </div>
  );
}
