import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus('');
  };

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_gbbhbue', 
        'template_uvnkxjo', 
        formData,
        'S52dLiEAxXxyWPgaa' 
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', phone: '', email: '', message: '' });
          toggle();
        },
        (error) => {
          setStatus('Failed to send the message. Please try again.');
          toggle();
        }
    );
  };

  const toggle = () => {
    if (isOpen) {
      // start close animation
      setIsOpen(false);
      // hide modal after animation duration
      setTimeout(() => setShowModal(false), 800);
    } else {
      setShowModal(true);
      // start open animation
      setTimeout(() => setIsOpen(true), 20); // small delay to trigger transition
    }
  };

   const isFormComplete = Object.entries(formData)
  .filter(([key]) => key !== 'phone') 
  .every(([_, value]) => value.trim() !== '');

  return (
    <div id='contact'
    className="py-20 relative min-h-screen flex justify-center items-center  
        bg-[url('https://thumbs.dreamstime.com/b/skilled-front-end-developer-optimizing-websites-modern-coding-standards-professional-space-generated-ai-352206618.jpg?w=992')] bg-cover bg-center">x
        <div className="absolute inset-0 bg-black/92 backdrop-blur-xl"></div>
        <div className='z-10 px-2 md:px-4 flex flex-col gap-10 w-full justify-center items-center'>
            <h1 className='text-3xl md:text-4xl font-bold gradient-text text-center'>Get in Touch</h1>

            <form onSubmit={handleSend} className='w-full md:max-w-3xl md:min-w-3xl flex flex-col gap-2 md:gap-6 border border-white/10 p-4 md:p-8 rounded-xl'>
                <input 
                value={formData.name}
                onChange={handleChange}
                name='name'
                className='rounded-xl border border-blue-500/20 bg-blue-500/10 py-4 px-8 text-lg text-gray-300 focus:outline-none' 
                type='text' 
                placeholder='Enter your name *' 
                required />

                <input 
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='rounded-xl border border-blue-500/20 bg-blue-500/10 py-4 px-8 text-lg text-gray-300 focus:outline-none' 
                type='email' 
                placeholder='Enter your email *' 
                required />

                <input 
                value={formData.phone}
                onChange={handleChange}
                name='phone'
                className='rounded-xl border border-blue-500/20 bg-blue-500/10 py-4 px-8 text-lg text-gray-300 focus:outline-none' 
                type='tel' 
                placeholder='Enter your number (Optional)' />

                <textarea 
                value={formData.message}
                onChange={handleChange}
                name='message'
                className='rounded-xl min-h-80 py-5xl border border-blue-500/20 bg-blue-500/10 py-6 px-8 text-lg text-gray-300 focus:outline-none overflow-y-auto scrollbar-hidden' 
                placeholder='Need a developer/designer? Let’s connect! *' 
                required />

                <button 
                type='submit'
                className={`rounded-xl text-center text-bold border py-4 px-8 text-lg transition-all duration-200 ${!isFormComplete ? 'bg-gray-600 border-gray-600 text-gray-800 cursor-not-allowed' : 'bg-blue-500/20 border-blue-500/20 text-gray-300 blue-700 cursor-pointer hover:bg-blue-500/30 active:bg-blue-500/50'}`}
                >Send Message</button>
                {showModal && 
                <div onClick={toggle} className='fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-lg'>
                  <p className={`min-w-[400px] md:min-w-lg min-h-50 flex justify-center items-center bg-blue-500/20 text-xl text-center backdrop-blur-2xl font-bold text-gray-400 border border-blue-500/30 p-6 rounded-xl shadow-xl transform transition-transform duration-800 ${
                                  isOpen
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                                }`}

                                style={{
                                  transitionProperty: 'transform, opacity',
                                  transitionDuration: '800ms',
                                  transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                                  opacity: isOpen ? 1 : 0,
                              }}
                  >{status}</p>
                </div>}
            </form>
        </div>
      
    </div>
  )
};
