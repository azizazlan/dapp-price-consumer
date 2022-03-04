import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  getErrorSelector,
  getPendingSelector,
  getPriceconsumerSelector,
} from './selectors';
import { fetchPriceconsumerRequest } from './actions';
import Table from './Table';
import { Divider } from '@mui/material';

const Priceconsumer = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const error = useSelector(getErrorSelector);
  const priceconsumer = useSelector(getPriceconsumerSelector);

  React.useEffect(() => {
    dispatch(fetchPriceconsumerRequest());
  }, []);

  return (
    <div>
      <Table />
      <Divider orientation="vertical" flexItem style={{ minHeight: '15px' }} />
      <Button variant="contained">fetch</Button>
    </div>
  );
};

export default Priceconsumer;
