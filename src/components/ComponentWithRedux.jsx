import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBids } from '../thunks/getBids';
import { submitBid } from '../thunks/submitBid';

const selectBidsToShow = (state) => {
  const bids = state.bwics.bids;
  const inFlightBids = state.bwics.inFlightBids;

  return [
    ...inFlightBids,
    ...bids.filter((b) =>
      inFlightBids.find((i) => i.listId === b.listId && i.bondId === b.bondId)
        ? false
        : true
    ),
  ];
};

function ComponentWithRedux() {
  const dispatch = useDispatch();
  const rows = useSelector(selectBidsToShow);
  const inFlightBids = useSelector((s) => s.bwics.inFlightBids);
  const [inputVal, setInputVal] = useState(0);

  console.log(inFlightBids);

  useEffect(() => {
    dispatch(getBids());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(submitBid({ listId: '3', bondId: '2', value: inputVal }));
  };
  const handleUpdate = () => {
    dispatch(submitBid({ listId: '1', bondId: '2', value: inputVal }));
  };

  return (
    <>
      <hr />
      <table>
        <tr>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <th>listId</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <th>bondId</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <th>bid</th>
        </tr>
        {rows.map((bid, index) => (
          <tr key={index}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <td>{bid.listId}</td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <td>{bid.bondId}</td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <td>{bid.bid}</td>
          </tr>
        ))}
      </table>
      <hr />
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={handleUpdate}>Bid 1 - 2</button>
      <button onClick={handleSubmit}>Bid 3 - 2</button>
    </>
  );
}

export default ComponentWithRedux;
