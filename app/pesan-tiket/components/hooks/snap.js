import { useState, useEffect } from 'react';

const useSnaps = () => {
    const [snap, setSnap] = useState(null);

    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = `${process.env.NEXT_PUBLIC_MIDTRANS_API}/snap.js`;
        scriptTag.setAttribute('data-client-key', String(process.env.MIDTRANS_CLIENT_KEY));
        scriptTag.async = true;
    
        scriptTag.onload = () => {
            setSnap(window.snap);
        }

        document.body.appendChild(scriptTag);
    
        return () => {
          document.body.removeChild(scriptTag);
        }
      }, []);

      const snapEmbed = (snap_token, action) => {
        if (snap) {
            snap.pay(snap_token, {
                onSuccess: function (result) {
                    alert("payment success!");
                    console.log(result);
                    action.onSuccess(result);
                },
                onPending: function (result) {
                    alert("wating your payment!"); console.log(result);
                    action.onPending(result);
                },
                onError: function (result) {
                    alert("payment failed!"); console.log(result);
                    action.onError(result);
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert('you closed the popup without finishing the payment');
                }
            });
        }
    }

    return { snapEmbed };
}

export default useSnaps;
