export default function DataInstalacao({ value, onChange }) {
    return (
      <div className="rounded-lg m-5">
        <label>Data de instalação do equipamento: </label>
        <input
          className="h-10 w-[360px] rounded-md text-black"
          type="date"
          value={value} // Valor controlado
          onChange={(e) => onChange(e.target.value)} // Passa o valor para o componente pai
        />
      </div>
    );
  }