import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <div className={css.titles}>
    <p className={css.title}>{title}</p>
    {children}
  </div>
);


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};