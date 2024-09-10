import '../styles/Contact.css'
import Swal from 'sweetalert2'
import Navbar from './Navbar';
import Footer from './Footer';


const Contact = () => {

    const cancelClear = () => {
        document.getElementById("form-contact").reset();
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4a35b3bb-18a8-482e-82a1-1f3077cd30dd");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            cancelClear();
            
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };
      

    return (

        <>

        <Navbar />
        <section className='contact'>
            <form onSubmit={onSubmit} id='form-contact' > 
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type='text' className='field' placeholder='Enter your name' name='name' required />
                </div>

                <div className='input-box'>
                    <label>Email Address</label>
                    <input type='email' className='field' placeholder='Enter your email' name='emial' required />
                </div>
                
                <div className='input-box'>
                    <label>Your Message</label>
                    <textarea name='message' className='field mess' placeholder='Enter your message' required></textarea>
                </div>

                <button type='submit'>Send Message</button>
            </form>
        </section>
        <Footer/>
        </>
    )
}



export default Contact