function Icon(props) {
  return (
      <img src={require(`../images/icon/${props.icon}`)} alt={props.iconName} className={props.className} />
  )
}
export default Icon;