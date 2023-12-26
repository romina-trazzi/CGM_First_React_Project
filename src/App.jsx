import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/coreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

import { useState } from 'react';

// Componente padre: parametro spread + array di oggetti
function App() {
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  function handleClick(selectedButton) {
    // SelectedButton => 'components', 'JSX', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts </h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>

          {/* Children in questo caso è il nome della Tab, e sta in mezzo 
          al tag del componente (vedi il componente child) */}
          <menu>
            <TabButton onSelect={() => handleClick('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick('jsx')}> JSX </TabButton>
            <TabButton onSelect={() => handleClick('props')}> Props </TabButton>
            <TabButton onSelect={() => handleClick('state')}> State </TabButton>
          </menu>

          {selectedTopic === undefined ? <p> Please select a topic. </p> : null}

          {/*  ALTERNATIVA: Se selectedTopic non esiste (alias è undefined):
          {!selectedTopic && <p>Please select a topic </p> } */}

          {selectedTopic ? (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}

          {/*  ALTERNATIVA: Se selectedTopic esiste (alias è popolato):
          {selectedTopic && ( <div><h3> ecc ecc </h3></div> ) ecc. } */}
        </section>
      </main>
    </div>
  );
}

export default App;

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


  2. { EXAMPLES [selectedTopic] è un modo di accedere alla stringa che si accoppia 
  agli oggetti dentro EXAMPLES }  


*/

