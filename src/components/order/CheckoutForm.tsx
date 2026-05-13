import { useState, type FormEvent } from 'react';
import Input from '../ui/Input';
import { COPY } from '../../data/copy';

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
}

interface CheckoutFormProps {
  formId: string;
  onValidSubmit: (info: CustomerInfo) => void;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
}

function CheckoutForm({ formId, onValidSubmit }: CheckoutFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = 'Nama minimal 2 huruf.';
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) next.phone = 'No. HP harus 10–13 angka.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Format email tidak valid.';
    }
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      onValidSubmit({ name: name.trim(), phone: phone.trim(), email: email.trim() });
    }
  };

  return (
    <form id={formId} onSubmit={handleSubmit} noValidate className="space-y-4">
      <Input
        label={COPY.order.formName}
        type="text"
        autoComplete="name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        error={errors.name}
      />
      <Input
        label={COPY.order.formPhone}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        error={errors.phone}
      />
      <Input
        label={COPY.order.formEmail}
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={errors.email}
      />
    </form>
  );
}

export default CheckoutForm;
