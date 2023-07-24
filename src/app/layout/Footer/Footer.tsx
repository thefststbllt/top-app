import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

const Footer = ({...props}: FooterProps): JSX.Element => {
  return (
      <footer className='app-footer' {...props}>
        Its footer of this awesome site!
      </footer>
  );
}

export { Footer };