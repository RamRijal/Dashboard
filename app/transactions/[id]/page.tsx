'use client'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'


const TransactionDetails = () => {
    const params = useParams()
    return (
        <>
            <p>Transactions: {params.id}</p>
        </>
    )
}

export default TransactionDetails
