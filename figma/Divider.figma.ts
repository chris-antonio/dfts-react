// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=141-2
// source=src/components/Divider.jsx
// component=Divider
import figma from 'figma'
const instance = figma.selectedInstance

const orientation = instance.getEnum("Orientation", { "Horizontal": "horizontal", "Vertical": "vertical" })

export default {
  example: figma.code`
    <Divider orientation="${orientation}" />
  `,
  id: 'divider',
  metadata: { nestable: true },
}
