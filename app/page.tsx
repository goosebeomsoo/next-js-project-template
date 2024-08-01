import { styled } from "@/styled-system/jsx";

export default function Home() {
  const MainDiv = styled("div", {
    base: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      padding: "24px",
      background: "black",
    },
  });

  const Heading = styled("h1", {
    base: {
      color: "white",
      fontSize: "4vw",
    },
  });

  return (
    <MainDiv>
      <Heading>Next js template for starting any project!</Heading>
    </MainDiv>
  );
}
