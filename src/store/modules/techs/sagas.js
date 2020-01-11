import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getTechsSuccess, getTechsFailure } from './actions';

export function* getTechs() {
  try {
    const response = yield call(api.get, 'techs');

    // Visualiza o retorno fake do mock do sagas.
    // console.log(response.data);

    yield put(getTechsSuccess(response.data));

  }catch (err) {
    yield put(getTechsFailure());
  }
}
