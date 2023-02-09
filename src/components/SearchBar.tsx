import micIcon from "../assets/images/mic.png";

const SearchBar: React.FC = () => {
  return (
    <>
      <div className="max-w-xl mx-auto px-5 py-3 border border-[#e2e2e2] rounded-3xl hover:shadow-md transition relative">
        <div className="input-wrapper">
          <input
            type="text"
            name="q"
            id="search-bar"
            placeholder="Ask Pranav Anything"
            className="w-full h-full pr-6 focus:outline-none placeholder:text-[#a8a8a8]"
          />
        </div>
        <div>
          <img src={micIcon} className="w-3 absolute right-3 top-0 py-4 mr-3" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
