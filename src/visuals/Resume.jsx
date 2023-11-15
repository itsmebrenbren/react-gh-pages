
export default function Resume({ pdf }) {
    return (
        <embed src = { pdf } type = "application/pdf" width = "100%" height = "600px" />
    )
}