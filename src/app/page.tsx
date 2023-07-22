import { Htag } from '@/components/Htag/HTag';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import { Tag } from '@/components/Tag/Tag';

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
        <Tag size='s'>Ghost</Tag>
        <Tag size='m' color='red'>Red</Tag>
        <Tag size='s' color='green'>Green</Tag>
        <Tag color='primary'>Primary</Tag>
      </main>
  );
}
