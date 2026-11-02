// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=56-111
// source=src/components/Button.jsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum("Style", { "Primary": "primary", "Secondary": "secondary", "Ghost": "ghost", "Destructive": "destructive" })
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })
const disabled = instance.getEnum("State", { "Default": false, "Hover": false, "Pressed": false, "Focused": false, "Disabled": true })

export default {
  example: figma.code`
    <Button variant="${variant}" size="${size}"${disabled ? ' disabled' : ''}>${label}</Button>
  `,
  id: 'button',
  metadata: { nestable: true },
}
