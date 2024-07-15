interface Props {
  checkList: string[];
}
const ShoppingCart = ({ checkList }: Props) => {
  return (
    <>
      <h1>Shopping cart</h1>
      <ul>
        {checkList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingCart;
