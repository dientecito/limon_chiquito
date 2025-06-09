export const fetchAPI = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const dayOfWeek = dateObj.getDay();

  if (dayOfWeek >= 1 && dayOfWeek <= 4) {
    return [];
  } else {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
};

export const submitAPI = async (formData) => {
  console.log("Enviando a la API:", formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
