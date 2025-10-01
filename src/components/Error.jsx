export default function Error({ title, massage }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{massage}</p>
    </div>
  );
}
