import { useNavigate } from 'react-router-dom';
import { DatePickerWithPresets } from '../DatePickerWithPresets';

export default function CalDatePicker() {
  const navigate = useNavigate();

  const handleDateChange = (date?: Date) => {
    const dateString = date?.toLocaleDateString('en-US');

    if (dateString) {
      navigate({
        pathname: '/calendar',
        search: `?date=${dateString}`,
      });
    }
  };
  return (
    <>
      <DatePickerWithPresets onDateChanged={handleDateChange} />
    </>
  );
}
