import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <p className={css.statistic}>Good: {good}</p>
    <p className={css.statistic}>Neutral: {neutral}</p>
    <p className={css.statistic}>Bad: {bad}</p>
    <p className={css.statistic}>Total: {total}</p>
    <p className={css.statistic}>Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
