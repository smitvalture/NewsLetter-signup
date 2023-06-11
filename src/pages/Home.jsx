import React, { useState } from 'react'
import signupDesk from '../assets/images/illustration-sign-up-desktop.svg'
import signupMobile from '../assets/images/illustration-sign-up-mobile.svg'
import listIcon from '../assets/images/icon-list.svg'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const Home = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(null)

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Valid email required');
    } else {
      setError(null);
      localStorage.setItem("email", email)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        navigate("/thankyou")
      }, 1500);
    }
  }

  return (
    <>
      {/* ***************Desktop & Tablet View***************** */}
      <section className='hidden bg-[#393b4d] min-h-screen w-full md:flex justify-center items-center font-Roboto'>
        {loading && <Loading />}
        <div className='lg:w-[920px] lg:h-[593px] md:p-5 flex flex-col-reverse lg:flex-row justify-center items-center bg-white rounded-3xl'>
          <div className='md:px-6 md:py-5 lg:px-0 lg:py-0 lg:pl-10 lg:pr-16 w-[540px] flex flex-col gap-7'>

            <h1 className='font-bold text-5xl'>Stay updated!</h1>
            <p className='text-lg'>Join 60,000+ product managers receiving monthly updates on:</p>

            <div className='flex flex-col gap-2.5'>
              <div className='flex gap-4'>
                <img src={listIcon} alt="listicon" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className='flex gap-4'>
                <img src={listIcon} alt="listicon" />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className='flex gap-4'>
                <img src={listIcon} alt="listicon" />
                <p>And much more!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <h2 className='font-bold'>Email address</h2>
                <h2 className='font-semibold text-red-500'>{error}</h2>
              </div>
              <input className={`w-full h-14 border-2  border-gray-400 ${error ? "bg-red-100 text-red-500 border-red-500 focus:outline-red-500" : ""} rounded-lg px-4`} placeholder='email@emcompany.com' value={email} onChange={handleChange} type="email" name="email" id="email" />

              <button type='submit' disabled={error} className={`w-full h-14 mt-5 ${error ? "bg-gray-400 text-black" : "text-white hover:shadow-2xl shadow-orange-500 bg-[#292b42] hover:bg-gradient-to-r from-[#eb6079] to-[#ec704d]"} font-semibold rounded-lg`}>Subscribe to monthly newsletter</button>
            </form>

          </div>
          <div>
            <img className='hidden lg:block' src={signupDesk} alt="illustration-sign-up-desktop" />
            <img className='block lg:hidden' src={signupMobile} alt="illustration-sign-up-mobile" />
          </div>
        </div>
      </section>

      {/* ***************Mobile View************** */}
      <section className='block md:hidden w-full h-screen'>
        {loading && <Loading />}
        <div className='pb-6 flex flex-col-reverse lg:flex-row justify-center items-center bg-white rounded-3xl'>
          <div className='px-8 flex flex-col gap-7 mt-8'>

            <h1 className='font-bold text-5xl'>Stay updated!</h1>
            <p className='text-lg'>Join 60,000+ product managers receiving monthly updates on:</p>

            <div className='flex flex-col gap-2.5'>
              <div className='flex items-start gap-4'>
                <img src={listIcon} alt="listicon" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className='flex items-start gap-4'>
                <img src={listIcon} alt="listicon" />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className='flex items-start gap-4'>
                <img src={listIcon} alt="listicon" />
                <p>And much more!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <h2 className='font-bold'>Email address</h2>
                <h2 className='font-semibold text-red-500'>{error}</h2>
              </div>
              <input className={`w-full h-14 border-2  border-gray-400 ${error ? "bg-red-100 text-red-500 border-red-500 focus:outline-red-500" : ""} rounded-lg px-4`} placeholder='email@emcompany.com' value={email} onChange={handleChange} type="email" name="email" id="email" />

              <button type='submit' disabled={error} className={`w-full h-14 mt-5 ${error ? "bg-gray-400 text-black" : "text-white hover:shadow-2xl shadow-orange-500 bg-[#292b42] hover:bg-gradient-to-r from-[#eb6079] to-[#ec704d]"} font-semibold rounded-lg`}>Subscribe to monthly newsletter</button>
            </form>

          </div>
          <div>
            <img className='hidden lg:block' src={signupDesk} alt="illustration-sign-up-desktop" />
            <img className='block lg:hidden' src={signupMobile} alt="illustration-sign-up-mobile" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home 