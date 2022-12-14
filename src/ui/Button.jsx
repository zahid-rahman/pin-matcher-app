export default function Button ({ children, type, ...props }) {
    return (
        <>
            <button type={type} {...props}>{children}</button>
        </>
    )
}