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
    title: 'Unexpected error occurred...',
    description: 'Try again a bit later',
    button: 'Reload page',
  },
  employeeSearch: {
    imgUrl: '/images/magnifying-glass.png',
    title: "We didn't find anyone",
    description: 'Try to adjust your request',
    button: 'Back to list',
  },
  employeesSearch: {
    imgUrl: '/images/magnifying-glass.png',
    title: "We didn't find anyone",
    description: 'Try to adjust your request',
  },
};

export default errorMessageData;
