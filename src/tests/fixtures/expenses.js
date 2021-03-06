import moment from 'moment';

export default [{
  id: '1',
  description: 'First one',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Second one',
  note: '',
  amount: 150000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Third one',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];