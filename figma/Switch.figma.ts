// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=59-275
// source=src/components/Switch.jsx
// component=Switch
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const showLabel = instance.getBoolean('Show Label')
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const checked = instance.getEnum("Toggled", { "Off": false, "On": true })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <Switch${showLabel ? ` label="${label}"` : ''} size="${size}" checked={${checked}}${disabled ? ' disabled' : ''} onChange={() => {}} />
  `,
  id: 'switch',
  metadata: { nestable: true },
}
