import CustomButton from 'utils/UI/CustomButton';

import styles from 'styles/job.module.scss';
import Typography from 'utils/UI/Typography';

function Job() {
  return (
    <div className='container-md'>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles['header-box-container']}>
          <div className={styles['header-box']}>scoot</div>
        </div>

        <div className={`${styles['header-content']} ${styles['card-padding']}`}>
          <div className={`${styles['header-text']}`}>
            <Typography variant='bold' className={styles.title}>
              Scoot
            </Typography>
            <Typography variant='light' className={styles['text-light']}>
              http://exapmple.com/scoot
            </Typography>
          </div>
          <CustomButton variant='light' className={styles['compony-btn']}>
            Compony Site
          </CustomButton>
        </div>
      </div>

      {/* body */}
      <div className={`${styles.body} ${styles['card-padding']}`}>
        {/* header */}
        <div className={`${styles['body-content']} mb-2`}>
          <div className={styles['body-content-left']}>
            <div className={styles.time}>4H . Full Time</div>
            <Typography variant='bold' className={styles['body-title']}>
              Senior Software Engineer
            </Typography>
            <div className={styles.country}>United Kingdom</div>
          </div>

          <CustomButton className={styles['body-content-right']}>Apply Now</CustomButton>
        </div>
        <div>
          <Typography variant='bold'>Title</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid commodi molestiae
            possimus mollitia voluptatum ratione neque placeat provident voluptatibus dolore, quo
            cum, vero hic cumque nemo temporibus ipsam fugiat dignissimos.
          </p>
        </div>
      </div>

      <div className={styles['action-bottom']}>
        <div className={styles['action-bottom-container']}>
          <div className={styles['body-content']}>
            <div className={styles['body-content-left']}>
              <Typography variant='bold' className={styles['body-title']}>
                Senior Software Engineer
              </Typography>
              <div className={styles.time}>scoot</div>
            </div>

            <CustomButton className={styles['body-content-right']}>Apply Now</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
