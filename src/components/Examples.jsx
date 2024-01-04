import Section from './Section';
import Tabs from './Tabs';
import TabButton from './TabButton';
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
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>

      {selectedTopic === undefined ? <p> Please select a topic. </p> : null}
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
