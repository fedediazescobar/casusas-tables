function BarraBusqueda({ query, setQuery }) {
  return (
    <div>
      <input
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search"
      />
    </div>
  );
}

export default BarraBusqueda;
