import React from 'react';

function TextArea({ label, type, name, value, onChange, rows }) {
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows="5"
                />
            </label>
        </div>
    )
}

export default TextArea;
