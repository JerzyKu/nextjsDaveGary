import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h1 className={inter.className}>Hello world!</h1>;
}
