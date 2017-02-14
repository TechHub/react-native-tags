import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    //justifyContent: 'space-between',
  },

  textInputContainer: {
    flex: 1,
    width: 100,
    margin: 4,
    borderRadius: 16,
    backgroundColor: '#ccc',
  },

  textInput: {
    margin: 0,
    padding: 0,
    paddingLeft: 12,
    paddingRight: 12,
    flex: 1,
    fontSize: 13,
    color: '#3d3c3c',
  },

  tag: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 0,
    paddingLeft: 12,
    paddingRight: 12,
    // flex: 2,
    // width: 150,
    paddingTop: 4,
    paddingBottom: 4,
    // height: 32,
    margin: 4,
  },
  tagLabel: {
    fontSize: 13,
    fontFamily: 'Roboto',
    color: 'rgba(0, 0, 0, 0.87)',
  },
});
