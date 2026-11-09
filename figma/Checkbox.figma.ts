// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=58-275
// source=src/components/Checkbox.jsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const showLabel = instance.getBoolean('Show Label')
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const checked = instance.getEnum("Checked", { "Unchecked": false, "Checked": true, "Indeterminate": false })
const error = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": true, "Disabled": false })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <Checkbox${showLabel ? ` label="${label}"` : ''} size="${size}" checked={${checked}}${error ? ' error' : ''}${disabled ? ' disabled' : ''} onChange={() => {}} />
  `,
  id: 'checkbox',
  metadata: { nestable: true },
}
