import Hero from "./components/Hero";
import { getPersonalInfo } from "@/lib/queries";

export default async function Home() {
  const info = await getPersonalInfo();
  return <Hero info={info} />;
}
