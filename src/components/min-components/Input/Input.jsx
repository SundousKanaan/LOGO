import "./Input.css";

export default function Input({ type, placeholder, required }) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
}
