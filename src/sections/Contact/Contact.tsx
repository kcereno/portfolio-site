import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="my-xl flex-center-x">
      <div className="contact-container">
        <div className="contact-content m-xl">
          <h1 className="mb-md text-center">Reach Out!</h1>
          <form className="contact-form">
            <label htmlFor="fullName">
              Full Name
              <input type="text" />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" />
            </label>
            <label htmlFor="message">
              Message
              <textarea rows={10} cols={10} />
            </label>
            <button type="submit" className="button-8">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;