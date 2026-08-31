import React, { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const GOALS = [
  'Healthy weight loss',
  'Healthy weight gain',
  'Diabetes nutrition support',
  'Hypertension & heart health',
  'PCOS support',
  'Digestive health',
  'High cholesterol',
  'Fatty liver support',
  'Pregnancy nutrition',
  'General wellness',
  'Something else',
];

const TIMES = [
  'Morning (10:00 – 12:00 PKT)',
  'Afternoon (12:00 – 15:00 PKT)',
  'Evening (16:00 – 19:00 PKT)',
  'Weekend only',
];

const SUBJECTS = [
  'General question',
  'Packages & pricing',
  'Consultations',
  'Recipes & resources',
  'Something else',
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  goal: '',
  preferredTime: '',
  subject: '',
  message: '',
};

const fieldClasses =
  'h-12 rounded-xl border-input bg-cream/60 px-4 text-sm focus-visible:ring-botanical';

const InquiryForm = ({ type }) => {
  const isBooking = type === 'booking';
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const set = (key) => (e) => {
    const value = e?.target ? e.target.value : e;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please share your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (isBooking && !form.goal) next.goal = 'Please choose the closest goal.';
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'A sentence or two helps me prepare (min. 10 characters).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      await pb.collection('inquiries').create({
        type,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        goal: form.goal,
        preferred_time: form.preferredTime,
        subject: form.subject,
        message: form.message.trim(),
      });
      setStatus('success');
      toast.success(isBooking ? 'Your free call request is in.' : 'Message sent.');
    } catch {
      setStatus('idle');
      toast.error('Something went wrong — please try again in a moment.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-botanical/25 bg-sage/40 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-botanical" strokeWidth={1.6} />
        <h3 className="mt-4 font-serif text-2xl font-medium text-primary">
          {isBooking ? 'Your call is requested' : 'Message received'}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {isBooking
            ? 'Thank you — I’ll reply within one working day with a few time options for your free 15-minute call.'
            : 'Thank you for writing in. I read every message personally and reply within one working day.'}
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full border-botanical/40 px-6 text-botanical hover:bg-sage"
          onClick={() => {
            setForm(initialState);
            setStatus('idle');
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${type}-name`}>Full name</Label>
          <Input
            id={`${type}-name`}
            value={form.name}
            onChange={set('name')}
            placeholder="Your name"
            autoComplete="name"
            className={fieldClasses}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${type}-email`}>Email</Label>
          <Input
            id={`${type}-email`}
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="you@example.com"
            autoComplete="email"
            className={fieldClasses}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${type}-phone`}>
            {isBooking ? 'Phone / WhatsApp (optional)' : 'WhatsApp number (optional)'}
          </Label>
          <Input
            id={`${type}-phone`}
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="+92 ..."
            autoComplete="tel"
            className={fieldClasses}
          />
        </div>
        {isBooking && (
          <div className="space-y-2">
            <Label>Preferred time</Label>
            <Select value={form.preferredTime} onValueChange={set('preferredTime')}>
              <SelectTrigger className={fieldClasses}>
                <SelectValue placeholder="Choose a time window" />
              </SelectTrigger>
              <SelectContent>
                {TIMES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label>{isBooking ? 'What would you like support with?' : 'Subject'}</Label>
        <Select value={isBooking ? form.goal : form.subject} onValueChange={set(isBooking ? 'goal' : 'subject')}>
          <SelectTrigger className={fieldClasses}>
            <SelectValue placeholder={isBooking ? 'Choose the closest goal' : 'Choose a subject'} />
          </SelectTrigger>
          <SelectContent>
            {(isBooking ? GOALS : SUBJECTS).map((g) => (
              <SelectItem key={g} value={g}>
                {g}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.goal && <p className="text-xs text-destructive">{errors.goal}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${type}-message`}>
          {isBooking ? 'Anything you’d like me to know?' : 'Your message'}
        </Label>
        <Textarea
          id={`${type}-message`}
          value={form.message}
          onChange={set('message')}
          rows={5}
          placeholder={
            isBooking
              ? 'A little about your health, routine, or what has (and hasn’t) worked before…'
              : 'Write your message here…'
          }
          className="rounded-xl border-input bg-cream/60 px-4 py-3 text-sm focus-visible:ring-botanical"
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className="h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.99] sm:w-auto sm:px-8"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            {isBooking ? 'Request my free call' : 'Send message'}
            <Send className="ml-2 h-4 w-4" strokeWidth={1.8} />
          </>
        )}
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Your details stay private and are used only to respond to your enquiry. See the{' '}
        <a href="/privacy" className="underline underline-offset-2 hover:text-botanical">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default InquiryForm;
