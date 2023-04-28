import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CloudIcon from "@mui/icons-material/Cloud";

export default function ImageAvatars({ src }: any) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={src}></Avatar>
    </Stack>
  );
}
