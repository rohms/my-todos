import PropTypes from "prop-types";

const TodoDate = ({ date }) => {
  if (!date) return <TodoPlaceholder />;
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const day = dateObj.toLocaleString("en-US", { day: "2-digit" });
  //   const year = date.getFullYear();

  return (
    <>
      <div className="date">
        {date && (
          <>
            <p>{month}</p>
            <p>{day}</p>
            {/* <p>{year}</p> */}
          </>
        )}
      </div>
    </>
  );
};

const TodoPlaceholder = () => {
  return <div className="date-placeholder"></div>;
};

TodoDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export { TodoDate };
