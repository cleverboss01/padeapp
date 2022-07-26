import "./Connected.css";
import img from "../components/asset/background.png";

const Connected = () => {
  return (
    <>
      <div className="connected-section">
        <div className="connected-section__container">
          <div className="content" style={{ backgroundImage: `url(${img})` }}>
            <h2>Stay Connected</h2>
            <p>
              Don't want to miss our exciting news ? Just leave us your contact
              information and we'll keep you updated!
            </p>
            <div className="connected-form__container">
              <div className="form-container">
                <form>
                  <input type="text" placeholder="Enter email address" />
                  <input type="submit" className="blue" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connected;
