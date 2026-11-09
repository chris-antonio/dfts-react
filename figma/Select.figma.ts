// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=60-197
// source=src/components/Select.jsx
// component=Select
import figma from 'figma'
const instance = figma.selectedInstance

const placeholder = instance.getString('Value')
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const multiple = instance.getEnum("Mode", { "Single": false, "Multiple": true })
const error = instance.getEnum("State", { "Default": false, "Hover": false, "Focused": false, "Error": true, "Disabled": false })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <Select
      options={options}
      value={value}
      onChange={setValue}
      placeholder="${placeholder}"
      size="${size}"${multiple ? '\n      multiple' : ''}${error ? '\n      error="Required"' : ''}${disabled ? '\n      disabled' : ''}
    />
  `,
  id: 'select',
  metadata: { nestable: true },
}
