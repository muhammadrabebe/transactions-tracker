import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}<span>{sign}${numberWithCommas(Math.abs(transaction.amount))}<span>
                <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">Delete</button></span></span>
        </li>
    )
}
export default Transaction;