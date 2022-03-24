const ContentComponent = (props) => {
    console.log(props) // {index:value,handleClick:f, languege:{name:js,img:js,options:[]}}
    return (
        (
            <div className="card" key={props.index} onClick={() => props.handleClick(props.index)} >
                {props.existsOrNot ? props.language.options.map(text => <p key={text}>{text}</p>) :
                    <>
                        <img src={props.language.img} alt={props.language.name} />
                        <p style={{ fontWeight: "bold" }}>{props.language.name}</p>
                    </>
                }
            </div>
        )
    )
}

export default ContentComponent;