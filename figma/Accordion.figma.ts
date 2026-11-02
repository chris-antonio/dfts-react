// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=69-47
// source=src/components/Accordion.jsx
// component=Accordion
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const open = instance.getEnum("Open", { "Collapsed": false, "Expanded": true })

export default {
  example: figma.code`
    <Accordion
      items={[{ id: "item-1", title: "${title}", content: "Accordion content" }]}
      ${open ? 'defaultOpenId="item-1"' : ''}
    />
  `,
  id: 'accordion',
  metadata: { nestable: true },
}
