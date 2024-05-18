import PropTypes from "prop-types";

const EmptyInputWarning = ({ isEmpty, setIsEmpty }) => {
  const handleCloseBtn = () => {
    if (isEmpty) {
      setIsEmpty(false);
    }
  };

  return (
    <div
      className={`absolute top-12 flex gap-5 items-center justify-between text-mainBlue shadow-inner rounded p-3 bg-mainWhite min-w-[300px] ${
        isEmpty ? "" : "hidden"
      }`}
    >
      <div className="flex gap-2">
        <span className="text-[14px] tablet:text-[16px]">
          <strong>No city entered.</strong> Enter a valid city name
        </span>
      </div>
      <strong
        className="text-xl align-center cursor-pointer alert-del"
        onClick={handleCloseBtn}
      >
        &times;
      </strong>
    </div>
  );
};

EmptyInputWarning.propTypes = {
  setIsEmpty: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
};

export default EmptyInputWarning;
