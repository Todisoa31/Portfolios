import { caseStudies } from "../data/caseStudies";
import Container from "./ui/container";
import SectionTitle from "./ui/sectionTitle";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="glass">
      <Container>

        <SectionTitle
          subtitle="IMPACT"
          title="Études de cas"
        />

        <div className=" space-y-8">

          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="
                bg-gray-800
                border
                border-gray-700
                rounded-2xl
                p-8
              "
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <div className="mt-6 grid md:grid-cols-3 gap-6">

                <div>
                  <h4 className="text-red-400">
                    Challenge
                  </h4>

                  <p>{item.challenge}</p>
                </div>

                <div>
                  <h4 className="text-yellow-400">
                    Solution
                  </h4>

                  <p>{item.solution}</p>
                </div>

                <div>
                  <h4 className="text-green-400">
                    Résultat
                  </h4>

                  <p>{item.result}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}