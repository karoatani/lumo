import Nav from "./components/Nav";
import Button from "./components/Button";
import ImageCard from "./components/ImageCard";
import Card from "./components/Card";
import DiscountCard from "./components/DiscountCard";
import CardImage from "./components/CardImage";

export default function App() {
  return (
    <div className="flex flex-col gap-20 font-montserrat">
      <Nav />

      <div className="flex flex-col gap-8 items-center justify-center ">
        <p className="text-[#333C4F] font-bold tracking-[5px]">
          EMBRACE THE CHILL
        </p>
        <h2 className="font-bold text-3xl uppercase text-center text-[#333C4F]">
          Lumo’s <span className="text-[#479CFC]">Winter fest</span> Collection{" "}
          <span className="text-[#479CFC]">2024-2025</span>
        </h2>
        <p className="w-1/2 text-center text-lg text-[#333C4F]">
          Stay warm, stylish, and ready for winter.
        </p>
        <Button buttonText="PREP FOR THE WINTERFEST" bgColor="#333C4F" />
        <p className="text-[#479CFC] font-bold uppercase tracking-[4px] text-center">
          CHECK LAST YEAR’S EDITION
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-3xl uppercase text-center text-[#333C4F]">
          THIS YEAR’S WINTERFEST
        </h2>
        <p className="text-center p-4 tracking-wider  ">
          Introducing Lumo's Winterfest 2024/2025, where warmth meets
          cutting-edge style. This season’s collection blends modern, functional
          designs with premium fabrics to keep you cozy during the coldest
          months. From sleek, insulated jackets to effortlessly stylish
          knitwear, each piece is crafted with both comfort and fashion in mind.
          Whether you're hitting the slopes or strolling through the city,
          Lumo's Winterfest line ensures you're prepared for every winter
          adventure—while looking your absolute best. Stay ahead of the trends
          and embrace the chill with confidence.
        </p>

        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <ImageCard url="/images/picture-girls.svg" />
          </div>
          <div className="w-1/2  p-2">
            <ImageCard url="/images/singlegirl.svg" />
          </div>
          <div className="w-1/2 p-2">
            <ImageCard url="/images/snowgirl.svg" />
          </div>
          <div className="w-1/2 p-2">
            <ImageCard url="/images/headset.svg" />
          </div>

          <div className="flex flex-col gap-4 p-4">
            <Card
              cardHeader="Innovative Fabrics"
              cardTitle="Our Best Technology Yet"
              cardBody="Lumo’s Winterfest collection uses cutting-edge, weather-resistant fabrics that adapt to your environment. Stay warm without overheating, and enjoy water-repellent, windproof materials that ensure comfort in every condition."
              cardImage="/images/cardicons.svg"
            />

            <Card
              cardHeader="Sustainable Craft"
              cardTitle="Eco-Friendly and Ethical"
              cardBody="Every garment in the 2024/2025 line is crafted with sustainability in mind. We prioritize eco-friendly materials and responsible production practices, ensuring that you can stay stylish while supporting the planet."
              cardImage="/images/knit.svg"
            />

            <Card
              cardHeader="Tailored Fit"
              cardTitle="Designed for Every Body"
              cardBody="Our Winterfest clothing line features inclusive sizing and tailored fits, making it easy to find pieces that flatter and move with you. Comfort and confidence come standard with every item."
              cardImage="/images/needle.svg"
            />

            <Card
              cardHeader="Versatile Style"
              cardTitle="Seamless Transition "
              cardBody="Whether you're heading to the office or exploring the outdoors, Lumo’s Winterfest collection blends functionality with sleek design. Layer effortlessly for any occasion, making every outfit a statement in warmth and style."
              cardImage="/images/hanger.svg"
            />
            <DiscountCard />
          </div>


        </div>
      </div>

      <div className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl uppercase text-center text-[#333C4F]">
      UPCOMING FLEET
        </h2>
        <div className="flex flex-col p-5 gap-4">

        <CardImage cardTitle="WINTER FEST LINE" cardBody="Ice Duchess" cardImage="/images/pexels-tugay-aydin-3209475-5652356 1.svg" />
        <CardImage cardTitle="WINTER FEST LINE" cardBody="Ice Duchess" cardImage="/images/womanforest.svg" cardImageDirectionRight={false}/>
        <CardImage cardTitle="WINTER FEST LINE" cardBody="Ice Duchess" cardImage="/images/womanwhite.svg" />
        </div>
      </div>
    </div>
  );
}
