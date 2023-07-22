import { Htag } from '@/components/Htag/HTag';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';

export default function Home(): JSX.Element {
  return (
      <main>
        <Htag tag='h1'>Главная страница</Htag>
        <Htag tag='h2'>Заголовок H2</Htag>
        <Htag tag='h3'>Заголовок H3</Htag>
        <Button appearance='primary' className='PowerButton' arrow='right'>Кнопка Primary</Button>
        <Button appearance='ghost' arrow='right'>Кнопка Ghost</Button>
        <P size='l'>Большой текст</P>
        <P size='m'>Средний текст</P>
        <P size='s'>Маленький текст</P>
      </main>
  );
}
