import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

export const TransactionsList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
    }, [])
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction =>
                (
                    <Transaction transaction={transaction} key={transaction._id} />
                ))}
            </ul>
        </>
    )
}
