import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
const Invoice = () => {
    const [data, setData] = useState({
        userEmail: "",
        userAmount: "",
        userLocation: "",
        
    });

    const [error, setError] =useState("")
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value });

    }
    const handleSubmit  = async (e) =>{
        e.preventDefault();
        try {

            const url = 'http://159.65.216.182:8080/api/createInvoice';
            const {data: res} = await axios.post(url, data);
            navigate("/allInvoices")
            console.log(res.message);
            
        } catch (error) {
            if(error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500){
                    setError(error.response.data.message)
                }
            
        }
    }

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
               

                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Invoice</h1>
                        <input
                            type="email"
                            placeholder='Email'
                            name='userEmail'
                            onChange={handleChange}
                            value={data.userEmail}
                            required
                            className={styles.input}
                        />

                        <input
                            type="number"
                            placeholder='Amount'
                            name='userAmount'
                            onChange={handleChange}
                            value={data.userAmount}
                            required
                            className={styles.input}
                        />

                        <input
                            type="text"
                            placeholder='Location'
                            name='userLocation'
                            onChange={handleChange}
                            value={data.userLocation}
                            required
                            className={styles.input}
                        />

                        

                       
                        {error && <div className={styles.error_msg}>{error}</div>}

                        <button type='submit' className={styles.green_btn}>
                            Create
                        </button>

                    </form>
                </div>

            </div>

        </div>

    )
}

export default Invoice;