import { Button } from '@/components/ui/button';
import Link from 'next/link';


const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh] px-4 text-center'>
        <h1 className='text-6xl font-bold gradient-title mb-4'>{' :( '}404</h1>
        <h2 className='text-2xl font-semibold mb-4'>Page not found!</h2>
        <p className='text-gray-600 mb-8'> Oops! The page you are looking for does not exist. Please check the URL and try again. If you think this is a mistake, please contact us. Thanks for your understanding.</p>
        <Link href="/">
        <Button>Return Home</Button>
        </Link>
    </div>
  )
}

export default NotFound;