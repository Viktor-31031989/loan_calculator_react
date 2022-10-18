import React from 'react';

function AmortizationTable(props) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Month</th>

                    <th>Payment Amount</th>
                    <th>Interest Paid</th>
                    <th>Principal Paid</th>
                    <th>Remain</th>
                </tr>
                </thead>
                <tbody>
                {props.installments.map((installment, ind) => (
                    <tr key={ind}>
                        <td className='columnUp1'>{ind+1}</td>
                        <td className='paymentColumn'>{(installment.installment).toFixed(2)}</td>
                        <td className='columnUp1'>{(installment.interest).toFixed(2)}</td>
                        <td className='paymentColumn'> {(installment.capital).toFixed(2)}</td>
                        <td className='columnUp1'>{(installment.remain).toFixed(2)}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default AmortizationTable;