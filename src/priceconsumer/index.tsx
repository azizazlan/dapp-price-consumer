import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  getErrorSelector,
  getPendingSelector,
  getPricesSelector,
} from './selectors';
import { fetchPriceconsumerRequest } from './actions';
import Table from './Table';
import { Divider } from '@mui/material';

const Priceconsumer = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const error = useSelector(getErrorSelector);
  const prices = useSelector(getPricesSelector);

  React.useEffect(() => {
    dispatch(fetchPriceconsumerRequest());
  }, []);

  const handleFetchLatestPrice = () => {
    dispatch(fetchPriceconsumerRequest());
  };

  return (
    <div>
      <Table prices={prices} />
      <Divider orientation="vertical" flexItem style={{ minHeight: '15px' }} />
      <Button onClick={handleFetchLatestPrice} variant="contained">
        fetch
      </Button>
    </div>
  );
};

export default Priceconsumer;
