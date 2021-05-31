export const handlerError = (history) => {
  alert('An expected error try again please!');
  history.push('/');
  return;
}

export const auxKelvin = (grades) => {
  return ((grades - 273.15) * (9/5) + 32).toFixed(2);
}

export const toCelsius = (grades) => {
  return ((grades - 32) * 5/9).toFixed(2);
};