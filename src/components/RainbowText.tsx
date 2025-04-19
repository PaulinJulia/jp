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
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
        fontSize: "5rem",
        fontWeight: "bold",
      }}
    >
      {text.split("").map((char, i) => (
        <span key={i} style={{ color: colors[i % colors.length] }}>
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </h1>
  );
};
