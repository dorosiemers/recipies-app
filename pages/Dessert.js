import React from "react";
import Image from "next/image";

export default function Dessert() {
  return (
    <div>
      <h1>Desserts to die for</h1>
      <p>Sugar kills you</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="Blueberry Cake Dessert"
        width={2400}
        height={1599}
        layout="responsive"
      />
    </div>
  );
}
