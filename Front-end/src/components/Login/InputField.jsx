import React from 'react';

export default function InputField({ type, placeholder, value, onChange }) {
    return (
            <input
                className="w-full h-full overflow-hidden border p-4 rounded-2xl"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
    );
}
