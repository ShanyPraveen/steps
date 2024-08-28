export default function Button ({style, onClick, children}) {
  return <button onClick={onClick} style={style}>{children}</button>
}