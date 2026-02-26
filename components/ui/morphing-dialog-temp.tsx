import {GALLERY_IMAGES_PAGE } from '@/app/data';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
  MorphingDialogContainer,
} from './morphing-dialog';
import { XIcon } from 'lucide-react';

function MorphingDialogBasicImage({src, alt} : Readonly<{src: string, alt: string}>) {
  return (
    <MorphingDialog
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <MorphingDialogTrigger>
        <MorphingDialogImage
          src={src}
          alt={alt}
          className='max-w-xs rounded-sm w-75 h-75 object-cover cursor-pointer hover:scale-105 hover:z-50 transition-transform duration-200'
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className='relative'>
          <MorphingDialogImage
            src={src}
            alt={alt}
            className='h-auto w-full max-w-[90vw] rounded-sm object-cover lg:h-[90vh]'
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className='h-5 w-5 text-zinc-500' />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

export function MorphingDialogTemplate() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-center justify-center'>
            {GALLERY_IMAGES_PAGE.map((image) => (    
                <MorphingDialogBasicImage src={image.src} alt={image.alt} key={image.id} />
            ))}
        </div>
    )
}
