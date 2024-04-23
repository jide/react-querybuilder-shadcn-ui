import { QueryBuilder } from "react-querybuilder";
import { QueryBuilderDnD } from "@react-querybuilder/dnd";
import * as ReactDnD from "react-dnd";
import * as ReactDndHtml5Backend from "react-dnd-html5-backend";
import { QueryBuilderShadcnUi } from "@/components/react-querybuilder-shadcn-ui";

const values = [
  { name: "option1", label: "Option 1" },
  { name: "option2", label: "Option 2" },
  { name: "option3", label: "Option 3" },
  { name: "option4", label: "Option 4" },
];

const fields = [
  { name: "text", label: "text", inputType: "text" },
  { name: "select", label: "select", valueEditorType: "select", values },
  { name: "checkbox", label: "checkbox", valueEditorType: "checkbox" },
  { name: "radio", label: "radio", valueEditorType: "radio", values },
  { name: "textarea", label: "textarea", valueEditorType: "textarea" },
  {
    name: "multiselect",
    label: "multiselect",
    valueEditorType: "multiselect",
    values,
  },
  { name: "date", label: "date", inputType: "date" },
  {
    name: "datetime-local",
    label: "datetime-local",
    inputType: "datetime-local",
  },
  { name: "time", label: "time", inputType: "time" },
  { name: "field", label: "field", valueSources: ["field", "value"] },
];
export const operators = [
  { name: "=", label: "=" },
  { name: "in", label: "in" },
  { name: "between", label: "between" },
];
export const defaultQuery = {
  combinator: "and",
  rules: [
    { field: "text", operator: "=", value: "" },
    { field: "select", operator: "=", value: "option2" },
    { field: "checkbox", operator: "=", value: true },
    { field: "switch", operator: "=", value: true },
    { field: "radio", operator: "=", value: "option2" },
    { field: "textarea", operator: "=", value: "" },
    { field: "multiselect", operator: "in", value: "option1,option2" },
    { field: "date", operator: "=", value: "" },
    { field: "datetime-local", operator: "=", value: "" },
    { field: "time", operator: "=", value: "" },
    { field: "text", operator: "between", value: "A,Z" },
    { field: "select", operator: "between", value: "option2,option4" },
    { field: "field", operator: "=", value: "text", valueSource: "field" },
  ],
};
export const NullComponent = () => null;

export default function App() {
  return (
    <div className="m-12">
      <QueryBuilderShadcnUi>
        <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>
          <QueryBuilder
            controlClassnames={{ queryBuilder: "queryBuilder-branches" }}
            fields={fields}
            showNotToggle
          />
        </QueryBuilderDnD>
      </QueryBuilderShadcnUi>
    </div>
  );
}
