const SERVER_URL = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';
interface User {
  avatar: string;
  birthDate: number;
  email: string;
  id: string;
  name: string;
  phone: string;
  position: string;
  tag: string;
}

async function fetchDataUsers(): Promise<User[]> {
  try {
    const response = await fetch(SERVER_URL);
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }
    const data: User[] = await response.json();

    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}

async function fetchDataUserById(id: string): Promise<User> {
  try {
    const response = await fetch(`${SERVER_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}

export { fetchDataUsers, fetchDataUserById };
export type { User };
