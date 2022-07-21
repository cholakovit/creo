import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { colors } from '@mui/material'

export const creoTheme = (mode) => {
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                margin: 0,
                mode,
                ...(mode === "light"
                  ? {
                      backgroundColor: colors.orange[400],
                    }
                  : {
                      backgroundColor: colors.orange[900],
                    }),
              },
            },
          },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: colors.orange[200],
                  black: colors.grey[500],
                  white: colors.grey[100],
                  iconColor: colors.grey[900]
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: colors.orange[900],
                  black: colors.grey[900],
                  white: colors.grey[600],
                  iconColor: colors.grey[100]
                },
              }),
        },
      }),
    [mode]
  );

  return theme;
};
