// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=60-105
// source=src/components/TextArea.jsx
// component=TextArea
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const placeholder = instance.getString('Placeholder')
const helper = instance.getString('Helper')
const showHelper = instance.getBoolean('Show Helper')
const error = instance.getEnum("State", { "Default": false, "Hover": false, "Focused": false, "Error": true, "Disabled": false })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <TextArea
      label="${label}"
      placeholder="${placeholder}"${showHelper ? `\n      ${error ? 'error' : 'helperText'}="${helper}"` : ''}${disabled ? '\n      disabled' : ''}
    />
  `,
  id: 'text-area',
  metadata: { nestable: true },
}
