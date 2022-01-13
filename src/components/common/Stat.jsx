import AnimatedNumber from "react-animated-number";

export default function Stat({ stat }) {
  return (
    <div className="card stat-card grid__one grid__row-sm">
      <h4 className="text__center text__md text__blue text__bold">
        {stat.heading}
      </h4>
      <AnimatedNumber
        value={stat.number}
        style={{
          transition: "0.8s ease-out",
          fontSize: "32px",
          transitionProperty: "background-color, color, opacity",
          fontWeight: "bold",
        }}
        duration={1500}
        stepPrecision={0}
      />
    </div>
  );
}
