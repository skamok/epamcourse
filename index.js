const bodyElement = document.getElementsByTagName('body')[0];
const formElement = document.forms.form;
const nameElement = formElement.name;
const familyElement = formElement.family;
const btnSave = formElement.save;
const btnTheme = formElement.theme;
const USER_KEY = 'user';
const defaultUser = {name: '', family: ''};

btnSave.addEventListener('click', saveUser);
btnTheme.addEventListener('click', changeTheme);

fillUserInfo();

function changeTheme () {
  event.preventDefault();
  const elements = bodyElement.querySelectorAll('*');
  elements.forEach((element) => element.classList.toggle('night'));
}

function fillUserInfo () {
  const {name, family} = readUser();
  nameElement.value = name;
  familyElement.value = family;
}

function saveUser(event) {
  event.preventDefault();
  const user = {name: nameElement.value, family: familyElement.value};
  writeLocalStorage(USER_KEY, user);
}

function readUser () {
 return readLocalStorage(USER_KEY, JSON.stringify(defaultUser));
}

function writeLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readLocalStorage(key, obj = 'null') {
  const data = localStorage.getItem(key) || obj;
  return JSON.parse(data);
}