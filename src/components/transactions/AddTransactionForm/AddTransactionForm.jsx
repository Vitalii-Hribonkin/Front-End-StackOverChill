import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from '../EditTransactionForm/EditTransactionForm.module.css';
import { useEffect } from 'react';
import DatePickerComponent from '../DatePickerComponent';
import SelectComponent from '../SelectComponent';
import TypeButton from '../TypeButton/TypeButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectIsIncome,
} from '../../../redux/categories/categoriesSelectors';
import { toggleIsIncome } from '../../../redux/categories/categoriesSlice';
import { fetchCategories } from '../../../redux/categories/categoriesOperations';
import clsx from 'clsx';
import { createTransaction } from '../../../redux/transactions/transactionsOperations';
import {
  selectError,
  selectIsLoading,
} from '../../../redux/transactions/transactionsSelectors';

const AddTransactionForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isIncome = useSelector(selectIsIncome);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchCategories(isIncome));
  // }, [dispatch, isIncome]);

  const handleToggle = () => {
    const newIsIncome = !isIncome;
    dispatch(toggleIsIncome());
    dispatch(fetchCategories(newIsIncome));
  };

  const initialValues = {
    date: new Date(),
    amount: '',
    categoryId: '',
    comment: '',
  };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleSubmit = (values, actions) => {
    const category = categories.find((item) => {
      if (item.type === 'expense') {
        return item.name === values.categoryId;
      }
      return item.type === 'income';
    });


    const transactionData = {
      ...values,
      date: formatDate(values.date),
      amount: Number(values.amount),
      categoryId: category && category._id,
      
    };

    console.log('Submitted data:', transactionData);
    dispatch(createTransaction({ transactionData, category: { name: category.name, type: category.type } }))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.error('Помилка при створенні транзакції:', err);
      });
  };

  const ValidationSchema = Yup.object().shape({
    date: Yup.date()
      .required('Required')
      .max(new Date(), 'Date must be today or earlier'),
    amount: Yup.number()
      .typeError('Must be a number')
      .required('Required')
      .min(0.01, 'The amount must be greater than 0')
      .max(1000000, 'The amount cannot exceed 1 000 000')
      .test(
        'max-decimals',
        'Example: 650.00',
        (value) =>
          value === undefined || /^\d+(\.\d{1,2})?$/.test(value.toString()),
      ),
    categoryId: isIncome ? Yup.string() : Yup.string().required('Required'),
    comment: Yup.string()
      .min(2, 'Comment must contain at least 2 characters')
      .max(192, 'The comment must not exceed 192 characters'),
  });

  return (
    <>
      <p className={s.title}>Add transaction</p>
      <TypeButton onClick={handleToggle} income={isIncome} isEdit={false} />

      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
            {!isIncome && (
              <label className={s.label}>
                <SelectComponent
                  values={values}
                  setFieldValue={setFieldValue}
                  categories={categories}
                />
                <ErrorMessage
                  className={s.error}
                  name='category'
                  component='span'
                />
              </label>
            )}

            <div className={s.wrapper}>
              <label className={s.label}>
                <Field
                  className={s.input}
                  type='text'
                  name='amount'
                  placeholder='0.00'
                />
                <ErrorMessage
                  className={s.error}
                  name='amount'
                  component='span'
                />
              </label>

              <div className={s.label}>
                <DatePickerComponent
                  values={values}
                  setFieldValue={setFieldValue}
                />
                <ErrorMessage
                  className={s.error}
                  name='date'
                  component='span'
                />
              </div>
            </div>

            <label className={s.label}>
              <Field
                className={s.input}
                type='text'
                name='comment'
                placeholder='Comment'
              />
              <ErrorMessage
                className={s.error}
                name='comment'
                component='span'
              />
            </label>

            <div className={s.btnContainer}>
              <button type='submit' className={clsx(s.btn, s.submit)}>
                Add
              </button>
              <button
                type='button'
                className={clsx(s.btn, s.cancel)}
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddTransactionForm;
