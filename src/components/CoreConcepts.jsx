import CoreConcept from './CoreConcept';
import Section from './Section';
import { CORE_CONCEPTS } from '../data';

function CoreConcepts() {
  return (
    <Section id='core-concepts' title='CoreConcepts'>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;

/*

  1. ALTRO METODO IN USO PER IL PARENT

  <CoreConcept
    title={CORE_CONCEPTS[1].title}
    description={CORE_CONCEPTS[1].description}
    image={CORE_CONCEPTS[1].image}
  />
              
  <CoreConcept
    title={CORE_CONCEPTS[2].title}
    description={CORE_CONCEPTS[2].description}
    image={CORE_CONCEPTS[2].image}
  />
    
  <CoreConcept
    title={CORE_CONCEPTS[3].title}
    description={CORE_CONCEPTS[3].description}
    image={CORE_CONCEPTS[3].image}
  />

  */
