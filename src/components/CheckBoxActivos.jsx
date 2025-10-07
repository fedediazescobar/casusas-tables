function CheckBoxActivos({ onlyActivo, setonlyActivo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={onlyActivo}
        onChange={(e) => setonlyActivo(e.target.checked)}
      />
      <label>Activos</label>
    </div>
  );
}

export default CheckBoxActivos;
