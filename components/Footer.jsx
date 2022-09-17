import LogoConstructor from './LogoConstructor'
import NextLink from 'next/link'

export default function Footer() {
    return (
        <div className='flex flex-col justify-center mt-16 md:mt-32'>
            <LogoConstructor/>
            <div className='flex justify-center font-bold my-4'>
                <NextLink href="/impressum">
                    <a className='mx-2 text-primary hover:text-gray-500 animate-fade'>
                        Impressum
                    </a>
                </NextLink>
                <NextLink href="/impressum">
                    <a className='mx-2 text-primary hover:text-gray-500 animate-fade'>
                        Datenschutz
                    </a>
                </NextLink>
            </div>
        </div>
    )
}