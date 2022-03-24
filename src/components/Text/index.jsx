import './text.css'

export const Text = ({children, ...props}) => {
    return <p {...props}>{children}</p>
}
