import PropTypes from "prop-types";

export default function StepCounterTeble({ walks, onDelete }) {
  return (
    <>
      <div className="step">
        <div className="step_date">Дата (ДД.ЬЬ.ГГГГ)</div>
        <div className="step_distance">Пройдено км</div>
        <div className="actions">Действия</div>
      </div>
      <ul className="steps">
        {walks.map((obj) => (
          <li className="step" key={obj.id}>
            <div>{new Date(obj.date).toLocaleDateString()}</div>
            <div>{obj.distance}</div>
            <button className="btn delete-btn" onClick={() => onDelete(obj.id)}>
              &#10060;
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

StepCounterTeble.propTypes = {
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      distance: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};