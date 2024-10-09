import Calendar from './Calendar.json'
import DateInput from './DateInput.json'
import DatePicker from './DatePicker.json'
import DatePickerInput from './DatePickerInput.json'
import DatesProvider from './DatesProvider.json'
import DateTimePicker from './DateTimePicker.json'
import MonthPicker from './MonthPicker.json'
import MonthPickerInput from './MonthPickerInput.json'
import TimeInput from './TimeInput.json'
import YearPicker from './YearPicker.json'
import YearPickerInput from './YearPickerInput.json'

export function getPropsMap() {
  return [
    Calendar,
    DateInput,
    DatePicker,
    DatePickerInput,
    DateTimePicker,
    DatesProvider,
    MonthPicker,
    MonthPickerInput,
    TimeInput,
    YearPicker,
    YearPickerInput,
  ]
}

export function getComponentsMap() {
  return [
    [Calendar, Calendar.name, `<${Calendar.name}></${Calendar.name}`],
    [DateInput, DateInput.name, `<${DateInput.name}></${DateInput.name}`],
    [DatePicker, DatePicker.name, `<${DatePicker.name}></${DatePicker.name}`],
    [DatePickerInput, DatePickerInput.name, `<${DatePickerInput.name}></${DatePickerInput.name}`],
    [DateTimePicker, DateTimePicker.name, `<${DateTimePicker.name}></${DateTimePicker.name}`],
    [DatesProvider, DatesProvider.name, `<${DatesProvider.name}></${DatesProvider.name}`],
    [MonthPicker, MonthPicker.name, `<${MonthPicker.name}></${MonthPicker.name}`],
    [MonthPickerInput, MonthPickerInput.name, `<${MonthPickerInput.name}></${MonthPickerInput.name}`],
    [TimeInput, TimeInput.name, `<${TimeInput.name}></${TimeInput.name}`],
    [YearPicker, YearPicker.name, `<${YearPicker.name}></${YearPicker.name}`],
    [YearPickerInput, YearPickerInput.name, `<${YearPickerInput.name}></${YearPickerInput.name}`],
  ]
}
