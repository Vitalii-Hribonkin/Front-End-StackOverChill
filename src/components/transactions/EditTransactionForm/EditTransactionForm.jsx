import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './EditTransactionForm.module.css';
import React, { useEffect } from 'react';
import DatePickerComponent from '../DatePickerComponent';
import SelectComponent from '../SelectComponent';
import TypeButton from '../TypeButton/TypeButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  SelectCategories,
  selectIsIncome,
} from '../../../redux/categories/categoriesSelectors';
import {
  setIsIncome,
  toggleIsIncome,
} from '../../../redux/categories/categoriesSlice';
import { fetchCategories } from '../../../redux/categories/categoriesOperations';
import clsx from 'clsx';

const EditTransactionForm = ({ transaction, onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector(SelectCategories);
  const isIncome = useSelector(selectIsIncome);
  const { date, amount, category, comment, categoryId } = transaction;

  useEffect(() => {
    if (category.type === 'income') {
      dispatch(setIsIncome(true));
    } else {
      dispatch(setIsIncome(false));
    }
  }, [dispatch, category]);

  useEffect(() => {
    dispatch(fetchCategories(isIncome));
  }, [dispatch, isIncome]);

  const initialValues = {
    date,
    amount,
    category: categoryId,
    comment,
  };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleSubmit = (values, actions) => {
    const category = categories.find((item) => item.name === values.category);
    const data = {
      ...values,
      date: (values.date !== initialValues.date) ? formatDate(values.date) : initialValues.date,
      amount: Number(values.amount),
      category: category ? category._id : initialValues.category,
    };

    const changedFields = {};
    for (let key in data) {
      if (data[key] !== initialValues[key]) {
        changedFields[key] = data[key];
      }
    }

    console.log(changedFields);
  };

  const FeedbackSchema = Yup.object().shape({
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
      value => value === undefined || /^\d+(\.\d{1,2})?$/.test(value.toString())
    ),
    category: Yup.string().required(),
    comment: Yup.string()
      .min(2, 'Comment must contain at least 2 characters')
      .max(192, 'The comment must not exceed 192 characters'),
  });

  return (
    <>
      <p className={s.title}>Edit transaction</p>
      <TypeButton
        onClick={() => dispatch(toggleIsIncome())}
        income={isIncome}
        isEdit={true}
      />

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
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
            <label className={s.label}>
              <Field className={s.input} type='text' name='amount' />
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
              <ErrorMessage className={s.error} name='date' component='span' />
            </div>
            <label className={s.label}>
              <Field className={s.input} type='text' name='comment' />
              <ErrorMessage
                className={s.error}
                name='comment'
                component='span'
              />
            </label>

            <button type='submit' className={clsx(s.btn, s.submit)}>
              Save
            </button>
            <button
              type='button'
              className={clsx(s.btn, s.cancel)}
              onClick={onClose}
            >
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditTransactionForm;
