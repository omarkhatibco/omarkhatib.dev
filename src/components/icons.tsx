import { Icon } from '@/components';
import { links } from '@/configs';

export const Icons: React.FC = () => {
  return (
    <nav className='flex -mx-4 justify-center mt-4'>
      {links?.map((props) => (
        <Icon key={props?.href} {...props} />
      ))}
    </nav>
  );
};
