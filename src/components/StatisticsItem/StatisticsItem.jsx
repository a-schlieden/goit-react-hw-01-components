import PropTypes from 'prop-types';
import style from './StatisticsItem.module.css';
import { getRandomColor } from 'utilits/BGColor';

export const StatisticsItem = ({ label, percentage }) => {
  const BgColor = getRandomColor();
  return (
    <li
      className={style.item}
      style={{
        backgroundColor: `${BgColor}`,
      }}
    >
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
