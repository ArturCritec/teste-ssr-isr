export async function getStaticProps() {
  return {
    props: {
      data: new Date().toISOString(),
    },
    revalidate: 10, // Revalida a cada 10 segundos
  };
}

export default function ISRPage({ data }) {
  return (
    <div>
      <h1>ISR Page</h1>
      <p>Data gerada com ISR: {data}</p>
    </div>
  );
}
