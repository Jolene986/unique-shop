import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item";
//REDUX
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'

const Directory=({sections})=> {
  console.log(sections)
  return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
const mapStateToProps = (state)=>( {
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
