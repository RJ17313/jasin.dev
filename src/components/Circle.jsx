export default function Circle(props) {
  return (
    <div
      className={`h-3 w-3 rounded-full ${props.color ?? `bg-yellow-400`}`}
    ></div>
  );
}
