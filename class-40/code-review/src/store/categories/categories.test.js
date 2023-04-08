import store from '..';
import { select, setCategory } from '.';

let results = [
  {
    _id: '5f0cdc15acac790017fc26ce',
    name: 'food',
    description: 'Products for consumption',
    __v: 0
  },
  {
    _id: '5f0cdc25acac790017fc26cf',
    name: 'electronics',
    description: 'Making your life easier, one volt at a time',
    __v: 0
  },
  {
    _id: '61610741c271dc0018f3cfe0',
    name: 'games',
    description: 'Fun for the whole family',
    __v: 0
  },
  {
    _id: '627d6d7cd16f1800183d9660',
    name: 'weapons',
    description: 'Very dangerous!',
    __v: 0
  }
]

describe('Category reducer', () => {


  test('delivers initial state', () => {
    let { categories, activeCategory} = store.getState().categories;

    expect(categories.length).toEqual(0);
    expect(activeCategory).toEqual('');

  });
  test('sets state as expected', () => {
    store.dispatch(setCategory(results));
    let { categories, activeCategory} = store.getState().categories;

    expect(categories.length).toEqual(4);


  })

})
