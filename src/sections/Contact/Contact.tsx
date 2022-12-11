import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="my-xl">
      <div className="flex-center-x">
        <div className="contact__container">
          <form className="contact__form m-md">
            <h1 className="mb-md text-center section-title">Reach Out!</h1>
            <label htmlFor="fullName">
              Full Name
              <input type="text" className="mb-sm" />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" className="mb-sm" />
            </label>
            <label htmlFor="message">
              Message
              <textarea rows={10} cols={10} className="mb-sm" />
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
