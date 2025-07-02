import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface HeaderProps {
  countBooksInCart: number;
  label?: string;
  onClickBack?: VoidFunction;
}

export const Header = ({
  countBooksInCart,
  label,
  onClickBack,
}: HeaderProps) => {
  return (
    <Box
      sx={{
        p: 1,
        top: 0,
        display: "flex",
        position: "sticky",
        justifyContent: "space-between",
        backgroundColor: "background.default",
        boxShadow: (theme) =>
          `0px 4px 12px 6px ${theme.palette.background.surface}`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {!!label && (
          <Typography
            sx={{
              px: 1,
            }}
            variant="h6"
          >
            {label}
          </Typography>
        )}
        {!!onClickBack && (
          <Button onClick={onClickBack}>
            <ArrowBackIcon sx={{ color: "text.secondary" }} />
          </Button>
        )}
      </Box>
      <IconButton>
        <Badge
          color="primary"
          overlap="circular"
          badgeContent={countBooksInCart}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};
