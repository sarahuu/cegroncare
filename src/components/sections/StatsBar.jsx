import Container from "../ui/Container";
import Stat from "../ui/Stat";
import { stats } from "../../data/content";

export default function StatsBar() {
  return (
    <section className="bg-primary">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4 lg:py-12">
        {stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </Container>
    </section>
  );
}
