import iconArrow from "./images/iconarrow.svg";
function Divider() {
  return (
    <div className="saperator">
      <hr className="divider" />
      <img className="arrow" src={iconArrow} alt="arrow" />
    </div>
  );
}

export default Divider;
