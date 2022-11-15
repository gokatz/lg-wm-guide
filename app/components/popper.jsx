import Tippy from '@tippyjs/react';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional

const JSXContent = () => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <Tippy content={<span>Tooltip</span>} visible={visible}>
      <button onClick={visible ? hide : show}>Reference</button>
    </Tippy>
  )
};

export default JSXContent;