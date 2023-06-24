import React, {useEffect} from "react";
import {
  Input,
  Card,
  Row,
  Col,
  Loading,
  Text,
  styled,
  Grid,
  Pagination,
  Tooltip,
  Button,
  StyledButton,
} from "@nextui-org/react";
import {useRouter} from "next/router";
import {levitating} from "@utils/animations";
import {Logo, UserTwitterCard, ThemeSwitch} from "@components";
import {useIsMobile} from "@hooks/use-media-query";
import {darkTheme} from "@theme/shared";

const StyledContainer = styled("div", {
  dflex: "center",
  position: "absolute",
  zIndex: "$max",
  "@xsMax": {
    display: "none",
  },
});

const HeroComponents = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const element = document.getElementById("nextui-tooltip");

      if (element) {
        element.remove();
      }
    }
  }, [isMobile]);

  return (
    <StyledContainer>
      <Card
        css={{
          p: 0,
          w: "200px",
          h: "200px",
          zIndex: "$2",
          top: "-75px",
          animation: `${levitating} 18s ease infinite 1s`,
        }}
      >
        <Card.Body css={{p: 0}}>
          <Card.Image
            alt="Hero Card background"
            height={400}
            objectFit="cover"
            src="/images/barbar.jpeg"
            width="100%"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bf: "saturate(180%) blur(10px)",
            bg: "$backgroundBlur",
            px: "$6",
            py: "$4",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row align="center">
            <Col>
              <Text
                css={{
                  textShadow: "0 2px 2px rgba(0,0,0,0.3)",
                  color: "$white",
                }}
                size={12}
              >
                Barbar Ahmad
              </Text>
            </Col>
    
          </Row>
        </Card.Footer>
      </Card>
    </StyledContainer>
  );
};

export default HeroComponents;
