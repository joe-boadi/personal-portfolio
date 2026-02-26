import { Tilt } from './tilt';

export function TiltCard({src, alt, name, desc}: Readonly<{src: string, alt: string, name: string, desc: string}>) {
  return (
    <Tilt rotationFactor={8} isReverse>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-67.5 flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <img
          src={src}
          alt={alt}
          className='h-48 w-full object-cover'
        />
        <div className='p-2'>
          <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
            {name}
          </h1>
          <p className='text-zinc-700 dark:text-zinc-400'>{desc}</p>
        </div>
      </div>
    </Tilt>
  );
}
