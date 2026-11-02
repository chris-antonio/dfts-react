// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=61-115
// source=src/components/Tooltip.jsx
// component=Tooltip
import figma from 'figma'
const instance = figma.selectedInstance

const text = instance.getString('Text')
// The kit supports top and bottom placements; Left/Right fall back to top.
const placement = instance.getEnum("Placement", { "Top": "top", "Bottom": "bottom", "Left": "top", "Right": "top" })

export default {
  example: figma.code`
    <Tooltip label="${text}" placement="${placement}">
      <Button variant="ghost">Trigger</Button>
    </Tooltip>
  `,
  id: 'tooltip',
  metadata: { nestable: true },
}
