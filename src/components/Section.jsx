export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

/* La soluzione funziona per componenti wrapper (forwarding props - props proxy)

Lo spread operator in fondo alle props raccoglie tutte le props che sono passate al componente padre.
Serve per aggiungere id e className alla section.

Il nome props è arbitrario, può essere qualunque (es. style).


*/


