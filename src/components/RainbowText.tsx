export const RainbowText = ({ text }: { text: string }) => {
  const colors = [
    "var(--lavender)",
    "var(--blue)",
    "var(--mint-green)",
    "var(--yellow)",
    "var(--orange)",
    "var(--pink)",
  ];

  return (
    <h1>
      {text.split("").map((char, i) => (
        <span key={i} style={{ color: colors[i % colors.length] }}>
          {char}
        </span>
      ))}
    </h1>
  );
};
