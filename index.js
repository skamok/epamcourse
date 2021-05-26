const bodyElement = document.getElementsByTagName('body')[0];
const formElement = document.forms.form;
const nameElement = formElement.name;
const familyElement = formElement.family;
const btnSave = formElement.save;
const btnTheme = formElement.theme;
const APP_ID = 'daynight_'
const USER_KEY = 'user';
const THEME_KEY = 'theme_night';
const defaultUser = {name: '', family: ''};
let nightEnable = undefined;

btnSave.addEventListener('click', btnSaveClick);
btnTheme.addEventListener('click', btnThemeClick);

fillUserInfo();
loadTheme();

function loadTheme () {
  nightEnable = readLocalStorage(APP_ID + THEME_KEY, false);
  changeTheme(nightEnable);
}

function btnThemeClick (event) {
  event.preventDefault();
  changeTheme();
}

function changeTheme (night) {
  const elements = bodyElement.querySelectorAll('*');
  let isEnable = undefined;
  if (arguments.length) {
    isEnable = night;
  } else {
    isEnable = !readLocalStorage(APP_ID + THEME_KEY, false);
    writeLocalStorage(APP_ID + THEME_KEY, isEnable)
  }
  if (isEnable) {
    elements.forEach((element) => element.classList.add('night'));
  } else {
    elements.forEach((element) => element.classList.remove('night'));
  }
}

function fillUserInfo () {
  const {name, family} = readLocalStorage(APP_ID + USER_KEY, JSON.stringify(defaultUser));
  nameElement.value = name;
  familyElement.value = family;
}

function btnSaveClick(event) {
  event.preventDefault();
  const user = {name: nameElement.value, family: familyElement.value};
  writeLocalStorage(APP_ID + USER_KEY, user);
}

function writeLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readLocalStorage(key, obj = 'null') {
  const data = localStorage.getItem(key) || obj;
  return JSON.parse(data);
}