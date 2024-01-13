export default function Circle(props) {
  return (
    <div
      className={`bg-${props.color} bg-JavaScript h-3 w-3 rounded-full ${props.className}`}
    ></div>
  );
}
