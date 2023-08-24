import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser'; /*lezem n3mal install la emailjs wkamen 
install la @emailjs/browser b3den mn3mal import la hay */
import './Contact.css'

/*hon lfekra eno ana bade lama hyda sha5es y3abe lform bade lmessage ta3olto
tenba3at 3ala my email lama ykbos 3ala send button */
const Contact = () => {
/*be trouhe 3ala google bektob emailjs wbfout 3ala React so 
3melna copy la hol  --->const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

   eza nsete keef jeb  YOUR_SERVICE_ID wel  'YOUR_TEMPLATE_ID  YOUR_PUBLIC_KEY hol wkamen 
   keef 3melna template wel service whek rja3e la hyda lvedio 3ala 
   lyoutube (https://youtu.be/CKAn5dCK6RE) 3ala se3a t2reban 1:49 min 

   Note:form.current ma tense form hye le m3rfena fo2 le hye equal useRef()
 */
   const form = useRef();
   const [done,setisDone]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('service_4ovz97k', 'template_dqypzk6', form.current, '7sqe9GluxQ2TyDkFl')
      .then((result) => {
          console.log(result.text);
          setisDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
            <span>Get in touch</span>
            <span>Contect me</span>
      <div className='blur s-blur1' 
      style={{background:"#ABF1FF94"}}></div>
    </div>
        </div>

        <div className='c-right'>
         <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="user-name" className='user' placeholder='Name'/> 
           <input type='text' name="user-email" className='user' placeholder='Email'/>
          <textarea type='text' name="message" className='user' placeholder='Message'/>
          <input type='submit' value='send' className='button'/>
          <span>{done&&"Thanks for conecting me!"}</span> 
           </form>
           <div className='blur s-blur2' 
      style={{background:"var(--purple)"}}></div>
    </div>
           

          </div>
     
    
)
}

export default Contact
