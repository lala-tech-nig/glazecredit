
// import React from 'react'

// const Crisp = () => {
//   return (
//     <div>
//       <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="2b35c49f-7006-4644-91df-8a941059305b";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
//     </div>
//   )
// }

// export default Crisp


// components/ChatWidget.js
// import { useEffect } from 'react';

// const Crisp = () => {
//   useEffect(() => {
//     window.$crisp = [];
//     window.CRISP_WEBSITE_ID = '2b35c49f-7006-4644-91df-8a941059305b';
    
//     (function() {
//       const d = document;
//       const s = d.createElement('script');
//       s.src = 'https://client.crisp.chat/l.js';
//       s.async = 1;
//       d.getElementsByTagName('head')[0].appendChild(s);
//     })();
//   }, []);

//   return null;
// };

// export default Crisp;


// useEffect(() => {
//   window.$crisp = [];
//   window.CRISP_WEBSITE_ID = '2b35c49f-7006-4644-91df-8a941059305b';
  
//   (function() {
//     const d = document;
//     const s = d.createElement('script');
//     s.src = 'https://client.crisp.chat/l.js';
//     s.async = true;
//     d.getElementsByTagName('head')[0].appendChild(s);
//   })();
// }, []);



// components/ChatWidget.tsx
import { useEffect } from 'react';

const Crisp: React.FC = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '2b35c49f-7006-4644-91df-8a941059305b';
    
    (function() {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://client.crisp.chat/l.js';
      s.async = true;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }, []);

  return null;
};

export default Crisp;
