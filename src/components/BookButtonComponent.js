import { Button } from "@nextui-org/react";
import React from "react";

export function BookButtonComponent() {
  const [isBooked, setIsBooked] = React.useState(false);
  return (
    <Button
      className={
        isBooked ? "bg-transparent text-foreground border-default-200" : ""
      }
      color="primary"
      radius="full"
      size="sm"
      variant={isBooked ? "bordered" : "solid"}
      onPress={() => setIsBooked(!isBooked)}
    >
      {isBooked ? "Booked" : "Book"}
    </Button>
  );
}
