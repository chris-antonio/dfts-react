// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=61-97
// source=src/components/Toast.jsx
// component=Toast
import figma from 'figma'
const instance = figma.selectedInstance

const message = instance.getString('Message')
const variant = instance.getEnum("Type", { "Default": "default", "Info": "info", "Success": "success", "Warning": "warning", "Error": "error" })

export default {
  example: figma.code`
    <Toast variant="${variant}" onDismiss={() => {}}>${message}</Toast>
  `,
  id: 'toast',
  metadata: { nestable: true },
}
