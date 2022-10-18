import React from 'react';
import {Button} from "@mui/material";

function PaymentTable(props) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Amount</th>
                    <th>Interest</th>
                    <th>Total</th>
                    <th>Monthly Payment</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='columnUp'>{(props.paymentPlan.amount)}</td>
                    <td className='columnUp'>{(props.paymentPlan.interestSum)}</td>
                    <td className='columnUp'>{(props.paymentPlan.sum)}</td>
                    <td>
                        <Button variant="outlined"
                                style={{
                                    backgroundColor: "green",
                                    color: "white"}}
                                onClick={props.submitHandlerAmortization}

                        >Amortization schedule</Button>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    );
}

export default PaymentTable;