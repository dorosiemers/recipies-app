import React from "react";
import Image from "next/image";
import VeggiePizza from "../public/VeggiePizza.jpg";

export default function Veggie() {
  return (
    <div>
      <h1>Vegetarische Wunderwelten</h1>
      <p>Iss mehr Bohnen!</p>
      <Image src={VeggiePizza} alt="Veggie Pizza" layout="responsive" />
    </div>
  );
}
