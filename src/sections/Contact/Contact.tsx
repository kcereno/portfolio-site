import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="py-xl">
      <form className="contact__form">
        <h1 className="mb-xs font-display text-2xl section-title">Contact</h1>
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
    </section>
  );
}

export default Contact;
