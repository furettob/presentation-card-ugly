const TagFunction = (props) => {
    const onTagClicked = () => {
        console.log("Clicked on ", props.name)
        props.clickCallback && props.clickCallback(props.name)
    }

    return (
            <span className={"pc-tag" +
                ( props.selected ? " pc-tag--selected" : "") +
                (props.size === "big" ? " pc-tag--big" : "")
            }
                  onClick={ () => { onTagClicked() } }>
                <i className={"fa " + props.icon} />
            &nbsp;{props.name}</span>
        )
  }

export default TagFunction;