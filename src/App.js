import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import React, {useState} from 'react';
import Form from "./componant/Form";
import './App.css';
function App() {

    const [inputAmount, setInputAmount] = useState('')
    const [inputTime, setInputTime] = useState('')
    const [inputInterestRate, setInputInterestRate] = useState('')
    const [installments, setInstallments] = useState([])
    const [paymentPlan, setPaymentPlan] = useState
    ([
        {
            capitalSum: '',
            amount: '',
            interestSum: '',
            sum: '',
            installments: [],
        }
    ])



    return (

        <div className='container'>
            <h2>Loan Calculator <CreditScoreIcon /></h2>

            <Form
            inputAmount={inputAmount}
            setInputAmount={setInputAmount}
            setInputTime={setInputTime}
            inputTime={inputTime}
            inputInterestRate={inputInterestRate}
            setInputInterestRate={setInputInterestRate}
            installments={installments}
            setInstallments={setInstallments}
            paymentPlan={paymentPlan}
            setPaymentPlan={setPaymentPlan}
            />

        </div>
    );
}

export default App;