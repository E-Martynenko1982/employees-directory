const SERVER_URL = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

async function fetchDataUsers() {
  try {
    const response = await fetch(SERVER_URL);
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }
    const data = await response.json();
    // Дополнительная обработка данных, если необходимо
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}

export { fetchDataUsers };


// {
//   avatar: "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg";
//   birthDate: 634359835000;
//   email: "alex.minogarev@example.com";
//   id: "1";
//   name: "Alex Minogarev";
//   phone: "+1-202-555-0100";
//   position: "analyst";
//   tag: "am";
// } 