import { GripVertical } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import type { DragHandleProps } from "react-querybuilder";

export type ShadcnUiDragHandleProps = DragHandleProps &
  ComponentPropsWithRef<"span">;

export const ShadcnUiDragHandle = forwardRef<
  HTMLSpanElement,
  ShadcnUiDragHandleProps
>(({ className, title }, dragRef) => (
  <span ref={dragRef} className={className} title={title}>
    <GripVertical className="w-5 h-5 text-input" />
  </span>
));

ShadcnUiDragHandle.displayName = "ShadcnUiDragHandle";
