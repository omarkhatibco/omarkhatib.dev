import { Icons } from '@/components';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='container min-h-screen flex justify-center items-center'>
        <div className='text-[#020122] text-center'>
          <h1 className='text-3xl md:text-6xl'>
            Hi, I&apos;m <span className='text-[#FF521B]'>Omar Khatib</span>
          </h1>
          <p className='font-medium'>Senior Software Engineer</p>
          <Icons />
        </div>
      </div>
    </main>
  );
}
