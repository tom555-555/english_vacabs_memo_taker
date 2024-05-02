interface ListItem {
  children: React.ReactNode;
  styles?: string[];
}

const ListItem: React.FC<ListItem> = (props) => {
  const { children, styles } = props;
  const classes = styles?.length ? styles.join(" ") : "";
  return <li className={classes}>{children}</li>;
};

export default ListItem;
