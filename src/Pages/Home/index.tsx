import { useHome } from "../../hooks/page/Home/useHome";

export function Home() {
  const data = useHome();
  return (
    <>
      <h1>Home Casa</h1>
    </>
  );
}
