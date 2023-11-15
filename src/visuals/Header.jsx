import Box from "./Box";

export default function Header(props){
    return(
    <Box>
        <div className = "col">
        <h1 className = "h1 text-romantic display-1 text-end">Brenna Baker</h1>
        </div>
        <div className = "col">
        <h2 className = "h2 text-wax-flower display-6 text-end">software engineer</h2>
        </div>
    </Box>
    )
}