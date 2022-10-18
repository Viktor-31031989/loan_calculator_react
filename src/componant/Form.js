import React, {useState} from 'react';
import LoanJS from 'loanjs';
import PaymentTable from "./PaymentTable";
import AmortizationTable from "./AmortizationTable";
import { Button, TextField} from "@mui/material";


function Form(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)


    const inputAmountHandler = (e) => {
        props.setInputAmount(e.target.value)

        if (isNaN(+props.inputAmount) || (+props <= 0)) {
            return props.setInputAmount('')
        }
        return +props.inputAmount
    }

    const inputTimeHandler = (e) => {
        props.setInputTime(e.target.value)

        if (isNaN(+props.inputTime) || (+props <= 0)) {
            return props.setInputTime('')
        }
        return +props.inputTime
    }

    const inputInterestHandler = (e) => {
        props.setInputInterestRate(e.target.value)

        if (isNaN(+props.inputInterestRate) || (+props <= 0)) {
            return props.setInputInterestRate('')
        }
        return +props.inputInterestRate

    }

    const calculate = (amount, term, interest) => {
        const loan = new LoanJS.Loan(amount, term * 12, interest)
        props.setInstallments(loan.installments);
    }

    const calculatePaymentPlan = (amount, term, interest) => {
        const loan = new LoanJS.Loan(amount, term * 12, interest)
        console.log(loan)
        props.setPaymentPlan(loan);

    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggle2 = () => {
        setIsOpen2(!isOpen2)
    }

    const submitHandlerPayment = (e) => {
        e.preventDefault();

        calculatePaymentPlan(props.inputAmount, props.inputTime, props.inputInterestRate)
        toggle()
    }

    const submitHandlerAmortization = (e) => {
        e.preventDefault();

        calculate(props.inputAmount, props.inputTime, props.inputInterestRate)
        cleanUp()
        toggle2()
    }

    function cleanUp() {
        props.setInputAmount('');
        props.setInputTime('');
        props.setInputInterestRate('')
    }

    // const calculateResults = () => {
    //     const userAmount = Number(props.inputAmount);
    //     const calculatedInterest = Number(props.inputInterestRate) / 100 / 12;
    //     const calculatedPayments = Number(props.inputTime) * 12;
    //     const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    //     const monthly = (userAmount * x * calculatedInterest) / (x - 1);
    //
    //     if (isFinite(monthly)) {
    //         const monthlyPaymentCalculated = monthly.toFixed(2);
    //         const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
    //         const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed(2);
    //
    //         // Set up results to the state to be displayed to the user
    //         props.setResults({
    //             monthlyPayment: monthlyPaymentCalculated,
    //             totalPayment: totalPaymentCalculated,
    //             totalInterest: totalInterestCalculated,
    //             isResult: true,
    //         });
    //
    //     }
    //     return;
    // };

    return (
        <div>
            <div className='loanAmount'>
                <TextField
                    id="outlined-basic"
                    label="Enter Amount"
                    value={props.inputAmount}
                    onChange={inputAmountHandler}
                />
                <TextField
                    id="outlined-basic"
                    label="Enter term"
                    value={props.inputTime}
                    onChange={inputTimeHandler}
                />

                <TextField
                    id="outlined-basic"
                    label="Interest Rate"
                    value={props.inputInterestRate}
                    onChange={inputInterestHandler}
                />
            </div>
            <div>
                <Button style=
                            {{
                                margin: "10px auto 10px auto",
                            }}
                        variant="outlined"
                        onClick={submitHandlerPayment}
                >
                    Calculate
                </Button>
            </div>
            <hr/>

            {isOpen && <PaymentTable
                submitHandlerAmortization={submitHandlerAmortization}
                paymentPlan={props.paymentPlan}
            />}
            <hr/>
            {isOpen2 && <AmortizationTable
                installments={props.installments}
            />}

        </div>
    );
}

export default Form;