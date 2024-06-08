export default function Button({ type, children }) {
  return (
    <div className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {children}
    </div>
  );
}
