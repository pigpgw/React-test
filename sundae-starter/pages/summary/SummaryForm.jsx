import { useState } from 'react';
export const SummaryForm = () => {
    const [checked, setChecked] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <div>
            <label onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                terms and conditions
            </label>
            {hover && <div>no ice cream will actually be delivered</div>}
            <button disabled={!checked}>confirm button</button>
            <input
                type='checkbox'
                id='checkbox-input'
                onChange={(e) => {
                    setChecked(e.target.checked);
                }}
                defaultChecked={checked}
            />
            <label htmlFor='checkbox-input'>checkbox-input</label>
        </div>
    );
};
