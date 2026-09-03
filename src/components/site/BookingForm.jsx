import React, { useMemo, useState } from 'react';
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  User,
} from 'lucide-react';
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
import { cn } from '@/lib/utils';

const GOALS = [
  'Weight loss',
  'Weight gain',
  'Diabetes',
  'Hypertension',
  'PCOS',
  'Digestive health',
  'General wellness',
  'Other',
];

const TIME_SLOTS = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
];

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

// Build the next 14 available days, skipping Sundays (weekly day off).
const buildAvailableDays = () => {
  const days = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1); // start tomorrow
  while (days.length < 14) {
    if (cursor.getDay() !== 0) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
};

const formatDay = (d) => ({
  weekday: WEEKDAYS[d.getDay()],
  day: d.getDate(),
  month: MONTHS[d.getMonth()],
  iso: d.toISOString().slice(0, 10),
  label: `${WEEKDAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`,
});

const initialState = {
  name: '',
  email: '',
  phone: '',
  goal: '',
  message: '',
};

const fieldClasses =
  'h-12 rounded-xl border-input bg-cream/60 px-4 text-base focus-visible:ring-botanical';

const BookingForm = () => {
  const days = useMemo(() => buildAvailableDays().map(formatDay), []);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const set = (key) => (e) => {
    const value = e?.target ? e.target.value : e;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const pickDate = (iso) => {
    setSelectedDate(iso);
    setSelectedTime(null);
  };

  const selectedDayLabel = useMemo(
    () => (selectedDate ? days.find((d) => d.iso === selectedDate)?.label : null),
    [selectedDate, days],
  );

  const validate = () => {
    const next = {};
    if (!selectedDate) next.date = 'Please choose a date.';
    if (!selectedTime) next.time = 'Please choose a time slot.';
    if (!form.name.trim()) next.name = 'Please share your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (!form.phone.trim()) next.phone = 'A phone or WhatsApp number helps me reach you.';
    if (!form.goal) next.goal = 'Please choose your primary goal.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      await pb.collection('inquiries').create({
        type: 'booking',
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        goal: form.goal,
        preferred_date: selectedDayLabel,
        preferred_time: selectedTime,
        message: form.message.trim() || '—',
      });
      setStatus('success');
      toast.success('Your free call is booked.');
    } catch {
      setStatus('idle');
      toast.error('Something went wrong — please try again in a moment.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-botanical/25 bg-sage/40 p-8 text-center md:p-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-botanical" strokeWidth={1.5} />
        <h3 className="mt-5 font-serif text-2xl font-medium text-primary md:text-3xl">
          Your free call is booked
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you, {form.name.split(' ')[0]}. Your 15-minute discovery call is set for{' '}
          <span className="font-semibold text-foreground">{selectedDayLabel}</span> at{' '}
          <span className="font-semibold text-foreground">{selectedTime}</span> (PKT).
        </p>
        <div className="mx-auto mt-5 flex max-w-sm flex-col gap-2 rounded-2xl border border-border bg-card p-4 text-left text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-botanical" strokeWidth={1.7} />
            Appointment details will be sent to your email.
          </p>
          <p className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-botanical" strokeWidth={1.7} />
            A confirmation will also reach you on WhatsApp.
          </p>
        </div>
        <Button
          variant="outline"
          className="mt-6 rounded-full border-botanical/40 px-6 text-botanical hover:bg-sage"
          onClick={() => {
            setForm(initialState);
            setSelectedDate(null);
            setSelectedTime(null);
            setStatus('idle');
          }}
        >
          Book another call
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      {/* Appointment type — fixed selection */}
      <div className="rounded-2xl border border-botanical/30 bg-sage/40 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-botanical/15 text-botanical">
              <Sparkles className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <div>
              <p className="font-serif text-base font-semibold text-primary">
                Free 15-Minute Discovery Call
              </p>
              <p className="text-xs text-muted-foreground">Online · Google Meet or WhatsApp video</p>
            </div>
          </div>
          <span className="rounded-full bg-botanical px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
            Free — 15 min
          </span>
        </div>
      </div>

      {/* Date selection */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <CalendarCheck className="h-4 w-4 text-botanical" strokeWidth={1.8} />
          <Label className="text-sm font-semibold text-primary">Choose a date</Label>
        </div>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]">
          {days.map((d) => {
            const active = selectedDate === d.iso;
            return (
              <button
                type="button"
                key={d.iso}
                onClick={() => pickDate(d.iso)}
                className={cn(
                  'flex min-w-[4.5rem] shrink-0 flex-col items-center gap-0.5 rounded-2xl border px-3 py-3 transition-all active:scale-[0.97]',
                  active
                    ? 'border-botanical bg-botanical text-primary-foreground shadow-sm'
                    : 'border-border bg-card text-foreground hover:border-botanical/50 hover:bg-sage/40',
                )}
                aria-pressed={active}
              >
                <span className={cn('text-[11px] font-medium uppercase tracking-wide', active ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                  {d.weekday}
                </span>
                <span className="font-serif text-lg font-semibold leading-none">{d.day}</span>
                <span className={cn('text-[11px]', active ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                  {d.month}
                </span>
              </button>
            );
          })}
        </div>
        {errors.date && <p className="text-xs text-destructive">{errors.date}</p>}
      </div>

      {/* Time selection — revealed once a date is chosen */}
      {selectedDate && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-botanical" strokeWidth={1.8} />
            <Label className="text-sm font-semibold text-primary">Choose a time</Label>
            <span className="text-xs text-muted-foreground">· {selectedDayLabel} (PKT)</span>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {TIME_SLOTS.map((t) => {
              const active = selectedTime === t;
              return (
                <button
                  type="button"
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={cn(
                    'rounded-xl border px-2 py-2.5 text-sm font-medium transition-all active:scale-[0.97]',
                    active
                      ? 'border-botanical bg-botanical text-primary-foreground shadow-sm'
                      : 'border-border bg-card text-foreground hover:border-botanical/50 hover:bg-sage/40',
                  )}
                  aria-pressed={active}
                >
                  {t}
                </button>
              );
            })}
          </div>
          {errors.time && <p className="text-xs text-destructive">{errors.time}</p>}
        </div>
      )}

      {/* Details */}
      <div className="space-y-5 border-t border-border/70 pt-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="bk-name" className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.8} />
              Full name
            </Label>
            <Input
              id="bk-name"
              value={form.name}
              onChange={set('name')}
              placeholder="Your name"
              autoComplete="name"
              className={fieldClasses}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="bk-email" className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.8} />
              Email
            </Label>
            <Input
              id="bk-email"
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
            <Label htmlFor="bk-phone" className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.8} />
              WhatsApp / Phone
            </Label>
            <Input
              id="bk-phone"
              type="tel"
              value={form.phone}
              onChange={set('phone')}
              placeholder="+92 ..."
              autoComplete="tel"
              className={fieldClasses}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div className="space-y-2">
            <Label>Primary goal</Label>
            <Select value={form.goal} onValueChange={set('goal')}>
              <SelectTrigger className={fieldClasses}>
                <SelectValue placeholder="Choose your main goal" />
              </SelectTrigger>
              <SelectContent>
                {GOALS.map((g) => (
                  <SelectItem key={g} value={g}>
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.goal && <p className="text-xs text-destructive">{errors.goal}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bk-message">Anything you’d like me to know? (optional)</Label>
          <Textarea
            id="bk-message"
            value={form.message}
            onChange={set('message')}
            rows={3}
            placeholder="A sentence about your health, routine, or questions you’d like to ask…"
            className="rounded-xl border-input bg-cream/60 px-4 py-3 text-base focus-visible:ring-botanical"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className="h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.99] sm:w-auto sm:px-10"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Confirming…
          </>
        ) : (
          <>Confirm free call</>
        )}
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Your details stay private and are used only to arrange your call. See the{' '}
        <a href="/privacy" className="underline underline-offset-2 hover:text-botanical">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default BookingForm;
