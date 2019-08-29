
const Product = ({ imgUrl, alt, name, price, buttonText }) => {
  return (
    <div>
      <img src={imgUrl} alt={alt} width="649" />
      <h2>{name}</h2>
      <p>Price : {price}</p>
      <button type="button">{buttonText}</button>
    </div>
  );
};

export default Product;
