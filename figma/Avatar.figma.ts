// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=59-345
// source=src/components/Avatar.jsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance

const initials = instance.getString('Initials')
const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg", "xl": "xl", "xxl": "xxl" })
const type = instance.getEnum("Type", { "Initial": "initial", "Icon": "icon", "Image": "image" })
const name = initials.split('').join(' ')

export default {
  example: figma.code`
    <Avatar size="${size}"${type === 'initial' ? ` name="${name}"` : ''}${type === 'image' ? ' src="/path/to/image.jpg" name="User"' : ''} />
  `,
  id: 'avatar',
  metadata: { nestable: true },
}
