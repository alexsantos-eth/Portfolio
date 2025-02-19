/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import Footer from "@/components/footer";
import GitHubContributions from "@/components/github";
import Hero from "@/components/hero";
import ProjectShowcase from "@/components/showcase";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./globals.css";

const theme = createTheme({
  palette: {
    // @ts-ignore
    aux: {
      main: "#05183d",
      dark: "#05183d",
    },
    primary: {
      main: "#07575b",
      dark: "#07575b",
    },
    mode: "light",
    background: {
      default: "rgba(250, 250, 250)",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.7)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1350,
      xl: 1536,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5em",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.2em",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1em",
      fontWeight: "bold",
    },
    subtitle2: {
      lineHeight: 1.3,
    },
  },
  components: {
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "0 24px 16px 24px",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        fontSizeLarge: "200px",
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",

          "& > div:first-of-type ": {
            height: "100%",

            "& > div:first-of-type ": {
              height: "100%",

              "& > div:nth-of-type(1)": {
                position: "relative",
                left: " 6px",
              },
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: "var(--radius)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          borderRadius: "var(--radius)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius)",
          fontSize: "1rem",
          padding: "4px 16px",
          height: "unset",
        },
        contained: {
          fontWeight: "bold",
        },
        outlined: {
          padding: "3px 16px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "100%",

          "& .MuiSvgIcon-root": {
            opacity: 1,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiIconButton-root": {
            backgroundColor: "transparent",
            border: "none",
            opacity: 1,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "100%",
          "& .MuiSvgIcon-root": {
            opacity: 1,
          },
        },
        root: {
          borderRadius: "var(--radius)",
          transition: "border-color 0.16s linear",

          "& .MuiSvgIcon-root": {
            opacity: 0.6,
          },

          "& .MuiBadge-badge": {
            top: "-10px",
            right: "-10px",
            fontSize: "10px",
            fontWeight: "bold",
            height: 25,
            minWidth: 25,
            borderRadius: "100%",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: "var(--radius)",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          zIndex: 10,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "unset",
        },
        regular: {
          minHeight: "unset",
        },
        gutters: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Hero />
          <ProjectShowcase />
          <GitHubContributions />
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
