interface Props {
  checkListNumber: number;
}
const Navbar = ({ checkListNumber }: Props) => {
  return <div>NavBar : {checkListNumber}</div>;
};

export default Navbar;
