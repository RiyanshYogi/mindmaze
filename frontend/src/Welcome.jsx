import { Link } from "react-router-dom"

export const Welcome = () => {

    const testcss = {
        fontSize : 80,
        padding : "10px"
    }

    return (
        <>
            <div style={testcss} >
                <h1>Welcome To MindMaze</h1>
                <Link to={'/login'} >Login here</Link>
                <br />
                <Link to={'/signup'} >signup here</Link>
            </div>
        </>
    )
}