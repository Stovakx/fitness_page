import "./headingText.css"

export default function HeadingText({icon, className, title}) {
  return (
    <div className={`headingText ${className}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
    </div>
  )
}
