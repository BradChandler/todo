import AnimatedNumber from "react-animated-number";

export default function Stat({ stat }) {
  return (
    <li className="card stat-card grid__one grid__row-sm width__100">
      <h3 className="text__center text__md text__blue text__bold">Done</h3>
      <AnimatedNumber
        value={stat}
        style={{
          transition: "0.8s ease-out",
          fontSize: "32px",
          transitionProperty: "background-color, color, opacity",
          fontWeight: "bold",
        }}
        // frameStyle={(perc) =>
        //   perc === 100 ? {} : { backgroundColor: "#ffeb3b" }
        // }
        duration={1500}
        stepPrecision={0}
      />
    </li>
  );
}
