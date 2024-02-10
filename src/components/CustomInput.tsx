import React, { forwardRef } from 'react';
type TCustomInputProps = {
    className: string;
}
const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(({ className }, inputRef) => {
    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder='your name'
                name='name'
                className={className} />
        </div>
    );
});

export default CustomInput;