import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "@/components/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
  render: () => <Button>Button</Button>
};
