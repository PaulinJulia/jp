import { useRouteError, ErrorResponse, Link } from "react-router-dom";

export default function ErrorRoute() {
  const error = useRouteError();
  console.error(error);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "3rem",
        fontSize: "1rem",
        fontWeight: "bold",
      }}
    >
      <h1>Error</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as ErrorResponse).statusText}</i>
      </p>
      <Link to={"/"}>Tillbaka till startsida</Link>
    </main>
  );
}