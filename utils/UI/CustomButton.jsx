import styles from 'styles/Button.module.scss';

function CustomButton({ children, onClick, variant = 'primary', className }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${className} `}
      role='button'
    >
      {children}
    </button>
  );
}

export default CustomButton;
