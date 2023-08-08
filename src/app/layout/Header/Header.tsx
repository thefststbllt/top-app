import Link from 'next/link';
import { HeaderProps } from './Header.props';

const Header = ({...props}: HeaderProps): JSX.Element => {
  return (
      <header {...props}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>
      </header>
  );
}

export { Header };