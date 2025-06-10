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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_gbbhbue', // replace with your EmailJS service ID
        'template_uvnkxjo', // replace with your EmailJS template ID
        formData,
        'S52dLiEAxXxyWPgaa' // replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', phone: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send the message. Please try again.');
        }
    );
    setStatus('');
  };

   const isFormComplete = Object.values(formData)
  .filter((value, name) => name == 'phone')
  .every((value) => value.trim() !== '');

  return (
    <div id='contact'
    className="py-20 relative min-h-screen flex justify-center items-center  
        bg-[url('https://thumbs.dreamstime.com/b/skilled-front-end-developer-optimizing-websites-modern-coding-standards-professional-space-generated-ai-352206618.jpg?w=992')] bg-cover bg-center">x
        <div className="absolute inset-0 bg-black/92 backdrop-blur-xl"></div>
        <div className='z-10 px-4 flex flex-col gap-10'>
            <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center'>Get in Touch</h1>

            <form onSubmit={handleSend} className='max-w-3xl md:min-w-3xl flex flex-col gap-6 border border-white/10 p-2 md:p-8'>
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
                placeholder='Enter your number' />

                <textarea 
                value={formData.message}
                onChange={handleChange}
                name='message'
                className='rounded-xl min-h-80 py-5xl border border-blue-500/20 bg-blue-500/10 py-6 px-8 text-lg text-gray-300 focus:outline-none overflow-y-auto scrollbar-hidden' 
                placeholder='Need a developer/designer? Let’s connect! *' 
                required />

                <button 
                type='submit'
                className={`rounded-xl text-center text-bold border py-4 px-8 text-lg ${!isFormComplete ? 'bg-gray-600 border-gray-600 text-gray-800 cursor-not-allowed' : 'bg-blue-500/20 border-blue-500/20 text-gray-300 blue-700 cursor-pointer hover:bg-blue-500/30 active:bg-blue-500/50'}`}
                >Send Message</button>
                {status && <p>{status}</p>}
            </form>
        </div>
      
    </div>
  )
};
