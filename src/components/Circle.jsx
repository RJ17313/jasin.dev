export default function Circle(props) {
  const languageColorVariants = {
    Python: "bg-[#3572a5]",
    JavaScript: "bg-[#f1e05a]",
  };
  return (
    <div
      className={`h-3 w-3 rounded-full ${
        languageColorVariants[props.language]
      } ${props.className}`}
    ></div>
  );
}
