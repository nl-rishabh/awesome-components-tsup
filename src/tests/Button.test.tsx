import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

// import { checkAccessibility } from "@/utils/test-utils/accessibility";
import { Button } from "@/components/button";

describe("Button Component Tests", () => {
  // checkAccessibility(<Button>Button</Button>);

  test("The button has role of button.", () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
