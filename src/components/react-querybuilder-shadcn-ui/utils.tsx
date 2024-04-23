import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import type { OptionList } from "react-querybuilder";
import { isOptionGroupArray } from "react-querybuilder";

export const toSelectOptions = (list: OptionList) =>
  isOptionGroupArray(list)
    ? list.map((og) => (
        <SelectGroup key={og.label}>
          <SelectLabel>{og.label}</SelectLabel>
          {og.options.map((opt) => (
            <SelectItem
              key={opt.name}
              value={opt.name ?? ""}
              disabled={!!opt.disabled}
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      ))
    : Array.isArray(list)
    ? list.map((opt) => (
        <SelectItem
          key={opt.name}
          value={opt.name ?? ""}
          disabled={!!opt.disabled}
        >
          {opt.label}
        </SelectItem>
      ))
    : null;
