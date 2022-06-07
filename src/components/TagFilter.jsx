const TagFilter = (props) => {
    const onTagClicked = () => {
        console.log("Clicked on jj ", props.filterName)
        props.clickCallback && props.clickCallback(props.value)
    }

    return (
            <span className={"pc-tag" +
                ( props.selected ? " pc-tag--selected" : "") +
                (props.size === "big" ? " pc-tag--big" : "")
            }
                  onClick={ () => { onTagClicked() } }>
                <i className={"fa " + props.icon} />
            &nbsp;{props.filterName}</span>
        )
  }

export default TagFilter;