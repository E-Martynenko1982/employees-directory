export type Employee = {
  avatar: string;
  birthDate: number;
  email: string;
  id: string;
  name: string;
  phone: string;
  position: string;
  tag: string;
};

export enum RequestStatus {
  loading = 'loading',
  succeeded = 'succeeded',
  failed = 'failed',
  success = "success",
}
