import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


const Tag = ({
  label,
  onPress,
  stylesTag,
  stylesText,
}) => {
  const tag = (
    <TouchableOpacity
       style={[styles.tag, stylesTag]} onPress={onPress}>
      <Text style={[styles.tagLabel, stylesText]}>
        {label}
      </Text>
    </TouchableOpacity>
);
  return tag;
};
Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  stylesTag: PropTypes.objectOf(PropTypes.shape),
  stylesText: PropTypes.objectOf(PropTypes.shape),
};


class Tags extends React.Component {
  constructor(props) {
    super(props);

    const {
        initialTags = [],
        initialText = ' ',
    } = props;

    this.state = {
      tags: initialTags,
      text: initialText,
    };

    this.onChangeText = this.onChangeText.bind(this);
  }

  componentWillReceiveProps(props) {
    const {
        initialTags = [],
        initialText = ' ',
    } = props;

    this.setState({
      tags: initialTags,
      text: initialText,
    });
  }

  onChangeText(text) {
    if (text.length === 0) {
      /* `onKeyPress` isn't currently supported on Android; I've placed an extra
       space character at the start of `TextInput` which is used to determine if the
       user is erasing.
       */
      this.setState({
        tags: this.state.tags.slice(0, -1),
        text: this.state.tags.slice(-1)[0] || ' ',
      }, () => this.props.onChangeTags && this.props.onChangeTags(this.state.tags));
    } else if (
        text.length > 1 &&
        (text.slice(-1) === ' ' || text.slice(-1) === ',')
    ) {
      this.setState({
        tags: [...this.state.tags, text.slice(0, -1).trim()],
      text: ' ',
    }, () => this.props.onChangeTags && this.props.onChangeTags(this.state.tags));
    } else {
      this.setState({ text });
    }
  }

  renderAddRemoveButton() {
    if (this.props.isAddRemoveButton !== null && this.props.isAddRemoveButton === true) {
      return (
         <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}> 
          <Tag
            stylesTag={{
              backgroundColor: '#f9b233',
              paddingBottom: 4,
              paddingTop: 4,
              width: 100 }}
            stylesText= {{ textAlign: 'center' }}  
            label="Add/Remove"
            onPress={() => this.props.onAddRemovePress()}
           />
          </View> 
    );
    }
    return null;
  }

  render() {
    return (
      <View>
        <View style={[styles.container]}>
          {this.state.tags.map((tag, i) => (
          <Tag
            stylesTag={{ backgroundColor: this.props.tagsColor[i] }}
            key={i}
            label={tag}
            onPress={e => this.props.onTagPress(i, tag, e)}
            // onPress={() => this.props.onTagPress()}
          />),
        )}
       </View>
        { this.renderAddRemoveButton() }
     </View>
  );
  }
}
Tags.defaultProps = {
  inputStyle: {},
};
Tags.propTypes = {
  initialText: PropTypes.string,
  initialTags: PropTypes.arrayOf(PropTypes.string),
  onChangeTags: PropTypes.func,
  onTagPress: PropTypes.func,
  onAddRemovePress: PropTypes.func,
  isAddRemoveButton: PropTypes.bool,
  tagColor: PropTypes.string,
  tagsColor: PropTypes.arrayOf(PropTypes.string),
};


export { Tag };
export default Tags;
