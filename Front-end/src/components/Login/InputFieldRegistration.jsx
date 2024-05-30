export default function InputfieldRegistration({ type, placeholder, value, onChange, title }) {
    return (
        <>
            <input
                className="w-full overflow-hidden border p-3 rounded-full placeholder:px-3 bg-white"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </>
    )
}