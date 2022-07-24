import { Container, Card, Row, Text } from "@nextui-org/react";
import React from "react";

function HeroComponent() {
  return (
    <Container
      fluid
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Coming
        <Text
          css={{
            textGradient: "45deg, red -20%, $pink600 50%",
          }}
          span
          size={60}
        >
          Soon
        </Text>
      </Text>
      <Text
        h2
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
      >
        .devBarbar
      </Text>
    </Container>
  );
}

export default HeroComponent;
