function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="pagination">
      <div className="pages">
        <button
          className="btn"
          onClick={() => setPage(1)}
          disabled={page === 1}
        >
          « Primero
        </button>
        <button
          className="btn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          ‹ Anterior
        </button>
        <span className="page-info">
          Página {page} de {totalPages}
        </span>
        <button
          className="btn"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Siguiente ›
        </button>
        <button
          className="btn"
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
        >
          Último »
        </button>
      </div>
    </div>
  );
}

export default Pagination;
