import PropTypes from "prop-types";
import { useState } from "react";
import uniqid from "uniqid";

export default function StepCounterForm({ onAdd }) {
  const [form, setForm] = useState({ date: "", distance: "" });

  const onChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    const walk = {
      id: uniqid(),
      date: form.date,
      distance: Number(form.distance),
    };

    onAdd(walk);
    setForm({ date: "", distance: "" });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-elem">
        <label className="input-description" htmlFor="date">
          Дата (ДД.ММ.ГГГГ)
        </label>
        <input
          type="date"
          className="form-input date-input"
          id="date"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-elem">
        <label className="input-description" htmlFor="distance">
          Пройдено км
        </label>
        <input
          type="text"
          className="form-input"
          id="distance"
          name="distance"
          value={form.distance}
          onChange={onChange}
          required
        />
      </div>
      <button className="btn add-btn" type="submit">
        Ок
      </button>
    </form>
  );
}

StepCounterForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};