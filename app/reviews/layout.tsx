export default function ReviewLayout ({children}){
    return(
<div style={{border: "solid red 1px"}}>
    [review menubar]
<div style={{border: "solid green 1px"}}>
{children}
</div>
</div>
    );
}