export default function InputBox ({ type, ...props }) {
    return (
        <>
            <input type={type} {...props}/>
        </>
    )
}