import {
  X,
  Copy,
  Unlock,
  Lock,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";
import type {
  Classnames,
  Controls,
  FullField,
  Translations,
} from "react-querybuilder";
import { getCompatContextProvider } from "react-querybuilder";
import { ShadcnUiActionElement } from "./ShadcnUiActionElement";
import { ShadcnUiActionElementIcon } from "./ShadcnUiActionElementIcon";
import { ShadcnUiValueEditor } from "./ShadcnUiValueEditor";
import { ShadcnUiValueSelector } from "./ShadcnUiValueSelector";
import { ShadcnUiNotToggle } from "./ShadcnUiNotToggle";
import { ShadcnUiDragHandle } from "./ShadcnUiDragHandle";

import "./styles.scss";

export * from "./ShadcnUiActionElement";
export * from "./ShadcnUiValueSelector";

export const shadcnUiControlClassnames = {
  ruleGroup: "rounded-lg shadow-sm border bg-background",
} satisfies Partial<Classnames>;

export const shadcnUiControlElements = {
  actionElement: ShadcnUiActionElement,
  removeGroupAction: ShadcnUiActionElementIcon,
  removeRuleAction: ShadcnUiActionElementIcon,
  valueSelector: ShadcnUiValueSelector,
  valueEditor: ShadcnUiValueEditor,
  notToggle: ShadcnUiNotToggle,
  dragHandle: ShadcnUiDragHandle,
} satisfies Partial<Controls<FullField, string>>;

export const shadcnUiTranslations = {
  addRule: {
    label: (
      <>
        <Plus className="w-4 h-4 mr-2" /> Rule
      </>
    ),
  },
  addGroup: {
    label: (
      <>
        <Plus className="w-4 h-4 mr-2" /> Group
      </>
    ),
  },
  removeGroup: { label: <X className="w-4 h-4" /> },
  removeRule: { label: <X className="w-4 h-4" /> },
  cloneRuleGroup: { label: <Copy className="w-4 h-4" /> },
  cloneRule: { label: <Copy className="w-4 h-4" /> },
  lockGroup: { label: <Unlock className="w-4 h-4" /> },
  lockRule: { label: <Unlock className="w-4 h-4" /> },
  lockGroupDisabled: { label: <Lock className="w-4 h-4" /> },
  lockRuleDisabled: { label: <Lock className="w-4 h-4" /> },
  shiftActionDown: { label: <ChevronDown className="w-4 h-4" /> },
  shiftActionUp: { label: <ChevronUp className="w-4 h-4" /> },
} satisfies Partial<Translations>;

export const QueryBuilderShadcnUi = getCompatContextProvider({
  key: "shadcn/ui",
  controlClassnames: shadcnUiControlClassnames,
  controlElements: shadcnUiControlElements,
  translations: shadcnUiTranslations,
});
