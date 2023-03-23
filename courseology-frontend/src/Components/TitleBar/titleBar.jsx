import "./titleBar.scss";
import DropDown from "../DropDown/DropDown";
const titleBar = () => {
  return (
    <>
      <div className="titleBar">
        <header className="titleBar--title">Online Courses Plus</header>
        <DropDown/>
      </div>
    </>
  );
};
export default titleBar;
