export const calculateAge = (birthDate: number): number => {
  const birth = new Date(birthDate);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export function formatBirthDate(dateInput: string | number | Date): string {
  const birthDate = new Date(dateInput);

  const formatter = new Intl.DateTimeFormat('en-En', {
    day: 'numeric',
    month: 'long',
  });

  const parts = formatter.formatToParts(birthDate);

  const day = parts.find(part => part.type === 'day')?.value;
  const month = parts.find(part => part.type === 'month')?.value.substring(0, 3);

  return `${day} ${month}`;
}
