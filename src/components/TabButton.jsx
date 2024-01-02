const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;

// Alternativa: inserire props in alto e props.children all'interno del componente

/* 

1. onClick è l'evento click

2. onSelect è la props che lega il componente padre App al componente figlio TabButton. 

3. Il componente padre App grazie alla prop onSelect richiama la funzione handleClick,
che contiene il codice di quello che capita in seguito all'evento onClick.

4. La funzione anonima legata ad onSelect nel componente parent, permette l'inserimento 
di un parametro specifico in handleClick.


*/
