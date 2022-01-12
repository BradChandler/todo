import Stat from "./Stat";

export default function Stats() {
  return (
    <section className="container">
      <ul className="flex__center flex__wrap padding__md">
        <Stat stat={20} />
        <Stat stat={5} />
        <Stat stat={0} />
      </ul>
    </section>
  );
}
