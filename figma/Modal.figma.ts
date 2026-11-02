// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=74-45
// source=src/components/Modal.jsx
// component=Modal
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const content = instance.getSlot('Content')

export default {
  example: figma.code`
    <Modal open title="${title}" onClose={() => {}}>${content}</Modal>
  `,
  id: 'modal',
  metadata: { nestable: true },
}
