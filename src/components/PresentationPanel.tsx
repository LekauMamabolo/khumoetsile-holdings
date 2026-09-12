import Icon from './Icon'

export default function PresentationPanel({ name, icon }: { name?: string; icon?: string }) {
  return (
    <div className="presentation-panel">
      <div className="pp-layer pp-layer--back" />
      <div className="pp-layer pp-layer--mid" />
      <div className="pp-card">
        <div className="pp-icon">
          {icon ? <Icon name={icon as any} size={34} className="text-green-accent" /> : null}
        </div>
        {name && <div className="pp-title">{name}</div>}
      </div>
    </div>
  )
}
