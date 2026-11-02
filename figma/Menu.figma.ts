// url=https://www.figma.com/design/XDwmzlvcfKlbuogKzMMM4G/Components?node-id=165-198
// source=src/components/Menu.jsx
// component=Menu
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <Menu
      trigger={<Button variant="secondary" trailingIcon="expand_more">Actions</Button>}
      items={[
        { id: "edit", label: "Edit", icon: "edit", onSelect: () => {} },
        { id: "duplicate", label: "Duplicate", icon: "content_copy", onSelect: () => {} },
      ]}
    />
  `,
  id: 'menu',
  metadata: { nestable: true },
}
