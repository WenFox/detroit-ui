import PropTypes from 'prop-types'

import styles from './Label.module.scss';

const Label = ({text, value}) => {
    return (
        <div>
            <label className={styles.text}>{text}</label>
            <div className={styles.value}><span>{value}</span></div>
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
