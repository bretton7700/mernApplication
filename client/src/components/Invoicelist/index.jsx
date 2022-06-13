import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import styles from './styles.module.css';
const Invoicelist = () => {
    const [invoicelist, setinvoicelist] = useState([])
    useEffect(() => {
        axios.get('http://159.65.216.182:8080/api/getInvoices').then(res => {
            setinvoicelist(res.data.data.invoice)
        })
    }, [])

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {invoicelist.map((val, key) => {
                                return <tr key={key}>
                                    <td>{val.userEmail}</td>
                                    <td>{val.userAmount}</td>
                                    <td>{val.userLocation}</td>
                                    <td><button type='button' className='btn btn-sm btn-danger'>delete</button> </td>
                                </tr>
                            })}
                        </>
                    </tbody>
                </Table>


            </div>

        </div>

    )
}

export default Invoicelist;


