import React, {useState, useEffect} from "react";
import {
  Logo,
  MenuToggle,
  Badge,
  Twitter,
  Discord,
  Github,
  ThemeToggle,
  Heart,
  NotifyBanner,
} from "@components";
import {Box} from "@primitives";
import cn from "classnames";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import {Row, Col, Spacer, Link, Button, Container, useBodyScroll} from "@nextui-org/react";
import {Route} from "@lib/docs/page";
import {useRouter} from "next/router";
import {useMediaQuery} from "@hooks/use-media-query";
import {isActive} from "@utils/links";
import {includes} from "lodash";
import {darkTheme} from "@theme/shared";
import {pulse} from "@utils/animations";

import {StyledNavContainer, StyledNavMainContainer} from "./styles";

export interface Props {
  routes?: Route[];
  hasNotify?: boolean;
  isHome?: boolean;
}

const MobileNavigation = dynamic(() => import("../components/mobile-navigation"), {
  ssr: false,
});


const Navbar: React.FC<Props> = ({isHome, hasNotify, routes}) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery(960);
  const [, setBodyHidden] = useBodyScroll(null, {scrollLayer: true});
  const [scrollPosition, setScrollPosition] = useState(0);

  const isDetached = hasNotify ? scrollPosition > 40 : scrollPosition > 0;

  useEffect(() => {
    setScrollPosition((typeof window !== "undefined" && window.pageYOffset) || 0);
    window.addEventListener("scroll", onScroll.bind(this));

    return () => {
      window.removeEventListener("scroll", onScroll.bind(this));
    };
  }, []);

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset);
    });
  };

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false);
      setBodyHidden(false);
    }
  }, [isMobile]);

  const onToggleNavigation = () => {
    setExpanded(!expanded);
    isMobile && setBodyHidden(!expanded);
  };

  const showBlur = !!expanded || !!isDetached || isHome;

  return (
    <StyledNavMainContainer id="navbar-container">
      {hasNotify && (
        <NotifyBanner
          href="https://github.com/nextui-org/nextui/discussions/1035"
          isVisible={!isDetached}
          showAnimatedText={false}
          showIcon={false}
          showSparkles={false}
          text="Read: Next move (v2)"
        />
      )}
      <StyledNavContainer isDetached={isDetached} showBlur={showBlur}>
        <Container alignItems="center" as="nav" display="flex" lg={true} wrap="nowrap">
          <Col
            className="navbar__logo-container"
            css={{
              "@mdMax": {
                width: "100%",
              },
            }}
          >

          </Col>
{/*   
          <Col className="navbar__search-container">
            <Row
              align="center"
              className="navbar__search-row"
              css={{
                position: "initial",
                "@mdMax": {
                  jc: "center",
                },
              }}
              justify="flex-end"
            >
              <Row
                align="center"
                className="navbar__social-icons-container"
                css={{
                  width: "initial",
                  "@mdMax": {
                    d: "none",
                  },
                }}
                gap={1}
                justify="flex-end"
              >
                <Link
                  className="navbar__social-icon"
                  css={{
                    m: "0 6px",
                    "& svg": {
                      transition: "$default",
                    },
                    "&:hover": {
                      "& svg": {
                        opacity: 0.7,
                      },
                    },
                  }}
                  href="https://twitter.com/getnextui"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Twitter size={24} />
                </Link>
                <Link
                  className="navbar__social-icon"
                  css={{
                    m: "0 6px",
                    "& svg": {
                      transition: "$default",
                    },
                    "&:hover": {
                      "& svg": {
                        opacity: 0.7,
                      },
                    },
                  }}
                  href="https://discord.gg/9b6yyZKmH4"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Discord size={24} />
                </Link>
                <Link
                  className="navbar__social-icon"
                  css={{
                    m: "0 6px",
                    "& svg": {
                      transition: "$default",
                    },
                    "&:hover": {
                      "& svg": {
                        opacity: 0.7,
                      },
                    },
                  }}
                  href="https://github.com/nextui-org/nextui"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github size={24} />
                </Link>
                <ThemeToggle
                  className="navbar__social-icon"
                  css={{
                    m: "0 6px",
                    "& svg": {
                      transition: "$default",
                    },
                    "&:hover": {
                      "& svg": {
                        opacity: 0.7,
                      },
                    },
                  }}
                />
              </Row>
              <Spacer x={0.5} />
              <Button
                auto
                as="a"
                css={{
                  bg: "$gray50",
                  color: "$text",
                  maxH: "38px",
                  px: "$8",
                  "@mdMax": {
                    d: "none",
                  },
                  "& .nextui-button-icon": {
                    mr: "$2",
                  },
                  "& .nextui-button-icon svg": {
                    transition: "$default",
                  },
                  "&:hover": {
                    "& .nextui-button-icon svg": {
                      animation: `${pulse} 1s infinite`,
                    },
                  },
                  [`.${darkTheme} &`]: {
                    bg: "rgba(51, 51,51,0.7)",
                    "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
                      bf: "saturate(180%) blur(14px)",
                    },
                  },
                }}
                href="https://patreon.com/jrgarciadev"
                icon={<Heart filled fill="var(--nextui-colors-red600)" size={20} />}
                rel="noreferrer"
                target="_blank"
              >
                Sponsor
              </Button>
            </Row>
          </Col> */}
          <Col
            className="navbar__menu-container"
            css={{
              size: "100%",
              display: "none",
              "@mdMax": {
                display: "flex",
                justifyContent: "flex-end",
              },
            }}
          >
            <ThemeToggle className="navbar__social-icon-mobile" css={{m: "0"}} />
            <Box
              className="navbar__menu-arrow noselect"
              css={{
                height: "100%",
                minHeight: "40px",
                minWidth: "30px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              onClick={onToggleNavigation}
            >
              <MenuToggle expanded={expanded} />
            </Box>
          </Col>
          <MobileNavigation
            detached={isDetached}
            hasNotify={hasNotify}
            opened={expanded}
            routes={routes}
            onClose={() => {
              setExpanded(false);
              setBodyHidden(false);
            }}
          />
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  );
};

export default Navbar;
