// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=61-80
// source=src/components/Alert.jsx
// component=Alert
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')
const variant = instance.getEnum("Type", { "Info": "info", "Success": "success", "Warning": "warning", "Error": "error" })
const dismissible = instance.getEnum("Variant", { "Default": false, "Dismissible": true })

export default {
  example: figma.code`
    <Alert variant="${variant}" title="${title}"${dismissible ? ' dismissible onDismiss={() => {}}' : ''}>${description}</Alert>
  `,
  id: 'alert',
  metadata: { nestable: true },
}
