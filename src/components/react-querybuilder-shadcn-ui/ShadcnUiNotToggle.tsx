import { Switch } from "@/components/ui/switch";
import type { ComponentPropsWithoutRef } from "react";
import type { NotToggleProps } from "react-querybuilder";

export type ChakraNotToggleProps = NotToggleProps &
  ComponentPropsWithoutRef<typeof Switch>;

export const ShadcnUiNotToggle = ({
  className,
  handleOnChange,
  checked,
  disabled,
}: ChakraNotToggleProps) => {
  return (
    <Switch
      className={className}
      disabled={disabled}
      checked={checked}
      onCheckedChange={handleOnChange}
    />
  );
};

ShadcnUiNotToggle.displayName = "ShadcnUiNotToggle";
