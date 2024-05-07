interface ListContainer {
  children: React.ReactNode | JSX.Element;
  styles?: string[];
}

const ListContainer: React.FC<ListContainer> = (props) => {
  const { children, styles } = props;
  const classes = styles?.length ? styles.join(" ") : "";
  return <ul className={classes}>{children}</ul>;
};

export default ListContainer;
