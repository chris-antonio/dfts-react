// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=60-78
// source=src/components/InputFields.jsx
// component=TextField
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const showLabel = instance.getBoolean('Show Label')
const placeholder = instance.getString('Placeholder')
const helper = instance.getString('Helper')
const showHelper = instance.getBoolean('Show Helper')
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const error = instance.getEnum("State", { "Default": false, "Hover": false, "Focused": false, "Error": true, "Disabled": false })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <TextField
      ${showLabel ? `label="${label}"` : ''}
      placeholder="${placeholder}"
      size="${size}"${showHelper ? `\n      ${error ? 'error' : 'helperText'}="${helper}"` : ''}${disabled ? '\n      disabled' : ''}
    />
  `,
  id: 'text-field',
  metadata: { nestable: true },
}
