import { Input } from "@/components/ui/input";

export default function GenericInput({ campo, placeholder, value, onChange }) {
  return (
    <div className="m-5">
      <label>{campo}</label>
      <Input
        placeholder={placeholder}
        value={value} // Valor controlado
        onChange={(e) => onChange(e.target.value)} // Captura o valor do input
      />
    </div>
  );
}
