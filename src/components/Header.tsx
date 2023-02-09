import appsIcon from "../assets/images/apps.png";
import userIcon from "../assets/images/user-icon.png";

const Header: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="mx-8 py-3 flex justify-between items-center">
        <div className="space-x-5">
          <span>
            <a href="#" className="text-[#4f4f4f] text-sm">
              About Pranav
            </a>
          </span>
          <span>
            <a href="#" className="text-[#4f4f4f] text-sm">
              Pranav Store
            </a>
          </span>
        </div>

        <div className="space-x-5 flex items-center">
          <span>
            <a
              href="https://images.google.com/"
              className="text-[#4f4f4f] text-sm"
            >
              Images of Pranav
            </a>
          </span>
          <span>
            <img src={appsIcon} alt="apps" className="w-6 h-6" id="apps-icon" />
          </span>
          <span>
            <img
              src={userIcon}
              alt="user-icon"
              className="w-8 h-8"
              id="user-icon"
            />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
