// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=101-169
// source=src/components/InputFields.jsx
// component=PhoneField
import figma from 'figma'
const instance = figma.selectedInstance

const placeholder = instance.getString('Placeholder')
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const error = instance.getEnum("State", { "Default": false, "Hover": false, "Focused": false, "Error": true, "Disabled": false })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <PhoneField
      placeholder="${placeholder}"
      size="${size}"
      value={value}
      onChange={setValue}${error ? '\n      error="Invalid number"' : ''}${disabled ? '\n      disabled' : ''}
    />
  `,
  id: 'phone-field',
  metadata: { nestable: true },
}
