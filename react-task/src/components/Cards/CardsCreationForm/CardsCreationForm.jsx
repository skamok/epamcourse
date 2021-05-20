import { useState, useCallback} from 'react';
import styles from './CardsCreationForm.module.scss';
import { v1 as uuidv1 } from 'uuid';
import InputField from './InputField/InputField';
import Description from './Description/Description';

const initialState = {
  title: {
    name: 'Title',
    id: 'title',
    value: '',
    placeholder: 'Input title',
    type: 'text',
    error: false
  },
  price: {
    name: 'Price',
    id: 'price',
    value: 1,
    placeholder: 'Input price',
    type: 'number',
    error: false
  },
  imageUrl: {
    name: 'Link to image',
    id: 'imageUrl',
    value: '',
    placeholder: 'Input link',
    type: 'text',
    error: false
  },
  description: {
    name: '',
    id: 'description',
    value: '',
    placeholder: 'Input some words',
    type: '',
    error: false
  },
}

function CardsCreationForm({ cardAdd }) {

  const [fields, setFields] = useState(initialState);

  const checkInputComplete = useCallback(() => {
    const input = Object.entries(fields).find((input) => !input[1].value);
    if (input) {
      setFields((prev) => {
        const node = {...prev[input[0]], error: true};
        return {...prev, [input[0]]: node}
      });
      return true;
    }
    return false;
  }, [fields]);

  const btnAddClick = useCallback((event) => {
    event.preventDefault();
    const error = checkInputComplete();
    if (!error) {
      const card = {
        id: uuidv1(),
        title: fields.title.value,
        description: fields.description.value,
        price: Number.parseFloat(fields.price.value),
        imageUrl: fields.imageUrl.value
      }
      cardAdd(card);
    }
  }, [checkInputComplete, fields, cardAdd]);

  const inputChange = useCallback((event) => {
    const {name, value: val} = event.currentTarget;
    setFields((prev) => {
      const node = {...prev[name], value: val, error: false};
      return {...prev, [name]: node}
    });
  }, []);

  return (
    <form className={styles.form} onSubmit={btnAddClick}>
      <div className={styles.form__left}>        
        <InputField field={fields.title}  inputChange={inputChange}/>
        <InputField field={fields.price}  inputChange={inputChange}/>
        <InputField field={fields.imageUrl}  inputChange={inputChange}/>
      </div>
      <div className={styles.form__right}>
        <Description field={fields.description} inputChange={inputChange}/>
        <button className={styles.form__button}>Add new item</button>
      </div>
    </form>
  )
}

export default CardsCreationForm;
