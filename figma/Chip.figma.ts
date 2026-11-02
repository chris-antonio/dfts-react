// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=58-75
// source=src/components/Chip.jsx
// component=Chip
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum("Style", { "Filled": "filled", "Outlined": "outlined" })
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const error = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": true, "Disabled": false })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <Chip variant="${variant}" size="${size}"${error ? ' error' : ''}${disabled ? ' disabled' : ''}>${label}</Chip>
  `,
  id: 'chip',
  metadata: { nestable: true },
}
