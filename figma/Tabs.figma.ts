// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=165-177
// source=src/components/Tabs.jsx
// component=Tabs
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <Tabs
      items={[
        { id: "overview", label: "Overview", content: "Overview content" },
        { id: "activity", label: "Activity", content: "Activity content" },
      ]}
    />
  `,
  id: 'tabs',
  metadata: { nestable: true },
}
