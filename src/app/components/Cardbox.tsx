import React from "react";
import Card from "./Card";
import img1 from "/public/images/testimg.jpeg";

type CardboxProps = {
  buttonCol: string; // 0 = red, 1 = blue, 2 = green
};

const Cardbox: React.FC<CardboxProps> = ({ buttonCol }) => {
  return (
    <div className="flex justify-around w-screen ">
      <Card
              imagePath={img1}
              buttonColour={buttonCol}
              headerText="FireShip"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link={""}      />
      <Card
              imagePath={img1}
              buttonColour={buttonCol}
              headerText="FireShip"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link={""}      />
      <Card
              imagePath={img1}
              buttonColour={buttonCol}
              headerText="FireShip"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link={""}      />
      {/* Add more Card components as needed */}
    </div>
  );
};

export default Cardbox;