import { useId, useState, type FormEvent } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { COPY } from '../../data/copy';
import { cn } from '../../lib/utils';

function ContactForm() {
  const messageId = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    console.log('Contact form submission', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <p className="text-xs tracking-[0.2em] font-medium text-caramelDeep">{COPY.contact.formTitle}</p>

      <Input
        label="Nama"
        type="text"
        autoComplete="name"
        placeholder={COPY.contact.formNamePlaceholder}
        required
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          if (submitted) setSubmitted(false);
        }}
      />
      <Input
        label="Email"
        type="email"
        autoComplete="email"
        placeholder={COPY.contact.formEmailPlaceholder}
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (submitted) setSubmitted(false);
        }}
      />

      <div>
        <label htmlFor={messageId} className="block text-sm font-medium text-espresso mb-1">
          Pesan
        </label>
        <textarea
          id={messageId}
          required
          rows={4}
          value={message}
          placeholder={COPY.contact.formMessagePlaceholder}
          onChange={(event) => {
            setMessage(event.target.value);
            if (submitted) setSubmitted(false);
          }}
          className={cn(
            'w-full bg-surface border border-espresso/15 rounded-md px-3 py-2 text-charcoal placeholder:text-roast/60 focus:outline-none focus:border-espresso focus:ring-2 focus:ring-espresso/20 transition-colors resize-y',
          )}
        />
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full">
        {COPY.contact.formSubmit}
      </Button>

      {submitted && (
        <p
          role="status"
          className="text-sm text-charcoal bg-cream border border-caramel/40 rounded-md px-3 py-2"
        >
          {COPY.contact.formSuccess}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
