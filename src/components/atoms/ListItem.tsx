interface ListItem {
  children: React.ReactNode | JSX.Element;
  styles?: string[];
}

const ListItem: React.FC<ListItem> = (props) => {
  const { children, styles } = props;
  console.log({ children });
  const classes = styles?.length ? styles.join(" ") : "";
  return <li className={classes}>{children}</li>;
};

export default ListItem;
