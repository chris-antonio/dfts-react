// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=61-141
// source=src/components/Loader.jsx
// component=Loader
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum("Size", { "sm": "sm", "md": "md", "lg": "lg" })

export default {
  example: figma.code`
    <Loader size="${size}" />
  `,
  id: 'loader',
  metadata: { nestable: true },
}
