import TabButton from './TabButton';
import Section from './Section';
import { useState } from 'react';
import { EXAMPLES } from '../data.js';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  function handleClick(selectedButton) {
    // SelectedButton => 'components', 'JSX', 'props', 'state'
    setSelectedTopic(selectedButton);
  }
  return (
    <Section id='examples' title='Examples'>
      {/* Children in questo caso è il nome della Tab, e sta in mezzo 
          al tag del componente (vedi il componente child) */}
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onClick={() => handleClick('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => handleClick('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => handleClick('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onClick={() => handleClick('state')}
        >
          State
        </TabButton>
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
    </Section>
  );
}

export default Examples;

/*

  1. { EXAMPLES [selectedTopic] è un modo di accedere alla stringa che si accoppia 
  agli oggetti dentro EXAMPLES }  

  2. Altro metodo per la renderizzazione condizionale è inserire una const con elemento HTML + un  ciclo 
  if prima del return

  */
