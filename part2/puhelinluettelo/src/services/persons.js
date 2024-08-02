import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

// Hae kaikki henkilöt
const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
}

// Luo uusi henkilö
const create = newObject => {
  return axios.post(baseUrl, newObject).then(response => response.data);
}

// Päivitä olemassa oleva henkilö
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data);
}

// Poista henkilö
const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`);
}

// Exportataan palvelut
export default {
  getAll,
  create,
  update,
  deletePerson
};
