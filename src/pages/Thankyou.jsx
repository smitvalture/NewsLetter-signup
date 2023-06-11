import React from 'react'
import successIcon from '../assets/images/icon-success.svg'
import { useNavigate } from 'react-router-dom'

const Thankyou = () => {

  const navigate = useNavigate()

  const Email = localStorage.getItem("email")

  return (
    <>
      {/* ************Deskttop & Tablet View*********** */}
      <section className='hidden bg-[#393b4d] min-h-screen w-full md:flex justify-center items-center font-Roboto'>
        <div className='w-fit h-fit p-5 flex justify-center items-center bg-white rounded-3xl'>
          <div className='px-10 py-6 w-[420px] flex flex-col gap-7'>

            <img className='w-14' src={successIcon} alt="success icon" />
            <h1 className='font-bold text-5xl text-[#292b42]'>Thanks for subscribing!</h1>
            <p className='text-lg text-[#292b42]'>A confirmation email has been sent to <span className='font-semibold'>{Email}</span> Please open it and click the button inside to confirm your subscription.</p>
            <button type='button' onClick={() => navigate("/")} className={`w-full h-14 mt-5 text-white hover:shadow-2xl shadow-orange-500 bg-[#292b42] hover:bg-gradient-to-r from-[#eb6079] to-[#ec704d] font-semibold rounded-lg`}>Dissmiss messager</button>

          </div>

        </div>
      </section>

      <section className='block md:hidden w-full h-screen'>
        <div className='w-full h-full p-5 flex flex-col justify-between items-center bg-white rounded-3xl'>
          <div></div>
          <div className='px-4 flex flex-col gap-7'>

            <img className='w-14 mt' src={successIcon} alt="success icon" />
            <h1 className='font-bold text-5xl text-[#292b42]'>Thanks for subscribing!</h1>
            <p className='text-lg text-[#292b42]'>A confirmation email has been sent to <span className='font-semibold'>{Email}</span> Please open it and click the button inside to confirm your subscription.</p>

          </div>
          <div></div>
          <button type='button' onClick={() => navigate("/")} className={`w-full h-14 mt-5 text-white hover:shadow-2xl shadow-orange-500 bg-[#292b42] hover:bg-gradient-to-r from-[#eb6079] to-[#ec704d] font-semibold rounded-lg`}>Dissmiss messager</button>

        </div>
      </section>
    </>
  )
}

export default Thankyou