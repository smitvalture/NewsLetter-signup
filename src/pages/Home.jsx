import React from 'react'
import signupDesk from '../assets/images/illustration-sign-up-desktop.svg'
import signupMobile from '../assets/images/illustration-sign-up-mobile.svg'
import listIcon from '../assets/images/icon-list.svg'
import successIcon from '../assets/images/icon-success.svg'

const Home = () => {
  return (
    <section className='bg-[#393b4d] min-h-screen w-full flex justify-center items-center font-Roboto'>
      <div className='w-fit h-fit p-5 flex justify-center items-center bg-white rounded-3xl'>
        <div className='pl-10 pr-16 w-[520px]'>

          <h1 className='font-bold text-5xl'>Stay updated!</h1>
          <p className='text-lg'>Join 60,000+ product managers receiving monthly updates on:</p>

          <div className='flex flex-col gap-1.5'>
            <div className='flex gap-4'>
              <img src={listIcon} alt="listicon" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className='flex gap-4'>
              <img src={listIcon} alt="listicon" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className='flex gap-4'>
              <img src={listIcon} alt="listicon" />
              <p>Product discovery and building what matters</p>
            </div>
          </div>

          <form>
            <label htmlFor="">Email address</label>
            <input type="email" name="email" id="email" />

            <button className='w-full h-14 rounded-lg bg-gradient-to-r from-[#eb6079] via-[#eb6861] to-[#ec704d]'></button>
          </form>

        </div>
        <div>
          <img className='hidden lg:block' src={signupDesk} alt="illustration-sign-up-desktop" />
          <img className='block lg:hidden' src={signupMobile} alt="illustration-sign-up-mobile" />
        </div>
      </div>
    </section>
  )
}

export default Home 