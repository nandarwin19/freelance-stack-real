import axios from "axios";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep");

  const infoBlockData = processInfoBlocks(data);
  console.log(infoBlockData);

  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  // const infoBlockData = {
  //   headline: "Welcome to barrel.",
  //   text: (
  //     <p className="copy">
  //       "We are a small team of passionate people who love to make your life
  //       easier. We are here to help you find the perfect barrel for your needs.
  //       We offer a wide range of barrels for different purposes. Whether you are
  //       looking for a barrel to store your wine, beer, or whiskey, we have got
  //       you covered. Our barrels are made from the finest quality wood and are
  //       designed to last for years. So why wait? Browse our collection today and
  //       find the perfect barrel for your needs.",
  //     </p>
  //   ),
  //   button: (
  //     <button className="btn  btn--medium btn--turquoise">Book now</button>
  //   ),
  //   revered: false,
  // };
  return (
    <main>
      <HeroSection headline={heroHeadline} />
      <InfoBlock data={infoBlockData} />
      <InfoBlock data={{ ...infoBlockData, reversed: true }} />
    </main>
  );
}
