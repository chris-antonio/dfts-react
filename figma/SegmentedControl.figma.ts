// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=162-6
// source=src/components/SegmentedControl.jsx
// component=SegmentedControl
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <SegmentedControl
      segments={[{ value: "day", label: "Day" }, { value: "week", label: "Week" }, { value: "month", label: "Month" }]}
      value={value}
      onChange={setValue}
    />
  `,
  id: 'segmented-control',
  metadata: { nestable: true },
}
