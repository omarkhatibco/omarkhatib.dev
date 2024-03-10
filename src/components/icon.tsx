import * as React from 'react';

type IconsProps = { href: string; title: string; icon: React.ReactElement };

export const Icon: React.FC<IconsProps> = ({ href, title, icon }) => {
  return (
    <a
      className='rounded-full border-1 mx-4 block text-xl md:text-3xl hover:bg-[#FC9E4F]'
      href={href}
      title={title}
      target='_blank'
      rel='noopener noreferrer'
    >
      {React.cloneElement(icon, {
        className: 'm-2',
      })}
    </a>
  );
};
