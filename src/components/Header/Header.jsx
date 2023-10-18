import "./header.css";

export default function Header({img, title, children}) {
  return (
    <div className="header">
        <img src={img} alt=""/>
        <div className="container headerContainer">
            <div className="headerContent">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </div>
  )
}
