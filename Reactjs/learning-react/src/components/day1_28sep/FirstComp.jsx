let FirstComp = (props)=>{
    //props = {username:"Ram",course:"MScIT"}
    return (
        <>
            {/* JSX */}
            <h1>First Comp</h1>
            <h3>{props.username}</h3>
            <h4>Course = {props.course}</h4>
        </>
    )
}
export default FirstComp