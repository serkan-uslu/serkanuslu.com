import { Button } from "@mui/material";

import TestComponent from "@/components/button";

export default function Home() {
  return (
    <>
      <Button variant="outlined" color="secondary">
        Sample Button
      </Button>
      <TestComponent></TestComponent>
    </>
  );
}
