function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;

/* la prop ButtonContainer viene utilizzata come componente custom.
Dichiarabile nel padre Examples viene riutilizzata qua. 
L'uguale dopo la props è il valore di default ed è il motivo
per cui non compare nel componente Examples in questo caso */
