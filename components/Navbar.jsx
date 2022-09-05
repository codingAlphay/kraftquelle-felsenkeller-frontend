import { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-scroll'
import NextLink from 'next/link'
import Logo from './LogoConstructor'

const navigation = [
  { name: 'Kraftquelle', href: '#kraftquelle', to: 'kraftquelle', current: false, anchor: true },
  { name: 'Wirkung', href: '#wirkung', to: 'wirkung', current: false, anchor: true },
  { name: 'Kontakt', href: '#contact', to: 'contact', current: false, anchor: true },
  { name: 'Termine', href: '/termine', to: '', current: false, anchor: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join('')
}

function Navbar() {

  return (
      <div className="navbar w-full fixed z-10 bg-white">
        <Disclosure as="nav">
          {({ open }) => (
            <div className="py-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-28">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <NextLink href="/">
                        <a><Logo/></a>
                      </NextLink>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4 animate-fade">
                        {navigation.map((item) => (
                          <>
                            {item.anchor ? (
                              <Link
                              key={item.name}
                              href={item.href}
                              to={item.to}
                              spy={true}
                              smooth={true}
                              offset={-80}
                              duration={500}
                              className={classNames(
                                item.current
                                  ? 'text-primary hover:text-primary '
                                  : 'text-primary hover:text-primary hover:bg-secondary ',
                                'px-4 font-bold rounded-md relative text-xl tracking-wide navbar-element'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                              <div className='absolute -bottom-2 transition ease-out duration-300 w-8 h-0.5 bg-primary'/>
                            </Link>
                            ) : (
                              <NextLink href={item.href}>
                                <a target='_top' className='px-4 text-primary font-bold rounded-md relative text-xl tracking-wide navbar-element'>{item.name}
                                <div className='absolute -bottom-2 transition ease-out duration-300 w-8 h-0.5 bg-primary'/></a>
                              </NextLink>
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='navbar__backtohotel relative flex items-center order-first md:order-none animate-fade'> 
                    <NextLink href="https://www.felsenkeller.at/de/index.html">
                        <a rel="noreferrer" className='flex'>
                          <div className="hidden lg:block animate-fade' flex-shrink-0 px-3 py-1 md:px-4 md:py-2 text-primary hover:bg-transparent font-bold tracking-wide rounded-md cursor-pointer transition ease-out">
                              ZUM FELSENKELLER
                          </div>
                          <img src="./hotel.svg" className="w-5 hidden md:block" alt="" />
                        </a>
                    </NextLink>
                    <Link
                      key={'buchungmobile'}
                      href={'buchung'}
                      to={'buchung'}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className={'order-first mr-4 md:mr-0 md:hidden animate-fade'}
                    >
                      <div className="animate-wiggle md:hidden flex-shrink-0 p-2 bg-primary text-white font-bold tracking-widest rounded-md transition ease-out hover:scale-110 duration-300">
                        <img src="./hotel_mobile.svg" className="w-5" alt="" />
                      </div>
                    </Link>
                  </div>

                  <div className="-mr-2 flex md:hidden animate-fade">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary">
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <>
                      {item.anchor ? (
                        <Link
                          key={item.name}
                          href={item.href}
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          className={'text-primary px-3 py-2 rounded-md text-md font-semibold tracking-widest'}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={'block px-3 font-bold rounded-md text-lg'}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        </Link>
                      ) : (
                        <NextLink href={item.href}>
                          <a target='_top' className='px-4 text-primary font-bold rounded-md relative text-xl tracking-wide navbar-element'>{item.name}
                          <div className='absolute -bottom-2 transition ease-out duration-300 w-8 h-0.5 bg-primary'/></a>
                        </NextLink>
                      )}
                    </>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
  )
}

export default Navbar