import Select, { components } from 'react-select';
import s from './EditTransactionForm/EditTransactionForm.module.css'

const CustomDropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <svg
        width='14'
        height='15'
        className={s.arrow}
        style={{
          transform: menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
        }}
      >
        <use href='/icons.svg#arrow-down'></use>
      </svg>
    </components.DropdownIndicator>
  );
};

const SelectComponent = ({ categories, values, setFieldValue }) => {
  const options = categories.map((item) => {
      return { value: `${item._id}`, label: `${item.name}` };
  });
  

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: 'transparent',
      borderRadius: 8,
      padding: '10px 14px',
      height: 44,
      borderColor: '#081222',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#081222',
      },
    }),
    option: (base, state) => ({
      ...base,
      background: state.isSelected
        ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
        : state.isFocused
        ? 'linear-gradient(180deg, #355359 0%, #3b5d63 100%)'
        : 'transparent',
      fontWeight: 500,
      fontSize: '16px',
      color: '#fcfcfc',
      padding: 12,
    }),
    menu: (base) => ({
      ...base,
      background: 'linear-gradient(180deg, #294045 0%, #1e2f33 100%)',
      borderRadius: 6,
      '&:focus': {
        background: 'linear-gradient(180deg, #294045 0%, #1e2f33 100%)',
      },
    }),
    singleValue: (base) => ({
      ...base,
      margin: 0,
      color: '#081222',
      fontSize: '18px',
    }),
    input: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
      color: '#081222',
    }),
    placeholder: (base) => ({
      ...base,
      margin: 0,
      color: '#081222ba',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      padding: 0,
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
    }),
  };

  return (
    <Select
      styles={customStyles}
      placeholder={'Choose category'}
      value={[...options].find((option) => option.value === values.categoryId )}
      onChange={(option) => setFieldValue('categoryId', option.label)}
      components={{ DropdownIndicator: CustomDropdownIndicator }}
      name='categoryId'
      options={options}
    />
  );
};

export default SelectComponent;
