// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=59-313
// source=src/components/Link.jsx
// component=Link
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const error = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": true, "Disabled": false })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Error": false, "Disabled": true })

export default {
  example: figma.code`
    <Link href="#" size="${size}"${error ? ' error' : ''}${disabled ? ' disabled' : ''}>${label}</Link>
  `,
  id: 'link',
  metadata: { nestable: true },
}
