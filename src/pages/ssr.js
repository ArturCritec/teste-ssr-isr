export async function getServerSideProps() {
  return {
    props: {
      data: new Date().toISOString(),
    },
  };
}

export default function SSRPage({ data }) {
  return (
    <div>
      <h1>SSR Page</h1>
      <p>Data renderizada no servidor: {data}</p>
    </div>
  );
}
