// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=59-129
// source=src/components/RadioButton.jsx
// component=RadioButton
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const showLabel = instance.getBoolean('Show Label')
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const checked = instance.getEnum("Selected", { "Unselected": false, "Selected": true })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <RadioButton${showLabel ? ` label="${label}"` : ''} size="${size}" checked={${checked}}${disabled ? ' disabled' : ''} onChange={() => {}} />
  `,
  id: 'radio',
  metadata: { nestable: true },
}
