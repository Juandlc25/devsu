interface Props {
  item: string;
}
const TableHead = ({ item }: Props) => <td title={item}>{item}</td>;

export default TableHead;
