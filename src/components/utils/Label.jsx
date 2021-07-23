import PropTypes from 'prop-types'

import styles from './Label.module.scss';

const Label = ({text, value}) => {
    return (
        <div className={styles.label}>
            <div className={styles.text}>{text}</div>
            <div className={styles.value}>{value}</div>
        </div>
    );
}
export default Label;
Label.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Label.defaultProps = {
    text: '',
    value: ''
};
