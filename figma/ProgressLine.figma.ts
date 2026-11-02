// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=61-163
// source=src/components/ProgressLine.jsx
// component=ProgressLine
import figma from 'figma'
const instance = figma.selectedInstance

const value = instance.getEnum("Value", { "0": 0, "25": 25, "50": 50, "75": 75, "100": 100 })

export default {
  example: figma.code`
    <ProgressLine value={${value}} showLabel label="Progress" />
  `,
  id: 'progress-line',
  metadata: { nestable: true },
}
