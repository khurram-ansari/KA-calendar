import { useNavigate } from 'react-router-dom';
import { DatePickerWithPresets } from '../DatePickerWithPresets';
import { BASE_DATE_LOCALE } from '@/constants';

export default function CalDatePicker() {
  const navigate = useNavigate();

  const handleDateChange = (date?: Date) => {
    const dateString = date?.toLocaleDateString(BASE_DATE_LOCALE);

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
