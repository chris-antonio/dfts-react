// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=68-27
// source=src/components/Card.jsx
// component=Card
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')
const content = instance.getSlot('Content')

export default {
  example: figma.code`
    <Card title="${title}" description="${description}">${content}</Card>
  `,
  id: 'card',
  metadata: { nestable: true },
}
