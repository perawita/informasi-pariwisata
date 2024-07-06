export default function invoice_id_generator() 
{
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000); // Angka acak antara 0 dan 999

    const invoiceId = `INV-${year}${month}${day}-${random}`;
    return invoiceId;
}