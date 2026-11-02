// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=77-22
// source=src/components/BottomSheet.jsx
// component=BottomSheet
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const content = instance.getSlot('Content')

export default {
  example: figma.code`
    <BottomSheet open title="${title}" onClose={() => {}}>${content}</BottomSheet>
  `,
  id: 'bottom-sheet',
  metadata: { nestable: true },
}
