type ErrorMessage = {
  imgUrl: string;
  title: string;
  description: string;
  button?: string;
};

export type ErrorMessageData = {
  general: ErrorMessage;
  employeeSearch: ErrorMessage;
  employeesSearch: ErrorMessage;
};

const errorMessageData: ErrorMessageData = {
  general: {
    imgUrl: '/images/flying-saucer.png',
    title: 'Какой-то сверхразум все сломал',
    description: 'Постараемся быстро починить',
    button: 'Попробовать снова',
  },
  employeeSearch: {
    imgUrl: '/images/magnifying-glass.png',
    title: 'Мы никого не нашли',
    description: 'Попробуй скорректировать запрос',
    button: 'Вернуться к списку',
  },
  employeesSearch: {
    imgUrl: '/images/magnifying-glass.png',
    title: 'Мы никого не нашли',
    description: 'Попробуй скорректировать запрос',
  },
};

export default errorMessageData;
